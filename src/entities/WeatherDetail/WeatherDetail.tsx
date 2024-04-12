import Text from "../../shared/ui/Text/Text";
import cls from "./WeatherDetail.module.css";

interface IWeatherDetailProps {
  iconPath: string;
  amount: number;
  unitSign: string;
  textValue: string;
}

function WeatherDetail({ iconPath, amount, unitSign, textValue }: IWeatherDetailProps) {
  return (
    <div className={cls.detail}>
      <img className={cls.image} src={iconPath}></img>
      <Text
        textValue={amount}
        unitSign={unitSign}
        className={cls.amount}
        mathFloor={false}
      />
      <Text textValue={textValue} />
    </div>
  );
}

export default WeatherDetail;
