-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useMemo = _react.useMemo
local useState = _react.useState
local GlassmorphicUI = TS.import(script, TS.getModule(script, "@rbxts", "GlassmorphicUI"))
local Make = TS.import(script, TS.getModule(script, "@rbxts", "make"))
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local function Frame(props)
	local useBackgroundColor = not props.glass == true
	local frame, setFrame = useState()
	local glassImage
	local options = useContext(OptionsContext)
	if props.glass == true then
		glassImage = GlassmorphicUI.new()
		glassImage:SetAttribute("BlurRadius", if props.blurRadius ~= nil then props.blurRadius else 10)
		glassImage.BackgroundTransparency = 1
		glassImage.Size = UDim2.new(1, 0, 1, 0)
		glassImage.ZIndex = -1
		Make("UICorner", {
			Parent = glassImage,
			CornerRadius = UDim.new(0, 8),
		})
	end
	useMemo(function()
		if glassImage ~= nil then
			glassImage.Parent = frame
		end
	end, { frame })
	local _attributes = {}
	local _result
	if props.backgroundColor ~= nil then
		_result = props.backgroundColor
	else
		local _result_1 = options.pallete
		if _result_1 ~= nil then
			_result_1 = _result_1.background
		end
		_result = _result_1
	end
	_attributes.BackgroundColor3 = _result
	_attributes.BackgroundTransparency = if useBackgroundColor then props.backgroundTransparency else 1
	_attributes.Event = {
		AncestryChanged = function(frame)
			setFrame(frame)
		end,
	}
	_attributes.Size = props.size
	_attributes.Position = props.position
	_attributes.AnchorPoint = props.anchorPoint
	local _value = props.keyName
	_attributes.key = if _value ~= 0 and _value == _value and _value ~= "" and _value then props.keyName else `frame`
	local _attribute = props.Native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	return React.createElement("frame", _attributes, React.createElement("uicorner", {
		CornerRadius = props.cornerRadius or UDim.new(0, 8),
	}), props.children)
end
return {
	Frame = Frame,
}
