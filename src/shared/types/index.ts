

export namespace SharedTypes {
  export interface DayWeatherEntity {
    date: string;
    temp: number;
    humidity: number;
    wind: number;
    description: string;
    icon: string;
  }
  export type Status = "loading" | "success" | "error"
}
