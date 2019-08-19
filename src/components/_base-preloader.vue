<template>
  <transition name="fade">
    <div :class="['preload', `preload--${position}`]">
      <div class="preload__content">
        <div class="preload__dot"></div>
        <div class="preload__dot"></div>
        <div class="preload__dot"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "preloader",
  props: {
    position: {
      type: String,
      required: false,
      default: "fixed"
    }
  }
};
</script>

<style lang="scss" scoped>
.preload {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 2;

  &--fixed {
    position: fixed;
  }

  &--absolute {
    position: absolute;
  }
}

.preload__content {
  display: flex;
}

.preload__dot {
  width: 16px;
  height: 16px;
  margin: 3px;
  border-radius: 100%;
  background: black;

  @for $i from 1 through 3 {
    &:nth-of-type(#{$i}) {
      animation: 1s preloader ($i * 0.2s) infinite alternate;
    }
  }
}

@keyframes preloader {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
