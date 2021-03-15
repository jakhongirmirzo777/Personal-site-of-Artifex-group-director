<template>
  <div>
    <Nuxt />
    <Scroll />
  </div>
</template>

<script>
import Scroll from '~/components/Scroll'
export default {
  components: {
    Scroll,
  },
}
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
