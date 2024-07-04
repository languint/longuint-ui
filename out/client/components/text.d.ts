/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import { InstanceAttributes, ReactNode } from "@rbxts/react";
interface TextProps {
    text?: string;
    color?: Color3;
    font?: Enum.Font;
    Native?: InstanceAttributes<TextLabel>;
    size?: UDim2;
    position?: UDim2;
    children?: ReactNode | ReactNode[];
    textSize?: number;
}
export declare function Text(props: TextProps): JSX.Element;
export {};
