<template>
  <div>
    <Process />
    <div class="tradeBox">
      <Market class="tradebox-left" />
      <Wharehouse class="tradebox-right" />
    </div>
    <div>
      <UserStatus />
    </div>
    <div class="optPanel">

    </div>
    <div class="optBox">
      <marketOpt />
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue'
import Market from '@/components/Market.vue'
import Wharehouse from '@/components/Wharehouse.vue'
import UserStatus from '@/components/UserStatus.vue'
import marketOpt from '@/components/marketOpt.vue'

export default {
  components: {
    Process,
    Market,
    Wharehouse,
    UserStatus,
    marketOpt
  }
}
</script>
<style lang="less" scoped>
.tradeBox{
  border:2px solid #222;
  border-left:none;
  border-right: none;
  display: flex;
  .tradebox-left{
    flex-basis: 40%;
  }
  .tradebox-right{
    flex-grow: 1;
  }
}
.optPanel{
  height: 9rem;
}
.optBox{

}
</style>
