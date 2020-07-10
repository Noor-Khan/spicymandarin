<template>
  <section id="Partners" class="section">
    <el-row>
      <el-col lg="6">
        <a
          :href="partner.link"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <img :src="partner.img" alt="" class="img-responsive" />
        </a>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      partners: [
        {
          link: "#",
          img: "/images/partners/press-hp.jpg"
        },
        {
          link: "#",
          img: "/images/partners/press-tt.jpg"
        },
        {
          link: "#",
          img: "/images/partners/press-dn.jpg"
        },
        {
          link: "#",
          img: "/images/partners/press-yh.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Partners {
  margin-top: 70px;
  a {
    margin: 0 20px;
    img {
      width: 15%;
    }
  }
}
</style>
