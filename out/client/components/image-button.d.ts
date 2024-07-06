/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
import React, { ReactNode } from "@rbxts/react";
import { ButtonStyles } from "./button";
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
