import React, { InstanceAttributes, ReactNode, useContext, useState } from "@rbxts/react";
import { Frame } from "./frame";
import { Text } from "./text";
import { OptionsContext } from "../interface/options-provider";
import { Padding } from "./padding";
import { Icon } from "./icon";
import { DockableFrameComponent } from "./dockable-frame";

interface CardProps {
	size?: UDim2;
	position?: UDim2;
	children?: ReactNode | ReactNode[];
	draggable?: boolean;
	Native?: InstanceAttributes<Frame>;
	cornerRadius?: UDim;
}

export function Card(props: CardProps) {
	const [visible, setVisible] = useState(true);

	const options = useContext(OptionsContext);

	const nativeProperties =
		props.Native !== undefined ? props.Native : ({ AutomaticSize: "XY" } as InstanceAttributes<Frame>);

	return (
		<>
			{props.draggable ? (
				<DockableFrameComponent
					size={props.size ?? new UDim2(0, 0, 0, 0)}
					Native={nativeProperties as InstanceAttributes<ImageButton>}
					position={props.position ?? new UDim2(0, 0, 0, 0)}
					cornerRadius={props.cornerRadius}
				>
					<uilistlayout
						HorizontalAlignment={"Center"}
						FillDirection={"Vertical"}
						Padding={new UDim(0, 8)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						HorizontalFlex={"Fill"}
					/>
					<Padding all={new UDim(0, 24)} />
					<uistroke Color={options.pallete?.surface} Thickness={2} />
					{props.children}
					<frame BackgroundTransparency={1} LayoutOrder={1} BorderSizePixel={0} key={`card-spacer`}>
						<uiflexitem FlexMode={"Fill"} />
					</frame>
				</DockableFrameComponent>
			) : (
				<Frame
					size={props.size ?? new UDim2(0, 0, 0, 0)}
					Native={nativeProperties}
					position={props.position ?? new UDim2(0, 0, 0, 0)}
					keyName={`card`}
					cornerRadius={props.cornerRadius}
				>
					<uilistlayout
						HorizontalAlignment={"Center"}
						FillDirection={"Vertical"}
						Padding={new UDim(0, 8)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						HorizontalFlex={"Fill"}
					/>
					<Padding all={new UDim(0, 24)} />
					<uistroke Color={options.pallete?.surface} Thickness={2} />
					{props.children}
					<frame BackgroundTransparency={1} LayoutOrder={1} BorderSizePixel={0} key={`card-spacer`}>
						<uiflexitem FlexMode={"Fill"} />
					</frame>
				</Frame>
			)}
		</>
	);
}

interface CardHeaderProps {
	title?: string;
	body?: string;
	direction?: "Vertical" | "Horizontal";
	children?: ReactNode | ReactNode[];
	closeButton?: boolean;
	closeButtonClicked?: () => void;
}

export function CardHeader(props: CardHeaderProps) {
	const options = useContext(OptionsContext);

	return (
		<Frame
			size={new UDim2(0, 0, 0, -24)}
			position={new UDim2()}
			Native={{ AutomaticSize: "Y", LayoutOrder: -1 }}
			keyName={`card-header`}
		>
			<uilistlayout
				HorizontalAlignment={"Center"}
				FillDirection={props.direction ?? "Vertical"}
				Padding={new UDim(0, 8)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Wraps
			/>
			<Text font={Enum.Font.BuilderSansExtraBold} text={props.title} textSize={24} Native={{ LayoutOrder: -2 }} />
			<Text
				font={Enum.Font.BuilderSansMedium}
				text={props.body ?? ""}
				textSize={16}
				color={options.pallete?.subtext}
				Native={{ LayoutOrder: -1 }}
			/>
			{props.closeButton ? (
				<textbutton
					BackgroundTransparency={1}
					LayoutOrder={-3}
					BorderSizePixel={0}
					key={`card-close-button`}
					Size={new UDim2(1, 0, 0, 24)}
					Text={""}
					Event={{
						MouseButton1Click: () => {
							if (props.closeButtonClicked) {
								props.closeButtonClicked();
							}
						},
					}}
				>
					<Icon
						image="rbxassetid://18323998646"
						color={options.pallete?.text}
						size={new UDim2(0, 24, 0, 24)}
						position={new UDim2(1, -24, 0, 0)}
						imageSize={new UDim2(0, 24, 0, 24)}
					/>
				</textbutton>
			) : (
				<></>
			)}
			{props.children}
		</Frame>
	);
}

interface CardContentProps {
	children?: ReactNode | ReactNode[];
	direction?: "Vertical" | "Horizontal";
	padding?: UDim;
}

export function CardContent(props: CardContentProps) {
	const options = useContext(OptionsContext);

	return (
		<Frame
			size={new UDim2()}
			position={new UDim2()}
			Native={{ AutomaticSize: "XY", LayoutOrder: 0 }}
			keyName={`card-content`}
		>
			<Padding top={props.padding ?? new UDim(0, 16)} />
			<uilistlayout
				HorizontalAlignment={"Center"}
				FillDirection={props.direction ?? "Vertical"}
				Padding={new UDim(0, 8)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Wraps
				HorizontalFlex={"Fill"}
			/>
			{props.children}
		</Frame>
	);
}

interface CardFooterProps {
	children?: ReactNode | ReactNode[];
	direction?: "Vertical" | "Horizontal";
}

export function CardFooter(props: CardFooterProps) {
	return (
		<Frame
			size={new UDim2()}
			position={new UDim2()}
			Native={{ AutomaticSize: "XY", LayoutOrder: 2 }}
			keyName={`card-footer`}
		>
			<uilistlayout
				HorizontalAlignment={"Center"}
				FillDirection={props.direction ?? "Vertical"}
				Padding={new UDim(0, 8)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			{props.children}
		</Frame>
	);
}
