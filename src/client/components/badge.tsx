import React, { ReactNode, useContext, useEffect, useRef, useState } from "@rbxts/react";
import { Pallete } from "../../shared/types/pallete";
import { Palletes } from "../pallete";
import { useMotion } from "../utils/use-motion";
import { springs } from "../springs";
import { TextService } from "@rbxts/services";
import { Padding } from "./padding";
import { OptionsContext } from "../interface/options-provider";
import { Text } from "./text";

export enum BadgeStyles {
	Default,
	Secondary,
	Surface,
	Outline,
	Destructive,
}

interface BadgeProps {
	style?: BadgeStyles;
	size?: UDim2;
	position?: UDim2;
	children?: ReactNode[] | ReactNode;
	events?: React.InstanceEvent<TextButton>;
	text?: string;
	outlineColor?: Color3;
	Native?: React.InstanceAttributes<Frame>;
	TextNative?: React.InstanceAttributes<TextLabel>;
}

interface ButtonStyle {
	background: Color3;
	hover: Color3;
	textColor: Color3;
}

function getStyle(style: BadgeStyles, pallete: Pallete): ButtonStyle {
	switch (style) {
		case BadgeStyles.Default:
			return {
				background: pallete.background,
				hover: pallete.surface,
				textColor: pallete.text,
			};
		case BadgeStyles.Secondary:
			return {
				background: pallete.text,
				hover: pallete.text.Lerp(new Color3(0, 0, 0), 0.2),
				textColor: pallete.background,
			};
		case BadgeStyles.Surface:
			return {
				background: pallete.surface,
				hover:
					pallete.surface.Lerp(new Color3(0, 0, 0), 0.2) ??
					Palletes.Default.surface.Lerp(new Color3(0, 0, 0), 0.2),
				textColor: pallete.text,
			};
		case BadgeStyles.Outline:
			return {
				background: pallete.background,
				hover: pallete.surface,
				textColor: pallete.text,
			};
		case BadgeStyles.Destructive:
			return {
				background: pallete.danger,
				hover: pallete.danger.Lerp(new Color3(0, 0, 0), 0.1),
				textColor: pallete.text.Lerp(pallete.danger, 0.1),
			};
		default:
			return {
				background: pallete.background,
				hover: pallete.surface,
				textColor: pallete.text,
			};
	}
}

export function Badge(props: BadgeProps) {
	const options = useContext(OptionsContext);

	const [textWidth, setTextWidth] = useState(0);

	const style = getStyle(props.style ?? BadgeStyles.Default, options.pallete ?? Palletes.Default);

	return (
		<frame
			Size={props.size ?? new UDim2()}
			Position={props.position}
			BackgroundColor3={style.background}
			BackgroundTransparency={props.style === BadgeStyles.Outline ? 1 : 0}
			AutomaticSize={"XY"}
			ClipsDescendants
			{...props.Native}
			key={`button`}
		>
			<Padding top={new UDim(0, 4)} bottom={new UDim(0, 4)} left={new UDim(0, 6)} right={new UDim(0, 6)} />
			<uicorner CornerRadius={options.pallete?.custom?.borderRadius ?? Palletes.Default.custom?.borderRadius} />
			<Text
				textSize={12}
				text={props.text}
				Native={
					{ TextXAlignment: "Center", TextYAlignment: "Center" } && props.TextNative !== undefined
						? props.TextNative
						: {}
				}
				size={new UDim2(1, 0, 1, 0)}
			/>
			{props.style === BadgeStyles.Outline ? (
				<uistroke
					Color={props.outlineColor !== undefined ? props.outlineColor : Palletes.Default.subtext}
					Thickness={1}
					ApplyStrokeMode={"Border"}
				/>
			) : (
				<></>
			)}
		</frame>
	);
}
