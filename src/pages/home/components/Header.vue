<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont search-icon">&#xe62f;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont city-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .header{
    display: flex;
    height: .86rem;
    line-height: .86rem;
    background: $bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .4rem;
      }
    }
    .header-input{
      flex: 1;
      margin-top: .12rem;
      height: .64rem;
      padding-left: .3rem;
      line-height: .64rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
      .search-icon{
        margin-right: .1rem;
      }
    }
    .header-right{
      width: 1.24rem;
      float: right;
      text-align: center;
      .city-icon{
        font-size: .22rem;
        margin-left: .04rem;
      }
    }
  }
</style>
