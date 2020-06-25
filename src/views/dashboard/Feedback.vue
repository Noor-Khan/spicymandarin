<template>
  <div id="Feedback">
    <Header title="send your feedback" />
    <div class="feedback-box">
      <el-row>
        <el-col :lg="24">
          <div class="feedback-heading">
            <h3>send feedback</h3>
            <p>
              Consequat, enim tortor mi mauris, quis libero, porttitor pretium.
              Lacus augue sed.
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :lg="16">
          <el-form>
            <h4>Detail Description</h4>
            <el-form-item>
              <el-input
                :rows="2"
                type="textarea"
                placeholder="Type your feedback here (min 40 characters)"
                v-model="feedback"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="rating">
            <h4>Rating (How do you rate our dashboard and website.)</h4>
            <star-rating
              :show-rating="false"
              :star-size="40"
              active-color="#ee2625"
              :glow="5"
              @rating-selected="setRating"
              :increment="0.5"
            ></star-rating>
            <div style="margin-top:10px;font-weight:bold;">{{ rating }}</div>
          </div>
          <div class="feedback-button">
            <DefaultButton text="send feedback" btnType="primary" />
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="side-img">
            <img
              src="../../assets/images/chat.png"
              alt=""
              class="img-responsive"
            />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import DefaultButton from "../../components/buttons/Default";
import Header from "../../components/dashboard/Header";
export default {
  components: {
    Header,
    DefaultButton
  },
  data() {
    return {
      feedback: "",
      rating: "No Rating Selected"
    };
  },
  methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    }
  }
};
</script>
<style lang="scss">
#Feedback {
  .feedback-box {
    padding: 1rem 2rem;
    text-align: left;
    border-radius: 5px;
    background-color: $white;
    margin: 2rem 0;
    .feedback-heading {
      text-align: left;
      h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 0;
      }
      p {
        margin-top: 5px;
        color: $gray;
      }
    }
    form {
      textarea {
        box-shadow: 0px 2px 8px #f7f7f7;
      }
    }
    .rating {
      margin: 2rem 0;
    }
    .feedback-button {
      margin-top: 2rem;
    }
    .side-img {
      position: relative;
      text-align: center;
      margin-top: 4rem;
    }
  }
}
</style>
