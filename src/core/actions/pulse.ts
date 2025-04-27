/**
 * Pulse - Log telemetry into a database
 * @param eventType 
 * @param payload 
 */
export async function pulse(dbClient: any, tableName: string, eventType: string, payload?: any) {
  await dbClient.query(
    `INSERT INTO ${tableName} (event_type, payload) VALUES ($1, $2)`,
    [eventType, payload || {}]
  );
}