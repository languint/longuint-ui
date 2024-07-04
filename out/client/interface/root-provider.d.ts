/// <reference types="react" />
import React from "@rbxts/react";
import { InterfaceOptions } from "../../shared/types/interface-options";
interface RootProviderProps extends React.PropsWithChildren {
    options: InterfaceOptions;
}
export declare function RootProvider({ options, children }: RootProviderProps): JSX.Element;
export {};
