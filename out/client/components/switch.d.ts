/// <reference types="@rbxts/compiler-types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="react" />
interface SwitchProps {
    initialState?: "Enabled" | "Disabled";
    Native?: InstanceProperties<TextButton>;
    position?: UDim2;
    onSwitched?: (value: boolean) => void;
}
export declare function Switch(props: SwitchProps): JSX.Element;
export {};
