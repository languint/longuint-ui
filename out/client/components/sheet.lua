-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local Frame = TS.import(script, script.Parent, "frame").Frame
local function Sheet(props)
	local _attributes = {}
	local _result = props.height
	if _result ~= nil then
		_result = _result.Scale
	end
	local _condition = _result
	if _condition == nil then
		_condition = 0
	end
	local _result_1 = props.height
	if _result_1 ~= nil then
		_result_1 = _result_1.Offset
	end
	local _condition_1 = _result_1
	if _condition_1 == nil then
		_condition_1 = 54
	end
	_attributes.size = UDim2.new(1, 0, _condition, _condition_1)
	_attributes.position = UDim2.new(0, 0, 0, 0)
	_attributes.glass = props.glass
	return React.createElement(Frame, _attributes, React.createElement("uiaspectratioconstraint", {
		AspectType = "ScaleWithParentSize",
		AspectRatio = 15.9074074074,
		DominantAxis = "Width",
	}), props.children)
end
return {
	Sheet = Sheet,
}
