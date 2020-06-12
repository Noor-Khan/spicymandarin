<template>
  <div class="blank-layout">
    <transition name="page" mode="out-in">
      <slot />
    </transition>
  </div>
</template>
<style lang="scss">
.blank-layout {
  background-image: url("../assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
