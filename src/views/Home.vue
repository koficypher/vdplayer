<template>
  <div class="flex flex-col">
    <img
      class="object-none object-center"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your ElectroVue App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
