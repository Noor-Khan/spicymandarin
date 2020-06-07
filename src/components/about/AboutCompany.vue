<template>
  <section id="AboutCompany" class="section">
    <el-row>
      <el-col :lg="14">
        <div class="about-content">
          <div class="main-heading">
            <h4>about spicymandarin</h4>
            <h2>who we are</h2>
            <hr class="seperator" />
          </div>
          <div class="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              facilisi posuere cum bibendum quis eget. Morbi a tempor non eu,
              pretium dictum eu. Sed velit, vivamus turpis metus ac. Semper ut
              risus nam in. Suspendisse vitae tincidunt elit interdum nunc non.
              Nunc cursus tristique velit cras. Ac enim eget erat a. Porta purus
              erat molestie bibendum.
            </p>
            <p>
              Aliquam quam nunc, neque consectetur. Tincidunt id felis amet,
              massa congue mauris, consequat luctus nec. Interdum eget mauris
              accumsan tellus felis volutpat volutpat. Leo fringilla et faucibus
              nisl sapien, scelerisque mi sed sed. Id amet ipsum est, ipsum
              tristique dolor risus interdum nulla. Morbi egestas tincidunt
              rutrum eget ipsum feugiat proin. Id ac sit tellus in mattis
              aliquam. Sagittis nibh dictum tristique aliquam.
            </p>
          </div>
        </div>
      </el-col>
      <el-col :lg="10">
        <div class="about-video">
          <div class="middle-content">
            <img
              src="../../assets/icons/video.svg"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
#AboutCompany {
  margin-top: 70px;
  padding-left: 0;
  padding-top: 0;
  background-color: $dark-gray;
  .about-content {
    padding: 20px 80px;
    text-align: left;
    .main-heading {
      h2 {
        color: $white;
      }
      .seperator {
        margin: 15px 0;
      }
    }
    .about-para {
      padding-top: 10px;
      padding-bottom: 40px;
      p {
        font-size: 16px;
        letter-spacing: 0.4px;
        line-height: 26px;
      }
    }
  }
  .about-video {
    display: table;
    text-align: right;
    height: 500px;
  }
}
</style>
