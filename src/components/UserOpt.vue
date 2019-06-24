<template>
  <section class="useropt">
    <span class="switch-item" @click="goBank">银行</span>
    <span class="switch-item" @click="goHospital">医院</span>
    <span class="switch-item" >售楼部</span>
    <span class="switch-item" @click="goAgency">中介</span>
  </section>
</template>
<script>

export default {
  methods: {
    goBank: function () {
      this.$store.commit('Platform/changePanelType', 'bank')
    },
    goHospital: function () {
      this.$store.commit('Platform/changePanelType', 'hos')
    },
    goSalesCenter: function () {

    },
    goAgency: function () {
      this.$emit('updateWareNum', 10);
      this.$store.commit('Platform/changePanelType', 'ware')
    }
  }
}
</script>

<style lang="less" scoped>
.useropt {
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  width: 100%;
  .switch-item {
    color: #fff;
    border: 1px solid #333;
    background: #2f8486;
    line-height: 2.4rem;
    width: 20%;
    text-align: center;
    cursor: pointer;
    &-active {
      opacity: 0.5;
    }
  }

}
</style>
