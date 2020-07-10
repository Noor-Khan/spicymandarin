<template>
  <section id="Features" class="section">
    <el-row>
      <el-col :span="24">
        <div class="main-heading">
          <h4>features of spicymandarin</h4>
          <h2>why choose us</h2>
          <hr class="seperator" />
        </div>
      </el-col>
    </el-row>
    <div class="feature-boxes">
      <el-row :gutter="15">
        <masonry
          :cols="{ default: 3, 1200: 2, 700: 1, 400: 1 }"
          :gutter="30"
          class="masonry"
        >
          <div v-for="(feature, index) in features" :key="index" class="item">
            <IconBox
              :heading="feature.heading"
              :iconUrl="feature.iconUrl"
              :summary="feature.detail"
              :download="feature.download"
            />
          </div>
        </masonry>
      </el-row>
    </div>
  </section>
</template>
<script>
import IconBox from "../IconBox";
export default {
  components: {
    IconBox
  },
  data() {
    return {
      features: [
        {
          heading: "Virtual Classroom",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "The Virtual Classroom is designed to give you Mandarin lessons online as if you were in a real classroom. We utilize the latest conferencing technology with share screen, audio, chat and video features to create this experience.",
            "Our lessons and original textbooks have been specifically designed to cater for students learning Mandarin from a non Asian linguistic background.",
            "Our SexyMandarin teachers are certified, native and have been trained to cater you memorable and enjoyable lessons, whether it is a private or a group lesson."
          ]
        },
        {
          heading: "Private lessons",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "This is your chance to learn Mandarin quick 'n' easy with your SexyMandarin teacher at your full attention."
          ]
        },
        {
          heading: "Self-study lessons",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "With our Self-study lessons, study your vocabulary, grammar and dialogues, practice with exercises and correct your mistakes with the suggested answers.",
            "Or with ours Survival Guides, help you get out of any situations in your everyday life. Deals with anything that is commonly used and useful for you to learn."
          ]
        },
        {
          heading: "DailyVOCAB",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "Daily PDF. A word a day keeps the boring schools away! DailyVOCAB is designed to give you a new word every day. What an achievement if you can learn 365 words a year, and over 700 in 2 years!",
            "Each word comes with audio features, example sentences and downloadable PDF files for you to study in your free time."
          ],
          download:
            "https://www.sexymandarin.com/v2/wp-content/free/DailyVOCAB-friend.pdf"
        },
        {
          heading: "Access to material",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "You will have full access to our course materials in which you can review our infamous SexyMandarin clips, original textbooks, homeworks and audio features.",
            "You will also get notifications on new lesson updates! Also have homework checked by your teacher..."
          ]
        },
        {
          heading: "Access to full videos",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "While our unpaid subs can only see a preview of the videos, you would be able to see the full lesson clips and utilize this for your self review."
          ]
        },
        {
          heading: "Access to BTS videos",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "Want to know what is going on behind the scenes while shooting our videos? We share with you some of our very exclusive videos and interviews with our SexyMandarin teachers."
          ]
        },
        {
          heading: "Download videos",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "You want to watch one of our lesson on your phone, on your way to work? Just download it and watch it as many times as you need. VALUE plan limits 1 download per week."
          ]
        },
        {
          heading: "Ask Tiffany",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "Any Chinese related questions? Or questions you want to ask about our teachers? Tiffany will give you the answer you are expecting!"
          ]
        },
        {
          heading: "Email, Chat & Phone support",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "Any problems? We will try and answer all your questions! Just e-mail us.",
            "Need immediate support? One of our teachers will assist you on our live chat function.",
            "Need assistance on the phone? Feel free to call us during our business hours and one of our teachers will assist you."
          ]
        },
        {
          heading: "Poker sized Game Cards",
          iconUrl: "/images/icons/feature.svg",
          detail: [
            "This is a present for signing up with us on the DETERMINED package. This pack includes 54 photos of SexyMandarin girls and 54 Chinese characters for you to master while playing a game."
          ]
        }
      ]
    };
  }
};
</script>
