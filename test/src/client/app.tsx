import React, { useState } from "@rbxts/react";
import { RootProvider } from "./interface/root-provider";
import { Palletes } from "./pallete";
import { Card, CardContent, CardFooter, CardHeader } from "./components/card";
import { Button, ButtonStyles } from "./components/button";
import { Frame } from "./components/frame";
import { Padding } from "./components/padding";
import { Text } from "./components/text";
import { Switch } from "./components/switch";
import { ImageButton } from "./components/image-button";
import { ScrollingFrame } from "./components/scrolling-frame";

export function App() {
	const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

	return (
		<RootProvider options={{ pallete: Palletes.Default }}>
			<Frame size={new UDim2(0.25, 0, 1, 0)} position={new UDim2(0.75, 0, 0, 0)} cornerRadius={new UDim(0, 0)}>
				<Padding all={new UDim(0, 16)} />
				<Card size={new UDim2(1, 0, 1, 0)} Native={{ AutomaticSize: "None" }}>
					<CardHeader title="Factoried" body="An automation centered real time strategy."></CardHeader>
					<CardContent>
						<ImageButton
							text="Play"
							size={new UDim2(1, 0, 0, 40)}
							style={ButtonStyles.Default}
							image="rbxassetid://18324277149"
						/>
						<Button text="Shop" size={new UDim2(1, 0, 0, 40)} style={ButtonStyles.Surface} />
						<Button
							text="Settings"
							size={new UDim2(1, 0, 0, 40)}
							style={ButtonStyles.Surface}
							onClicked={() => {
								setSettingsMenuOpen(!settingsMenuOpen);
							}}
						/>
						<Button text="Credits" size={new UDim2(1, 0, 0, 40)} style={ButtonStyles.Outline} />
					</CardContent>
					<CardFooter>
						<Text
							color={Palletes.Default.subtext}
							textSize={12}
							text="THIS GAME IS IN DEV, EXPECT THINGS TO CHANGE."
						/>
					</CardFooter>
				</Card>
			</Frame>
			<Card
				size={new UDim2(0.25, 0, 0.5, 0)}
				Native={{ Visible: settingsMenuOpen, AnchorPoint: new Vector2(0.5, 0.5) }}
				position={new UDim2(0.5, 0, 0.5, 0)}
				draggable
			>
				<CardHeader
					title="Settings"
					closeButton
					closeButtonClicked={() => {
						setSettingsMenuOpen(!settingsMenuOpen);
					}}
				/>
				<CardContent>
					<ScrollingFrame size={new UDim2(1, 0, 1, 0)} backgroundTransparency={1}>
						<CardContent>
							<Frame size={new UDim2(1, 0, 0, 24)} backgroundTransparency={1}>
								<uilistlayout
									FillDirection={"Horizontal"}
									HorizontalFlex={"SpaceBetween"}
									SortOrder={"LayoutOrder"}
								/>
								<Text
									font={Enum.Font.BuilderSans}
									text="Debug Mode"
									textSize={24}
									Native={{ LayoutOrder: -1 }}
								></Text>
								<Switch initialState={"Disabled"} />
							</Frame>
							<Frame size={new UDim2(1, 0, 0, 24)} backgroundTransparency={1}>
								<uilistlayout
									FillDirection={"Horizontal"}
									HorizontalFlex={"SpaceBetween"}
									SortOrder={"LayoutOrder"}
								/>
								<Text
									font={Enum.Font.BuilderSans}
									text="Dockable GUIs"
									textSize={24}
									Native={{ LayoutOrder: -1 }}
								></Text>
								<Switch initialState={"Enabled"} />
							</Frame>
						</CardContent>
					</ScrollingFrame>
				</CardContent>
			</Card>
		</RootProvider>
	);
}
