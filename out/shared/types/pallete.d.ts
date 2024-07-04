/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
export interface Pallete {
    background: Color3;
    surface: Color3;
    text: Color3;
    subtext: Color3;
    context: Color3;
    success: Color3;
    danger: Color3;
    custom?: Partial<CustomPalleteKeys> & {
        [key: string]: any;
    };
}
export interface CustomPalleteKeys {
    primary: Color3;
    secondary: Color3;
    borderRadius: UDim;
    glassy: boolean;
    font: {
        regular?: Enum.Font;
        medium?: Enum.Font;
        bold?: Enum.Font;
    };
}
