<template>
  <div>
    <!-- class="progess-custom hidden-sm-and-up" -->
    <v-toolbar
      color="#0B324F"
      class="hidden-md-and-down"
      dark
      :scroll-off-screen="true"
      :scroll-target="'#scrolling-techniques'"
      style="background:#0B324F; border-bottom: 1px solid #606c7d;"
      v-show="fixedHeader == true"
    >
      <v-layout>
        <v-img :max-width="150" contain :src="require(`@/assets/logo-woobii.jpg`)"/>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <v-btn slot="activator" flat>KOSTENLOS ANMELDEN</v-btn>
          <span>KOSTENLOS ANMELDEN</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat>Einloggen</v-btn>
          <span>Einloggen</span>
        </v-tooltip>
      </v-layout>
    </v-toolbar>
    <main v-scroll="onScroll">
      <v-toolbar prominent color="#0B324F" dark height="40" v-show="fixedHeader == true">
        <router-link to="/">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Home</v-btn>
            <span>Home</span>
          </v-tooltip>
        </router-link>
        <router-link to="/solution">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Lösungen</v-btn>
            <span>Lösungen</span>
          </v-tooltip>
        </router-link>
        <router-link to="/newsroom">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Newsroom</v-btn>
            <span>Newsroom</span>
          </v-tooltip>
        </router-link>
        <router-link to="/kitrchenfinderLocation">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Kirchenfinder</v-btn>
            <span>Kirchenfinder</span>
          </v-tooltip>
        </router-link>
        <router-link to="/mediapartner">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Mediapartner</v-btn>
            <span>Mediapartner</span>
          </v-tooltip>
        </router-link>
        <v-spacer></v-spacer>
        <span class="hidden-md-and-up">
          <v-toolbar-side-icon left @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </span>
      </v-toolbar>
      <v-toolbar prominent color="#0B324F" dark height="40" v-show="fixedHeader == false" fixed>
        <v-img class :max-width="120" contain :src="require(`@/assets/logo-woobii.jpg`)"/>
        <router-link to="/">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Home</v-btn>
            <span>Home</span>
          </v-tooltip>
        </router-link>
        <router-link to="/solution">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Lösungen</v-btn>
            <span>Lösungen</span>
          </v-tooltip>
        </router-link>
        <router-link to="/newsroom">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Newsroom</v-btn>
            <span>Newsroom</span>
          </v-tooltip>
        </router-link>
        <router-link to="/kitrchenfinderLocation">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Kirchenfinder</v-btn>
            <span>Kirchenfinder</span>
          </v-tooltip>
        </router-link>
        <router-link to="/mediapartner">
          <v-tooltip bottom>
            <v-btn slot="activator" class="hidden-md-and-down" flat>Mediapartner</v-btn>
            <span>Mediapartner</span>
          </v-tooltip>
        </router-link>
        <v-spacer></v-spacer>
        <span class="hidden-md-and-up">
          <v-toolbar-side-icon left @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </span>
      </v-toolbar>
    </main>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list class="pt-0" dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>group_work</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Lösungen</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Newsroom</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>track_changes</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Kirchenfinder</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Mediapartner</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>KOSTENLOS ANMELDEN</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Einloggen</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      fixed: true,
      fixedHeader: true,
      offsetTop: 0
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 750;
    },
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop >= 110) {
        this.fixedHeader = false;
        this.fixed = false;
      } else {
        console.log(this.isMobile);
        if (this.isMobile == true) {
          this.fixedHeader = true;
          this.fixed = true;
        } else {
          this.fixedHeader = true;
          this.fixed = false;
        }
      }
    }
  }
};
</script>