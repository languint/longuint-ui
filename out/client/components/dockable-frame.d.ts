/// <reference types="@rbxts/compiler-types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import { InstanceAttributes, ReactNode } from "@rbxts/react";
import { DockableRegion } from "../../shared/types/dockable-region";
type DockableFrameComponentProps = {
    dockableRegions?: DockableRegion[];
    Native: Partial<InstanceAttributes<TextButton>>;
    backgroundTransparency?: number;
    backgroundColor?: Color3;
    glass?: boolean;
    size: UDim2;
    position: UDim2;
    anchorPoint?: Vector2;
    blurRadius?: number;
    children?: ReactNode | ReactNode[];
    key?: string | number;
    cornerRadius?: UDim;
};
export declare function DockableFrameComponent(props: DockableFrameComponentProps): JSX.Element;
export {};
