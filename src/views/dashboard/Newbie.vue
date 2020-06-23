<template>
  <div id="Newbie">
    <DashboardBreadcrumb />
    <el-row :gutter="20">
      <el-col :lg="16">
        <div class="main-media">
          <h2 v-if="">
            {{ currentVideoIndex == 0 ? "Your first step!" : "What is next?" }}
          </h2>
          <div class="feature-video">
            <div v-if="lessons[currentVideoIndex]">
              <LazyYoutubeVideo
                :src="`https://www.youtube.com/embed/${videoURL}?rel=0`"
              >
              </LazyYoutubeVideo>
              <div class="video-content">
                <h2>
                  {{
                    `#${currentVideoIndex + 1} ${
                      lessons[currentVideoIndex].title
                    }`
                  }}
                </h2>
                <h4>{{ lessons[currentVideoIndex].subCategory }}</h4>
                <div class="navigation">
                  <div
                    class="arrow-left arrow"
                    color="white"
                    large
                    @click="prevVideo(currentVideoIndex)"
                  >
                    <i class="el-icon-back"></i>
                  </div>
                  <div
                    class="arrow-right arrow"
                    color="white"
                    large
                    @click="nextVideo(currentVideoIndex)"
                  >
                    <i class="el-icon-right"></i>
                  </div>
                </div>
                <div class="about-lesson">
                  <h4>Description</h4>
                  <p>{{ lessons[currentVideoIndex].description }}</p>
                </div>
              </div>
            </div>
            <div v-else>
              <LazyYoutubeVideo
                :src="`https://www.youtube.com/embed/${videoURL}?rel=0`"
              >
              </LazyYoutubeVideo>
              <div class="video-content">
                <h2>{{ "#1 " + lessons[0].title }}</h2>
                <h4>{{ lessons[0].subCategory }}</h4>
                <div class="navigation">
                  <div
                    class="arrow-left arrow"
                    color="white"
                    large
                    @click="prevVideo(0)"
                  >
                    <i class="el-icon-back"></i>
                  </div>
                  <div
                    class="arrow-right arrow"
                    color="white"
                    large
                    @click="nextVideo(0)"
                  >
                    <i class="el-icon-right"></i>
                  </div>
                </div>
                <div class="about-lesson">
                  <h4>Description</h4>
                  <p>{{ lessons[0].description }}</p>
                </div>
              </div>
            </div>
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
                <h4>{{ `#${index + 1} ${lesson.title}` }}</h4>
                <p>{{ lesson.subCategory }}</p>
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
          <ReviewLesson v-if="showReview" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
import ReviewLesson from "../../components/dashboard/ReviewLesson";
export default {
  components: {
    DashboardBreadcrumb,
    ReviewLesson
  },
  computed: {},
  data() {
    return {
      videoURL: "",
      videoTitle: "",
      activeClass: 0,
      currentVideoIndex: 0,
      showReview: true,
      lessons: [
        {
          title: "Purus non enim praesent elementum",
          category: "beginner",
          subCategory: "travel",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "intermediate",
          subCategory: "business deal",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "newbie",
          subCategory: "booking",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "reservation",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "party",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "wedding",
          description:
            "Quaerat debitis reprehenderit aliquam, asperiores ullam dignissimos nihil recusandae accusamus libero quae pariatur ad molestias magni, iusto corrupti quis perferendis laudantium! Minus.",
          img: "/images/videoimg.jpg",
          img: "/images/videoimg.jpg"
        }
      ]
    };
  },
  created() {
    console.log("ENV variablesss", process.env.BASE_URL);
    this.axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLHfaYaxo6-wgDnOG06IolEssDQmyj06fC&key=AIzaSyABNLFge3Vp1gWHql4A-gpsGTcrnvrwUPg"
      )
      .then(response => {
        this.videoURL = response.data.items[0].snippet.resourceId.videoId;
        this.videoTitle = response.data.items[0].snippet.title;
        console.log(response.data);
        console.log("active:", this.activeClass);
      });
  },
  methods: {
    currentVideo(index) {
      this.currentVideoIndex = index;
      this.activeClass = index;
    },
    nextVideo(index) {
      if (this.activeClass == this.lessons.length - 1) {
        this.activeClass = this.lessons.length - 1;
      } else {
        this.currentVideoIndex += 1;
        this.activeClass = index + 1;
      }
    },
    prevVideo(index) {
      if (this.activeClass == index - 1) {
        this.activeClass = index;
        console.log("previous: ", this.activeClass, index);
      } else {
        this.currentVideoIndex -= 1;
        this.activeClass = index - 1;
      }
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
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 5px;
    background-color: $white;

    .feature-video {
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
    .navigation {
      text-align: right;
      margin-top: -5rem;
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
        }
        i {
          font-size: 24px;
        }
      }
    }
    .about-lesson {
      margin-top: 4rem;
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
          display: flex;
          .video-icon {
            margin-top: 5px;
            margin-right: 15px;
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
