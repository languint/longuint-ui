import React, { InstanceAttributes } from "@rbxts/react";

interface IconProps {
	image: string;
	color?: Color3;
	size?: UDim2;
	position?: UDim2;
	offset?: Vector2;
	Native?: InstanceAttributes<ImageLabel>;
	imageSize?: UDim2;
	useAspect?: boolean;
}

export function Icon(props: IconProps) {
	return (
		<frame
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Size={props.size ?? UDim2.fromOffset(24, 24)}
			Position={props.position}
			{...props.Native}
		>
			<imagelabel
				BackgroundTransparency={1}
				Image={props.image}
				ImageColor3={props.color ?? Color3.fromRGB(255, 255, 255)}
				ImageRectOffset={props.offset}
				Size={props.imageSize ?? props.size?.sub(UDim2.fromOffset(4, 4)) ?? UDim2.fromOffset(20, 20)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0.5, 0.5)}
			/>
			{props.useAspect ? <uiaspectratioconstraint AspectRatio={1} DominantAxis={"Width"} /> : <></>}
		</frame>
	);
}
