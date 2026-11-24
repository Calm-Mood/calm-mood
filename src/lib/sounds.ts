import {Birds, Rain, River, Beach, Train, Thunderstorm, Night, Lake, Waves, Waterfall} from "@/icons"
import { cache } from "react";
import { ISounds } from "./types";

export const SOUND_ICONS = {
     birds: Birds,
     rain: Rain,
     river: River,
     beach: Beach,
     train: Train,
     thunderstorm: Thunderstorm,
     night: Night,
     lake: Lake,
     waves: Waves,
     waterfall: Waterfall
} as const

export type SoundsType = keyof typeof SOUND_ICONS;

export const getSounds = cache(async(): Promise<ISounds[]> => {
     const res = await fetch("https://calm-mood.github.io/cdn/data/sounds.json")
     if(!res.ok) return []
     const data: ISounds[] = await res.json();
     return data.sort(({id: a}, {id: b})=> a.localeCompare(b, undefined, { sensitivity: "base" }))
})