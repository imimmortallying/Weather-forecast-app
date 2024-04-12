import { makeAutoObservable } from "mobx";
import { appDtos } from "../App.dto";
import { SharedTypes } from "../../shared/types";
import { ApiService } from "../../shared/services/ApiService";
import { WeatherService } from "../../shared/api/services/weather/weather.service";

class WeatherStore {
  fullDayForecast: SharedTypes.DayWeatherEntity[] = [];
  city: string = "";
  currentTimeForecast: Omit<SharedTypes.DayWeatherEntity, "date"> | null = null;
  services = {
    api: new ApiService(["loadFullDayForecastData", "loadCurrentForecastData"]),
  };

  constructor() {
    makeAutoObservable(this);
  }

  async loadFullDayForecastData() {
    this.services.api.start("loadFullDayForecastData");
    const value = await WeatherService.getWeatherForecast();
    console.log("value", value);
    if (value) {
      this.city = value.city.name;
      this.fullDayForecast = value.list.map(
        appDtos.convertWeatherForecastApiToDayWeatherEntity
      );
      this.services.api.success("loadFullDayForecastData");
    } else {
      this.services.api.error(
        "loadFullDayForecastData",
        "ошибка, надо пробросить ниже из аксиоса"
      );
    }
  }

  async loadCurrentForecastData() {
    this.services.api.start("loadCurrentForecastData");
    const value = await WeatherService.getCurrentWeather();
    console.log("value", value);
    if (value) {
      this.currentTimeForecast =
        appDtos.convertWeatherForecastApiToDayWeatherEntity(value);
      this.services.api.success("loadCurrentForecastData");
    } else {
      this.services.api.error(
        "loadCurrentForecastData",
        "ошибка, надо пробросить ниже из аксиоса"
      );
    }
  }
}

export const observableWeatherForecastStore = new WeatherStore();
