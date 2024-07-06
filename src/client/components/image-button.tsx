import React, { ReactNode, useContext, useEffect, useState } from "@rbxts/react";
import { Pallete } from "../../shared/types/pallete";
import { Palletes } from "../pallete";
import { useMotion } from "../utils/use-motion";
import { springs } from "../springs";
import { TextService } from "@rbxts/services";
import { OptionsContext } from "../interface/options-provider";
import { Icon } from "./icon";
import { ButtonStyles } from "./button";

interface ImageButtonComponentProps {
	style?: ButtonStyles;
	size?: UDim2;
	position?: UDim2;
	children?: ReactNode[] | ReactNode;
	events?: React.InstanceEvent<TextButton>;
	text?: string;
	outlineColor?: Color3;
	Native?: React.InstanceAttributes<TextButton>;
	onClicked?: () => void;
	image?: string;
}

interface ImageButtonStyle {
	background: Color3;
	hover: Color3;
	textColor: Color3;
}

function getStyle(style: ButtonStyles, pallete: Pallete): ImageButtonStyle {
	switch (style) {
		case ButtonStyles.Default:
			return {
				background: pallete.custom?.primary!,
				hover: pallete.context.Lerp(new Color3(0, 0, 0), 0.2),
				textColor: pallete.background,
			};
		case ButtonStyles.Secondary:
			return {
				background: pallete.text,
				hover: pallete.text.Lerp(new Color3(0, 0, 0), 0.2),
				textColor: pallete.background,
			};
		case ButtonStyles.Surface:
			return {
				background: pallete.surface,
				hover:
					pallete.surface.Lerp(new Color3(0, 0, 0), 0.2) ??
					Palletes.Default.surface.Lerp(new Color3(0, 0, 0), 0.2),
				textColor: pallete.text,
			};
		case ButtonStyles.Outline:
			return {
				background: pallete.background,
				hover: pallete.surface,
				textColor: pallete.text,
			};
		case ButtonStyles.Destructive:
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

export function ImageButton(props: ImageButtonComponentProps) {
	const [size, setSize] = useState(props.size ?? new UDim2(0, 100, 0, 40));

	const options = useContext(OptionsContext);

	const [textWidth, setTextWidth] = useState(0);

	const style = getStyle(props.style ?? ButtonStyles.Default, options.pallete ?? Palletes.Default);

	const [backgroundColor, backgroundColorMotion] = useMotion(style.hover);

	const defaultEvents: React.InstanceEvent<TextButton> = {
		MouseEnter: () => {
			backgroundColorMotion.spring(style.hover, springs.slow);
			backgroundColorMotion.start();
		},
		MouseLeave: () => {
			backgroundColorMotion.spring(style.background, springs.slow);
			backgroundColorMotion.start();
		},
		MouseButton1Click: () => {
			if (props.onClicked) {
				props.onClicked();
			}
		},
	};

	const events = props.events !== undefined ? { ...props.events, ...defaultEvents } : defaultEvents;

	useEffect(() => {
		if (props.text) {
			const textSize = TextService.GetTextSize(
				props.text,
				16,
				Enum.Font.BuilderSansMedium,
				new Vector2(size.X.Offset, size.Y.Offset),
			);
			setTextWidth(textSize.X);
		}
	}, [props.text]);

	return (
		<textbutton
			Event={events}
			Size={new UDim2(size.X.Scale, textWidth + size.X.Offset, size.Y.Scale, size.Y.Offset)}
			Position={props.position}
			BackgroundColor3={backgroundColor}
			BackgroundTransparency={props.style === ButtonStyles.Outline ? 1 : 0}
			AutomaticSize={props.size ? "None" : "X"}
			Text={""}
			AutoButtonColor={false}
			ClipsDescendants
			key={`button`}
			{...props.Native}
		>
			<uicorner CornerRadius={options.pallete?.custom?.borderRadius ?? Palletes.Default.custom?.borderRadius} />
			<Icon
				image={props.image ?? ""}
				color={style.textColor}
				size={new UDim2(0, 16, 0, 16)}
				position={new UDim2(0, 16, 0.5, 0)}
				imageSize={new UDim2(0, 16, 0, 16)}
				Native={{ AnchorPoint: new Vector2(0, 0.5) }}
				useAspect
			/>
			<textlabel
				Text={props.text}
				Font={Enum.Font.BuilderSansMedium}
				TextColor3={style.textColor}
				TextSize={16}
				TextXAlignment={"Center"}
				TextYAlignment={"Center"}
				Size={new UDim2(1, -48, 1, -16)}
				Position={new UDim2(0, 24, 0, 8)}
				BackgroundTransparency={1}
				ZIndex={2}
			/>
			{props.style === ButtonStyles.Outline ? (
				<uistroke
					Color={props.outlineColor !== undefined ? props.outlineColor : Palletes.Default.subtext}
					Thickness={1}
					ApplyStrokeMode={"Border"}
				/>
			) : (
				<></>
			)}
		</textbutton>
	);
}
