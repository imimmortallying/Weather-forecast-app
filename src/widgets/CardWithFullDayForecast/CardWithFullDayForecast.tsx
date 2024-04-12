import cls from "./CardWithFullDayForecast.module.css";
import type { SharedTypes } from "../../shared/types";
import DateTitle from "../../shared/ui/DateTitle/DateTitle";
import WeatherIcon from "../../shared/ui/WeatherIcon/WeatherIcon";
import Text from "../../shared/ui/Text/Text";

interface ICardWithFullForecastProps {
  className?: string;
  forecastArray: SharedTypes.DayWeatherEntity[];
  currentWeather: Omit<SharedTypes.DayWeatherEntity, "date"> | null;
  city: string
}

function CardWithFullDayForecast({ forecastArray, currentWeather, city }: ICardWithFullForecastProps) {
  return (
    <div className={cls.Card}>
      <div className={cls.container}>
        <div className={cls.main}>
          <Text textValue={city} className={cls.cityName} />
          <Text
            textValue={currentWeather!.temp}
            unitSign="°c"
            className={cls.temperatureTitle}
          />
          <Text textValue="Прогноз на сегодня" className={cls.description} />
          <div className={cls.forecast}>
            {forecastArray.map((day) => {
              return (
                <div className={cls.forecastColl} key={day.date}>
                  <DateTitle date={day.date} />
                  <WeatherIcon src={day.icon} className={cls.weatherIcon} />
                  <Text textValue={day.temp} unitSign="°c" />
                  <Text textValue={day.humidity} unitSign="°c" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithFullDayForecast;
