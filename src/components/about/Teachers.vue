<template>
  <section id="Teachers" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading">
          <h4>meet our Teachers</h4>
          <h2>our Teachers</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="teachers-box">
        <vueper-slides
          :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
          slide-image-inside
          :visible-slides="3"
          :arrows-outside="true"
          :infinite="true"
          :touchable="false"
          :bullets="false"
          slide-image-inside
          class="no-shadow"
        >
          <div
            slot="arrow-right"
            color="white"
            large
            @mouseover="prevIcon = false"
            @mouseleave="prevIcon = true"
          >
            <img
              src="../../assets/icons/arrow-right.svg"
              alt="next"
              v-if="prevIcon"
            />
            <img src="../../assets/icons/hover-right.svg" alt="next" v-else />
          </div>
          <div
            slot="arrow-left"
            color="white"
            large
            @mouseover="nextIcon = false"
            @mouseleave="nextIcon = true"
          >
            <img
              src="../../assets/icons/arrow-left.svg"
              alt="prev"
              v-if="nextIcon"
            />
            <img src="../../assets/icons/hover-left.svg" alt="prev" v-else />
          </div>
          <vueper-slide
            v-for="(model, index) in teachers"
            :key="index"
            :image="model.img"
            style="background: #d9d9d9;"
          >
            <template v-slot:content>
              <div class="vueperslide__content-wrapper">
                <div class="overlay"></div>
                <div class="slider-content">
                  <h4>{{ model.title }}</h4>
                  <p>{{ model.category }}</p>
                  <hr class="sep" />
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </el-row>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      prevIcon: true,
      nextIcon: true,
      teachers: [
        {
          title: "CHANGYING",
          category: "beginner",
          img: "/images/model1.jpg"
        },
        {
          title: "CHANGYING",
          category: "intermediate",
          img: "/images/model2.jpg"
        },
        {
          title: "CHANGYING",
          category: "newbie",
          img: "/images/model3.jpg"
        },
        {
          title: "CHANGYING",
          category: "advanced",
          img: "/images/model1.jpg"
        },
        {
          title: "CHANGYING",
          category: "advanced",
          img: "/images/model2.jpg"
        },
        {
          title: "CHANGYING",
          category: "advanced",
          img: "/images/model3.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Teachers {
  margin-top: 70px;
  .teachers-box {
    margin: 3em 0;
  }
  .vueperslides__parallax-wrapper {
    padding-bottom: 40.3333% !important;
    @media (max-width: 800px) {
      padding-bottom: 90% !important;
    }
  }
  .vueperslides--slide-image-inside {
    .vueperslide {
      margin: 0 5px !important;
      @media (max-width: 800px) {
        margin: 0 !important;
      }
      &:hover {
        .vueperslide__content-wrapper {
          transform: translateX(0);
        }
      }
      .vueperslide__content-wrapper {
        position: relative;
        background-size: cover !important;
        background-position: center;
        align-items: end !important;
        justify-content: flex-end !important;
        transition: 0.7s ease-in-out;
        transform: translateX(100%);
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(120, 5, 5, 0.62);
        }
        .slider-content {
          position: absolute;
          bottom: 0;
          left: 0;
          top: 40%;
          right: 0;
          hr {
            margin: auto;
          }
          h4 {
            text-transform: uppercase;
            margin-bottom: 0;
            color: #fff;
          }
          p {
            color: #f6f6f6;
            text-transform: capitalize;
          }
        }
      }
    }
  }
  .vueperslides__arrows {
    &.vueperslides__arrows--outside {
      .vueperslides__arrow {
        top: 100%;
        &.vueperslides__arrow--prev {
          left: 1em !important;
          transform: translateY(40%) !important;
        }
        &.vueperslides__arrow--next {
          left: 6em !important;
          transform: translateY(40%);
        }
      }
    }
  }
}
</style>
