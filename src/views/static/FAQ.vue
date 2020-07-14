<template>
  <div id="Guidelines">
    <PageHeader />
    <section id="FAQ" class="section">
      <el-row>
        <el-col :span="24">
          <div class="main-heading">
            <h4>guidelines</h4>
            <h2>frequently asked questions</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="16">
          <el-collapse accordion>
            <FaqItem
              v-for="(faq, index) in faqs"
              :key="index"
              :title="faq.title"
              :name="index + 1"
              :para="faq.para"
            />
          </el-collapse>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import FaqItem from "../../components/faq/FaqItem";
import PageHeader from "../../components/global/Header";
export default {
  components: {
    PageHeader,
    FaqItem
  },
  data() {
    return {
      faqs: [
        {
          title: "What is the duration of the live online class?",
          para:
            "The duration of the live online class is 45 minutes. At the beginning of your lesson, you will have 5 to 10 minutes to launch your class, load our virtual classroom software, say hello to your teacher, make sure everything is working well before your start your lesson."
        },
        {
          title: "ARE YOUR SpicyMANDARIN TEACHERS REAL TRAINED TEACHERS?",
          para:
            "Yes, they have been professionally trained and can give you an interesting and memorable class that caterers to each student's needs."
        },
        {
          title:
            "HOW IS SpicyMANDARIN DIFFERENT FROM OTHER ONLINE MANDARIN SCHOOLS?",
          para:
            "We focus on teaching spoken Mandarin instead of the traditional textbook style. We do not expect students to be able to write, but focus more on the ability to communicate to other people. Our textbooks focuses on the pinyin rather than the Chinese characters. In other words, we will be making sure your pronunciation and tones are good enough for a native speaker to understand you!"
        },
        {
          title:
            "DO THE TEACHERS IN THE LIVE ONLINE CLASS TEACH US IN LINGERIE?",
          para:
            "Unfortunately our SpicyMandarin teachers are in lingerie only in the video clips. We would like for our students to focus more on the academic side for the Live Online Classes, but don't worry our teachers are still dressed very Spicy."
        },
        {
          title:
            "Are the Live Online Classes related to the Lesson Clips on YouTube?",
          para:
            "Yes, all our lessons are based on the clips that you have probably seen on YouTube. Don't worry, even if you have seen the clip, our SpicyMandarin teachers goes into depth in explaining and teaching you Mandarin."
        },
        {
          title:
            "What equipments do you need to participate in the Live Online Classes?",
          para:
            "You would need earphones, web-cam, speakers and motivation. Most modern computers already have the web-cam and speakers built in so there shouldn't be much of a problem."
        },
        {
          title: "Are you going to have SpicyMan soon?",
          para:
            "We have been repeatedly asked about doing SpicyMan for our female students. We believe it is a great idea and if you are interested in getting involved, please do email us at spicy-inquiry@spicymandarin.com"
        },
        {
          title: "How many more lesson clips are you going to have?",
          para:
            "You may have noticed but we are slowly but surely releasing new lessons for our students, we will be continuously releasing new clips as we go along so nothing to worry about!"
        },
        {
          title: "How can I become a SpicyMandarin teacher?",
          para:
            "We are always open for more SpicyMandarin teachers! If you feel Spicy and you know it, send us an email with your resume and why you want to become a SpicyMandarin teacher at spicy-inquiry@spicymandarin.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#Guidelines {
  #FAQ {
    .el-collapse {
      margin: 2rem 1rem;
      .el-collapse-item {
        text-align: left;
        margin: 5px 0;
        p {
          margin-top: 0;
        }
        .el-collapse-item__header {
          padding: 5px 10px;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 18px;
          i {
            margin-right: 10px;
          }
        }
        .el-collapse-item__wrap {
          padding: 5px 20px;
        }
      }
    }
  }
}
</style>
