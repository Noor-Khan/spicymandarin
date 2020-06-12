<template>
  <div id="Profile">
    <DashboardBreadcrumb />
    <div class="profile-container">
      <el-row :gutter="20">
        <el-col :lg="16">
          <div class="edit-profile">
            <div class="heading">
              <h3>edit profile</h3>
              <h4>user information</h4>
            </div>
            <div class="profile-form">
              <el-form>
                <el-row :gutter="20">
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        placeholder="first name"
                        v-model="profileForm.firstName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        placeholder="last name"
                        v-model="profileForm.lastName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        placeholder="User name"
                        v-model="profileForm.userName"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        placeholder="Email"
                        v-model="profileForm.email"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :lg="24">
                    <el-form-item>
                      <el-input
                        placeholder="address"
                        v-model="profileForm.address"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :lg="24">
                    <DefaultButton text="update" btnType="primary" />
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="profile-overview">
            <div class="profile-avatar">
              <img
                src="../../assets/images/avatar.png"
                alt=""
                class="img-responsive"
              />
            </div>
            <div class="profile-info">
              <h3>John Doe</h3>
              <p>
                <i class="el-icon-s-flag"></i>
                beginner
              </p>
              <h4>
                <i class="el-icon-map-location"></i>
                beiging, china
              </h4>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import DefaultButton from "../../components/buttons/Default";
import DashboardBreadcrumb from "../../components/dashboard/DashboardBreadcrumb";
export default {
  components: {
    DashboardBreadcrumb,
    DefaultButton
  },
  data() {
    return {
      profileForm: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        address: ""
      }
    };
  }
};
</script>
<style lang="scss">
#Profile {
  .profile-container {
    margin: 3rem 0 2rem 0;
    .edit-profile {
      text-align: left;
      background-color: $white;
      padding: 1rem 3rem 3rem 3rem;
      border-radius: 5px;
      .heading {
        margin-bottom: 2rem;
        h3 {
          margin-bottom: 0;
          text-transform: uppercase;
        }
        h4 {
          margin-top: 5px;
          text-transform: capitalize;
          color: $gray;
          font-weight: 400;
        }
      }
      .profile-form {
        form {
          input {
            box-shadow: 0px 2px 8px #f7f7f7;
            &::placeholder {
              text-transform: capitalize;
            }
          }
        }
      }
      button {
        margin-top: 2rem;
      }
    }
    .profile-overview {
      background-color: $white;
      border-radius: 5px;
      padding: 0rem 1rem 3rem 1rem;
      .profile-avatar {
        img {
          margin-top: -5rem;
          width: 150px;
        }
      }
      .profile-info {
        h3 {
          font-size: 24px;
          font-weight: bold;
        }
        i {
          font-size: 18px;
          color: $primary;
          margin-right: 10px;
        }
        p {
          color: $gray;
          text-transform: uppercase;
          font-size: 14px;
        }
        h4 {
          margin-top: 2rem;
          text-transform: capitalize;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
