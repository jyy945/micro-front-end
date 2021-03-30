<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/desc">desc</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped lang="scss">
  .text{
    color: red;
  }
</style>