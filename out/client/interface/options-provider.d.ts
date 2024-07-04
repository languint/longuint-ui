/// <reference types="react" />
import React, { ReactNode } from "@rbxts/react";
import { InterfaceOptions } from "../../shared/types/interface-options";
interface OptionsProviderProps {
    options: InterfaceOptions;
    children?: ReactNode | ReactNode[];
}
export declare const OptionsContext: React.Context<InterfaceOptions>;
export declare function OptionsProvider({ options, children }: OptionsProviderProps): JSX.Element;
export {};
