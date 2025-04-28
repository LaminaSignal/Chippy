/**
 * Pulse - Log telemetry into a database
 * @param eventType
 * @param payload
 */
export declare function pulse(dbClient: any, tableName: string, eventType: string, payload?: any): Promise<void>;
