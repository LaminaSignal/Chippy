import { ChippyConfig } from "../types";

export interface IChippy {
  speak: (message: string) => void;
  pulse: (eventType: string, payload?: any) => void;
  configureChippy: (config: ChippyConfig) => void;
}