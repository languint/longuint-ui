import { Pallete } from "../shared/types/pallete";

export const Palletes: { [k: string]: Pallete } = {
	Default: {
		background: Color3.fromHex("#000000"),
		surface: Color3.fromHex("#272727"),
		context: Color3.fromHex("#2BB1FF"),
		text: Color3.fromHex("#e4e4e4"),
		subtext: Color3.fromHex("#A2A2A2"),
		danger: Color3.fromHex("#FF4444"),
		success: Color3.fromHex("#4ECC5A"),
		custom: {
			font: {
				regular: Enum.Font.BuilderSans,
				medium: Enum.Font.BuilderSansBold,
				bold: Enum.Font.BuilderSansBold,
			},
			glassy: true,
			borderRadius: new UDim(0, 8),
			primary: Color3.fromHex("#EF7A36")
		},
	},
};
