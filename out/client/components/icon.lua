-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local function Icon(props)
	local _attributes = {
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		Size = props.size or UDim2.fromOffset(24, 24),
		Position = props.position,
	}
	local _attribute = props.Native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	local _attributes_1 = {
		BackgroundTransparency = 1,
		Image = props.image,
		ImageColor3 = props.color or Color3.fromRGB(255, 255, 255),
		ImageRectOffset = props.offset,
	}
	local _condition = props.imageSize
	if _condition == nil then
		local _result = props.size
		if _result ~= nil then
			local _arg0 = UDim2.fromOffset(4, 4)
			_result = _result - _arg0
		end
		_condition = _result
		if _condition == nil then
			_condition = UDim2.fromOffset(20, 20)
		end
	end
	_attributes_1.Size = _condition
	_attributes_1.Position = UDim2.new(0.5, 0, 0.5, 0)
	_attributes_1.AnchorPoint = Vector2.new(0.5, 0.5)
	return React.createElement("frame", _attributes, React.createElement("imagelabel", _attributes_1), if props.useAspect then React.createElement("uiaspectratioconstraint", {
		AspectRatio = 1,
		DominantAxis = "Width",
	}) else React.createElement(React.Fragment))
end
return {
	Icon = Icon,
}
