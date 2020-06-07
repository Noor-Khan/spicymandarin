<template>
  <footer id="LargeFooter" class="section">
    <el-row>
      <el-col :lg="6">
        <div class="footer-box">
          <h3 class="logo"><span>spicy</span>mandarin</h3>
          <p>
            Spicymandarin is an unconventional way or method of teaching
            Mandarin to the students who are going to be enrolled.
          </p>
        </div>
      </el-col>
      <el-col :lg="6">
        <div class="footer-box">
          <h3>quick links</h3>
          <ul>
            <li>
              <a href="##">company history</a>
            </li>
            <li>
              <a href="##">forum</a>
            </li>
            <li>
              <a href="##">merchandize</a>
            </li>
            <li>
              <a href="##">casting</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :lg="6">
        <div class="footer-box">
          <h3>Legal</h3>
          <ul>
            <li>
              <router-link to="/privacy-policy">
                Privacy & policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms-conditions">
                Terms & conditions
              </router-link>
            </li>
            <li>
              <router-link to="/guidelines">
                guidelines
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :lg="6">
        <div class="footer-box social">
          <h3>Social links</h3>
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
      </el-col>
    </el-row>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
#LargeFooter {
  background: $dark-gray;
  .footer-box {
    text-align: left;
    padding: 20px 0;
    padding-right: 30px;
    &.social {
      ul {
        li {
          display: inline-block;
          padding-right: 20px;
          a {
            font-size: 26px;
          }
        }
      }
    }
    h3 {
      text-transform: uppercase;
      margin-bottom: 5px;
      margin-top: 5px;
      color: $white;
      font-weight: 400;
      &.logo {
        font-size: 28px;
      }
      span {
        color: $primary;
      }
    }
    p {
      line-height: 26px;
      font-size: 16px;
      font-weight: 100;
    }
    ul {
      padding-left: 0;
      li {
        list-style-type: none;
        line-height: 30px;
        a {
          text-transform: capitalize;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
