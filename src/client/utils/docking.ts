import { DockableRegion } from "../../shared/types/dockable-region";

export function udimToAbsolute(position: UDim2, parentSize: Vector2): Vector2 {
    return new Vector2(
        position.X.Offset + position.X.Scale * parentSize.X,
        position.Y.Offset + position.Y.Scale * parentSize.Y
    );
}

export function udimToAbsoluteSize(size: UDim2, parentSize: Vector2): Vector2 {
    return new Vector2(
        size.X.Offset + size.X.Scale * parentSize.X,
        size.Y.Offset + size.Y.Scale * parentSize.Y
    );
}

export function doRegionsCollide(framePosition: Vector2, frameSize: Vector2, regionPosition: Vector2, regionSize: Vector2): boolean {
    const tolerance = 20;

    // Calculate boundaries with tolerance
    const frameLeft = framePosition.X - tolerance;
    const frameRight = framePosition.X + frameSize.X + tolerance;
    const frameTop = framePosition.Y - tolerance;
    const frameBottom = framePosition.Y + frameSize.Y + tolerance;

    const regionLeft = regionPosition.X;
    const regionRight = regionPosition.X + regionSize.X;
    const regionTop = regionPosition.Y;
    const regionBottom = regionPosition.Y + regionSize.Y;

    // Check for collision with tolerance
    return (
        frameLeft < regionRight &&
        frameRight > regionLeft &&
        frameTop < regionBottom &&
        frameBottom > regionTop
    );
}


export function findCollidingRegions(frame: DockableRegion, regions: DockableRegion[], parentSize: Vector2): DockableRegion[] {
    const framePosition = udimToAbsolute(frame.position, parentSize);
    const frameSize = udimToAbsoluteSize(frame.size, parentSize);

    const collidingRegions: DockableRegion[] = [];

    for (const region of regions) {
        const regionPosition = udimToAbsolute(region.position, parentSize);
        const regionSize = udimToAbsoluteSize(region.size, parentSize);

        if (doRegionsCollide(framePosition, frameSize, regionPosition, regionSize)) {
            collidingRegions.push(region);
        }
    }

    return collidingRegions;
}