<template>
  <div id="Signup">
    <div class="middle-content">
      <h2 class="logo"><span>spicy</span>mandarin</h2>
      <div class="signup-box">
        <div class="heading">
          <h2>create an account</h2>
          <p>sign up to student dashboard</p>
          <hr class="sep" />
        </div>
        <el-form>
          <el-row :gutter="20">
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-user"
                  placeholder="first name"
                  v-model="register.firstName"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-user"
                  placeholder="last name"
                  v-model="register.lastName"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-message"
                  type="email"
                  placeholder="email"
                  v-model="register.email"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-user"
                  placeholder="user name"
                  v-model="register.userName"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-lock"
                  type="password"
                  placeholder="password"
                  v-model="register.password"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-lock"
                  type="password"
                  placeholder="re-enter password"
                  v-model="register.repeatPassword"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="24">
              <div class="signup-button">
                <DefaultButton text="sign up" btnType="primary" />
              </div>
            </el-col>
          </el-row>
        </el-form>
        <h3 style="text-transform: uppercase;">or</h3>
        <el-row>
          <el-col :lg="24">
            <div class="google-button">
              <DefaultButton text="continue with google" icon="fab fa-google" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="24">
            <div class="facebook-button">
              <DefaultButton
                text="continue with facebook"
                icon="fab fa-facebook"
              />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="24">
            <div class="redirect-login">
              <p>
                Aready have an account? Please
                <router-link to="/signin">
                  Login here
                </router-link>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from "../components/buttons/Default";
export default {
  components: {
    DefaultButton
  },
  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        repeatPassword: ""
      }
    };
  }
};
</script>
<style lang="scss">
#Signup {
  height: 110vh;
  width: 100%;
  padding: 40px 0;
  display: table;
  h2.logo {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 36px;
    color: $white;
    span {
      color: $primary;
    }
  }
  .signup-box {
    background: #fff;
    border-radius: 5px;
    padding: 30px 40px;
    margin: 0 auto;
    width: 40%;
    @media (max-width: 800px) {
      width: 80%;
    }
    input::placeholder {
      text-transform: capitalize;
    }
    input {
      height: 50px;
    }
    .heading {
      margin-bottom: 3rem;
      h2 {
        text-transform: uppercase;
        font-size: 28px;
        margin-bottom: 0;
      }
      p {
        color: $gray;
        text-transform: uppercase;
      }
      .sep {
        margin: 0 auto;
      }
    }
    .signup-button,
    .google-button,
    .facebook-button {
      margin: 10px 0;
      button {
        width: 100%;
        font-weight: bold;
      }
    }
    .redirect-login {
      margin-top: 2rem;
      p {
        color: $gray;
        font-weight: 400;
        a {
          color: $primary;
        }
      }
    }
  }
}
</style>
