<template>
  <div id="Setting">
    <DashboardBreadcrumb />
    <div class="setting-container">
      <el-row :gutter="20">
        <el-col :lg="16">
          <div class="edit-setting">
            <div class="heading">
              <h3>edit setting</h3>
              <h4>user information</h4>
            </div>
            <div class="setting-form">
              <el-form>
                <el-row :gutter="20">
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        type="password"
                        placeholder="password"
                        v-model="settingForm.password"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :lg="12">
                    <el-form-item>
                      <el-input
                        type="password"
                        placeholder="password re-enter"
                        v-model="settingForm.passwordAgain"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :lg="24">
                      <el-select v-model="value" filterable placeholder="Select">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :lg="24">
                    <DefaultButton text="update" btnType="primary" />
                    <div class="close-account">
                      <el-button type="text">close account</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="setting-overview">
            <div class="setting-avatar">
              <img
                src="../../assets/images/avatar.png"
                alt=""
                class="img-responsive"
              />
            </div>
            <div class="setting-info">
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
       options: [{
          value: 'Newbie',
          label: 'Newbie'
        }, {
          value: 'Beginner',
          label: 'Beginner'
        }, {
          value: 'Intermediate',
          label: 'Intermediate'
        }, {
          value: 'Advanced',
          label: 'Advanced'
        }, 
        ],
        value: '',
      settingForm: {
        password: "",
        passwordAgain: "",
        chineseLevel: ""
      }
    };
  }
};
</script>
<style lang="scss">
#Setting {
  .setting-container {
    margin: 3rem 0 2rem 0;
    .edit-setting {
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
      .setting-form {
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
      .close-account {
        float: right;
        margin-top: 15px;
        .el-button {
          color: $primary;
          font-weight: 400;
          text-transform: capitalize;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .setting-overview {
      background-color: $white;
      border-radius: 5px;
      padding: 0rem 1rem 3rem 1rem;
      .setting-avatar {
        img {
          margin-top: -5rem;
          width: 150px;
        }
      }
      .setting-info {
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
