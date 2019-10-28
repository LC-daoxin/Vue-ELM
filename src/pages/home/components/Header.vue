<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont search-icon">&#xe62f;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont city-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';
  .header{
    display: flex;
    height: $headerHeight;
    line-height: $headerHeight;
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
      color: #fff;
      .city-icon{
        font-size: .22rem;
        margin-left: .04rem;
      }
    }
  }
</style>
