<template>
    <div id="app" ref="app">
    </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    components: {
      'slider' : Slider
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .icon {
    &:hover {
      cursor: pointer;
    }
  }
</style>
 