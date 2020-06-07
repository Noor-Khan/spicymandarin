<template>
  <div class="lesson-content">
    <div class="heading">
      <h3>{{ heading }}</h3>
    </div>
    <hr class="sep" />
    <div class="summary">
      <p>{{ summary }}</p>
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
    summary: String
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
    p {
      font-size: 18px;
      letter-spacing: 0.4px;
      line-height: 30px;
      font-weight: 100;
    }
  }
  .course-btn {
    margin: 3rem 0;
  }
}
</style>
