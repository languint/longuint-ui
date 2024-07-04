/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
import React, { ReactNode } from "@rbxts/react";
export interface ScrollingFrameProps {
    backgroundTransparency?: number;
    backgroundColor?: Color3;
    glass?: boolean;
    size: UDim2;
    position?: UDim2;
    anchorPoint?: Vector2;
    blurRadius?: number;
    children?: ReactNode | ReactNode[];
    Native?: React.InstanceAttributes<Frame>;
    keyName?: string | number;
    cornerRadius?: UDim;
}
export declare function ScrollingFrame(props: ScrollingFrameProps): JSX.Element;
