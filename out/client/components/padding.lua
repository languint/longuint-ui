-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local function Padding(props)
	local applyToAllSides = props.all ~= nil
	return React.createElement(React.Fragment, nil, if applyToAllSides then (React.createElement("uipadding", {
		PaddingBottom = props.all,
		PaddingLeft = props.all,
		PaddingRight = props.all,
		PaddingTop = props.all,
	})) else (React.createElement("uipadding", {
		PaddingBottom = props.bottom,
		PaddingLeft = props.left,
		PaddingRight = props.right,
		PaddingTop = props.top,
	})))
end
return {
	Padding = Padding,
}
