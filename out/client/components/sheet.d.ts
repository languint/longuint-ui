/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
import { ReactNode } from "@rbxts/react";
interface SheetProps {
    glass?: boolean;
    height?: UDim;
    children?: ReactNode | ReactNode[];
}
export declare function Sheet(props: SheetProps): JSX.Element;
export {};
