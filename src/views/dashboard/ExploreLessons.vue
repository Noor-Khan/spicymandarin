<template>
  <div id="ExploreLessons">
    <DashboardBreadcrumb />
    <div class="explore-lessons-box">
      <el-row class="search-box">
        <el-col :span="24">
          <el-form>
            <el-row>
              <el-col :lg="14" :offset="2">
                <el-form-item>
                  <el-input
                    prefix-icon="el-icon-search"
                    placeholder="Search Lessons, Courses, topics or Categories"
                    v-model="search"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="6">
                <div class="explore-button">
                  <el-button> search</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <div class="results">
        <el-row>
          <el-col :lg="24">
            <div class="result-header">
              <div class="dashboard-heading">
                <h2>Results</h2>
              </div>
              <div class="filter">
                <el-select
                  v-model="value"
                  filterable
                  placeholder="Filter by category"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :lg="8" v-for="(lesson, index) in lessons" :key="index">
            <div class="result-lessons">
              <transition name="slide-fade">
                <LessonCard
                  v-if="value == lesson.category"
                  :title="`#${index + 1} ${lesson.title}...`"
                  :subCategory="lesson.subCategory"
                  :img="lesson.img"
                />
                <LessonCard
                  v-else-if="value == 'all' || value == ''"
                  :title="`#${index + 1} ${lesson.title}...`"
                  :subCategory="lesson.subCategory"
                  :img="lesson.img"
                />
              </transition>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
import LessonCard from "../../components/dashboard/LessonCard";
export default {
  components: {
    DashboardBreadcrumb,
    LessonCard
  },
  data() {
    return {
      search: "",
      options: [
        {
          value: "all",
          label: "All"
        },
        {
          value: "newbie",
          label: "Newbie"
        },
        {
          value: "beginner",
          label: "Beginner"
        },
        {
          value: "intermediate",
          label: "Intermediate"
        },
        {
          value: "advanced",
          label: "Advanced"
        }
      ],
      value: "",
      lessons: [
        {
          title: "Purus non enim praesent elementum",
          category: "beginner",
          subCategory: "travel",
          img: "/images/videoimg.jpg"
        },
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
  },
  watch: {
    search: function(newval, oldval) {
      console.log(newval, oldval);
    }
  }
};
</script>
<style lang="scss">
#ExploreLessons {
  .explore-lessons-box {
    margin: 2rem 0;
    .dashboard-heading {
      text-align: left;
      h2 {
        margin-top: 0;
        text-transform: capitalize;
        font-size: 22px;
      }
    }
    .search-box {
      border-radius: 5px;
      background-color: $white;
      padding: 3rem 2rem;
      form {
        .el-form-item {
          margin-bottom: 0;
          input {
            background: $white !important;
            border: 1px solid #e9eef2 !important;
            box-shadow: none;
            border-radius: 40px;
            padding-left: 50px !important;
          }
          .el-input__prefix {
            left: 15px;
            .el-input__icon {
              line-height: 55px;
              &:before {
                font-size: 20px;
              }
            }
          }
        }
        .explore-button {
          text-align: left;
          margin-left: 20px;
          button {
            height: 55px;
            width: 210px;
            background: $white;
            box-shadow: 0px 4px 8px #f7f7f7;
            border-radius: 40px;
            font-size: 16px;
            text-transform: capitalize;
            font-weight: 400;
            &:hover {
              background-color: $primary;
              border-color: $primary;
              color: $white;
              box-shadow: 0px 4px 10px rgba(238, 38, 37, 0.8);
            }
          }
        }
      }
    }
    .results {
      background-color: $white;
      border-radius: 5px;
      margin-top: 20px;
      padding: 20px 25px 60px 25px;
      .result-header {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        .el-select {
          input {
            background: #fff !important;
            box-shadow: none;
            font-size: 14px !important;
            border: 1px solid #dfdfdf !important;
            height: 45px !important;
            padding: 15px 10px;
          }
        }
      }
    }
  }
}
</style>
