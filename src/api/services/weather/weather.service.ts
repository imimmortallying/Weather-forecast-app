import axios from "axios";
import { WeatherServiceTypes } from "./weather.types";

const queryForecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=Saint Petersburg&lang=ru&appid=7b7ff87486af257f85fe8856835fc595&units=metric&cnt=6";

const queryCurrent =
  "https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&lang=ru&appid=7b7ff87486af257f85fe8856835fc595&units=metric&";

export const WeatherService = {
  async getWeatherForecast() {
    try {
      const response = await axios.get<WeatherServiceTypes.GetForecastWeatherResponse>(queryForecast);
      // console.log("responseForecast", response.data);

      return response.data

    } catch (error) {
      console.error("error", error);
      //! прокинуть ошибку выше
    }
  },

  async getCurrentWeather() {
    try {
      const response = await axios.get(queryCurrent);
      console.log("responseCurrent", response.data);

      return response.data

    } catch (error) {
      console.error("error", error);
    }
  },
};

