<template>
  <div id="Merchandize">
    <Header />
    <section id="Shop" class="section">
      <el-row :gutter="20">
        <el-col v-for="(product, index) in products" :key="index" :lg="8">
          <ProductCard
            :title="product.title"
            :price="product.price"
            :img="product.img"
            :link="product.link"
          />
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
export default {
  components: {
    ProductCard,
    Header
  },
  data() {
    return {
      products: [
        {
          title: "DVD season 2",
          price: 19.99,
          img: "/images/products/dvd.jpg",
          link: "#"
        },
        {
          title: "DVD season 1",
          price: 19.99,
          img: "/images/products/dvd-season1.jpg",
          link: "#"
        },
        {
          title: "pocker cards",
          price: 19.99,
          img: "/images/products/poker-cards.jpg",
          link: "#"
        },
        {
          title: "t-shirt i love chinese language",
          price: 19.99,
          img: "/images/products/t-shirt.jpg",
          link: "#"
        },
        {
          title: "t-shirt keep calm and study on",
          price: 19.99,
          img: "/images/products/t-shirt-2.jpg",
          link: "#"
        }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
