<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper class="swiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commongallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: false,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container >>> .swiper-container{
    overflow: inherit;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .swiper{
        height: 100vw;
        .gallery-img{
          width: 100%;
          position: relative;
          top: 50vw;
          transform: translateY(-50%);
        }
      }
    }
    .swiper-pagination{
      color: #fff;
      bottom: -.5rem;
      z-index: 100;
    }
  }
</style>
