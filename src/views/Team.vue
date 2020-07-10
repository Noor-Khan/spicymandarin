<template>
  <div id="OutTeam">
    <PageHeader />
    <section id="Team" class="section">
      <el-row>
        <el-col :span="24">
          <div class="main-heading">
            <h4>meet our professional team</h4>
            <h2>Our team</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :lg="6" :sm="12" v-for="(member, index) in team" :key="index">
          <div class="team-box">
            <div class="team-img">
              <img :src="member.img" alt="" class="img-responsive" />
            </div>
            <div class="team-inner-content">
              <div class="team-name">
                <h3>{{ member.name }}</h3>
              </div>
              <div class="team-title">
                <h4>{{ member.title }}</h4>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../components/Header";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      team: [
        {
          name: "MICK GLEISSNER",
          title: "MR. FUNG",
          img: "/images/team.jpg"
        },
        {
          name: "KAORU KIKUCHI",
          title: "CARTOONIST",
          img: "/images/team.jpg"
        },
        {
          name: "MIKE WANG",
          title: "LESSON DESIGNER",
          img: "/images/team.jpg"
        },
        {
          name: "ALFRED III GATSON",
          title: "EDITOR",
          img: "/images/team.jpg"
        },
        {
          name: "MHARVEY O’NEIL",
          title: "PRODUCER",
          img: "/images/team.jpg"
        },
        {
          name: "JUN SEGURA",
          title: "WEB DEVELOPER",
          img: "/images/team.jpg"
        },
        {
          name: "AKANE MINAGAWA",
          title: "MAKE-UP ARTIST",
          img: "/images/team.jpg"
        },
        {
          name: "ARTHUR TAO",
          title: "DIRECTOR",
          img: "/images/team.jpg"
        },
        {
          name: "MARTIN ZAPANTA",
          title: "DP",
          img: "/images/team.jpg"
        },
        {
          name: "VANESSA TUAN",
          title: "TEACHER",
          img: "/images/team.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Team {
  margin-top: 70px;
  .main-heading {
    margin-bottom: 40px;
  }
  .team-box {
    position: relative;
    margin-top: 20px;
    &:hover {
      .team-inner-content {
        transform: translateY(-4rem);
      }
    }
    .team-inner-content {
      position: absolute;
      transition: 0.5s ease-in-out;
      bottom: 4px;
      left: 0;
      height: 112px;
      right: 0;
      background: #e6333aad;
      color: $white;
      h3 {
        text-transform: uppercase;
        font-weight: 400;
      }
      h4 {
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }
}
</style>
