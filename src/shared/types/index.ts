

export namespace SharedTypes {
  export interface DayWeatherEntity {
    date: string;
    temp: number;
    humidity: number;
    wind: string;
    description: string;
    icon: string;
  }
  export type Status = "loading" | "success" | "error"
}
