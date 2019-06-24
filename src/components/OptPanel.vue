<template>
  <!-- 医院 -->
  <section class="optpanel" >
    <div class="place-box" v-if="panelType==='hos'">
      <div class="place-left">
        <div class="place-icon">
          +
        </div>
        <div class="place-label">医院</div>
      </div>
      <div class="place-right">
        <div class="place-main">
          <div >{{hospitalWord}}</div>
        </div>
        <div class="place-btns">
          <span @click="cure" class="btn btn-normal">看病</span>
          <span @click="leavePlace" class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>
    <!-- 仓库 -->
    <div class="place-box" v-if="panelType==='ware'">
      <div class="place-left">
        <div class="place-icon">
          仓
        </div>
        <div class="place-label">中介</div>
      </div>
      <div class="place-right">
        <div class="place-main">
          <div >增加 <input type="number" v-model.number="wareNum" style="width:4rem" /> 个出租屋空间</div>
          <div>共需要花费{{wareNum}}万元</div>
        </div>
        <div class="place-btns">
          <span @click="addWare" class="btn btn-normal">成交</span>
          <span @click="leavePlace" class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>

    <!-- 银行 -->
    <div class="place-box" v-if="panelType==='bank'">
      <div class="place-left">
        <div class="place-icon">
          $
        </div>
        <div class="place-label">银行</div>
      </div>
      <div class="place-right">
        <div class="place-main">
          <div >请选择您要办理的业务</div>
        </div>
        <div class="place-btns">
          <span @click="deposit('in')" class="btn btn-normal">存钱</span>
          <span @click="deposit('out')" class="btn btn-normal">取钱</span>
          <span @click="leavePlace" class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>

    <div class="trade-box" v-if="panelType==='buy'">
      <div class="trade-box-form">
        <span class="trade-prod">进口奶粉</span>
        <input class="trade-txt" type="number"  /> 个
        <span class="btn btn-normal trade-btn">买入</span>
      </div>
      <div class="trade-box-tip">
        <p>您最多可以购买<span class="c-red f-14">3</span>个进口奶粉。</p>
        <p>市场参考价格：<span class="f-weight">300 ~ 600</span></p>
      </div>
    </div>

    <div class="trade-box" v-if="panelType==='sell'">
      <div class="trade-box-form">
        <span class="trade-prod">进口奶粉</span>
        <input class="trade-txt" type="number"  /> 个
        <span class="btn btn-normal trade-btn">卖出</span>
      </div>
      <div class="trade-box-tip">
        <p>卖出可盈利 <span class="f-14 f-weight">10000</span></p>
      </div>
    </div>

  </section>

  
</template>
<script>
import { mapState, mapGetters } from 'vuex'


export default {
  data:function(){
    return {
      wareNum:0
    }
  },
  computed: {
    ...mapState('Platform', [
      'panelType'
    ]),
    hospitalWord:function(){
      let _health = this.$store.state.User.health;
      let _total = this.$store.getters["User/totalAccount"];
      if(_health === 100){
        return '身体好好的来医院干啥，赶紧干正事儿去吧。';
      }else{
        let _totalFee = (100 - _health) * 5000;
        if(_totalFee > _total){
          return `看病需要花费${_totalFee}元，你没有足够的钱看病！`;
        }else{
          return `看病需要花费${_totalFee}元，确定要看病吗？`;
        }
        
      }
    }
    
  },
  methods: {
    leavePlace:function(){
      this.$store.commit('Platform/changePanelType', '0')
    },
    cure:function(){
      let _total = this.$store.getters["User/totalAccount"];
      let _health = this.$store.state.User.health;
      let _totalFee = (100 - _health) * 5000;
      if(_totalFee <= _total){
        this.$store.commit('User/consume', _totalFee);
        this.$store.commit('User/cure');
        this.leavePlace();
      }
      
    },
    deposit: function(type){
      this.$store.commit('User/depositInOut',type);
      this.leavePlace();
    },
    addWare: function(){
      let _total = this.$store.getters["User/totalAccount"];
      let expandVal = Number(this.wareNum);
      let _totalFee = expandVal * 10000;
      console.log(_totalFee);
      if(_totalFee <= _total) {
        this.$store.commit('User/consume',_totalFee);
        this.$store.commit('User/expandWare',expandVal);
        this.leavePlace();
      }
    }
    
  }
}
</script>

<style lang="less" scoped>
.optpanel{
  border:2px solid #333;
  background: #ebea93;
  padding: 0.3rem 1rem;
  height: 8rem;
  .place-box{
    display: flex;
    .place-left{
      flex-basis: 6rem;
      .place-icon{
        border: 2px dashed #f00;
        border-radius: 100%;
        height: 3.2rem;
        width: 3.2rem;
        margin:1rem auto 0.5rem;
        line-height: 3.2rem;
        font-size: 3.2rem;
        color:#f00;
        font-weight: bold;
      }
      .place-label{
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2rem;
        color:#f00;
      }

    }
    .place-right{
      margin-left:1rem;
      flex-grow: 1;
      padding-top:0.3rem;
      .place-main{
        font-size: 1.4rem;
        color:#444;
        line-height: 1.6;
        text-align: left;
        text-indent:2rem;
        min-height: 4.6rem;
      }
      .place-btns{
        display: flex;
        padding: 0 2rem;
        justify-content:space-around;
        
      }
    }
  }

  .trade-box{
    padding: 1rem 0 0 0;
    .trade-box-form{
      line-height: 2rem;
      font-size: 1.4rem;
      color:#333;
      margin-bottom: 1rem;
    }
    .trade-box-tip{
      font-size: 1.2rem;
      line-height: 1.5;
      color:#454545;
      text-align: center;
    }
    .trade-prod{
      background: #60ab00;
      color:#fff;
      padding: 0.3rem 0.6rem;
      border:1px solid #333;
      margin-right: 0.4rem;
    }
    .trade-txt{
      width: 6rem;
      border:none;
      padding: 0.4rem;
      font-size: 1.2rem;
      vertical-align: bottom;
      border-radius: 0.3rem;
    }
    .trade-btn{
      margin-left: 1rem;
    
    }
  }

}
</style>
