<template>
  <div>
    <img width="133" height="168"
         :src="imageSource"
         :alt="isOn ? 'on' : 'off'"
         style="display: inline-block; margin-right: 10px">
    <div class="switch-container">
      <div class="switch-rail" @click="toggleLight">
        <div class="switch-button" :class="isOn ? 'button-on' : 'button-off'" />
      </div>
      <div class="moving-part"></div>
    </div>
  </div>
</template>

<script>
import { toggleLight } from "@/requests";
export default {
  name: "LightSwitch",
  data() {
    return {
      isOn: false,
      imageUrls: {
        'off': 'https://firebasestorage.googleapis.com/v0/b/explora-tu-carrera.appspot.com/o/smart-house%2Flight-bulb-off.png?alt=media&token=e20e1d8f-6f32-4c08-95b3-4dbc4fa3909e',
        'on': 'https://firebasestorage.googleapis.com/v0/b/explora-tu-carrera.appspot.com/o/smart-house%2Flight-bulb-on.png?alt=media&token=7d524ec3-04d3-4951-bcde-3b9738e8d469'
      },
      imageSource: ''
    }
  },
  props: {
    room: {
      required: true
    }
  },
  mounted() {
    this.imageSource = this.imageUrls['off']
  },
  methods: {
    toggleLight() {
      toggleLight(this.room)
      if (this.isOn) {
        this.isOn = false
        this.imageSource = this.imageUrls['off']
      } else {
        this.isOn = true
        this.imageSource = this.imageUrls['on']
      }
    }
  }
}
</script>

<style scoped>
.switch-container {
  width: 80px;
  height: 130px;
  border: 3px solid #656565;
  background-color: #e3e3e3;
  display: inline-block;
  padding: 0;
}

.switch-rail {
  width: 50px;
  height: 100px;
  margin: 12px 12px;
  border: 3px solid #656565;
  background-color: #9c9c9c;
  cursor: pointer;
}

.switch-button {
  width: 46px;
  height: 46px;
  margin: 0;
}

.button-on {
  border: 2px solid #6fa17e;
  background-color: #8dc182;
}

.button-off {
  border: 2px solid #a16f6f;
  background-color: #c18282;
  margin-top: 50px;
}
</style>