import { t } from "@rbxts/t";

const key = Enum.KeyCode;
const modifierKeys = new Map<Enum.KeyCode, string>([
	[key.LeftAlt, "Alt"],
	[key.RightAlt, "Alt"],
	[key.LeftControl, "Ctrl"],
	[key.RightControl, "Ctrl"],
	[key.LeftShift, "Shift"],
	[key.RightShift, "Shift"],
	[key.LeftMeta, "Meta"],
	[key.RightMeta, "Meta"],
]);

export function isModifierKey(keyCode: Enum.KeyCode) {
	return modifierKeys.has(keyCode);
}

export function getModifierKeyName(keyCode: Enum.KeyCode) {
	return modifierKeys.get(keyCode);
}

export type CommandShortcut = Enum.KeyCode | Enum.KeyCode[]

export function getShortcutKeycodes(shortcut: CommandShortcut): Enum.KeyCode[] {
	if (isKeyCode(shortcut)) {
		return [shortcut];
	}

	if (isKeyCodeArray(shortcut)) {
		return shortcut;
	}

	return [];
}

export const isKeyCode = t.enum(Enum.KeyCode);
export const isKeyCodeArray = t.array(isKeyCode);