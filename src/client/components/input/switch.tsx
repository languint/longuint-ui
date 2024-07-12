import React, { InstanceEvent, useContext, useState } from "@rbxts/react";
import { OptionsContext } from "../../interface/options-provider";
import { useMotion } from "../../utils/use-motion";
import { Padding } from "./../padding";
import { springs } from "../../springs";

interface SwitchProps {
	initialState?: "Enabled" | "Disabled";
	Native?: InstanceProperties<TextButton>;
	position?: UDim2;
	onSwitched?: (value: boolean) => void;
}

export function Switch(props: SwitchProps) {
	const options = useContext(OptionsContext);

	const [enabled, setEnabled] = useState(props.initialState === "Enabled" ? true : false);

	const [position, positionMotion] = useMotion(new UDim2(0, 0, 0, 0));
	const [color, colorMotion] = useMotion(new Color3());

	const events: InstanceEvent<TextButton> = {
		MouseButton1Click: () => {
			setEnabled(!enabled);
			const newPosition = enabled ? new UDim2(1, -20, 0, 0) : new UDim2(0, 0, 0, 0);

			positionMotion.spring(newPosition, springs.responsive);

			const newColor = enabled ? options.pallete!.text : options.pallete!.surface;
			colorMotion.spring(newColor, springs.responsive);

			if (props.onSwitched) {
				props?.onSwitched(enabled);
			}
		},
	};

	const newPosition = enabled ? new UDim2(1, -20, 0, 0) : new UDim2(0, 0, 0, 0);

	positionMotion.spring(newPosition, springs.responsive);

	const newColor = enabled ? options.pallete!.text : options.pallete!.surface;
	colorMotion.spring(newColor, springs.responsive);

	if (props.onSwitched) {
		props?.onSwitched(enabled);
	}

	return (
		<textbutton
			Text={""}
			BorderSizePixel={0}
			BackgroundColor3={color}
			Size={UDim2.fromOffset(44, 24)}
			AutoButtonColor={false}
			Position={props.position}
			{...props.Native}
			Event={events}
			key={`switch`}
		>
			<Padding all={new UDim(0, 2)} />
			<uicorner CornerRadius={new UDim(1, 0)}></uicorner>
			<frame Position={position} Size={UDim2.fromOffset(20, 20)} BackgroundColor3={options.pallete?.background}>
				<Padding all={new UDim(0, 4)} />
				<uicorner CornerRadius={new UDim(1, 0)}></uicorner>
			</frame>
		</textbutton>
	);
}
