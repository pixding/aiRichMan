<template>
  <section class="marketBox">
    <h3 class="title">市场</h3>
    <dl class="market-dl market-header">
      <dt>货物</dt>
      <dd>价格</dd>
    </dl>
    <dl @click="buyProduct(product)" class="market-dl market-con" v-for="(product, index) in marketProducts" :key="index">
      <dt><span>{{product.name}}</span></dt>
      <dd>{{product.price}}</dd>
    </dl>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  created: function () {
    this.$store.commit('Market/changeMarket')
  },
  computed: {
    ...mapState('Market', [
      'marketProducts'
    ]),
    ...mapState('User', [
      'cash'
    ])
  },
  methods: {
    buyProduct: function (product) {
      this.$store.commit('Platform/changePanelType', 'buy')
      return;
      let buyProduct = {...product}
      let num = ~~(this.cash / buyProduct.price)
      buyProduct.num = num
      let totalMoney = buyProduct.price * buyProduct.num
      if (num <= 0) {
        alert('钱不够了')
        return
      }
      this.$store.commit('Wares/increaseProducts', buyProduct)
      this.$store.commit('User/modifyCash', -totalMoney)
    }
  }
}
</script>
<style lang="less" scoped>
.marketBox{
  background: #BCE496;
  padding: 0.5rem;
  .title{
    text-align: center;
    color:#fff;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
    background: #95a021;
  }
  .market-dl{
    display: flex;
    align-items: center;
    dt{
      flex-grow: 1;
    }
    dd{
      flex-basis: 4rem;
    }
  }
  .market-header{
    color:#fff;
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
  .market-con{
    color:#fff;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom:0.4rem;
    dt{
      span{
        border:1px solid #5f7449;
        color:#fff;
        padding:0 0.7rem;
        min-width: 5rem;
        display: inline-block;
        background: #848f12;
      }
    }
    dd{
      font-size:1.5rem;
      font-family: 'sans-serif';
      color:#222;
    }
  }

}
</style>
