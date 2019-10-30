<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs "
    >
      <div class="iconfont back-icon header-abs-icon">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="header-left"><div class="iconfont header-fixed-back">&#xe624;</div></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScorll () {
      let top = document.documentElement.scrollTop
      if (top > 5) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScorll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScorll)
  }
}
</script>

<style lang="scss" scoped>
  @import "~@styles/variables.scss";
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .8);
    .header-abs-icon{
      color: #fff;
      font-size: .4rem
    }
  }
  .header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    .header-fixed-back{
      width: .64rem;
      text-align: center;
      position: absolute;
      top: 0;
      left: .3rem;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
