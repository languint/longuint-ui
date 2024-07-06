import React from "@rbxts/react";
import { InterfaceOptions } from "../../shared/types/interface-options";
import { OptionsProvider } from "./options-provider";
import { Palletes } from "../pallete";

interface RootProviderProps extends React.PropsWithChildren {
	options: InterfaceOptions;
}

export function RootProvider({ options, children }: RootProviderProps) {
	if (options.pallete === undefined) options.pallete = Palletes.Default;
	if (options.dockingTolerance === undefined) options.dockingTolerance = 20;

	return <OptionsProvider options={options}>{children}</OptionsProvider>;
}
