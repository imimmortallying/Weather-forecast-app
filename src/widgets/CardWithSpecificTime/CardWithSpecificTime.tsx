import cls from "./CardWithSpecificTime.module.css";
import WindSvg from "../../shared/assets/wind-speed.svg";
import HumiditySvg from "../../shared/assets/humidity.svg";
import type { SharedTypes } from "../../shared/types";
import WeatherDetail from "../../entities/WeatherDetail/WeatherDetail";
import DateTitle from "../../shared/DateTitle/DateTitle";
import WeatherIcon from "../../shared/WeatherIcon/WeatherIcon";
import Text from "../../shared/Text/Text";

interface ICardWithSpecificTimeProps extends SharedTypes.DayWeatherEntity {
  className?: string;
  city:string
}

function CardWithSpecificTime({
  date, temp, humidity, wind, description, icon, city
}: ICardWithSpecificTimeProps) {
  return (
    <div className={cls.Card}>
      <div className={cls.container}>
        <div className={cls.main}>
          <DateTitle date={date} className={cls.dateTitle} />
          <Text textValue={city} className={cls.cityName} />
          <Text
            textValue={temp}
            unitSign="°c"
            className={cls.temperatureTitle}
          />
          <Text textValue={description} className={cls.description} />
          <WeatherIcon src={icon} className={cls.weatherIcon} />
        </div>
        <div className={cls.details}>
          <WeatherDetail
            amount={humidity}
            iconPath={HumiditySvg}
            unitSign="%"
          />
          <WeatherDetail amount={wind} iconPath={WindSvg} unitSign="км/ч" />
        </div>
      </div>
    </div>
  );
}

export default CardWithSpecificTime;
