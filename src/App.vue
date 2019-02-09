<template>
  <v-app>
    <!-- <v-progress-linear v-model="value" :height="height" class="ma-0" :active="show" color="#FB6E30" :indeterminate="query" :query="true"></v-progress-linear> -->
    <Header/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

export default {
  name: "App",
  data() {
    return {
      dialog: false,
      // baseUrl: process.env.BASE_URL
      value: 0,
      query: false,
      show: false,
      height: 0,
      interval: 0
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    //this.$Progress.finish();
    //this.queryAndIndeterminate();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    //this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
         this.show = true;
         this.value = 0;
         this.query = false;
         this.height = 4;
        this.interval = setInterval(() => {
          if (this.value === 100) {
            clearInterval(this.interval);
            this.show = false;
            this.height = 0;
           // return setTimeout(this.queryAndIndeterminate, 1000);
          }
          this.value += 20;
        }, 500);
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        
        // parse meta tags
        //this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      //this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      //this.$Progress.finish();
      //this.show = false;
      //this.query = true;
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    
  }
};
</script>