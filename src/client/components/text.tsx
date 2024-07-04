import React, { InstanceAttributes, ReactNode, useContext, useEffect, useState } from "@rbxts/react";
import { OptionsContext } from "../interface/options-provider";
import { TextService } from "@rbxts/services";

interface TextProps {
	text?: string;
	color?: Color3;
	font?: Enum.Font;
	Native?: InstanceAttributes<TextLabel>;
	size?: UDim2;
	position?: UDim2;
	children?: ReactNode | ReactNode[];
	textSize?: number;
}

export function Text(props: TextProps) {
	const options = useContext(OptionsContext);

	const [size, setSize] = useState(props.size ?? new UDim2(0, 0, 0, 16));

	const [textWidth, setTextWidth] = useState(0);

	useEffect(() => {
		if (props.text) {
			const textSize = TextService.GetTextSize(
				props.text,
				props.textSize ?? 16,
				props.font ?? Enum.Font.BuilderSansMedium,
				new Vector2(size.X.Offset, size.Y.Offset),
			);
			setTextWidth(textSize.X);
		}
	}, [props.text]);

	return (
		<textlabel
			Font={props.font ?? "BuilderSansMedium"}
			Text={props.text}
			BackgroundTransparency={1}
			TextColor3={props.color ?? options.pallete?.text}
			Position={props.position ?? undefined}
			Size={props.size ?? new UDim2(0, textWidth, 0, 16)}
			TextSize={props.textSize}
			TextXAlignment={"Left"}
			key={`text`}
			RichText={true}
			{...props.Native}
		>
			{props.children}
		</textlabel>
	);
}
