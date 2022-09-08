<template>
  <div class="wrapper-person">
    <div v-if="item">
        <img :src="item.img" :alt="item.descr">
        <h1 class="title" style="color: #fff">{{item.title}}</h1>
        <p>{{item.descr}}</p>
        <CardStats :item-info="item.info"/>
        <div>
            <router-link to="/" class="btn btnPrimary">Back to home</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import CardStats from '@/components/UI/CardStats'
import NotFound from './notFound.vue'

export default {
    components: {
        CardStats,
        NotFound
    },
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    if (!item) {
      this.$router.push('/404')
    }
    this.item = item
  }
}
</script>

<style lang="scss">
.wrapper-person{
    text-align: center;
    .card-stats {
        margin: 30px 0;
        border-radius: 14px;
    }
}
</style>