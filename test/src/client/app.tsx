import React from "@rbxts/react";
import { RootProvider } from "./interface/root-provider";
import { Palletes } from "./pallete";
import { Frame } from "./components/frame";
import { Button, ButtonStyles, Card, CardContent, CardHeader, Padding, ScrollingFrame, Switch, TextBox } from ".";
import { KeybindInput } from "./components/input/keybind/keybind-input";
import { isKeyCode } from "./utils/is-modifier";

export function App() {
	return (
		<RootProvider options={{ pallete: Palletes.Default, dockingTolerance: 20 }}>
			<Frame size={new UDim2(1, 0, 1, 0)} position={new UDim2(0, 0, 0, 0)} cornerRadius={new UDim(0, 0)}>
				<Padding all={new UDim(0, 24)} />
				<ScrollingFrame size={new UDim2(1, 0, 1, 0)}>
					<uilistlayout FillDirection={"Vertical"} Padding={new UDim(0, 24)} HorizontalAlignment={"Center"} />
					<ButtonSection />
					<SwitchSection />
					<InputSection />
				</ScrollingFrame>
			</Frame>
		</RootProvider>
	);
}

function ButtonSection() {
	return (
		<Card size={new UDim2(1, -24, 0, 0)} Native={{ AutomaticSize: "Y" }}>
			<CardHeader title="Buttons" />
			<CardContent>
				<uigridlayout CellSize={new UDim2(0.2, 0, 0, 40)}></uigridlayout>
				<Button style={ButtonStyles.Default} text="Default" Native={{ Size: new UDim2(0, 120, 0, 40) }} />
				<Button style={ButtonStyles.Secondary} text="Secondary" Native={{ Size: new UDim2(0, 120, 0, 40) }} />
				<Button style={ButtonStyles.Surface} text="Surface" Native={{ Size: new UDim2(0, 120, 0, 40) }} />
				<Button style={ButtonStyles.Outline} text="Outline" Native={{ Size: new UDim2(0, 120, 0, 40) }} />
				<Button
					style={ButtonStyles.Destructive}
					text="Destructive"
					Native={{ Size: new UDim2(0, 120, 0, 40) }}
				/>
			</CardContent>
		</Card>
	);
}

function SwitchSection() {
	return (
		<Card size={new UDim2(1, -24, 0, 0)} Native={{ AutomaticSize: "Y" }}>
			<CardHeader title="Switches" />
			<CardContent>
				<uigridlayout CellSize={new UDim2(0.2, 0, 0, 40)}></uigridlayout>
				<Switch initialState="Enabled"></Switch>
				<Switch initialState="Disabled"></Switch>
			</CardContent>
		</Card>
	);
}

function InputSection() {
	return (
		<Card size={new UDim2(1, -24, 0, 0)} Native={{ AutomaticSize: "Y" }}>
			<CardHeader title="Inputs" />
			<CardContent>
				<uigridlayout CellSize={new UDim2(0.2, 0, 0, 40)}></uigridlayout>
				<TextBox initialText="Text Box" ChildNative={{ AutomaticSize: "XY", TextSize: 16 }} />
				<KeybindInput
					initialBind={[Enum.KeyCode.R]}
					maxChain={10}
					onSubmit={(inputs) => {
						for (const input of inputs) {
							if (isKeyCode(input)) {
								print(input);
							} else {
								print(input);
							}
						}
					}}
				/>
			</CardContent>
		</Card>
	);
}
