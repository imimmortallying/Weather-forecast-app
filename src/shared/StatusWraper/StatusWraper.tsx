import { Html } from "@react-three/drei";
import { SharedTypes } from "../types";

interface StatusWraperProps {
  status: SharedTypes.Status;
  children: React.ReactNode;
}

export const StatusWraper = ({ status, children }: StatusWraperProps) => {
  if (status === "loading") {
    return (
      <Html occlude distanceFactor={1.5}>
        <span>Загрузка</span>
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
        position={[0, 0, 1.501]}
        rotation={[0, 0, 0]}
      >
        <span>Ошибка</span>
      </Html>
    );
  }

  return <>{children}</>;
};
