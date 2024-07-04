/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
import React, { ReactNode } from "@rbxts/react";
declare enum ButtonStyles {
    Default = 0,
    Secondary = 1,
    Surface = 2,
    Outline = 3,
    Destructive = 4
}
interface ImageButtonComponentProps {
    style?: ButtonStyles;
    size?: UDim2;
    position?: UDim2;
    children?: ReactNode[] | ReactNode;
    events?: React.InstanceEvent<TextButton>;
    text?: string;
    outlineColor?: Color3;
    Native?: React.InstanceAttributes<TextButton>;
    onClicked?: () => void;
    image?: string;
}
export declare function ImageButton(props: ImageButtonComponentProps): JSX.Element;
export {};
