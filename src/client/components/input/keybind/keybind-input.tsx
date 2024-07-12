import React, { useContext, useState } from "@rbxts/react";
import { InstanceAttributes } from "@rbxts/react";
import { OptionsContext } from "../../../interface/options-provider";
import { Frame } from "../../frame";
import { ShortcutGroup } from "./key";
import { UserInputService } from "@rbxts/services";
import { isKeyCode } from "../../../utils/is-modifier";

interface KeybindInputProps {
	initialBind?: Enum.KeyCode[];
	onSubmit?: (inputs: InputObject[]) => void;
	Native?: InstanceAttributes<Frame>;
	maxChain?: number;
}

export function KeybindInput(props: KeybindInputProps) {
	const options = useContext(OptionsContext);

	const [heldKeys, setHeldKeys] = useState<Array<InputObject>>(props.initialBind as unknown as InputObject[]);
	const [locked, setLocked] = useState(true);

	return (
		<Frame
			size={new UDim2(0, 36, 0, 32)}
			Native={{ ...props.Native } && { AutomaticSize: "X" }}
			backgroundColor={options.pallete?.surface}
		>
			<textbutton
				BackgroundTransparency={1}
				TextColor3={options.pallete?.text}
				Font={"BuilderSans"}
				Event={{
					InputBegan: (button, input) => {
						if (locked) return;
						if (input.UserInputType === Enum.UserInputType.Keyboard) {
							setHeldKeys(UserInputService.GetKeysPressed());
						}
					},
					InputChanged: (button, input) => {
						if (input.UserInputType === Enum.UserInputType.Keyboard) {
							// If the user presses escape while changing the keybinds, cancel.
							if (input.KeyCode === Enum.KeyCode.Escape) {
								setLocked(true);
								return;
							}
						}
					},
					InputEnded: (button, input) => {
						if (input.UserInputType === Enum.UserInputType.Keyboard && UserInputService.GetKeysPressed().size() === 0) {
							setLocked(true);
						}
					},
					MouseButton1Click: () => {
						if (!locked) return;
						setLocked(false);
					},
				}}
				Text={""}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<uicorner CornerRadius={new UDim(0, 8)} />
				<uistroke Thickness={2} Color={options.pallete?.surface} />
				<ShortcutGroup
					shortcuts={heldKeys
						?.filter((value) => {
							if (isKeyCode(value)) {
								return true
							}
							if (value.UserInputType === Enum.UserInputType.Keyboard) {
								return true;
							}
						})
						.map((value) => {
							if (isKeyCode(value)) {
								return value
							} else {
								return value.KeyCode
							}
						})}
				/>
			</textbutton>
		</Frame>
	);
}
