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
        <el-col :lg="8" :sm="12" v-for="(member, index) in team" :key="index">
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
          name: "Michael Gleissner",
          title: "lesson designer",
          img: "/images/team.jpg"
        },
        {
          name: "Michael Gleissner",
          title: "lesson designer",
          img: "/images/team.jpg"
        },
        {
          name: "Michael Gleissner",
          title: "lesson designer",
          img: "/images/team.jpg"
        },
        {
          name: "Michael Gleissner",
          title: "lesson designer",
          img: "/images/team.jpg"
        },
        {
          name: "Michael Gleissner",
          title: "lesson designer",
          img: "/images/team.jpg"
        },
        {
          name: "Michael Gleissner",
          title: "lesson designer",
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
