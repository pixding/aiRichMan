<template>
  <!-- 医院 -->
  <section class="optpanel" >
    <div class="place-box" v-if="showPlace.type==='hos'">
      <div class="place-left">
        <div class="place-icon">
          +
        </div>
        <div class="place-label">医院</div>
      </div>
      <div class="place-right">
        <div class="place-main">
          <div >{{showPlace.data.word}}</div>
        </div>
        <div class="place-btns">
          <span class="btn btn-normal">看病</span>
          <span class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>
    <!-- 仓库 -->
    <div class="place-box" v-if="showPlace.type==='ware'">
      <div class="place-left">
        <div class="place-icon">
          仓
        </div>
        <div class="place-label">中介</div>
      </div>
      <div class="place-right">
        <div class="place-main">
          <div >增加 <input type="" style="width:3rem" /> 个出租屋空间</div>
          <div>共需要花费0万元</div>
        </div>
        <div class="place-btns">
          <span class="btn btn-normal">成交</span>
          <span class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>

    <!-- 银行 -->
    <div class="place-box" v-if="showPlace.type==='bank'">
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
          <span class="btn btn-normal">存钱</span>
          <span class="btn btn-normal">取钱</span>
          <span class="btn btn-leave">离开</span>
        </div>
      </div>
    </div>

  </section>

  
</template>
<script>

export default {
  data(){
    return {
      showPlace:{
        type:"ware",
        data:{
          word:"身体好好的，来医院干啥，赶紧干活去吧！"
        }
      }
    }
  },
  methods: {
    
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

}
</style>
