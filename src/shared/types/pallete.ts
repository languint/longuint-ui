export interface Pallete {
    background: Color3;
    surface: Color3;
    text: Color3;
    subtext: Color3;
    context: Color3;
    success: Color3;
    danger: Color3;
    custom?: Partial<CustomPalleteKeys> & {[key: string]: any}
}

export interface CustomPalleteKeys {
    primary: Color3; // Optional, defaults to [context] 
    secondary: Color3; // Optional, defaults to [context]
    borderRadius: UDim; // Optional, defaults to [8px]
    glassy: boolean; // Optional, defaults to [true]
    font: { regular?: Enum.Font, medium?: Enum.Font, bold?: Enum.Font}; // Optonal, must be preloaded, defaults to [BuilderSans]
}