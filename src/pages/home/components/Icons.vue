<template>
  <div class="icons">
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [{
        id: '0001',
        imgUrl: require('@img/icons1.png'),
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: require('@img/icons2.png'),
        desc: '故宫'
      }, {
        id: '0003',
        imgUrl: require('@img/icons3.png'),
        desc: '北京必游'
      }, {
        id: '0004',
        imgUrl: require('@img/icons4.png'),
        desc: '香山公园'
      }, {
        id: '0005',
        imgUrl: require('@img/icons5.png'),
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: require('@img/icons6.png'),
        desc: '古北水镇'
      }, {
        id: '0007',
        imgUrl: require('@img/icons7.png'),
        desc: '欢乐谷万圣节'
      }, {
        id: '0008',
        imgUrl: require('@img/icons8.png'),
        desc: '赏红叶'
      }, {
        id: '0009',
        imgUrl: require('@img/icons9.png'),
        desc: '泡温泉'
      }, {
        id: '0010',
        imgUrl: require('@img/icons10.png'),
        desc: '优惠券 '
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';
  @import '~@styles/mixins.scss';
  .icons{
    margin-top: .1rem;
    >>> .swiper-container{
      height: 0;
      padding-bottom: 50%;
    }
    .icon{
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content{
          display: block;
          height: 100%;
          margin: 0 auto;
        }
      }
      .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        height: .44rem;
        line-height: .44rem;
        color: $darkTextColor;
        @include ellipsis;
      }
    }
  }
</style>
