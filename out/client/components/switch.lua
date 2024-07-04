-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useState = _react.useState
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local useMotion = TS.import(script, script.Parent.Parent, "utils", "use-motion").useMotion
local Padding = TS.import(script, script.Parent, "padding").Padding
local springs = TS.import(script, script.Parent.Parent, "springs").springs
local function Switch(props)
	local options = useContext(OptionsContext)
	local enabled, setEnabled = useState(if props.initialState == "Enabled" then true else false)
	local position, positionMotion = useMotion(UDim2.new(0, 0, 0, 0))
	local color, colorMotion = useMotion(Color3.new())
	local events = {
		MouseButton1Click = function()
			setEnabled(not enabled)
			local newPosition = if enabled then UDim2.new(1, -20, 0, 0) else UDim2.new(0, 0, 0, 0)
			positionMotion:spring(newPosition, springs.responsive)
			local newColor = if enabled then options.pallete.text else options.pallete.surface
			colorMotion:spring(newColor, springs.responsive)
			if props.onSwitched then
				local _result = props
				if _result ~= nil then
					_result.onSwitched(enabled)
				end
			end
		end,
	}
	local newPosition = if enabled then UDim2.new(1, -20, 0, 0) else UDim2.new(0, 0, 0, 0)
	positionMotion:spring(newPosition, springs.responsive)
	local newColor = if enabled then options.pallete.text else options.pallete.surface
	colorMotion:spring(newColor, springs.responsive)
	if props.onSwitched then
		local _result = props
		if _result ~= nil then
			_result.onSwitched(enabled)
		end
	end
	local _attributes = {
		Text = "",
		BorderSizePixel = 0,
		BackgroundColor3 = color,
		Size = UDim2.fromOffset(44, 24),
		AutoButtonColor = false,
		Position = props.position,
	}
	local _attribute = props.Native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	_attributes.Event = events
	_attributes.key = `switch`
	local _exp = React.createElement(Padding, {
		all = UDim.new(0, 2),
	})
	local _exp_1 = React.createElement("uicorner", {
		CornerRadius = UDim.new(1, 0),
	})
	local _attributes_1 = {
		Position = position,
		Size = UDim2.fromOffset(20, 20),
	}
	local _result = options.pallete
	if _result ~= nil then
		_result = _result.background
	end
	_attributes_1.BackgroundColor3 = _result
	return React.createElement("textbutton", _attributes, _exp, _exp_1, React.createElement("frame", _attributes_1, React.createElement(Padding, {
		all = UDim.new(0, 4),
	}), React.createElement("uicorner", {
		CornerRadius = UDim.new(1, 0),
	})))
end
return {
	Switch = Switch,
}
