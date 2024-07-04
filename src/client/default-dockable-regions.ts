import { DockableRegion } from "../shared/types/dockable-region";

export const DockableRegions: DockableRegion[] = [
	{ size: new UDim2(0.25, 0, 1, 0), position: new UDim2(0, 0, 0, 0) }, // Left Panel
	{ size: new UDim2(0.25, 0, 1, 0), position: new UDim2(0.75, 0, 0, 0) }, // Right Panel
	{ size: new UDim2(0.5, 0, 0.25, 0), position: new UDim2(0.25, 0, 0, 0) }, // Top Panel
	{ size: new UDim2(0.5, 0, 0.25, 0), position: new UDim2(0.25, 0, 0.75, 0) }, // Bottom Panel
];
