<template>
  <div class="">
    <div class="weekend-title">周末去哪儿</div>
    <ul class="weekend-ul">
      <li class="item" v-for="item of WeekendList" :key="item.id">
        <div class="item-imgbody">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-ifo">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    WeekendList: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "~@styles/mixins.scss";
  .weekend-title{
    line-height: .8rem;
    background: #f5f5f5;
    text-indent: .2rem;
  }
  .weekend-ul{
    background: #fff;
    .item{
      overflow: hidden;
      margin-bottom: .06rem;
      .item-imgbody{
        height: 0;
        padding-bottom: 36.64%;
        .item-img{
          width: 100%;
        }
      }
      .item-ifo{
        padding-left: .2rem;
        padding-right: .4rem;
        margin-bottom: .12rem;
        .item-title{
          line-height: .44rem;
          margin-top: .14rem;
          font-size: .3rem;
          @include ellipsis;
        }
        .item-desc{
          line-height: .4rem;
          color: #616161;
          font-size: .2rem;
          @include ellipsis;
        }
      }
    }
  }
</style>
