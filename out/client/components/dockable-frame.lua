-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local TS = _G[script]
local _react = TS.import(script, TS.getModule(script, "@rbxts", "react"))
local React = _react
local useContext = _react.useContext
local useState = _react.useState
local Frame = TS.import(script, script.Parent, "frame").Frame
local useMotion = TS.import(script, script.Parent.Parent, "utils", "use-motion").useMotion
local springs = TS.import(script, script.Parent.Parent, "springs").springs
local findCollidingRegions = TS.import(script, script.Parent.Parent, "utils", "docking").findCollidingRegions
local Make = TS.import(script, TS.getModule(script, "@rbxts", "make"))
local TweenService = TS.import(script, TS.getModule(script, "@rbxts", "services")).TweenService
local OptionsContext = TS.import(script, script.Parent.Parent, "interface", "options-provider").OptionsContext
local regionFrames = {}
local function DockableFrameComponent(props)
	local dragging, setDragging = useState(false)
	local framePosition, framePositionMotion = useMotion(props.position)
	local frameSize, frameSizeMotion = useMotion(props.size or UDim2.new(1, 0, 1, 0))
	local options = useContext(OptionsContext)
	local dragStartingPosition
	local dragStartingMousePosition
	local thisInstance
	if options.showDockableRegions then
		if #regionFrames == 0 then
			for _, region in props.dockableRegions or {} do
				local _object = {}
				local _left = "Size"
				local _size = region.size
				local _arg0 = UDim2.fromOffset(20, 20)
				_object[_left] = _size - _arg0
				local _left_1 = "Position"
				local _position = region.position
				local _arg0_1 = UDim2.fromOffset(10, 10)
				_object[_left_1] = _position + _arg0_1
				_object.Visible = false
				_object.BackgroundColor3 = Color3.new(1, 1, 1)
				_object.BackgroundTransparency = 0.8
				_object.ZIndex = -1
				_object.BorderSizePixel = 0
				local frame = Make("Frame", _object)
				Make("UICorner", {
					CornerRadius = UDim.new(0, 8),
					Parent = frame,
				})
				table.insert(regionFrames, frame)
			end
		end
	end
	local events = {
		DragBegin = function(button, position)
			setDragging(true)
			thisInstance = button
			dragStartingPosition = button.Position
			dragStartingMousePosition = Vector2.new(position.X.Offset, position.Y.Offset)
			-- ▼ ReadonlyArray.forEach ▼
			local _callback = function(frame)
				frame.Parent = button:FindFirstAncestorOfClass("ScreenGui")
				frame.Visible = true
				frame.BackgroundTransparency = 1
				local tween = TweenService:Create(frame, TweenInfo.new(0.25, Enum.EasingStyle.Linear, Enum.EasingDirection.In), {
					BackgroundTransparency = 0.8,
				})
				tween:Play()
			end
			for _k, _v in regionFrames do
				_callback(_v, _k - 1, regionFrames)
			end
			-- ▲ ReadonlyArray.forEach ▲
		end,
		DragStopped = function(button, x, y)
			setDragging(false)
			local parentSize = (button.Parent).AbsoluteSize
			local buttonAsDockableRegion = {
				size = button.Size,
				position = button.Position,
			}
			-- ▼ ReadonlyArray.forEach ▼
			local _callback = function(frame)
				frame.Visible = false
			end
			for _k, _v in regionFrames do
				_callback(_v, _k - 1, regionFrames)
			end
			-- ▲ ReadonlyArray.forEach ▲
			if #findCollidingRegions(buttonAsDockableRegion, props.dockableRegions or {}, parentSize, options.dockingTolerance) > 0 then
				local regions = findCollidingRegions(buttonAsDockableRegion, props.dockableRegions or {}, parentSize, options.dockingTolerance)
				local dockableRegion = regions[1]
				framePositionMotion:set(button.Position)
				framePositionMotion:spring(dockableRegion.position, springs.responsive)
				framePositionMotion:start()
				frameSizeMotion:set(button.Size)
				frameSizeMotion:spring(dockableRegion.size, springs.responsive)
				frameSizeMotion:start()
				local _exp = props.dockableRegions
				-- ▼ ReadonlyArray.find ▼
				local _callback_1 = function(value)
					return value == dockableRegion
				end
				local _result
				for _i, _v in _exp do
					if _callback_1(_v, _i - 1, _exp) == true then
						_result = _v
						break
					end
				end
				-- ▲ ReadonlyArray.find ▲
				_result.taken = true
			end
		end,
	}
	local _attributes = {
		Text = "",
		Size = frameSize,
		Position = framePosition,
		BackgroundTransparency = 1,
		Event = events,
		Draggable = true,
	}
	for _k, _v in props.Native do
		_attributes[_k] = _v
	end
	local _condition = props.key
	if _condition == nil then
		_condition = `dockable-frame`
	end
	_attributes.key = _condition
	return React.createElement("textbutton", _attributes, React.createElement(Frame, {
		size = UDim2.new(1, 0, 1, 0),
		position = UDim2.new(0, 0, 0, 0),
		Native = {
			AutomaticSize = "XY",
		},
	}, props.children))
end
return {
	DockableFrameComponent = DockableFrameComponent,
}
