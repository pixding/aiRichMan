<template>
  <div class="userStatusBox">
    <div class="statusLine">
      <dl class="item"><dt>现金：</dt><dd>{{cash}}</dd></dl>
      <dl class="item"><dt>健康：</dt><dd>{{health}}</dd></dl>
    </div>
    <div class="statusLine">
      <dl class="item"><dt>存款：</dt><dd>{{deposit}}</dd></dl>
      <dl class="item"><dt>名声：</dt><dd>{{fame}}</dd></dl>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('User', [
      'cash',
      'health',
      'deposit',
      'fame'
    ])
  }
}
</script>
<style lang="less" scoped>
.userStatusBox{
  background: #c6ad7e;
  border-bottom: 2px solid #333;
  .statusLine{
    height: 3rem;
    display: flex;
    .item{
      flex-basis: 50%;
      dt,dd{
        float: left;
        line-height: 3rem;
        font-size: 1.4rem;
        color:#fff;
        font-weight: bold;
      }
      dt{
        padding-left: 1.5rem;
      }
      dd{
        font-size: 1.6rem;
      }
    }
    &:first-child{
      border-bottom: 2px dashed #fff;
    }
  }
}
</style>
