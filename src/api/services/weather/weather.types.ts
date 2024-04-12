type City = {
  name: string;
};

type ForecastDayWeather = {
  dt_txt: string;
  main: { temp: number; humidity: number};
  weather: Array<{ description: string; icon: string }>;
  wind: { speed: number };
};

type CurrentDayWeather = Omit<ForecastDayWeather, 'dt_txt'>;

export namespace WeatherServiceTypes {
  export type GetForecastWeatherResponse = {
    city: City;
    list: ForecastDayWeather[];
  };
  export type GetCurrentWeatherResponse = {
    currentWeather: CurrentDayWeather;
  };
}
