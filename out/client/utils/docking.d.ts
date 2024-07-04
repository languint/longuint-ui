/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import { DockableRegion } from "../../shared/types/dockable-region";
export declare function udimToAbsolute(position: UDim2, parentSize: Vector2): Vector2;
export declare function udimToAbsoluteSize(size: UDim2, parentSize: Vector2): Vector2;
export declare function doRegionsCollide(framePosition: Vector2, frameSize: Vector2, regionPosition: Vector2, regionSize: Vector2): boolean;
export declare function findCollidingRegions(frame: DockableRegion, regions: DockableRegion[], parentSize: Vector2): DockableRegion[];
