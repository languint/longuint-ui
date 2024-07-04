import React, { ReactNode } from "@rbxts/react";
import { Frame } from "./frame";
import { Padding } from "./padding";

interface SheetProps {
	glass?: boolean;
	height?: UDim;
    children?: ReactNode | ReactNode[]
}

export function Sheet(props: SheetProps) {
	return (
		<Frame
			size={new UDim2(1, 0, props.height?.Scale ?? 0, props.height?.Offset ?? 54)}
			position={new UDim2(0, 0, 0, 0)}
			glass={props.glass}
		>
			<uiaspectratioconstraint
				AspectType={"ScaleWithParentSize"}
				AspectRatio={15.9074074074}
				DominantAxis={"Width"}
			/>
            {props.children}
		</Frame>
	);
}
