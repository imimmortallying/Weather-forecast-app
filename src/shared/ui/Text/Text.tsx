import cls from "./Text.module.css";

interface IText {
  textValue?: number | string;
  unitSign?: string;
  className?: string;
  mathFloor?: boolean;
}

function Text({
  textValue,
  unitSign,
  className,
  mathFloor = true,
}: IText) {
  return (
    <div className={`${cls.Text} ${className}`}>
      {typeof textValue === "number" && mathFloor
        ? Math.floor(textValue)
        : textValue}
      {unitSign}
    </div>
  );
}

export default Text;
