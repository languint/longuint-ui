import React, { createContext, ReactNode, useState } from "@rbxts/react";
import { InterfaceOptions } from "../../shared/types/interface-options";

interface OptionsProviderProps {
	options: InterfaceOptions;
	children?: ReactNode | ReactNode[];
}

export const OptionsContext = createContext<InterfaceOptions>({} as never);

export function OptionsProvider({ options, children }: OptionsProviderProps) {
	const [interfaceOptions, setInterfaceOptions] = useState<InterfaceOptions>({
		...options,
	});

	return <OptionsContext.Provider value={{ ...interfaceOptions }}>{children}</OptionsContext.Provider>;
}
