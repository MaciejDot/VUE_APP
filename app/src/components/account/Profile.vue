<template></template>
<script>
export default {
  name: "Profile",
  mounted: function() {
    if (localStorage["token"] == undefined) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>