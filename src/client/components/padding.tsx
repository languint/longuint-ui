import React from "@rbxts/react";

interface PaddingProps {
	left: UDim;
	right: UDim;
	top: UDim;
	bottom: UDim;
	all: UDim;
}

export function Padding(props: Partial<PaddingProps>) {
	const applyToAllSides = props.all !== undefined;

	return (
		<>
			{applyToAllSides ? (
				<uipadding
					PaddingBottom={props.all}
					PaddingLeft={props.all}
					PaddingRight={props.all}
					PaddingTop={props.all}
				/>
			) : (
				<uipadding
					PaddingBottom={props.bottom}
					PaddingLeft={props.left}
					PaddingRight={props.right}
					PaddingTop={props.top}
				/>
			)}
		</>
	);
}
