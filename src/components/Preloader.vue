<template>
  <div class="preloader">
    <div class="preloader__circle"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.preloader {
  position: relative;
  background: #fff;
  z-index: 1000;
  margin: 40px 0;
}

.preloader__circle {
  position: relative;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px dashed #bee9fd;
  text-align: center;
  animation: preloader-rotate 2s infinite linear;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>