<template>
  <div id="Newbie">
    <DashboardBreadcrumb />
    <el-row :gutter="20">
      <el-col :lg="16">
        <div class="main-media">
          <div class="feature-video">
            <h2 v-if="">
              {{
                currentVideoIndex == 0 ? "Your first step!" : "What is next?"
              }}
            </h2>
            <VueperSlides
              ref="myVueperSlides"
              :touchable="false"
              :bullets="false"
              @ready="logEvents('ready', $event)"
              @slide="logEvents('slide', $event)"
            >
              <template v-slot:arrow-left>
                <div class="arrow">
                  <i class="el-icon-back"></i>
                </div>
              </template>

              <template v-slot:arrow-right>
                <div class="arrow">
                  <i class="el-icon-right"></i>
                </div>
              </template>
              <VueperSlide v-for="(lesson, index) in lessons" :key="index">
                <template v-slot:content>
                  <vue-plyr ref="plyr">
                    <div class="plyr__video-embed">
                      <iframe
                        :src="
                          `https://www.youtube.com/embed/${lesson &&
                            lesson.snippet.resourceId
                              .videoId}?rel=0&showinfo=0&enablejsapi=1`
                        "
                        frameborder="0"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay"
                      >
                      </iframe>
                    </div>
                  </vue-plyr>
                  <div class="lesson-title">
                    <h3>
                      {{ lesson.snippet.title }}
                    </h3>
                  </div>
                </template>
              </VueperSlide>
            </VueperSlides>
          </div>
          <div class="about-lesson">
            <h4>Description</h4>
            <p>
              {{ lessons && lessons[currentVideoIndex].snippet.description }}
            </p>
          </div>
        </div>
      </el-col>
      <el-col :lg="8">
        <div class="navigation-videos">
          <div class="upcoming-video">
            <h3>upcoming videos</h3>
            <el-button
              v-for="(lesson, index) in lessons"
              :key="index"
              :class="{ active: index == activeClass }"
              @click="currentVideo(index)"
            >
              <div class="video-icon">
                <i class="el-icon-caret-right"></i>
              </div>
              <div class="video-content">
                <h4>{{ `#${index + 1} ${lesson && lesson.snippet.title}` }}</h4>
              </div>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="24">
        <div class="review-box">
          <div class="skip">
            <el-button @click="closeReview()" v-if="showReview">
              Skip the process
            </el-button>
          </div>
          <transition name="slide-fade">
            <ReviewLesson v-if="showReview" />
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import { mapGetters } from "vuex";
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
import ReviewLesson from "../../components/dashboard/ReviewLesson";
export default {
  components: {
    DashboardBreadcrumb,
    ReviewLesson,
    VueperSlides,
    VueperSlide
  },
  computed: {
    ...mapGetters({
      // lessons: "newbie",
      lessons: "lessonLink"
    })
  },
  data() {
    return {
      videoTitle: "",
      activeClass: 0,
      currentVideoIndex: 0,
      showReview: true
    };
  },
  created() {
    this.$store.dispatch("loadLessons");
  },
  mounted() {
    console.log("get the lessons", this.$refs.plyr[0].player.ended);
    console.log("VUeeee", VueperSlides);
    this.$refs.plyr[0].player.on("ended", function() {
      alert(2222);
    });
  },
  methods: {
    logEvents(eventName, params) {
      this.currentVideoIndex = params.currentSlide.index;
      this.activeClass = params.currentSlide.index;
      // }
    },
    currentVideo(index) {
      this.currentVideoIndex = index;
      this.activeClass = index;
      this.$refs.myVueperSlides.goToSlide(index);
    },
    closeReview() {
      this.showReview = false;
    }
  }
};
</script>
<style lang="scss">
#Newbie {
  .main-media {
    text-align: left;
    margin: 2rem 0;
    border-radius: 5px;

    .feature-video {
      padding: 1rem 1rem 2rem 1rem;
      background-color: $white;
      .vueperslides {
        .vueperslides__parallax-wrapper {
          padding-bottom: 62.3333% !important;
          &:before,
          &:after {
            display: none;
          }
        }
        .vueperslides__arrows {
          .arrow {
            cursor: pointer;
            text-align: center;
            line-height: 57px;
            display: inline-block;
            margin-right: 5px;
            width: 50px;
            height: 50px;
            background-color: $white;
            border-radius: 50%;
            box-shadow: 0px 2px 10px $light-gray;
            &:hover {
              color: $white;
              background-color: $primary;
              box-shadow: 0px 2px 10px rgba(238, 38, 37, 0.9);
              i {
                color: $white;
              }
            }
            i {
              color: $black;
              font-size: 24px;
            }
          }
          .vueperslides__arrow {
            transform: translateY(0);
            top: unset;
            bottom: 0 !important;
            &.vueperslides__arrow--prev {
              right: 4.5em;
              left: unset;
            }
          }
        }
      }
      .video-content {
        h2 {
          margin-bottom: 0;
        }
        h4 {
          margin-top: 10px;
          text-transform: capitalize;
        }
      }
    }
    .about-lesson {
      margin-top: 1rem;
      background-color: #fff;
      border-radius: 5px;
      padding: 0.5rem 1rem 1rem 1rem;
      h4 {
        margin-bottom: 0;
      }
      p {
        margin-top: 10px;
        color: $gray;
      }
    }
  }
  .navigation-videos {
    background-color: $white;
    border-radius: 5px;
    margin: 2rem 0;
    height: 400px;
    overflow-y: scroll;
    .upcoming-video {
      h3 {
        text-align: left;
        font-weight: bold;
        text-transform: uppercase;
        padding-left: 20px;
      }
      button {
        display: block;
        padding: 5px 10;
        white-space: unset;
        line-height: 20px;
        width: 100%;
        margin: 5px 0;
        text-align: left;
        border-radius: 0;
        border: none;
        &.active,
        &:hover,
        &:focus {
          background-color: $primary;
          .video-icon {
            margin-right: 10px;
            i {
              background-color: $white;
              color: #b5b5b5;
            }
          }
          h4,
          p {
            color: $white !important;
          }
        }
        span {
          display: table;
          .video-icon {
            display: table-cell;
            vertical-align: middle;
            position: relative;
            right: 10px;
            i {
              font-size: 28px;
              width: 40px;
              height: 40px;
              background-color: #b5b5b5;
              text-align: center;
              line-height: 40px;
              border-radius: 50%;
              color: #fff;
            }
          }
          .video-content {
            h4 {
              color: $black;
              margin-top: 0;
              margin-bottom: 5px;
            }
            p {
              color: $gray;
              margin: 5px 0;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
  .review-box {
    .skip {
      // margin-top: -5rem;
      // float: right;
      text-align: right;
      border-radius: 45px;
      margin-bottom: 10px;
      // background-color: $white;
      button {
        width: 150px;
        border-radius: 45px;
        border: none;
      }
    }
  }
}
</style>
