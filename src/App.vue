<template>
  <v-app>
    <v-container>
      <div>
        <weather-item
          v-for="(weatherInfo, index) in weathersInfo"
          :weather-info="weatherInfo"
          :key="index"
        ></weather-item>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import WeatherItem from "@/components/WeatherItem";
import { weatherStatus } from "@/utils/images";
export default {
  name: "App",
  components: { WeatherItem },
  data() {
    return {
      weathersInfo: [
        {
          statusImage: weatherStatus.good,
          temperature: 20,
          country: "Antananarivo",
          date: "Friday, 6 September",
        },
        {
          statusImage: weatherStatus.good,
          temperature: 10,
          country: "Antananarivo",
          date: "Monday, 10 September",
        },
        {
          statusImage: weatherStatus.good,
          temperature: 5,
          country: "Antananarivo",
          date: "Tuesday, 10 September",
        },
      ],
    };
  },
};
</script>
