import Text from "../../shared/Text/Text";
import cls from "./WeatherDetail.module.css";

interface IWeatherDetailProps {
  iconPath: string;
  amount: number;
  unitSign: string;
}

function WeatherDetail({ iconPath, amount, unitSign }: IWeatherDetailProps) {
  return (
    <div className={cls.detail}>
      <img className={cls.image} src={iconPath}></img>
      <Text
        textValue={amount}
        unitSign={unitSign}
        className={cls.amount}
        mathFloor={false}
      />
      <Text textValue="Скорость ветра" />
    </div>
  );
}

export default WeatherDetail;
