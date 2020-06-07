<template>
  <div
    id="DashboardNavbar"
    height="65px"
    style="background-color: #fff;width:100%;"
  >
    <div class="search-box">
      <div class="nav-left">
        <div class="logo">
          <h2><span>spicy</span>mandarin</h2>
        </div>
        <div class="nav-search-box">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="Search Lessons, Courses, Topics"
            v-model="search"
          ></el-input>
        </div>
      </div>
      <div class="nav-right">
        <div class="avatar">
          <el-dropdown trigger="click">
            <div class="el-dropdown-link">
              <img
                src="../../assets/images/avatar.png"
                alt=""
                class="img-responsive el-dropdown-link"
              />
            </div>
            <el-dropdown-menu slot="dropdown" class="avatar-dropdown">
              <div class="heading">
                <h4>Welcome!</h4>
                <h3>John Doe</h3>
              </div>
              <el-dropdown-item icon="el-icon-s-custom">
                <router-link to="/profile">
                  profile
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-tools">
                <router-link to="/settings">
                  settings
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-info">
                <router-link to="/faq">
                  help
                </router-link>
              </el-dropdown-item>
              <hr />
              <el-dropdown-item icon="el-icon-switch-button">
                <router-link to="/signin">
                  sign out
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
            <div class="test-div"></div>
          </el-dropdown>
        </div>
        <ul class="right-nav-panel">
          <li>
            <router-link to="/overview">
              <i class="el-icon-s-home"></i>
            </router-link>
          </li>
          <li>
            <el-badge is-dot class="item">
              <router-link to="/notifications">
                <i class="el-icon-message-solid"></i>
              </router-link>
            </el-badge>
          </li>
          <li>
            <router-link to="/analytics">
              <i class="el-icon-s-data"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style lang="scss">
#DashboardNavbar {
  box-shadow: 0px 0px 15px #c1c1c133;
  .search-box {
    display: flex;
    justify-content: space-between;
    .logo {
      margin: 0 2rem;
      float: left;
      h2 {
        margin: 15px 0;
        font-weight: 100;
        text-transform: uppercase;
        span {
          color: $primary;
        }
      }
    }
    .nav-search-box {
      padding: 5px 0;
      float: right;
      margin-left: 20px;
      .el-input {
        input {
          padding-left: 50px !important;
          width: 20rem;
          font-size: 14px !important;
          height: 50px !important;
          background: #fff !important;
          border: 1px solid #e9eef2 !important;
          border-radius: 40px !important;
          box-shadow: none;
          &::focus {
            .el-input__prefix {
              .el-input__icon {
                &:before {
                  color: $primary;
                }
              }
            }
          }
        }
        .el-input__prefix {
          left: 15px;
          .el-input__icon {
            line-height: 50px;
            &:before {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .nav-right {
    padding: 8px 20px;
    .avatar {
      float: right;
      .el-dropdown {
        &:focus {
          outline: none;
        }
      }
      img {
        width: 40px;
        &:hover,
        &:focus,
        &:visited {
          cursor: pointer;
          outline: none !important;
          border: none !important;
        }
      }
    }
    .right-nav-panel {
      float: left;
      list-style-type: none;
      margin: 0 40px 0 0;
      padding: 10px 0;
      li {
        display: inline-block;
        padding: 0 15px;
        a {
          i {
            font-size: 18px !important;
            color: $black;
          }
        }
      }
    }
  }
}
</style>
