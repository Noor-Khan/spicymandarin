<template>
  <div id="overview">
    <DashboardBreadcrumb />
    <el-row :gutter="20" class="overview-cards">
      <el-col :lg="8">
        <div class="card">
          <div class="card-level">
            <h4>current level</h4>
            <h3>Beginner</h3>
          </div>
          <div class="card-icon">
            <img
              src="../../assets/icons/meter1.png"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="card-footer">
            <div class="change-level">
              <router-link to="">
                change
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="8">
        <div class="card">
          <div class="card-level">
            <h4>learned lessons</h4>
            <h3>Beginner</h3>
          </div>
          <div class="card-icon">
            <img
              src="../../assets/icons/meter1.png"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="card-footer">
            <div class="change-level">
              <el-progress :percentage="(2 / 20) * 100"></el-progress>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="8">
        <div class="card">
          <div class="card-level">
            <h4>last week report</h4>
            <h3>0</h3>
          </div>
          <div class="card-icon">
            <img
              src="../../assets/icons/meter1.png"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="card-footer">
            <div class="change-level">
              <p>no recent history found!</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="lessons-box">
      <el-row>
        <el-col :span="12">
          <div class="dashboard-heading">
            <h2>latest lesson</h2>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
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
            <div slot="arrow-right" color="white" large>
              <i class="el-icon-right"></i>
            </div>
            <div slot="arrow-left" color="white" large>
              <i class="el-icon-back"></i>
            </div>
            <vueper-slide
              v-for="(lesson, index) in lessons"
              :key="index"
              :image="lesson.img"
              style="background: #d9d9d9;"
            >
              <template v-slot:content>
                <div class="vueperslide__content-wrapper">
                  <div class="overlay"></div>
                  <div class="save-lesson">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="slider-content">
                    <div class="lesson-title">
                      <a href="##">
                        <h4>
                          {{ lesson.title }}
                        </h4>
                      </a>
                    </div>
                    <div class="lesson-category">
                      <p>{{ lesson.category }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </el-col>
      </el-row>
    </div>
    <div class="lessons-box">
      <el-row>
        <el-col :span="12">
          <div class="dashboard-heading">
            <h2>newbie</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="8" v-for="(lesson, index) in lessons" :key="index">
          <LessonCard
            :title="`#${index + 1} ${lesson.title}...`"
            :subCategory="lesson.subCategory"
            :img="lesson.img"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="view-more">
            <DashboardButton text="view more" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lessons-box">
      <el-row>
        <el-col :span="12">
          <div class="dashboard-heading">
            <h2>Beginner</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="8" v-for="(lesson, index) in lessons" :key="index">
          <LessonCard
            :title="`#${index + 1} ${lesson.title}...`"
            :subCategory="lesson.subCategory"
            :img="lesson.img"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="view-more">
            <DashboardButton text="view more" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lessons-box">
      <el-row>
        <el-col :span="12">
          <div class="dashboard-heading">
            <h2>intermediate</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="8" v-for="(lesson, index) in lessons" :key="index">
          <LessonCard
            :title="`#${index + 1} ${lesson.title}...`"
            :subCategory="lesson.subCategory"
            :img="lesson.img"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="view-more">
            <DashboardButton text="view more" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lessons-box">
      <el-row>
        <el-col :span="12">
          <div class="dashboard-heading">
            <h2>advanced</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="8" v-for="(lesson, index) in lessons" :key="index">
          <LessonCard
            :title="`#${index + 1} ${lesson.title}...`"
            :subCategory="lesson.subCategory"
            :img="lesson.img"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="view-more">
            <DashboardButton text="view more" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
import LessonCard from "../../components/dashboard/LessonCard";
import DashboardButton from "../../components/buttons/DashboardButton";
export default {
  components: {
    DashboardBreadcrumb,
    VueperSlides,
    VueperSlide,
    LessonCard,
    DashboardButton
  },
  data() {
    return {
      lessons: [
        {
          title: "Purus non enim praesent elementum",
          category: "beginner",
          subCategory: "travel",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "intermediate",
          subCategory: "business deal",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "newbie",
          subCategory: "booking",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "reservation",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "party",
          img: "/images/videoimg.jpg"
        },
        {
          title: "Purus non enim praesent elementum",
          category: "advanced",
          subCategory: "wedding",
          img: "/images/videoimg.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#overview {
  .overview-cards {
    margin: 2rem 0;
    .card {
      background-color: $white;
      padding: 20px 25px;
      text-align: left;
      border-radius: 5px;
      box-shadow: 0px 0px 0px #fefefe;
      .card-level {
        float: left;
        h4 {
          text-transform: uppercase;
          color: $gray;
          font-size: 14px;
          margin-bottom: 5px;
        }
        h3 {
          margin-top: 0;
          font-size: 24px;
        }
      }
      .card-icon {
        float: right;
        margin-top: 1.5rem;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .card-footer {
        clear: both;
        .change-level {
          padding-top: 10px;
          a {
            color: $primary;
            text-transform: capitalize;
          }
          p {
            margin: 0;
            font-size: 14px;
            font-style: italic;
            color: $primary;
          }
        }
      }
    }
  }
  .lessons-box {
    background-color: $white;
    border-radius: 5px;
    margin: 2rem 0;
    padding: 20px 25px 60px 25px;
    .dashboard-heading {
      text-align: left;
      h2 {
        text-transform: capitalize;
        font-size: 22px;
      }
    }
    .view-more {
      text-align: right;
      margin-top: 20px;
    }
  }
  .vueperslides__parallax-wrapper {
    padding-bottom: 19.3333% !important;
    @media (max-width: 800px) {
      padding-bottom: 90% !important;
    }
  }
  .vueperslides__arrows {
    position: absolute;
    right: 0;
    bottom: 5px;
    &.vueperslides__arrows--outside {
      .vueperslides__arrow {
        top: 100%;
        width: 40px;
        height: 40px;
        background-color: $white;
        border-radius: 50%;
        &:hover {
          color: $white;
          background-color: $primary;
          box-shadow: 0px 2px 10px rgba(238, 38, 37, 0.9);
        }
        &.vueperslides__arrow--prev {
          left: -6rem !important;
          transform: translateY(40%) !important;
        }
        &.vueperslides__arrow--next {
          right: 1em !important;
          transform: translateY(40%);
        }
        i {
          font-size: 18px;
        }
      }
    }
  }
  .vueperslides--slide-image-inside {
    .vueperslide {
      margin: 0 5px !important;
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
        .save-lesson {
          position: absolute;
          top: 10px;
          right: 20px;
          padding: 3px;
          border: 2px solid #fff;
          color: #fff;
          border-radius: 50%;
          width: 25px;
          line-height: 28px;
          height: 25px;
          text-align: center;
          font-size: 18px;
          transition: 0.2s ease-in-out;
          &:hover {
            cursor: pointer;
            background-color: $white;
            color: $primary;
          }
        }
        .slider-content {
          position: absolute;
          bottom: 1em;
          left: 2em;
          text-align: left;
          .lesson-title {
            a {
              text-decoration: none;
              h4 {
                font-weight: 400;
                margin-bottom: 0;
                color: #fff;
              }
            }
          }
          .lesson-category {
            background-color: $primary;
            margin: 10px 0;
            text-align: center;
            border-radius: 40px;
            padding: 2px 0;
            width: 125px;
            p {
              margin: 0;
              font-size: 14px;
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
