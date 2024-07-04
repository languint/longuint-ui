/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
import { InstanceAttributes } from "@rbxts/react";
interface IconProps {
    image: string;
    color?: Color3;
    size?: UDim2;
    position?: UDim2;
    offset?: Vector2;
    Native?: InstanceAttributes<ImageLabel>;
    imageSize?: UDim2;
    useAspect?: boolean;
}
export declare function Icon(props: IconProps): JSX.Element;
export {};
