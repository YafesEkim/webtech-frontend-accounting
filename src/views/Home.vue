<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/YMLogo.png">
    <HelloWorld msg="Hello World"/>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
