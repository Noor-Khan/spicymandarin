<template>
  <section id="Testimonials" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading">
          <h4>testimonials</h4>
          <h2>client say about us</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <div class="testimonials-box">
      <el-row :gutter="10">
        <el-col :lg="8" v-for="(client, index) in clients" :key="index">
          <div class="testimonial">
            <div
              class="client-img"
              :style="{ 'background-image': `url(${client.img})` }"
            ></div>
            <div class="inner-content">
              <p>
                <img src="../../assets/icons/quote-left.svg" alt="" />
                {{ client.feedback }}
                <img src="../../assets/icons/quote-right.svg" alt="" />
              </p>
              <h4>{{ client.title }}</h4>
              <div class="stars">
                <img :src="client.stars" alt="" class="img-responsive" />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      prevIcon: true,
      nextIcon: true,
      clients: [
        {
          title: "robert",
          img: "/images/client.jpg",
          feedback:
            "Nunc cursus purus erat molestie tristique velit cras. Ac enim eget erat a. Porta purus erat molestie purus erat molestie tristiq  bibendum.",
          stars: "/images/icons/5stars.svg"
        },
        {
          title: "robert",
          img: "/images/client.jpg",
          feedback:
            "Nunc cursus purus erat molestie tristique velit cras. Ac enim eget erat a. Porta purus erat molestie purus erat molestie tristiq  bibendum.",
          stars: "/images/icons/5stars.svg"
        },
        {
          title: "robert",
          img: "/images/client.jpg",
          feedback:
            "Nunc cursus purus erat molestie tristique velit cras. Ac enim eget erat a. Porta purus erat molestie purus erat molestie tristiq  bibendum.",
          stars: "/images/icons/5stars.svg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Testimonials {
  margin-top: 70px;
  .testimonials-box {
    margin: 3rem 0;
    .testimonial {
      background: radial-gradient(
          50% 50% at 50% 50%,
          #ffffff 0%,
          rgba(255, 255, 255, 0.71) 100%
        ),
        #e9eef2;
      border-radius: 5px;
      padding: 25px 30px;
      margin-top: 60px;
      .client-img {
        width: 100px;
        height: 100px;
        margin-top: -4.7rem !important;
        border-radius: 50%;
        margin: 0 auto;
        background-position: center;
        background-size: cover;
      }
      .inner-content {
        hr {
          margin: auto;
        }
        h4 {
          text-transform: uppercase;
          margin-bottom: 0;
          color: $black;
          font-weight: 400;
        }
        p {
          color: $gray;
          line-height: 26px;
          letter-spacing: 0.4px;
          text-transform: capitalize;
          img {
            width: 25px;
          }
          img:last-child {
            float: right;
          }
        }
        .stars {
          margin-top: 20px;
          img {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
