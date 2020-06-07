<template>
  <div id="Sidebar">
    <ul class="sidebar-list">
      <li class="nav-item">
        <router-link to="/dashboard">
          <i class="el-icon-monitor"></i>
          dashboard
        </router-link>
      </li>
      <li
        class="dropdown-list nav-item"
        :class="dropdownStatus ? 'close' : 'open'"
      >
        <a href.prevent="" @click="dropdown()">
          <i class="el-icon-files"></i>
          courses
          <i
            :class="dropdownStatus ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
          ></i>
        </a>
        <ol class="course-dropdown-menu">
          <li class="nav-item">
            <router-link to="/dashboard/newbie">
              newbie
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="">
              beginner
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="">
              intermediate
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="">
              advanced
            </router-link>
          </li>
        </ol>
      </li>
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-time"></i>
          lesson history
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-search"></i>
          explore lessons
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-collection-tag"></i>
          saved lessons
        </router-link>
      </li>
      <hr />
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-chat-line-round"></i>
          forum
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-position"></i>
          send feedback
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="">
          <i class="el-icon-medal-1"></i>
          donate
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdownStatus: false
    };
  },
  methods: {
    dropdown() {
      this.dropdownStatus = !this.dropdownStatus;
    }
  },
  mounted() {
    document.addEventListener("click", e => {
      if (e.target.classList.contains("router-link-active")) {
        for (let index = 0; index < e.length; index++) {
          const element = array[index];
        }
        e.target.classList.add("active");
      } else {
        return 0;
      }
    });
  }
};
</script>
<style lang="scss">
#Sidebar {
  .sidebar-list {
    list-style-type: none;
    text-align: left;
    padding-left: 0;
    .dropdown-list {
      a {
        i.el-icon-arrow-down,
        i.el-icon-arrow-up {
          float: right;
        }
      }
      &.open {
        .course-dropdown-menu {
          transition: 0.3s ease-in-out;
          height: 240px;
          opacity: 1;
        }
      }
      &.close {
        .course-dropdown-menu {
          transition: 0.3s ease-in-out;
          height: 0;
          opacity: 0;
          visibility: hidden;
        }
      }
      ol {
        background-color: $white;
        padding-left: 0px;
        list-style-type: none;
        li {
          a {
            padding: 20px;
            margin-left: 40px;
            color: $black;
            font-weight: 400;
          }
          &:hover {
            background: $primary;
            a {
              color: $white;
              font-weight: bold;
            }
          }
        }
      }
    }
    li {
      padding: 0;
      transition: 0.3s all;
      display: flex;
      flex-direction: column;
      &:hover {
        background-color: $primary;
        a {
          color: $white;
          font-weight: bold;
          i {
            color: $white;
          }
        }
      }
      a {
        color: $black;
        text-transform: capitalize;
        font-weight: 400;
        padding: 20px;
        i {
          margin-right: 10px !important;
        }
      }
    }
  }
}
</style>
