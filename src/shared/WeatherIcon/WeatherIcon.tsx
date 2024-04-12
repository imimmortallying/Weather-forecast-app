import cls from "./WeatherIcon.module.css";

interface IWeatherIcon {
    src: string,
    className?: string
}

function WeatherIcon({src, className}:IWeatherIcon) {
  return (
    <img
    className={`${cls.icon} ${className}`}
    src={`https://openweathermap.org/img/wn/${src}@2x.png`}
  ></img>
  );
}

export default WeatherIcon
