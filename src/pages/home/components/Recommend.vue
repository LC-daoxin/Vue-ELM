<template>
  <div class="">
    <div class="recommend-title">热销推荐</div>
    <ul class="recommend-ul">
      <router-link
        tag="li"
        class="item"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-ifo">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="item-bottom">
            <button class="item-button">查看详情</button>
            <p class="item-addr">{{item.address}}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "~@styles/mixins.scss";
  .recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #f5f5f5;
    text-indent: .2rem;
  }
  .recommend-ul{
    margin-left: .2rem;
    .item{
      padding: .2rem 0;
      overflow: hidden;
      display: flex;
      height: 2rem;
      border-bottom: 1px solid #eee;
      .item-img{
        width: 2rem;
        height: 2rem;
      }
      .item-ifo{
        flex: 1;
        padding-left: .2rem;
        min-width: 0;
        .item-title{
          line-height: .54rem;
          margin-top: .24rem;
          font-size: .36rem;
          @include ellipsis;
        }
        .item-desc{
          line-height: .4rem;
          color: #ccc;
          @include ellipsis;
        }
        .item-bottom{
          position: relative;
          height: .82rem;
          line-height: .82rem;
          .item-button{
            position: absolute;
            left: 0;
            line-height: .44rem;
            margin-top: .2rem;
            background:  #ff9300;
            padding:  0 .2rem;
            border-radius: .1rem;
            color: #fff;
          }
          .item-addr{
            position: absolute;
            right: .24rem;
            font-size: .2rem;
            color: #ccc;
          }
        }
      }
    }
  }
</style>
