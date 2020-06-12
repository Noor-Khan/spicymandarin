<template>
  <div id="Newbie">
    <DashboardBreadcrumb />
    <el-row :gutter="20">
      <el-col :lg="16">
        <div class="main-media">
          <h2>your first step!</h2>
          <div class="feature-video">
            <div class="overlay"></div>
            <LazyYoutubeVideo
              :src="`https://www.youtube.com/embed/${videoURL}`"
            >
            </LazyYoutubeVideo>
            <div class="video-content">
              <h2>{{ videoTitle }}</h2>
              <p>category</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :lg="8">
        <div class="navigation-videos">
          <div class="upcoming-video">
            <h4>Title of the lesson</h4>
            <p>category of the lesson</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
export default {
  components: {
    DashboardBreadcrumb
  },
  computed: {},
  data() {
    return {
      videoURL: "",
      videoTitle: ""
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
      });
  }
};
</script>
<style lang="scss">
#Newbie {
  .main-media {
    text-align: left;
    margin: 2rem 0;
    padding: 2rem 1rem;
    border-radius: 5px;
    background-color: $white;
    .y-video {
      .y-video__inner {
        picture {
          img {
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: #000;
            }
          }
        }
      }
    }
  }
  .navigation-videos {
    background-color: $white;
    border-radius: 5px;
    margin: 2rem 0;
  }
}
</style>
