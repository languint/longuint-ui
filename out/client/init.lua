-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local exports = {}
for _k, _v in TS.import(script, script, "components") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "interface") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "utils") or {} do
	exports[_k] = _v
end
for _k, _v in TS.import(script, script, "pallete") or {} do
	exports[_k] = _v
end
return exports
