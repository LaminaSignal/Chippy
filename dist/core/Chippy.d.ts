import { ChippyConfig } from "../types";
export declare class Chippy {
    private static instance;
    private _dbClient;
    private _telemetryTableName;
    constructor();
    private set dbClient(value);
    private get dbClient();
    private set telemetryTableName(value);
    private get telemetryTableName();
    static getInstance(): Chippy;
    speak(message: string): void;
    /**
     * Pulse - Log data into a database client - by default it will log them under telemetry
     * @param eventType
     * @param payload
     * @returns
     */
    pulse(eventType: string, payload?: any): void;
    configureChippy(config: ChippyConfig): void;
}
