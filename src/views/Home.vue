<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calculation />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculation from '@/components/Calculation.vue'

export default {
  name: 'Home',
  components: {
    Calculation
  }
}
</script>
