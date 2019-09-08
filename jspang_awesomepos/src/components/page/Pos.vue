<template>
  <div class="pos">
    <el-row >
      <el-col :span='7' class="pos-order" id="order-list">
      我是订单栏
      </el-col>
      <!--商品展示-->
      <el-col :span="17">
        我是产品栏
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Pos',
  mounted: function () {
    var orderHeight = document.body.clientHeight
    console.log(orderHeight)
    document.getElementById('order-list').style.height = orderHeight + 'px'
  }
}
</script>
<style scoped>
.pos-order {
  background-color:#F9FAFC;
  border-right: 1px solid #CeCCDA;
}
</style>
