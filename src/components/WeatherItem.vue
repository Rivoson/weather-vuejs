<template>
  <v-card
    :color="color"
    dark
    max-width="450"
    height="110"
    elevation="5"
    class="rounded-lg"
  >
    <div class="d-flex fill-height pa-4 justify-space-between">
      <div class="d-flex">
        <div class="text-h3 font-weight-light align-self-end d-flex">
          <span>{{ weatherInfo.temperature }}</span>
          <span class="text-h5">º</span>
        </div>
        <div class="align-self-end caption ml-2">
          {{ weatherInfo.date }}
          <div>{{ weatherInfo.country }}</div>
        </div>
      </div>
      <div class="d-flex">
        <v-img
          :src="weatherInfo.statusImage"
          width="90"
          height="90"
          class="align-self-center"
        ></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
import { background } from "@/utils/images";

export default {
  name: "WeatherItem",
  props: {
    weatherInfo: {
      required: true,
      statusImage: String,
      temperature: Number,
      country: String,
      date: String,
    },
  },
  data() {
    return {
      good: background.goodTime,
    };
  },
  computed: {
    color() {
      const temperature = this.weatherInfo.temperature;
      if (temperature < 10) return "weatherRain";
      if (temperature >= 10 && temperature < 20) return "weatherWind";
      return "weatherSunny";
    },
  },
};
</script>

<style scoped></style>
