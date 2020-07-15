<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="img" alt="product" />
    </div>
    <div class="product-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="product-price">
      <p>${{ price }}</p>
    </div>
    <div class="product-button">
      <DefaultButton text="buy now" link="#" btnType="primary" />
      <!-- <el-button primary @click="link" class="primary">buy now</el-button> -->
    </div>
  </div>
</template>
<script>
import DefaultButton from "../../components/buttons/DashboardButton";
export default {
  props: {
    title: String,
    img: String,
    price: Number,
    link: String
  },
  components: {
    DefaultButton
  }
};
</script>
<style lang="scss">
.product-card {
  margin: 10px 0;
  padding: 10px;
  background-color: #f6f6f6;
  .product-title {
    h3 {
      text-transform: capitalize;
      font-size: 18px;
    }
  }
  .product-img {
    img {
      width: 100%;
    }
  }
  .product-button {
    button {
      width: 100%;
    }
  }
}
</style>
