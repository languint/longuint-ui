import { InstanceAttributes, useContext, useState } from "@rbxts/react";
import { OptionsContext } from "../../../interface/options-provider";
import { CommandShortcut, getModifierKeyName, getShortcutKeycodes, isModifierKey } from "../../../utils/is-modifier";
import React from "@rbxts/react";
import { Badge, BadgeStyles } from "../../badge";
import { Frame } from "../../frame";
import { Padding } from "../../padding";

interface KeyProps {
	keyCode: Enum.KeyCode;
}

function Key(props: KeyProps) {
	const options = useContext(OptionsContext);
	const isModifier = isModifierKey(props.keyCode);

	const [size, setSize] = useState(new UDim2(0, 28, 0, 28));

	return (
		<Frame
			backgroundTransparency={1}
			Native={{ LayoutOrder: isModifier ? -1 : 0, AutomaticSize: "X" }}
			size={size}
			backgroundColor={isModifier ? options.pallete?.custom?.primary : options.pallete?.background}
		>
			<Padding all={new UDim(0, 2)} />
			<Badge
				text={isModifier ? getModifierKeyName(props.keyCode) : props.keyCode.Name}
				size={new UDim2(0, 0, 0, 0)}
				style={BadgeStyles.Default}
				Native={{
					BackgroundColor3: isModifier ? options.pallete?.custom?.primary : options.pallete?.background,
					BackgroundTransparency: isModifier ? 0.5 : 0,
				}}
				TextNative={{
					TextColor3: isModifier ? options.pallete?.text : options.pallete?.text,
					TextSize: 16,
				}}
			>
				{isModifier ? (
					<uistroke Color={options.pallete?.custom?.primary} Thickness={1} />
				) : (
					<uistroke Color={options.pallete?.subtext} Thickness={1} />
				)}
			</Badge>
		</Frame>
	);
}

interface ShortcutGroupProps {
	shortcuts?: Enum.KeyCode[];
	Native?: InstanceAttributes<Frame>;
}
export function ShortcutGroup(props: ShortcutGroupProps) {
	const options = useContext(OptionsContext);

	return (
		<Frame
			size={new UDim2(1, 0, 1, 0)}
			position={new UDim2(0, 0, 0, 0)}
			Native={props.Native}
			backgroundTransparency={1}
		>
			<uilistlayout
				HorizontalAlignment={"Center"}
				FillDirection={"Horizontal"}
				VerticalAlignment="Center"
				Padding={new UDim(0, 4)}
			/>

			{props.shortcuts?.map((shortcut, index) => {
				return <Key keyCode={shortcut} key={shortcut.Name.lower()} />;
			})}
			
		</Frame>
	);
}
