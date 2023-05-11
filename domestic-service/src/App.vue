<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
      <div>
        <!-- <el-button type="primary">Primary</el-button> -->
        <router-view></router-view>
      </div>
      <HelloWorld/>
  </div>
  
  
</template>

<style lang="scss" scoped>

</style>
