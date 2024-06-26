import { Html } from "@react-three/drei";
import { useRef } from "react";
import { observableWeatherForecastStore } from "../../app/store";
import { Euler, Vector3 } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import CardWithFullDayForecast from "../CardWithFullDayForecast/CardWithFullDayForecast";
import CardWithSpecificTime from "../CardWithSpecificTime/CardWithSpecificTime";
import { StatusWraper } from "../../shared/ui/StatusWraper/StatusWraper";

const cards: Array<{ id: number; position: Vector3; rotation: Euler }> = [
  // {
  //   id: 0,
  //   position: [0, 0, 1.501],
  //   rotation: [0, 0, 0],
  // },
  {
    id: 1,
    position: [1.5001, 0, 0],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    id: 2,
    position: [0, 0, -1.5001],
    rotation: [0, -Math.PI, 0],
  },
  {
    id: 3,
    position: [-1.5001, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    id: 4,
    position: [0, 1.5001, 0],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    id: 5,
    position: [0, -1.5001, 0],
    rotation: [Math.PI / 2, 0, 0],
  },
];

function Box() {
  const ref = useRef(null);
  const { services } = observableWeatherForecastStore;

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />

      <StatusWraper
        status={services.api.getMergedStatus([
          "loadCurrentForecastData",
          "loadFullDayForecastData",
        ])}
        position={[0, 0, 1.501]}
        rotation={[0, 0, 0]}
      >
        <Html
          occlude
          distanceFactor={1.5}
          transform
          key={1}
          position={[0, 0, 1.501]}
          rotation={[0, 0, 0]}
        >
          <CardWithFullDayForecast
            forecastArray={observableWeatherForecastStore.fullDayForecast}
            currentWeather={observableWeatherForecastStore.currentTimeForecast}
            city={observableWeatherForecastStore.city}
          />
        </Html>
      </StatusWraper>

      {cards.map((card) => {
        return (
          <StatusWraper
            status={
              services.api.getState("loadFullDayForecastData").state.status
            }
            position={card.position}
            rotation={card.rotation}
            key={card.id}
          >
            <Html
              occlude
              distanceFactor={1.5}
              transform
              key={card.id}
              position={card.position}
              rotation={card.rotation}
            >
              <CardWithSpecificTime
                {...observableWeatherForecastStore.fullDayForecast[card.id]}
                city={observableWeatherForecastStore.city}
              />
            </Html>
          </StatusWraper>
        );
      })}
    </mesh>
  );
}

export default observer(Box);
