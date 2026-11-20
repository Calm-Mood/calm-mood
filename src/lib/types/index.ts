import { LangCodeType } from "@/i18n/types";
import { SoundsType } from "../sounds";

export interface ISounds {
      id: SoundsType;
      url: string;
      title: Record<LangCodeType,string>
}
export type PlayBackType = "idle" | "playing" | "paused"
export enum NavLinks{
      Sounds = 'sounds',
      BreathingExercise = 'exercise',
      Pomodoro = 'pomodoro'
}