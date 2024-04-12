import { WeatherService } from "./api/services/weather/weather.service";
import { SharedTypes } from "./shared/types";

type InferApiData<F> = F extends (...args: unknown[]) => infer R
  ? NonNullable<Awaited<R>>
  : never;

export const appDtos = {
  convertWeatherForecastApiToDayWeatherEntity(
    day: InferApiData<typeof WeatherService.getWeatherForecast>["list"][0],
  ): SharedTypes.DayWeatherEntity {
    return {
      date: day.dt_txt,
      temp: day.main.temp,
      humidity: day.main.humidity,
      wind: day.wind.speed,
      description: day.weather[0].description,
      icon: day.weather[0].icon,
    };
  },
};
