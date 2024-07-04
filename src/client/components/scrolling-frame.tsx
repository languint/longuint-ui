import React, { ReactNode, useContext, useMemo, useState } from "@rbxts/react";
import GlassmorphicUI from "@rbxts/glassmorphicui";
import Make from "@rbxts/make";
import { OptionsContext } from "../interface/options-provider";

export interface ScrollingFrameProps {
	backgroundTransparency?: number;
	backgroundColor?: Color3;
	glass?: boolean;
	size: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
	blurRadius?: number;
	children?: ReactNode | ReactNode[];
	Native?: React.InstanceAttributes<Frame>;
	keyName?: string | number;
	cornerRadius?: UDim;
}

export function ScrollingFrame(props: ScrollingFrameProps) {
	const useBackgroundColor = !props.glass === true;

	const [frame, setFrame] = useState<ScrollingFrame>();

	let glassImage: ImageLabel | undefined;

	const options = useContext(OptionsContext);

	if (props.glass === true) {
		glassImage = new GlassmorphicUI();
		glassImage.SetAttribute("BlurRadius", props.blurRadius !== undefined ? props.blurRadius : 10);
		glassImage.BackgroundTransparency = 1;
		glassImage.Size = new UDim2(1, 0, 1, 0);
		glassImage.ZIndex = -1;
		Make("UICorner", {
			Parent: glassImage,
			CornerRadius: new UDim(0, 8),
		});
	}

	useMemo(() => {
		if (glassImage !== undefined) {
			glassImage.Parent = frame;
		}
	}, [frame]);

	return (
		<scrollingframe
			BackgroundColor3={props.backgroundColor !== undefined ? props.backgroundColor : options.pallete?.background}
			BackgroundTransparency={useBackgroundColor ? props.backgroundTransparency : 1}
			Event={{
				AncestryChanged: (frame) => {
					setFrame(frame);
				},
			}}
			Size={props.size}
			Position={props.position}
			AnchorPoint={props.anchorPoint}
			key={props.keyName ? props.keyName :  `frame`}
			{...props.Native}
            AutomaticCanvasSize={"Y"}
			ScrollBarThickness={0}
		>
			<uicorner CornerRadius={props.cornerRadius ?? new UDim(0, 8)} />
			{props.children}
		</scrollingframe>
	);
}
