-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local useEventListener = TS.import(script, TS.getModule(script, "@rbxts", "pretty-react-hooks").out).useEventListener
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local useBinding = _react.useBinding
local useMemo = _react.useMemo
local createMotion = TS.import(script, TS.getModule(script, "@rbxts", "ripple")).createMotion
local RunService = TS.import(script, TS.getModule(script, "@rbxts", "services")).RunService
local function useMotion(initialValue)
	local motion = useMemo(function()
		return createMotion(initialValue)
	end, {})
	local binding, setValue = useBinding(initialValue)
	useEventListener(RunService.Heartbeat, function(delta)
		local value = motion:step(delta)
		if value ~= binding:getValue() then
			setValue(value)
		end
	end)
	return binding, motion
end
return {
	useMotion = useMotion,
}
