<template>
  <div class='buyG-header'>
    <span class="currentHousePrice">房价：{{housePrice/10000 | numberFormat}} 万</span>
    <span class="currentWeek">时间：{{currentWeek}}/{{totalWeek}}周</span>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('Process', [
      'housePrice',
      'totalWeek',
      'currentWeek'
    ])
  }
}
</script>

<style lang="less" scoped>
.buyG-header{
  height: 3rem;
  line-height: 3rem;
  padding:1rem;
  color:#fff;
  font-size: 1.8rem;
  background: #007700;
  display: flex;
  .currentHousePrice{
    text-align: left;
    flex-grow:1;
  }
  .currentWeek{
    text-align: right;
    flex-basis: 10rem;
  }
}
</style>
