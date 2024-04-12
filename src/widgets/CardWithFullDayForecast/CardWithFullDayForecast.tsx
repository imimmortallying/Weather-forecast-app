import cls from "./CardWithFullDayForecast.module.css";
import type { ICurrentDayWeather, IDayWeather } from "../../shared/types";
import DateTitle from "../../shared/DateTitle/DateTitle";
import WeatherIcon from "../../shared/WeatherIcon/WeatherIcon";
import Text from "../../shared/Text/Text";

interface ICardWithFullForecastProps {
  className?: string;
  forecastArray: IDayWeather[];
  currentWeather: ICurrentDayWeather;
}

function CardWithFullDayForecast({ forecastArray, currentWeather }: ICardWithFullForecastProps) {
  return (
    <div className={cls.Card}>
      <div className={cls.container}>
        <div className={cls.main}>
          <Text textValue={currentWeather.city} className={cls.cityName} />
          <Text
            textValue={currentWeather.temp}
            unitSign="°c"
            className={cls.temperatureTitle}
          />
          <Text textValue="Прогноз на сегодня" className={cls.description} />
          <div className={cls.forecast}>
            {forecastArray.map((day) => {
              return (
                <div className={cls.forecastColl}>
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
