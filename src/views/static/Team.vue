<template>
  <div id="OutTeam">
    <PageHeader />
    <section id="Team" class="section">
      <el-row>
        <el-col :span="24">
          <div class="main-heading">
            <h4>meet our professional & passionate team</h4>
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
            <div class="inner-overlay">
              <div class="member">
                <h4>{{ member.name }}</h4>
                <p><strong>Talent:</strong> {{ member.title }}</p>
                <p><strong> Hometown:</strong> {{ member.address }}</p>
                <p><strong>Measurements:</strong> {{ member.measurements }}</p>
                <div v-for="(star, index) in member.stars" class="ratings">
                  <star-rating
                    :show-rating="false"
                    :rating="star.rating"
                    :star-size="20"
                    :key="index"
                    active-color="#ee2625"
                    :glow="5"
                    :read-only="true"
                    :increment="0.5"
                  >
                  </star-rating>
                  <span>{{ star.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../../components/global/Header";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      team: [
        {
          name: "mick gleissner",
          title: "Voice of MR. FUNG",
          measurements: "39-47-43",
          address: "Regensburg, GER",
          stars: [
            { rating: 4, label: "mandarin" },
            { rating: 4.5, label: "academics" },
            { rating: 3, label: "sports" },
            { rating: 4, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "kaoru kikuchi",
          title: "Cartoonist and Creator",
          measurements: "32-23-33",
          address: "Tokyo, japan",
          stars: [
            { rating: 4, label: "mandarin" },
            { rating: 4, label: "academics" },
            { rating: 3.5, label: "sports" },
            { rating: 5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "mike wang",
          title: "Lesson Designer",
          measurements: "I don't know...",
          address: "Hebei, china",
          stars: [
            { rating: 5, label: "mandarin" },
            { rating: 4, label: "academics" },
            { rating: 3, label: "sports" },
            { rating: 2.5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "alfred III gatson",
          title: "Editor",
          measurements: "39-47-43",
          address: "Miami, USA",
          stars: [
            { rating: 3, label: "mandarin" },
            { rating: 4.5, label: "academics" },
            { rating: 3.5, label: "sports" },
            { rating: 4.5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "mharvey o'neil",
          title: "producer",
          measurements: `6'2"`,
          address: " St. Louis, USA",
          stars: [
            { rating: 4, label: "mandarin" },
            { rating: 3, label: "academics" },
            { rating: 2, label: "sports" },
            { rating: 5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "jun segura",
          title: "web developer",
          measurements: "32-28-34",
          address: "Iloilo, philippines",
          stars: [
            { rating: 2.5, label: "mandarin" },
            { rating: 5, label: "academics" },
            { rating: 4.5, label: "sports" },
            { rating: 5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "akane minagawa",
          title: "make-up artist",
          measurements: "35-25-34",
          address: "Kyoto, japan",
          stars: [
            { rating: 3, label: "mandarin" },
            { rating: 5, label: "academics" },
            { rating: 4, label: "sports" },
            { rating: 5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "arthur tao",
          title: "director",
          measurements: "40-34-40",
          address: "Taipei, taiwan",
          stars: [
            { rating: 5, label: "mandarin" },
            { rating: 3, label: "academics" },
            { rating: 4, label: "sports" },
            { rating: 4.5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "martin zapanta",
          title: "DP",
          measurements: "39-47-43",
          address: "Manila, philippines",
          stars: [
            { rating: 3, label: "mandarin" },
            { rating: 3.5, label: "academics" },
            { rating: 5, label: "sports" },
            { rating: 4.5, label: "charm" }
          ],
          img: "/images/team.jpg"
        },
        {
          name: "vanessa tuan",
          title: "teacher",
          measurements: "32-24-34",
          address: "Taipei, Taiwan",
          stars: [
            { rating: 5, label: "mandarin" },
            { rating: 4, label: "academics" },
            { rating: 4.5, label: "sports" },
            { rating: 5, label: "charm" }
          ],
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
        transition: 0.5s ease-in-out;
        opacity: 0;
      }
      .inner-overlay {
        transition: 0.5s ease-in-out;
        opacity: 1;
      }
    }
    .team-inner-content {
      position: absolute;
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
    .inner-overlay {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.83);
      top: 0;
      left: 0;
      z-index: 1;
      .member {
        padding: 10px 20px;
        text-align: left;
        h4 {
          text-transform: uppercase;
          font-size: 22px;
          margin-bottom: 0;
        }
        p {
          text-transform: capitalize !important;
        }
        .ratings {
          margin-top: 10px;
          display: flex;
          span {
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>
