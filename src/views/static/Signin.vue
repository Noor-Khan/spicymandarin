<template>
  <div id="Signin">
    <div class="middle-content">
      <h2 class="logo"><span>spicy</span>mandarin</h2>
      <div class="signin-box">
        <div class="heading">
          <h2>welcome back</h2>
          <p>sign in to student dashboard</p>
          <hr class="sep" />
        </div>
        <el-form>
          <el-row>
            <el-col :lg="24">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-user"
                  placeholder="Email or username"
                  v-model="signin.email"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="24">
              <el-form-item>
                <el-input
                  suffix-icon="el-icon-user"
                  placeholder="Pasword"
                  v-model="signin.password"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="12">
              <div class="remember">
                <el-checkbox v-model="remember">Remember password</el-checkbox>
              </div>
            </el-col>
            <el-col :lg="12">
              <div class="forgot-password">
                <router-link to="">
                  forgot password?
                </router-link>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="24">
              <div class="signup-button">
                <DefaultButton
                  text="sign in"
                  btnType="primary"
                  link="/dashboard/overview"
                  @click="this.$router.push('/dashboard/overview')"
                />
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
            <div class="redirect-signup">
              <p>
                <router-link to="/register">
                  Create an account?
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
import DefaultButton from "../../components/buttons/Default";
export default {
  components: {
    DefaultButton
  },
  data() {
    return {
      remember: false,
      signin: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
<style lang="scss">
#Signin {
  height: 110vh;
  padding: 40px 0;
  width: 100%;
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
  .signin-box {
    background: #fff;
    border-radius: 5px;
    padding: 30px 40px;
    margin: 0 auto;
    width: 35%;
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
    .redirect-signup {
      margin-top: 2rem;
      p {
        color: $gray;
        font-weight: 400;
        a {
          color: $primary;
        }
      }
    }
    .remember {
      text-align: left;
      margin: 10px 0;
      .el-checkbox__input.is-checked + .el-checkbox__label {
        color: $primary;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner,
      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: $primary;
        color: $primary;
        border-color: $primary;
      }
    }
    .forgot-password {
      margin: 10px 0;
      text-align: right;
      a {
        font-size: 14px;
        text-transform: capitalize;
        color: $primary;
      }
    }
  }
}
</style>
