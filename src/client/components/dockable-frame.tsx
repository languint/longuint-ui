import React, { InstanceAttributes, ReactNode, useContext, useState } from "@rbxts/react";
import { Frame, FrameProps } from "./frame";
import { useMotion } from "../utils/use-motion";
import { DockableRegion } from "../../shared/types/dockable-region";
import { springs } from "../springs";

import { findCollidingRegions } from "../utils/docking";
import Make from "@rbxts/make";
import { TweenService } from "@rbxts/services";
import { OptionsContext } from "../interface/options-provider";

type DockableFrameComponentProps = {
	dockableRegions?: DockableRegion[];
	Native: Partial<InstanceAttributes<TextButton>>;
	backgroundTransparency?: number;
	backgroundColor?: Color3;
	glass?: boolean;
	size: UDim2;
	position: UDim2;
	anchorPoint?: Vector2;
	blurRadius?: number;
	children?: ReactNode | ReactNode[];
	key?: string | number;
	cornerRadius?: UDim;
};

const regionFrames: Array<Frame> = [];

export function DockableFrameComponent(props: DockableFrameComponentProps) {
	const [dragging, setDragging] = useState(false);

	const [framePosition, framePositionMotion] = useMotion(props.position);
	const [frameSize, frameSizeMotion] = useMotion(props.size ?? new UDim2(1, 0, 1, 0));

	const options = useContext(OptionsContext);

	let dragStartingPosition: UDim2;
	let dragStartingMousePosition: Vector2;
	let thisInstance: TextButton | undefined;

	if (options.showDockableRegions) {
		if (regionFrames.size() === 0) {
			for (const region of props.dockableRegions ?? []) {
				const frame = Make("Frame", {
					Size: region.size.sub(UDim2.fromOffset(20, 20)),
					Position: region.position.add(UDim2.fromOffset(10, 10)),
					Visible: false,
					BackgroundColor3: new Color3(1, 1, 1),
					BackgroundTransparency: 0.8,
					ZIndex: -1,
					BorderSizePixel: 0,
				});

				Make("UICorner", {
					CornerRadius: new UDim(0, 8),
					Parent: frame,
				});

				regionFrames.push(frame);
			}
		}
	}

	const events: React.InstanceEvent<TextButton> = {
		DragBegin: (button, position) => {
			setDragging(true);
			thisInstance = button as TextButton;
			dragStartingPosition = button.Position;
			dragStartingMousePosition = new Vector2(position.X.Offset, position.Y.Offset);

			regionFrames.forEach((frame) => {
				frame.Parent = button.FindFirstAncestorOfClass("ScreenGui");
				frame.Visible = true;
				frame.BackgroundTransparency = 1;

				const tween = TweenService.Create(
					frame,
					new TweenInfo(0.25, Enum.EasingStyle.Linear, Enum.EasingDirection.In),
					{
						BackgroundTransparency: 0.8,
					},
				);
				tween.Play();
			});
		},
		DragStopped: (button, x: number, y: number) => {
			setDragging(false);
			const parentSize = (button.Parent as ScreenGui).AbsoluteSize;
			const buttonAsDockableRegion: DockableRegion = {
				size: button.Size,
				position: button.Position,
			};

			regionFrames.forEach((frame) => {
				frame.Visible = false;
			});

			if (findCollidingRegions(buttonAsDockableRegion, props.dockableRegions ?? [], parentSize, options.dockingTolerance!).size() > 0) {
				const regions = findCollidingRegions(buttonAsDockableRegion, props.dockableRegions ?? [], parentSize, options.dockingTolerance!);

				let dockableRegion = regions[0];

				framePositionMotion.set(button.Position);
				framePositionMotion.spring(dockableRegion.position, springs.responsive);
				framePositionMotion.start();

				frameSizeMotion.set(button.Size);
				frameSizeMotion.spring(dockableRegion.size, springs.responsive);
				frameSizeMotion.start();
				props.dockableRegions!.find((value) => {
					return value === dockableRegion;
				})!.taken = true;
			}
		},
	};

	return (
		<textbutton
			Text={""}
			Size={frameSize}
			Position={framePosition}
			BackgroundTransparency={1}
			Event={events}
			Draggable
			{...props.Native}
			key={props.key ?? `dockable-frame`}
		>
			<Frame
				size={new UDim2(1, 0, 1, 0)}
				position={new UDim2(0, 0, 0, 0)}
				Native={{ AutomaticSize: "XY" }}
			>
				{props.children}
			</Frame>
		</textbutton>
	);
}
