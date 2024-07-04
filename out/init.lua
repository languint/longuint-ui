-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local exports = {}
for _k, _v in TS.import(script, script, "client") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "server") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "shared") or {} do
	exports[_k] = _v
end
return exports
