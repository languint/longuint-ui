-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useEffect = _react.useEffect
local useState = _react.useState
local Palletes = TS.import(script, script.Parent.Parent, "pallete").Palletes
local useMotion = TS.import(script, script.Parent.Parent, "utils", "use-motion").useMotion
local springs = TS.import(script, script.Parent.Parent, "springs").springs
local TextService = TS.import(script, TS.getModule(script, "@rbxts", "services")).TextService
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local ButtonStyles
do
	local _inverse = {}
	ButtonStyles = setmetatable({}, {
		__index = _inverse,
	})
	ButtonStyles.Default = 0
	_inverse[0] = "Default"
	ButtonStyles.Secondary = 1
	_inverse[1] = "Secondary"
	ButtonStyles.Surface = 2
	_inverse[2] = "Surface"
	ButtonStyles.Outline = 3
	_inverse[3] = "Outline"
	ButtonStyles.Destructive = 4
	_inverse[4] = "Destructive"
end
local function getStyle(style, pallete)
	repeat
		if style == (ButtonStyles.Default) then
			return {
				background = pallete.context,
				hover = pallete.context:Lerp(Color3.new(0, 0, 0), 0.2),
				textColor = pallete.background,
			}
		end
		if style == (ButtonStyles.Secondary) then
			return {
				background = pallete.text,
				hover = pallete.text:Lerp(Color3.new(0, 0, 0), 0.2),
				textColor = pallete.background,
			}
		end
		if style == (ButtonStyles.Surface) then
			return {
				background = pallete.surface,
				hover = pallete.surface:Lerp(Color3.new(0, 0, 0), 0.2) or Palletes.Default.surface:Lerp(Color3.new(0, 0, 0), 0.2),
				textColor = pallete.text,
			}
		end
		if style == (ButtonStyles.Outline) then
			return {
				background = pallete.background,
				hover = pallete.surface,
				textColor = pallete.text,
			}
		end
		if style == (ButtonStyles.Destructive) then
			return {
				background = pallete.danger,
				hover = pallete.danger:Lerp(Color3.new(0, 0, 0), 0.1),
				textColor = pallete.text:Lerp(pallete.danger, 0.1),
			}
		end
		return {
			background = pallete.background,
			hover = pallete.surface,
			textColor = pallete.text,
		}
	until true
end
local function Button(props)
	local size, setSize = useState(props.size or UDim2.new(0, 100, 0, 40))
	local options = useContext(OptionsContext)
	local textWidth, setTextWidth = useState(0)
	local _condition = props.style
	if _condition == nil then
		_condition = ButtonStyles.Default
	end
	local style = getStyle(_condition, options.pallete or Palletes.Default)
	local backgroundColor, backgroundColorMotion = useMotion(style.hover)
	local defaultEvents = {
		MouseEnter = function()
			backgroundColorMotion:spring(style.hover, springs.slow)
			backgroundColorMotion:start()
		end,
		MouseLeave = function()
			backgroundColorMotion:spring(style.background, springs.slow)
			backgroundColorMotion:start()
		end,
		MouseButton1Click = function()
			if props.onClicked then
				props.onClicked()
			end
		end,
	}
	local _result
	if props.events ~= nil then
		local _object = table.clone(props.events)
		setmetatable(_object, nil)
		for _k, _v in defaultEvents do
			_object[_k] = _v
		end
		_result = _object
	else
		_result = defaultEvents
	end
	local events = _result
	useEffect(function()
		local _value = props.text
		if _value ~= "" and _value then
			local textSize = TextService:GetTextSize(props.text, 16, Enum.Font.BuilderSansMedium, Vector2.new(size.X.Offset, size.Y.Offset))
			setTextWidth(textSize.X)
		end
	end, { props.text })
	local _attributes = {
		Event = events,
		Size = UDim2.new(size.X.Scale, textWidth + size.X.Offset, size.Y.Scale, size.Y.Offset),
		Position = props.position,
		BackgroundColor3 = backgroundColor,
		BackgroundTransparency = if props.style == ButtonStyles.Outline then 1 else 0,
		AutomaticSize = if props.size then "None" else "X",
		Text = "",
		AutoButtonColor = false,
		ClipsDescendants = true,
	}
	local _attribute = props.Native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	_attributes.key = `button`
	local _attributes_1 = {}
	local _result_1 = options.pallete
	if _result_1 ~= nil then
		_result_1 = _result_1.custom
		if _result_1 ~= nil then
			_result_1 = _result_1.borderRadius
		end
	end
	local _condition_1 = _result_1
	if _condition_1 == nil then
		local _result_2 = Palletes.Default.custom
		if _result_2 ~= nil then
			_result_2 = _result_2.borderRadius
		end
		_condition_1 = _result_2
	end
	_attributes_1.CornerRadius = _condition_1
	return React.createElement("textbutton", _attributes, React.createElement("uicorner", _attributes_1), React.createElement("textlabel", {
		Text = props.text,
		Font = Enum.Font.BuilderSansMedium,
		TextColor3 = style.textColor,
		TextSize = 16,
		TextXAlignment = "Center",
		TextYAlignment = "Center",
		Size = UDim2.new(1, -48, 1, -16),
		Position = UDim2.new(0, 24, 0, 8),
		BackgroundTransparency = 1,
		ZIndex = 2,
	}), if props.style == ButtonStyles.Outline then (React.createElement("uistroke", {
		Color = if props.outlineColor ~= nil then props.outlineColor else Palletes.Default.subtext,
		Thickness = 1,
		ApplyStrokeMode = "Border",
	})) else (React.createElement(React.Fragment)), props.children)
end
return {
	Button = Button,
	ButtonStyles = ButtonStyles,
}
