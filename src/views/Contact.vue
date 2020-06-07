<template>
  <div id="Contact">
    <PageHeader />
    <section id="ContactUs" class="section">
      <el-row>
        <el-col :span="24">
          <div class="main-heading">
            <h4>send your queries</h4>
            <h2>contact us</h2>
            <hr class="seperator" />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="100">
        <el-col :lg="16">
          <el-form class="contact-form">
            <el-row :gutter="20">
              <el-col :lg="12">
                <el-form-item label="Name">
                  <el-input
                    suffix-icon="el-icon-user"
                    placeholder="Name"
                    v-model="contact.name"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12">
                <el-form-item label="Subject">
                  <el-input
                    suffix-icon="el-icon-s-order"
                    placeholder="Subject"
                    v-model="contact.subject"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :lg="12">
                <el-form-item label="Email">
                  <el-input
                    placeholder="Email"
                    suffix-icon="el-icon-message"
                    v-model="contact.email"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="24">
                <el-form-item
                  suffix-icon="el-icon-message"
                  :rows="10"
                  label="Message"
                >
                  <el-input
                    type="textarea"
                    placeholder="Message.."
                    v-model="contact.message"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="contact-button">
                  <DefaultButton text="Submit" />
                </div>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :lg="8">
          <div class="contact-list">
            <h4>contact information</h4>
            <hr class="sep" />
            <p>
              <i class="el-icon-map-location"></i>
              Street: Xin Xing Lu 13hao Tian Ci Yuan 8hao Lou Di Shang Bei Ce
              4lou.
            </p>
            <p>
              <i class="el-icon-phone"></i>
              Phone: +86. 13052810762
            </p>
            <p>
              <i class="el-icon-message"></i>
              Email: admin@spicymandarin.com
            </p>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../components/Header";
import DefaultButton from "../components/buttons/Default";
export default {
  components: {
    PageHeader,
    DefaultButton
  },
  data() {
    return {
      contact: {
        name: "",
        subject: "",
        email: "",
        message: ""
      }
    };
  }
};
</script>
<style lang="scss">
#ContactUs {
  margin-top: 70px;
  .contact-form {
    margin: 3rem 0;
    .contact-button {
      text-align: left;
      margin-top: 40px;
      button {
        width: 210px;
        border: none;
        box-shadow: 0 4px 10px 4px #f3f3f3;
      }
    }
  }
  .contact-list {
    text-align: left;
    margin-top: 40px;
    h4 {
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      display: flex;
      padding: 10px 0;
      line-height: 30px;
      i {
        font-size: 20px;
        margin-right: 20px;
        margin-top: 2px;
        color: $primary;
      }
      color: $gray;
    }
  }
}
</style>
