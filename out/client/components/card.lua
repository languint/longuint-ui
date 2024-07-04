-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useState = _react.useState
local Frame = TS.import(script, script.Parent, "frame").Frame
local Text = TS.import(script, script.Parent, "text").Text
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local Padding = TS.import(script, script.Parent, "padding").Padding
local Icon = TS.import(script, script.Parent, "icon").Icon
local DockableFrameComponent = TS.import(script, script.Parent, "dockable-frame").DockableFrameComponent
local function Card(props)
	local visible, setVisible = useState(true)
	local options = useContext(OptionsContext)
	local nativeProperties = if props.Native ~= nil then props.Native else ({
		AutomaticSize = "XY",
	})
	local _result
	if props.draggable then
		local _exp = React.createElement("uilistlayout", {
			HorizontalAlignment = "Center",
			FillDirection = "Vertical",
			Padding = UDim.new(0, 8),
			SortOrder = Enum.SortOrder.LayoutOrder,
			HorizontalFlex = "Fill",
		})
		local _exp_1 = React.createElement(Padding, {
			all = UDim.new(0, 24),
		})
		local _attributes = {}
		local _result_1 = options.pallete
		if _result_1 ~= nil then
			_result_1 = _result_1.surface
		end
		_attributes.Color = _result_1
		_attributes.Thickness = 2
		_result = (React.createElement(DockableFrameComponent, {
			size = props.size or UDim2.new(0, 0, 0, 0),
			Native = nativeProperties,
			position = props.position or UDim2.new(0, 0, 0, 0),
			cornerRadius = props.cornerRadius,
		}, _exp, _exp_1, React.createElement("uistroke", _attributes), props.children, React.createElement("frame", {
			BackgroundTransparency = 1,
			LayoutOrder = 1,
			BorderSizePixel = 0,
			key = `card-spacer`,
		}, React.createElement("uiflexitem", {
			FlexMode = "Fill",
		}))))
	else
		local _exp = React.createElement("uilistlayout", {
			HorizontalAlignment = "Center",
			FillDirection = "Vertical",
			Padding = UDim.new(0, 8),
			SortOrder = Enum.SortOrder.LayoutOrder,
			HorizontalFlex = "Fill",
		})
		local _exp_1 = React.createElement(Padding, {
			all = UDim.new(0, 24),
		})
		local _attributes = {}
		local _result_1 = options.pallete
		if _result_1 ~= nil then
			_result_1 = _result_1.surface
		end
		_attributes.Color = _result_1
		_attributes.Thickness = 2
		_result = (React.createElement(Frame, {
			size = props.size or UDim2.new(0, 0, 0, 0),
			Native = nativeProperties,
			position = props.position or UDim2.new(0, 0, 0, 0),
			keyName = `card`,
			cornerRadius = props.cornerRadius,
		}, _exp, _exp_1, React.createElement("uistroke", _attributes), props.children, React.createElement("frame", {
			BackgroundTransparency = 1,
			LayoutOrder = 1,
			BorderSizePixel = 0,
			key = `card-spacer`,
		}, React.createElement("uiflexitem", {
			FlexMode = "Fill",
		}))))
	end
	return React.createElement(React.Fragment, nil, _result)
end
local function CardHeader(props)
	local options = useContext(OptionsContext)
	local _exp = React.createElement("uilistlayout", {
		HorizontalAlignment = "Center",
		FillDirection = props.direction or "Vertical",
		Padding = UDim.new(0, 8),
		SortOrder = Enum.SortOrder.LayoutOrder,
		Wraps = true,
	})
	local _exp_1 = React.createElement(Text, {
		font = Enum.Font.BuilderSansExtraBold,
		text = props.title,
		textSize = 24,
		Native = {
			LayoutOrder = -2,
		},
	})
	local _attributes = {
		font = Enum.Font.BuilderSansMedium,
	}
	local _condition = props.body
	if _condition == nil then
		_condition = ""
	end
	_attributes.text = _condition
	_attributes.textSize = 16
	local _result = options.pallete
	if _result ~= nil then
		_result = _result.subtext
	end
	_attributes.color = _result
	_attributes.Native = {
		LayoutOrder = -1,
	}
	local _exp_2 = React.createElement(Text, _attributes)
	local _result_1
	if props.closeButton then
		local _attributes_1 = {
			image = "rbxassetid://18323998646",
		}
		local _result_2 = options.pallete
		if _result_2 ~= nil then
			_result_2 = _result_2.text
		end
		_attributes_1.color = _result_2
		_attributes_1.size = UDim2.new(0, 24, 0, 24)
		_attributes_1.position = UDim2.new(1, -24, 0, 0)
		_attributes_1.imageSize = UDim2.new(0, 24, 0, 24)
		_result_1 = (React.createElement("textbutton", {
			BackgroundTransparency = 1,
			LayoutOrder = -3,
			BorderSizePixel = 0,
			key = `card-close-button`,
			Size = UDim2.new(1, 0, 0, 24),
			Text = "",
			Event = {
				MouseButton1Click = function()
					if props.closeButtonClicked then
						props.closeButtonClicked()
					end
				end,
			},
		}, React.createElement(Icon, _attributes_1)))
	else
		_result_1 = (React.createElement(React.Fragment))
	end
	return React.createElement(Frame, {
		size = UDim2.new(0, 0, 0, -24),
		position = UDim2.new(),
		Native = {
			AutomaticSize = "Y",
			LayoutOrder = -1,
		},
		keyName = `card-header`,
	}, _exp, _exp_1, _exp_2, _result_1, props.children)
end
local function CardContent(props)
	local options = useContext(OptionsContext)
	return React.createElement(Frame, {
		size = UDim2.new(),
		position = UDim2.new(),
		Native = {
			AutomaticSize = "XY",
			LayoutOrder = 0,
		},
		keyName = `card-content`,
	}, React.createElement(Padding, {
		top = props.padding or UDim.new(0, 16),
	}), React.createElement("uilistlayout", {
		HorizontalAlignment = "Center",
		FillDirection = props.direction or "Vertical",
		Padding = UDim.new(0, 8),
		SortOrder = Enum.SortOrder.LayoutOrder,
		Wraps = true,
		HorizontalFlex = "Fill",
	}), props.children)
end
local function CardFooter(props)
	return React.createElement(Frame, {
		size = UDim2.new(),
		position = UDim2.new(),
		Native = {
			AutomaticSize = "XY",
			LayoutOrder = 2,
		},
		keyName = `card-footer`,
	}, React.createElement("uilistlayout", {
		HorizontalAlignment = "Center",
		FillDirection = props.direction or "Vertical",
		Padding = UDim.new(0, 8),
		SortOrder = Enum.SortOrder.LayoutOrder,
	}), props.children)
end
return {
	Card = Card,
	CardHeader = CardHeader,
	CardContent = CardContent,
	CardFooter = CardFooter,
}
