<template>
  <div>
    <div class="alert-container" v-if="!isHidden">
      <p class="alert-text">Alarma activada</p>
      <button class="close-button" @click="hide">x</button>
    </div>
  </div>
</template>

<script>
import { queryAlarmStatus } from "@/requests";
export default {
  name: "Alarm",
  props: {
    isHidden: {
      required: true
    }
  },
  mounted() {
    setInterval(() => {
      queryAlarmStatus()
    }, 3000)
  },
  methods: {
    hide() {
      this.$emit('hideAlarm')
    }
  }
}
</script>

<style scoped>
.alert-container {
  width: 300px;
  height: 120px;
  background-color: indianred;
  color: white;
  position: relative;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #970000;
  border: none;
  background-color: rgba(255, 255, 255, 0.0);
}

.close-button:hover {
  color: #7b0000;
  cursor: pointer;
}

.alert-text {
  font-size: 36px;
  margin-top: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 120px;
  font-family: 'Roboto', sans-serif;
}

.hidden {
  display: none;
}
</style>