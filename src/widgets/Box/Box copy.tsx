import { Html } from "@react-three/drei";
import { useRef } from "react";
import { observableWeatherForecastStore } from "../../store";
import { Euler, Vector3 } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import { appDtos } from "../../App.dto";
import CardWithFullDayForecast from "../CardWithFullDayForecast/CardWithFullDayForecast";
import CardWithSpecificTime from "../CardWithSpecificTime/CardWithSpecificTime";

const cards = [
  // {
  //   id: 0,
  //   position: [0, 0, 1.501] as Vector3,
  //   rotation: [0, 0, 0] as Euler,
  // },
  {
    id: 1,
    position: [1.5001, 0, 0] as Vector3,
    rotation: [0, Math.PI / 2, 0] as Euler,
  },
  {
    id: 2,
    position: [0, 0, -1.5001] as Vector3,
    rotation: [0, -Math.PI, 0] as Euler,
  },
  {
    id: 3,
    position: [-1.5001, 0, 0] as Vector3,
    rotation: [0, -Math.PI / 2, 0] as Euler,
  },
  {
    id: 4,
    position: [0, 1.5001, 0] as Vector3,
    rotation: [-Math.PI / 2, 0, 0] as Euler,
  },
  {
    id: 5,
    position: [0, -1.5001, 0] as Vector3,
    rotation: [Math.PI / 2, 0, 0] as Euler,
  },
];

function Box() {
  const ref = useRef(null);
  console.log('box render')
  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />

      {/* ОПИСАНИЕ */}
      {/* Куб имеет 6 граней. Первая показывает прогноз погоды на сегодня в разные промежутки времени */}
      {/* Остальные 5 граней показывают прогноз на каждый конкретный промежуток времени */}
      {/* По заданию было необходимо отобразить прогноз погоды на разные дни, но т.к. API сервиса погоды не позволяет получить нужные данные в бесплатном режиме, я отобразил прогноз погоды на текущий день в разные промежутки времени */}

      {/* card with full day forecast */}
      {observableWeatherForecastStore.forecastValue.list.length > 0 ? (
        <Html
          occlude
          distanceFactor={1.5}
          transform
          key={1}
          position={[0, 0, 1.501]}
          rotation={[0, 0, 0]}
        >
          <CardWithFullDayForecast
            forecastArray={appDtos.convertWeatherForecastApiToMainCardProps(
              observableWeatherForecastStore.forecastValue.list,
              observableWeatherForecastStore.forecastValue.city
            )}
            currentWeather={appDtos.convertCurrentWeatherApiToMainCardProps(
              observableWeatherForecastStore.currentWeatherValue
            )}
          />
        </Html>
      ) : (
        <Html occlude distanceFactor={1.5}>
          <span>Загрузка</span>
        </Html>
      )}
      {/* cards with specific day forecast */}
      {observableWeatherForecastStore.forecastValue.list.length > 0 ? (
        cards.map((card) => {
          return (
            <Html
              occlude
              distanceFactor={1.5}
              transform
              key={card.id}
              position={card.position}
              rotation={card.rotation}
            >
              <CardWithSpecificTime
                dayWeather={appDtos.convertWeatherForecastApiToCardsProps(
                  observableWeatherForecastStore.forecastValue.list[card.id],
                  observableWeatherForecastStore.forecastValue.city
                )}
              />
            </Html>
          );
        })
      ) : (
        <Html occlude distanceFactor={1.5}>
          <span>Загрузка</span>
        </Html>
      )}

    </mesh>
  );
}

export default observer(Box);
