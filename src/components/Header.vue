<template>
  <div class="header">
    <img src="../assets/image/iq-logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.header {
  height: $header-height - ($header-padding-y * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $header-padding-y $header-padding-x;
  img {
    height: 100%;
  }
}
</style>
