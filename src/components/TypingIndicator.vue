<template>
  <div class="typing-indicator">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "typingIndicator"
};
</script>

<style lang="scss" scoped>
.typing-indicator {
  background-color: #f6f7f9;
  will-change: transform;
  width: 60px;
  border-radius: 50px;
  padding: 10px;
  margin: 20px 0;
  display: flex;

  span {
    height: 10px;
    width: 10px;
    margin: 0 1px;
    background-color: #9e9ea1;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    @for $i from 1 through 3 {
      &:nth-of-type(#{$i}) {
        animation: 1s blink ($i * 0.3333s) infinite;
      }
    }
  }
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}
</style>
