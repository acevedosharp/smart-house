<template>
  <div :class="this.isInMovement ? '' : 'tappable'">
    <div class="window-composer"
         @click="slideCurtain">
      <img src="https://firebasestorage.googleapis.com/v0/b/explora-tu-carrera.appspot.com/o/smart-house%2Fwindows-logo.png?alt=media&token=e7fa5ce2-7c27-499f-9623-bbccf78b3ac9"
           width="170"
           height="150"
           class="window"
           alt="window">

      <img src="https://firebasestorage.googleapis.com/v0/b/explora-tu-carrera.appspot.com/o/smart-house%2Fred-curtain.jpg?alt=media&token=b8a7a3be-f22f-4869-b7f6-24dd6e35e728"
           width="188"
           height="150"
           ref="curtain"
           class="curtain"
           alt="curtain">
    </div>
  </div>
</template>

<script>
import { toggleCurtain } from "@/requests";
export default {
  name: "Curtain",
  props: {
    duration: {
      required: true
    }
  },
  data() {
    return {
      singleStepDuration: 10,
      isInMovement: false,
      isOpen: false
    }
  },
  methods: {
    slideCurtain() {
      if (!this.isInMovement) {
        const curtain = this.$refs.curtain

        this.singleStepDuration = Math.floor(this.duration / 188)
        this.isInMovement = true

        const style = window.getComputedStyle(curtain)
        const targetDirection = this.isOpen ? 'left' : 'right'
        this.doSlide(curtain, targetDirection, parseInt(style.left))
        console.log('after doSlide')
        toggleCurtain()
      }
    },
    doSlide(curtain, direction, currX) {
      if ((direction === 'right' && currX < 188) || (direction === 'left' && currX > 0)) {
        const newX = direction === 'right' ? currX+1 : currX-1
        curtain.style.left = `${newX}px`
        setTimeout(() => this.doSlide(curtain, direction, newX), this.singleStepDuration)
      } else {
        this.isInMovement = false
        this.isOpen = direction === 'right';
        console.log('end of movement')
      }
    }
  }
}
</script>

<style scoped>
.window {
  position: relative;
  left: 0;
  top: 0;
}

.curtain {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.window-composer {
  position: relative;
  width: 188px;
  height: 150px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.tappable {
  cursor: pointer;
}
</style>