<template>
  <section class="marketopt">
    <span @click="changeMarket(index)" class="switch-item" :class="{'switch-item-active': markettab===index}" v-for="(item,index) in marketlist" :key="index">{{item}}</span>
  </section>
</template>
<script>

export default {
  data () {
    return {
      markettab: 0,
      marketlist: [
        '永新广场',
        '财富大厦',
        '平安总部'
      ]
    }
  },
  methods: {
    changeMarket: function (index) {
      if (this.markettab === index) {

      } else {
        this.markettab = index
        this.$store.commit('Market/changeMarket')
        this.$store.commit('Process/addWeek')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.marketopt {
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  .switch-item {
    color: #fff;
    border: 1px solid #333;
    background: #2f8486;
    line-height: 2.4rem;
    width: 26%;
    text-align: center;
    cursor: pointer;
    &-active {
      opacity: 0.5;
    }
  }

}
</style>
