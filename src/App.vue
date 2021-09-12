<template>
  <v-app>
    <v-container>
      <weather-item :weather-info="weatherInfo"></weather-item>
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
      weatherInfo: {
        statusImage: weatherStatus.good,
        temperature: 20,
        country: "Antananarivo",
        date: "Friday, 6 September",
      },
    };
  },
};
</script>
