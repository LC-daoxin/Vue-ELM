<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left"><div class="iconfont header-back">&#xe624;</div></div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import "~@styles/variables.scss";
  .header{
    position: relative;
    overflow: hidden;;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    .header-back{
      width: .64rem;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
