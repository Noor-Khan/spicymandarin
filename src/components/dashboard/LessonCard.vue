<template>
  <div class="lesson-card" :style="{ 'background-image': `url(${img})` }">
    <div class="overlay"></div>
    <div class="save-lesson" :class="{ saved: saved }">
      <i class="fa fa-heart"></i>
    </div>
    <div class="lesson-content">
      <div class="lesson-title">
          <h4>{{ title }}</h4>
        </a>
      </div>
      <div class="lesson-sub-category">
        <p>{{ subCategory }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    subCategory: String,
    img: String,
    saved: Boolean,
 }
};
</script>
<style lang="scss">
.lesson-card {
  position: relative;
  background-position: center;
  background-size: cover;
  margin: 5px 0;
  padding: 25%;
  transition: 2s ease-in-out;
  .lesson-content {
    text-align: left;
    position: absolute;
    left: 20px;
    bottom: 0;
    .lesson-title {
      a {
        text-decoration: none;
        h4 {
          font-weight: 400;
          margin-bottom: 0;
          color: #fff;
        }
      }
    }
    .lesson-sub-category {
      margin: 5px 0;
      border-radius: 40px;
      padding: 2px 0;
      width: 125px;
      p {
        margin: 0;
        font-size: 14px;
        text-transform: capitalize;
        color: $white;
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(32, 32, 32, 0.2) 0%,
      #202020 100%
    ) !important;
  }
  .save-lesson {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 3px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50%;
    width: 25px;
    line-height: 28px;
    height: 25px;
    text-align: center;
    font-size: 18px;
    transition: 0.2s ease-in-out;
    &.saved {
      background-color: $primary;
      color: $white;
      border-color: $primary;
    }
    &:hover {
      cursor: pointer;
      background-color: $primary;
      color: $white;
      border-color: $primary;
    }
  }
}
</style>
