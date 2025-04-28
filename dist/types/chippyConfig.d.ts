import type { PoolClient, Pool } from "pg";
export interface ChippyConfig {
    dbClient?: Pool | PoolClient;
    telemetryTableName?: string;
}
