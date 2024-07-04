-- Compiled with roblox-ts v2.3.0-dev-d7847ea
local function udimToAbsolute(position, parentSize)
	return Vector2.new(position.X.Offset + position.X.Scale * parentSize.X, position.Y.Offset + position.Y.Scale * parentSize.Y)
end
local function udimToAbsoluteSize(size, parentSize)
	return Vector2.new(size.X.Offset + size.X.Scale * parentSize.X, size.Y.Offset + size.Y.Scale * parentSize.Y)
end
local function doRegionsCollide(framePosition, frameSize, regionPosition, regionSize)
	local tolerance = 20
	-- Calculate boundaries with tolerance
	local frameLeft = framePosition.X - tolerance
	local frameRight = framePosition.X + frameSize.X + tolerance
	local frameTop = framePosition.Y - tolerance
	local frameBottom = framePosition.Y + frameSize.Y + tolerance
	local regionLeft = regionPosition.X
	local regionRight = regionPosition.X + regionSize.X
	local regionTop = regionPosition.Y
	local regionBottom = regionPosition.Y + regionSize.Y
	-- Check for collision with tolerance
	return frameLeft < regionRight and frameRight > regionLeft and frameTop < regionBottom and frameBottom > regionTop
end
local function findCollidingRegions(frame, regions, parentSize)
	local framePosition = udimToAbsolute(frame.position, parentSize)
	local frameSize = udimToAbsoluteSize(frame.size, parentSize)
	local collidingRegions = {}
	for _, region in regions do
		local regionPosition = udimToAbsolute(region.position, parentSize)
		local regionSize = udimToAbsoluteSize(region.size, parentSize)
		if doRegionsCollide(framePosition, frameSize, regionPosition, regionSize) then
			table.insert(collidingRegions, region)
		end
	end
	return collidingRegions
end
return {
	udimToAbsolute = udimToAbsolute,
	udimToAbsoluteSize = udimToAbsoluteSize,
	doRegionsCollide = doRegionsCollide,
	findCollidingRegions = findCollidingRegions,
}
