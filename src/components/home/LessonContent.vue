<template>
  <div class="lesson-content">
    <div class="heading">
      <h3>{{ heading }}</h3>
    </div>
    <hr class="sep" />
    <div class="summary">
      <ul>
        <li v-for="para in summary">{{ para }}</li>
      </ul>
    </div>
    <div class="course-btn">
      <DefaultBtn text="view course" link="/register" />
    </div>
  </div>
</template>
<script>
import DefaultBtn from "../buttons/Default";
export default {
  props: {
    heading: String,
    summary: Array
  },
  components: {
    DefaultBtn
  }
};
</script>
<style lang="scss">
.lesson-content {
  padding: 20px 0;
  text-align: left;
  color: $white;
  .heading {
    h3 {
      font-size: 32px;
      letter-spacing: 1px;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0;
    }
  }
  .summary {
    ul li {
      font-size: 16px;
      letter-spacing: 0.6px;
      line-height: 26px;
      font-weight: 100;
    }
  }
  .course-btn {
    margin: 3rem 0;
  }
}
</style>
