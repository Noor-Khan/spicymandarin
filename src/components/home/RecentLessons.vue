<template>
  <section id="RecentLessons" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading">
          <h4>newly added lessons</h4>
          <h2>recent lessons</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="recent-lessons-box">
        <vueper-slides
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
            v-for="(lesson, index) in lessons"
            :key="index"
            :image="lesson.snippet.thumbnails.maxres.url"
            style="background: #d9d9d9;"
          >
            <template v-slot:content>
              <div class="vueperslide__content-wrapper">
                <div class="overlay"></div>
                <div class="slider-content">
                  <a href="##">
                    <h4>{{ lesson.snippet.title.slice(0, 32) }}...</h4>
                  </a>
                  <hr class="sep" />
                  <!-- <p>{{ lesson.category }}</p> -->
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
import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  computed: {
    ...mapGetters({
      lessons: "courseLessons"
    })
  },
  data() {
    return {
      prevIcon: true,
      nextIcon: true
    };
  },
  created() {
    this.$store.dispatch("loadLessons");
  }
};
</script>
<style lang="scss">
#RecentLessons {
  margin-top: 70px;
  .recent-lessons-box {
    margin: 3rem 0;
    padding-bottom: 4rem;
    .vueperslides__parallax-wrapper {
      padding-bottom: 19.3333% !important;
      @media (max-width: 800px) {
        padding-bottom: 90% !important;
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
    .vueperslides--slide-image-inside {
      .vueperslide {
        margin: 0 10px !important;
        @media (max-width: 800px) {
          margin: 0 !important;
        }
        .vueperslide__content-wrapper {
          position: relative;
          background-size: cover !important;
          background-position: center;
          align-items: end !important;
          justify-content: flex-end !important;
          .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(32, 32, 32, 0.2) 0%,
              #202020 100%
            ) !important;
          }
          .slider-content {
            position: absolute;
            bottom: 1em;
            left: 2em;
            text-align: left;
            a {
              text-decoration: none;
              h4 {
                text-transform: uppercase;
                margin-bottom: 0;
                color: #fff;
              }
            }
            p {
              text-transform: capitalize;
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
