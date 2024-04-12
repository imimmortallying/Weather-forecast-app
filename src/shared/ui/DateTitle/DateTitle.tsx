import cls from "./DateTitle.module.css";

interface IDateTitle {
  date: string;
  className?:string
}

function DateTitle({ date, className }: IDateTitle) {
  const dateFormated = date.split(" ")[1].split(":").slice(0, -1).join(":");
  return <div className={`${cls.dateTitle} ${className}`}>{dateFormated}</div>;
}

export default DateTitle;
