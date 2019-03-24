<template>
  <div>
    <Process />
    <div class="tradeBox">
      <Market class="tradebox-left" />
      <Wharehouse class="tradebox-right" />
    </div>
    <div class="userPanel">
      <UserStatus />
    </div>
    <div class="optPanel">
      <OptPanel />
    </div>
    <div class="optBox">
      <marketOpt />
      <UserOpt />
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue'
import Market from '@/components/Market.vue'
import Wharehouse from '@/components/Wharehouse.vue'
import UserStatus from '@/components/UserStatus.vue'
import marketOpt from '@/components/marketOpt.vue'
import UserOpt from '@/components/UserOpt.vue'
import OptPanel from '@/components/OptPanel.vue'


export default {
  components: {
    Process,
    Market,
    Wharehouse,
    UserStatus,
    marketOpt,
    UserOpt,
    OptPanel
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
  padding: 0.5rem;
}
.optBox{
  padding: 0 1rem;
}

</style>
