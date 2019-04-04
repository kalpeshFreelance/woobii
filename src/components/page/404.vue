<template>
  <v-content class="mainWrapper white">
    <v-container class="white text-xs-center">
      <h1 class="display-4 font-weight-light align-center indigo--text text--darker-1 mt-4">4<v-icon class="ml-1" size="100px" color="indigo darker-1" style="position:relative;top:-18px;">bug_report</v-icon>4</h1>
      <h2 class="display-3 font-weight-black align-center my-4">Opps! Page not found</h2>
      <h4 class="headline align-center blue-grey--text">We're sorry, the page you requested could not be found.<br/>Please go back to the homepage or contact us at support@woobii.com</h4>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // baseUrl: process.env.BASE_URL
    };
  }
};
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>
