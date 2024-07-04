-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useEffect = _react.useEffect
local useState = _react.useState
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local TextService = TS.import(script, TS.getModule(script, "@rbxts", "services")).TextService
local function Text(props)
	local options = useContext(OptionsContext)
	local size, setSize = useState(props.size or UDim2.new(0, 0, 0, 16))
	local textWidth, setTextWidth = useState(0)
	useEffect(function()
		local _value = props.text
		if _value ~= "" and _value then
			local _exp = props.text
			local _condition = props.textSize
			if _condition == nil then
				_condition = 16
			end
			local textSize = TextService:GetTextSize(_exp, _condition, props.font or Enum.Font.BuilderSansMedium, Vector2.new(size.X.Offset, size.Y.Offset))
			setTextWidth(textSize.X)
		end
	end, { props.text })
	local _attributes = {
		Font = props.font or "BuilderSansMedium",
		Text = props.text,
		BackgroundTransparency = 1,
	}
	local _condition = props.color
	if _condition == nil then
		local _result = options.pallete
		if _result ~= nil then
			_result = _result.text
		end
		_condition = _result
	end
	_attributes.TextColor3 = _condition
	_attributes.Position = props.position or nil
	_attributes.Size = props.size or UDim2.new(0, textWidth, 0, 16)
	_attributes.TextSize = props.textSize
	_attributes.TextXAlignment = "Left"
	_attributes.key = `text`
	_attributes.RichText = true
	local _attribute = props.Native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	return React.createElement("textlabel", _attributes, props.children)
end
return {
	Text = Text,
}
