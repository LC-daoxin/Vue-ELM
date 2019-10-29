<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="@img/detail1.jpg"/>
      <div class="banner-info">
        <div class="banner-title">香山公园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont search-icon banner-icon">&#xe691;</span> 25
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: ['/static/img/detail1.jpg', '/static/img/detail2.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    position: relative;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .8rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number{
        height: .32rem;
        line-height: .32rem;
        margin-top: .24rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .7);
        font-size: .24rem;
        .banner-icon{
          font-size: .24rem;
        }
      }
    }
  }
</style>
