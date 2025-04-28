import { ChippyConfig } from "../types";
import { initChippy } from "./actions/init";
import { pulse } from "./actions/pulse";
import { speak } from "./actions/speak";
import type {Pool, PoolClient} from 'pg';

export class Chippy {
  private static instance: Chippy;
  private _dbClient: Pool | PoolClient | undefined = undefined;
  private _telemetryTableName: string = 'telemetry';

  constructor() {
    initChippy();
  }

  private set dbClient(dbClient: Pool | PoolClient | undefined) {
    this._dbClient = dbClient;
  } 

  private get dbClient(): Pool |PoolClient | undefined {
    return this._dbClient;
  }

  private set telemetryTableName(tableName: string | undefined) {
    if(!tableName) {
      return;
    }
    this._telemetryTableName = tableName;
  }

  private get telemetryTableName(): string {
    return this._telemetryTableName;
  }

  public static getInstance(): Chippy {
    if (!Chippy.instance) {
      Chippy.instance = new Chippy();
    }
    return Chippy.instance;
  }

  public speak(message: string): void {
    speak(message);
  }

  /**
   * Pulse - Log data into a database client - by default it will log them under telemetry
   * @param eventType 
   * @param payload 
   * @returns 
   */
  public pulse(eventType: string, payload?: any): void {
    if(!this.dbClient) {
      this.speak('Chippy tried to log telemetry but no DB client was set.');
      return;
    }

    pulse(this.dbClient, this.telemetryTableName, eventType, payload);
  }

  public configureChippy(config: ChippyConfig) {
    this.speak('Configuring Chippy');
    this.dbClient = config.dbClient;
    this.telemetryTableName = config.telemetryTableName;
  }
}