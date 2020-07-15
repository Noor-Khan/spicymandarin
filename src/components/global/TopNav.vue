<template>
  <el-menu class="el-menu top-navbar" mode="horizontal">
    <ul class="menu-list">
      <el-menu-item index="1">
        <router-link to="/register">
          <i class="el-icon-unlock"></i>
          Register
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/signin">
          <i class="el-icon-user"></i>
          Login
        </router-link>
      </el-menu-item>
      <span class="pipe">|</span>
      <div class="social-list">
        <ul>
          <li>
            <a href="##">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i class="fab fa-vimeo"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </ul>
  </el-menu>
</template>
<script>
export default {};
</script>
<style lang="scss">
.top-navbar {
  height: 38px;
  padding: 0 40px;
  background: #202020;
  border-bottom: transparent !important;
  color: #f6f6f6;
  .menu-list {
    display: flex;
    flex-direction: row-reverse;
    &:focus {
      outline: none;
    }
    .el-menu-item {
      line-height: 38px;
      height: 38px;
      padding: 0 15px;
      color: #f6f6f6;
      font-size: 14px;
      span {
        img {
          margin-bottom: 5px;
          width: 18px;
        }
      }
      &:hover {
        background: none;
        color: #ee2625;
        span {
          img {
            fill: #ee2625;
          }
        }
      }
    }
    .pipe {
      color: #696969;
      font-size: 24px;
      margin-top: 2px;
    }
    .social-list {
      padding: 9px 0;
      ul {
        li {
          display: inline-block;
          list-style-type: none;
          padding-right: 20px;
        }
      }
    }
  }
}
@media (max-width: 840px) {
  .top-navbar {
    display: none;
  }
}
</style>
