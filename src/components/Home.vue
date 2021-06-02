<template>
  <div class="hello">
    <div style="display: inline-block">
      <h3>Cocina</h3>
      <LightSwitch  room="cocina"/>
    </div>
    <div style="display: inline-block">
      <h3>Sala</h3>
      <LightSwitch  room="sala"/>
    </div>
    <div style="display: inline-block">
      <h3>Comedor</h3>
      <LightSwitch  room="comedor"/>
    </div>
    <div style="display: inline-block">
      <h3>Alcoba</h3>
      <LightSwitch  room="alcoba"/>
    </div>

    <TemperatureDisplay  temperature="36" style="display: inline-block"/>
    <Curtain  duration="2000" style="display: inline-block; margin-left: 100px"/>
    <Alarm :is-hidden="this.doActuallyHideAlarm" @hideAlarm="hideAlarm"/>
  </div>
</template>

<script>
import LightSwitch from '@/components/LightSwitch.vue'
import TemperatureDisplay from "@/components/TemperatureDisplay";
import Alarm from "@/components/Alarm";
import Curtain from "@/components/Curtain";

export default {
  name: 'MainComponent',
  data() {
    return {
      doActuallyHideAlarm: false
    }
  },
  methods: {
    hideAlarm() {
      this.doActuallyHideAlarm = true
    }
  },
  components: {
    LightSwitch,
    TemperatureDisplay,
    Alarm,
    Curtain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
