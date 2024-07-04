/// <reference types="@rbxts/compiler-types" />
/// <reference types="react" />
/// <reference types="ripple" />
import { Binding } from "@rbxts/react";
import { Motion, MotionGoal } from "@rbxts/ripple";
export declare function useMotion(initialValue: number): LuaTuple<[Binding<number>, Motion]>;
export declare function useMotion<T extends MotionGoal>(initialValue: T): LuaTuple<[Binding<T>, Motion<T>]>;
