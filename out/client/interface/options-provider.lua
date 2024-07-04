-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local createContext = _react.createContext
local useState = _react.useState
local OptionsContext = createContext({})
local function OptionsProvider(_param)
	local options = _param.options
	local children = _param.children
	local _object = table.clone(options)
	setmetatable(_object, nil)
	local interfaceOptions, setInterfaceOptions = useState(_object)
	local _attributes = {}
	local _object_1 = table.clone(interfaceOptions)
	setmetatable(_object_1, nil)
	_attributes.value = _object_1
	return React.createElement(OptionsContext.Provider, _attributes, children)
end
return {
	OptionsProvider = OptionsProvider,
	OptionsContext = OptionsContext,
}
