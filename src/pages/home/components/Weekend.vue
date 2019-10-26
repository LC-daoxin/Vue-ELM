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
  data () {
    return {
      WeekendList: [{
        id: '0001',
        imgUrl: require('@img/weekend1.jpg'),
        title: '三峡人家',
        desc: '感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的描绘三峡，赶紧领略三峡的壮美吧！'
      }, {
        id: '0002',
        imgUrl: require('@img/weekend2.jpg'),
        title: '鄂西旅游圈',
        desc: '感受鄂西旖旎风光，土苗民族淳朴风情,恩施大峡谷里的一山有四季，十里不同天的奇观'
      }, {
        id: '0003',
        imgUrl: require('@img/weekend3.jpg'),
        title: '追溯山水',
        desc: '美得令人窒息的峡谷，这里的景观雄奇秀美'
      }]
    }
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
