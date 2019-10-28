<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@styles/variables.scss";
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: .4rem;
    .item{
      line-height: .4rem;
      text-align: center;
      color: $bgColor;
    }
  }
</style>
