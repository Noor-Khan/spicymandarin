<template>
  <div id="navbar">
    <TopNav />
    <nav
      class="top-nav"
      id="top-nav"
      :class="{ affix: scrollPoint > 30 }"
      :style="{ top: scrollPoint > 30 ? scrollPoint - scrollPoint : '' }"
    >
      <a href="#" class="nav-brand">
        <img src="../assets/logo-red.png" alt="" v-if="scrollPoint > 30" />
        <img src="../assets/logo.png" alt="" v-else />
        <!-- <h2><span style="color:#ee2625;">spicy</span>mandarin</h2> -->
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <div></div>
      <ul class="menu">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/about">
            About us
          </router-link>
        </li>

        <li>
          <router-link to="/team">
            team
          </router-link>
        </li>

        <li>
          <router-link to="/contact">
            contact us
          </router-link>
        </li>

        <hr class="seperator" />
        <ul class="signup">
          <li>
            <router-link to="/login">
              <img src="../assets/icons/user-2.svg" alt="" />
              login
            </router-link>
          </li>
          <li>
            <router-link to="/signup">
              <img src="../assets/icons/unlock-2.svg" alt="" />
              registration
            </router-link>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
export default {
  props: ["scrollPoint"],
  components: {
    TopNav
  }
};
</script>
<style lang="scss">
#navbar {
  .top-nav {
    position: fixed;
    width: 100%;
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 9;
    transition: 0.5s ease-in-out;
    &.affix {
      background-color: #fff;
      box-shadow: 0 1px 5px 0 #ededed;
      .nav-brand {
        h2 {
          color: $black;
        }
      }
      .menu {
        li a {
          color: $black !important;
        }
      }
    }
    .nav-brand {
      padding-left: 40px;
      h2 {
        font-weight: 100;
        color: #f6f6f6;
        text-transform: uppercase;
      }
    }
    .menu {
      list-style: none;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding-right: 40px;
      margin: 0;
      max-height: 0;
      transition: max-height 0.5s ease-out;
      li a {
        display: inline-block;
        min-width: 75px;
        margin: 0.3em 0;
        padding: 0 10px;
        transition: 0.3 all;
        text-decoration: none;
        font-size: 16px;
        text-transform: capitalize;
        color: $white;
        &.exact-active,
        &:focus,
        &:hover,
        &:active {
          font-weight: bold;
          color: $primary !important;
        }
      }
    }

    .logo {
      display: inline-block;
      width: 150px;
    }

    .menu-icon {
      cursor: pointer;
      display: inline-block;
      padding: 28px 20px;

      .navicon {
        background: #20232d;
        display: block;
        height: 2px;
        position: relative;
        width: 1.625rem;

        &:before,
        &:after {
          background: #20232d;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }

        &:before {
          top: 7px;
        }

        &:after {
          top: -7px;
        }
      }
    }

    .menu-btn {
      display: none;

      &:checked ~ .menu {
        max-height: 500px;
      }

      &:checked ~ .menu-icon .navicon {
        background: transparent;

        &:before {
          transform: rotate(-45deg);
        }

        &:after {
          transform: rotate(45deg);
        }
      }

      &:checked ~ .menu-icon:not(.steps) .navicon {
        &:before,
        &:after {
          top: 0;
        }
      }
    }
  }
}
// DESKTOP MENU CSS
@media (min-width: 840px) {
  #navbar {
    .top-nav {
      .menu {
        width: auto;
        max-height: none;
        flex-direction: row;
        .seperator {
          display: none;
        }
      }
      .signup {
        display: none;
      }
    }
    .top-nav {
      .menu-icon {
        display: none;
      }
    }
  }
}
@media (max-width: 839px) {
  .top-nav {
    background: #fff;
    .nav-brand {
      h2 {
        color: $black !important;
      }
    }
    .menu {
      text-align: left;
      .seperator {
        display: block;
        border: 1px solid $light-gray;
        box-shadow: none;
        width: 100%;
        margin: 15px 10px;
      }
      li {
        padding: 10px 0;
        a {
          color: $black !important;
          font-size: 18px;
        }
      }
    }
    .signup {
      text-align: left;
      display: block;
      padding-left: 0;
      padding-bottom: 30px;
      li {
        // padding: 10px;
        list-style-type: none;
        a {
          color: $black;
          text-transform: capitalize;
          img {
            position: relative;
            top: 3px;
            width: 22px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
