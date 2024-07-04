-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local config = TS.import(script, TS.getModule(script, "@rbxts", "ripple")).config
local _object = table.clone(config.spring)
setmetatable(_object, nil)
_object.bubbly = {
	tension = 400,
	friction = 14,
}
_object.responsive = {
	tension = 400,
}
_object.gentle = {
	tension = 250,
	friction = 30,
}
local springs = _object
return {
	springs = springs,
}
