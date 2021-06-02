<template>
<div>
  <div class="display-body">
    <div class="temperature-display">
      {{ temperature }}°C
    </div>
  </div>

</div>
</template>

<script>
import {queryTemperatureStatus} from "@/requests";

export default {
  name: "TemperatureDisplay",
  props: {
    temperature: {
      required: true
    }
  },
  mounted() {
    setInterval(() => {
      queryTemperatureStatus()
    }, 3000000)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.display-body {
  width: 250px;
  height: 100px;
  border: 3px solid black;
  background-color: #636363;
}

.temperature-display {
  font-family: 'Orbitron', sans-serif;
  font-size: 60px;
  margin: 10px;
  border: 2px solid #585858;
  color: #d42828;
  background-color: #000000;
}
</style>