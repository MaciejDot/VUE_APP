<template></template>
<script>
export default {
  name: "Forgot Password",
  mounted: function() {
    if (localStorage["token"] != undefined) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>