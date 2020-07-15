<template>
  <section id="Lessons" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading light">
          <h4>learn chinese mandarin</h4>
          <h2>our lessons</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="newbie"
            :summary="[
              `Able to recognize Pinyin and 4 tones, and read Chinese with the help of Pinyin.`,
              `Able to greet with others and make a basic self-introduction.`,
              `Able to express one's feelings and make basic daily conversations.`,
              `Able to celebrate the most popular festivals in China and get to know the culture behind it.`,
              `Able to purpose and respond to a certain number to daily demands.`,
              `Able to respond to a certain number of emergent cases.`,
              `Able to write 100 or more Chinese characters.`
            ]"
          />
        </el-col>
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <vue-plyr ref="plyr">
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/ePI4BD3y-Zo?rel=0&loop=1&autoplay=0&playlist=ePI4BD3y-Zo"
                  frameborder="0"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                >
                </iframe>
              </div>
            </vue-plyr>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <vue-plyr ref="plyr">
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/ePI4BD3y-Zo?rel=0&loop=1&autoplay=0&playlist=ePI4BD3y-Zo"
                  frameborder="0"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                >
                </iframe>
              </div>
            </vue-plyr>
          </div>
        </el-col>
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="beginner"
            :summary="[
              `Able to understand a certain amount of vocabularies and use them freely in daily conversation.`,
              `Able to make statements, raise questions and respond to others accurately.`,
              `Able to exchange information freely for basic social needs.`,
              `Able to talk about and exchange opinions on current affairs.`,
              `Able to joke with your friends.`,
              `Able to know more about the influence of Chinese culture on Chinese language.`,
              `Able to write 250 or more Chinese characters.`
            ]"
          />
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="intermediate"
            :summary="[
              `Able to give prepared presentations, and discuss business routines.`,
              `Able to have basic work-related interactions with colleagues.`,
              `Able to start using complex expressions and phrases.`,
              `Able to understand more street Chinese and use them in daily conversation.`,
              `Able to obtain information from a variety of sources.`,
              `Able to conduct in-depth conversations regarding daily life and career.`
            ]"
          />
        </el-col>
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <vue-plyr ref="plyr">
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/ePI4BD3y-Zo?rel=0&loop=1&autoplay=0&playlist=ePI4BD3y-Zo"
                  frameborder="0"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                >
                </iframe>
              </div>
            </vue-plyr>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lesson-box">
      <el-row :gutter="20">
        <el-col :lg="12" :sm="24">
          <div class="lesson-video">
            <vue-plyr ref="plyr">
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/ePI4BD3y-Zo?rel=0&loop=1&autoplay=0&playlist=ePI4BD3y-Zo"
                  frameborder="0"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                >
                </iframe>
              </div>
            </vue-plyr>
          </div>
        </el-col>
        <el-col :lg="12" :sm="24" :pull="0">
          <LessonContent
            heading="advanced"
            :summary="[
              `Able to use Chinese fluently and accurately.`,
              `Able to comprehend materials and deal with a variety of work tasks.`,
              `Able to express opinions with high flexibility.`,
              `Able to react to cultural phenomenon in a proper manner.`,
              `Able to obtain information from a variety of sources.`,
              `Able to conduct conversations in native Chinese.`
            ]"
          />
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
import IconBox from "../../components/global/IconBox";
import LessonContent from "../../components/home/LessonContent";
export default {
  components: {
    IconBox,
    LessonContent
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#Lessons {
  margin-top: 70px;
  background-color: #393939;
  .lesson-box {
    padding: 3rem 0;
    .lesson-video {
      text-align: left;
    }
  }
}
</style>
