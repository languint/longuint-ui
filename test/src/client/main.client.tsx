import React, { StrictMode } from "@rbxts/react";
import { App } from "./app";
import { createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import Make from "@rbxts/make";

const root = createRoot(Make("ScreenGui", {
    Parent: Players.LocalPlayer.WaitForChild('PlayerGui'),
    IgnoreGuiInset: true
}))
root.render(<StrictMode><App /></StrictMode>)