<template>
  <div id="Newbie" class="course-page">
    <DashboardBreadcrumb />
    <el-row :gutter="20">
      <el-col :lg="16">
        <div class="main-media">
          <div class="feature-video">
            <h2>
              {{
                currentVideoIndex == 0
                  ? " Your first step! "
                  : " What is next? "
              }}
            </h2>
            <VueperSlides
              ref="myVueperSlides"
              :touchable="false"
              :bullets="false"
              @previous="logEvents('previous', $event)"
              @next="logEvents('next', $event)"
              @slide="logEvents('slide', $event)"
              @before-slide="logEvents('before-slide', $event)"
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
                              .videoId}?rel=0&modestbranding=1&showinfo=0enablejsapi=1`
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
        <div class="review-box" v-if="currentVideoIndex == activeClass">
          <div class="skip">
            <el-button @click="closeReview(currentVideoIndex)">
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
      loading: "isLoading",
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
  mounted() {},
  methods: {
    logEvents(eventName, params) {
      if (eventName === "slide") {
        this.currentVideoIndex = params.currentSlide.index;
        this.activeClass = params.currentSlide.index;
      } else if (eventName === "previous" || eventName === "next") {
        this.$refs.plyr[params.currentSlide.index].player.stop();
      } else if (eventName === "before-slide") {
        this.$refs.plyr[params.currentSlide.index].player.stop();
      }
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
<style lang="scss"></style>
