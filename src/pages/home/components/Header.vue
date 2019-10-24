<template>
  <div class="header">
    <div class="header-left">1</div>
    <div class="header-input">2</div>
    <div class="header-right">3</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    height: .86rem;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
    }
    .header-input{
      flex: 1;
      margin-top: .12rem;
      height: .64rem;
      line-height: .64rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    .header-right{
      width: 1.24rem;
      float: right;
      text-align: center;
    }
  }
</style>
