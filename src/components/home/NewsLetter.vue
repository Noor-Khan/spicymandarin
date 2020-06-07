<template>
  <section id="NewsLetter" class="section">
    <el-row :gutter="80">
      <el-col :lg="12">
        <div class="figures-box">
          <div class="middle-content">
            <el-row>
              <el-col
                :span="12"
                v-for="(figure, index) in figures"
                :key="index"
              >
                <div class="figure-box">
                  <img :src="figure.icon" alt="" />
                  <h3>{{ figure.count }}</h3>
                  <h4>
                    {{ figure.title }}
                  </h4>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <el-row>
          <el-col :lg="18">
            <div class="newsletter-box">
              <div class="middle-content">
                <h2>signup to our newsletter</h2>
                <p>Sign up to get the latest updates and news</p>
                <hr class="sep" />
                <el-form>
                  <el-input placeholder="Enter your Email" v-model="email">
                  </el-input>
                  <DefaultButton text="Subscribe" btnType="primary" />
                </el-form>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import DefaultButton from "../buttons/Default";
export default {
  components: {
    DefaultButton
  },
  data() {
    return {
      email: "",
      figures: [
        {
          icon: "/images/icons/Cap.svg",
          count: "292",
          title: "Lessons"
        },
        {
          icon: "/images/icons/Cap.svg",
          count: "12",
          title: "Instructors"
        },
        {
          icon: "/images/icons/Cap.svg",
          count: "8",
          title: "tutors"
        },
        {
          icon: "/images/icons/Cap.svg",
          count: "353",
          title: "students"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#NewsLetter {
  margin-top: 70px;
  padding-left: 0;
  .newsletter-box {
    display: table;
    width: 100%;
    height: 420px;
    padding-left: 30px;
    text-align: left;
    .middle-content {
      h2 {
        font-size: 32px;
        text-transform: uppercase;
        font-weight: 400;
        margin: 5px 0;
      }
      p {
        color: $gray;
        text-transform: uppercase;
      }
      .el-form {
        display: flex;
        margin-top: 40px;
        .el-button {
          border-color: $primary;
          width: 210px;
          margin-left: -2.4em;
          z-index: 1;
          position: relative;
        }
      }
    }
  }
  .figures-box {
    display: table;
    width: 100%;
    padding: 20px 10px;
    background: $primary;
    box-shadow: 0px 8px 74px rgba(238, 38, 37, 0.64);
    .middle-content {
      .figure-box {
        text-align: center;
        color: $white;
        padding: 30px 10px;
        h3 {
          font-size: 48px;
          font-weight: 100;
          margin: 5px 0;
        }
        h4 {
          margin: 10px 0;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: 100;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
