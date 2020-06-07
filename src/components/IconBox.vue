<template>
  <div class="icon-box">
    <div class="icon">
      <img :src="iconUrl" alt="feature" />
    </div>
    <div class="heading">
      <h4>{{ heading }}</h4>
    </div>
    <div class="summary">
      <p>{{ summary }}</p>
    </div>
    <hr class="seperator" />
  </div>
</template>
<script>
export default {
  props: {
    iconUrl: String,
    heading: String,
    summary: String
  }
};
</script>
<style lang="scss">
.icon-box {
  border-radius: 5px;
  background-color: #fbfbfb;
  padding: 30px 40px;
  margin: 15px 0;
  transition: 0.5s ease-in-out;
  .heading {
    h4 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 18px;
    }
  }
  .summary {
    margin-bottom: 40px;
    p {
      color: $black;
      letter-spacing: 0.4px;
      line-height: 26px;
    }
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 3px 0px #d2d2d2;
  }
}
</style>
