/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
/// <reference types="@rbxts/types" />
import { InstanceAttributes, ReactNode } from "@rbxts/react";
interface CardProps {
    size?: UDim2;
    position?: UDim2;
    children?: ReactNode | ReactNode[];
    draggable?: boolean;
    Native?: InstanceAttributes<Frame>;
    cornerRadius?: UDim;
}
export declare function Card(props: CardProps): JSX.Element;
interface CardHeaderProps {
    title?: string;
    body?: string;
    direction?: "Vertical" | "Horizontal";
    children?: ReactNode | ReactNode[];
    closeButton?: boolean;
    closeButtonClicked?: () => void;
}
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
interface CardContentProps {
    children?: ReactNode | ReactNode[];
    direction?: "Vertical" | "Horizontal";
    padding?: UDim;
}
export declare function CardContent(props: CardContentProps): JSX.Element;
interface CardFooterProps {
    children?: ReactNode | ReactNode[];
    direction?: "Vertical" | "Horizontal";
}
export declare function CardFooter(props: CardFooterProps): JSX.Element;
export {};
