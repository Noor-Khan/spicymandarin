<template>
  <div id="dashboard-footer">
    <div class="footer-links">
      <ul>
        <li>
          <router-link to="">
            privacy & policy
          </router-link>
        </li>
        <li>
          <router-link to="">
            terms
          </router-link>
        </li>
        <li>
          <router-link to="">
            guidelines
          </router-link>
        </li>
      </ul>
    </div>
    <hr />
    <div class="footer-bottom">
      <div class="copyright">
        <p>
          © 2020 - <router-link to="/"><span>SPICY</span>MANDARIN</router-link>
        </p>
        <p></p>
      </div>
      <div class="social">
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
    </div>
  </div>
</template>
<style lang="scss">
#dashboard-footer {
  background-color: #393939;
  text-align: left;
  padding: 15px 40px;
  .footer-links {
    ul {
      padding-left: 0;
      li {
        list-style-type: none;
        display: inline-block;
        padding: 10px 25px 10px 0;
        a {
          color: $white;
          text-transform: capitalize;
        }
      }
    }
  }
  hr {
    border: 1px solid #555151;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    .copyright {
      a {
        font-weight: 100;
        span {
          color: $primary;
        }
      }
    }
    .social {
      ul {
        li {
          list-style-type: none;
          padding: 5px 0 5px 15px;
          display: inline-block;
          a {
            font-size: 22px !important;
          }
        }
      }
    }
  }
}
</style>
