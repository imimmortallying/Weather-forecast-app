import { Html } from "@react-three/drei";
import { SharedTypes } from "../types";
import cls from "./StatusWraper.module.css";
import { Euler, Vector3 } from "@react-three/fiber";

interface StatusWraperProps {
  status: SharedTypes.Status;
  children: React.ReactNode;
  position: Vector3;
  rotation: Euler;
}

export const StatusWraper = ({ status, children, position, rotation }: StatusWraperProps) => {
  if (status === "loading") {
    return (
      <Html
        occlude
        distanceFactor={1.5}
        transform
        key={1}
        position={position}
        rotation={rotation}
      >
        <span className={cls.fallback}>Загрузка</span>
      </Html>
    );
  }

  if (status === "error") {
    return (
      <Html
        occlude
        distanceFactor={1.5}
        transform
        key={1}
        position={position}
        rotation={rotation}
      >
        <span className={cls.fallback}>Ошибка</span>
      </Html>
    );
  }

  return <>{children}</>;
};
