<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '学生三馆联票'
        }, {
          title: '学生五馆联票'
        }]
      }, {
        title: '儿童票',
        children: [{
          title: '儿童三馆联票'
        }, {
          title: '儿童五馆联票'
        }]
      }, {
        title: '家庭票',
        children: [{
          title: '家庭三馆联票'
        }, {
          title: '家庭五馆联票'
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    height: 50rem;
  }
</style>
