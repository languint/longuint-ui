-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local OptionsProvider = TS.import(script, script.Parent, "options-provider").OptionsProvider
local Palletes = TS.import(script, script.Parent.Parent, "pallete").Palletes
local function RootProvider(_param)
	local options = _param.options
	local children = _param.children
	if options.pallete == nil then
		options.pallete = Palletes.Default
	end
	return React.createElement(OptionsProvider, {
		options = options,
	}, children)
end
return {
	RootProvider = RootProvider,
}
