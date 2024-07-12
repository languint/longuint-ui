import React, { useContext } from "@rbxts/react";
import { InstanceAttributes } from "@rbxts/react";
import { OptionsContext } from "../../interface/options-provider";
import { Frame } from "./../frame";
import { Padding } from "./../padding";

interface TextBoxProps {
	initialText?: string;
	onSubmit?: (text: string) => void;
	Native?: InstanceAttributes<Frame>;
	ChildNative?: InstanceAttributes<TextBox>;
}

export function TextBox(props: TextBoxProps) {
	const options = useContext(OptionsContext);

	return (
		<Frame size={new UDim2(0, 0, 0, 32)} Native={{ ...props.Native } && { AutomaticSize: "X"}}>
			<Padding all={new UDim(0, 8)}></Padding>
			<textbox
				BackgroundColor3={options.pallete?.background}
				TextColor3={options.pallete?.text}
				Font={"BuilderSans"}
				Event={{
					FocusLost: (button, enterPressed) => {
						if (!props.onSubmit) return;
						if (enterPressed) {
							props.onSubmit(button.Text);
						}
					},
				}}
				Text={""}
				PlaceholderText={props.initialText}
				{...props.ChildNative && {AutomaticSize: "XY", TextSize: 16}}
			>
				<uicorner CornerRadius={new UDim(0, 8)} />
				<uistroke Thickness={2} Color={options.pallete?.surface} />
			</textbox>
		</Frame>
	);
}
