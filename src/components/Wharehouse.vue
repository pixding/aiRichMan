<template>
  <section class="wareBox">
    <div class="title">
      <span>出租屋</span>
      <span>{{warehouseNum - totalProductsNum}}/{{warehouseNum}}</span>
    </div>
    <dl class="market-dl market-header">
      <dt>货物</dt>
      <dd>价格</dd>
      <dd>数量</dd>
    </dl>
    <dl @click="sellProduct(item)" class="market-dl market-con" v-for="(item) in products" :key="item.pid">
      <dt><span>{{item.name}}</span></dt>
      <dd>{{item.price}}</dd>
      <dd>{{item.num}}</dd>
    </dl>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('Wares', [
      'products'
    ]),
    ...mapState('User',[
      'warehouseNum'
    ]),
    totalProductsNum:function(){
      let totalNum = 0;
      this.products.forEach(element => {
        totalNum += element.num;
      });
      return totalNum;
    }
  },
  methods: {
    sellProduct: function (product) {
      this.$store.commit('Platform/changePanelType', 'sell')
      return;

      let plist = this.$store.state.Market.marketProducts
      let pindex = plist.findIndex(function (item) {
        return item.pid === product.pid
      })
      let totalMoney = 0
      if (~pindex) {
        totalMoney = plist[pindex].price * product.num

        this.$store.commit('Wares/removeProducts', plist[pindex].pid)
        this.$store.commit('User/modifyCash', totalMoney)
      } else {
        alert('无法出售')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wareBox{
  background: #d8da5f;
  padding: 0.5rem;
  .title{
    display: flex;
    justify-content: space-around;
    span{
      padding: 0.5rem 0.5rem;
      background: #ce3100;
      color:#fff;
      font-size: 1.5rem;
    }
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
        background: #ac5722
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
