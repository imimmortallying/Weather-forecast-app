import { injectStores } from "@mobx-devtools/tools";
import { observableWeatherForecastStore } from "./weatherStore";

injectStores({
    observableWeatherForecastStore
})

export {observableWeatherForecastStore}