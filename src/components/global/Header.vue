<template>
  <div class="main-header">
    <!-- class="progess-custom hidden-sm-and-up" -->
    <v-toolbar color="#0B324F" class="hidden-md-and-down" dark :scroll-off-screen="true" :scroll-target="'#scrolling-techniques'" style="background:#0B324F; border-bottom: 1px solid #606c7d;" v-show="fixedHeader == true">
      <v-layout>
        <v-img :max-width="150" contain :src="require(`@/assets/logo-woobii.jpg`)"/>
        <v-spacer></v-spacer>
        <!-- <v-tooltip bottom>
          <v-btn slot="activator" flat class="hover-orange">KOSTENLOS ANMELDEN</v-btn>
          <span>KOSTENLOS ANMELDEN</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat class="hover-orange">Einloggen</v-btn>
          <span>Einloggen</span>
        </v-tooltip> -->
        <v-btn slot="activator" flat class="hover-orange" @click="register = true">Kostenlos Anmelden</v-btn>
        <v-dialog v-model="register" max-width="600px">
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <v-icon small class="mr-2 lockIcon">lock</v-icon>
                <h1 class="display-2 text-md-center mb-2">Registrierung</h1>
                <h2 class="display-1 text-md-center mb-2" style="color:#fa6e2f">woobii Plus</h2>
                <p class="body-2 text-md-center mb-4">30 Tage gratis testen<br />
                dann 19,99  pro Monat (oder 199,99  pro Jahr)</p>
                <v-layout row wrap>
                  <v-flex xs12 md10 offset-md1>
                    <v-autocomplete light placeholder="Gemeindetyp" solo></v-autocomplete>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-autocomplete light placeholder="Land" solo></v-autocomplete>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Ort..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Gemeindename..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Emailadresse (Ihr Benutzername)..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Passwort..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Re-Enter Passwort..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-btn block flat class="btn-SignIn">Registrieren</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white" class="right"><v-icon small class="mr-2">fab fa-facebook-f</v-icon> Facebook</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white"><v-icon small class="mr-2">fab fa-twitter</v-icon> Twitter</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-btn slot="activator" flat class="hover-orange" @click="login = true">Einloggen</v-btn>
        <v-dialog v-model="login" max-width="600px">
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <v-icon small class="mr-2 lockIcon">lock</v-icon>
                <h1 class="display-2 text-md-center mb-4">WooBii Login</h1>
                <v-layout row wrap>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Username..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light type="password" placeholder="Password..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-btn block flat class="btn-SignIn">Sign in!</v-btn>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center">
                    <span class="body-1 white--text"  @click="login = false,password = !password" >Passwort vergessen</span>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white" class="right"><v-icon small class="mr-2">fab fa-facebook-f</v-icon> Facebook</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white"><v-icon small class="mr-2">fab fa-twitter</v-icon> Twitter</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="password" max-width="600px">
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <v-icon small class="mr-2 lockIcon">lock</v-icon>
                <h1 class="display-2 text-md-center mb-4">Passwort Vergessen</h1>
                <v-layout row wrap>
                  <v-flex xs12 md10 offset-md1>
                    <v-text-field light placeholder="Emailadresse..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12 md10 offset-md1>
                    <v-btn block flat class="btn-SignIn">Einreichen</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-toolbar>
    <main v-scroll="onScroll" class="smallHeader">
      <v-toolbar prominent color="#0B324F" dark height="40" v-show="fixedHeader == true">
        <router-link to="/">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Home</v-btn>
            <span>Home</span>
          </v-tooltip>
        </router-link>
        <router-link to="/solution">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Lösungen</v-btn>
            <span>Lösungen</span>
          </v-tooltip>
        </router-link>
        <router-link to="/newsroom">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Newsroom</v-btn>
            <span>Newsroom</span>
          </v-tooltip>
        </router-link>
        <router-link to="/kitrchenfinderLocation">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Kirchenfinder</v-btn>
            <span>Kirchenfinder</span>
          </v-tooltip>
        </router-link>
        <router-link to="/mediapartner">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Mediapartner</v-btn>
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
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Home</v-btn>
            <span>Home</span>
          </v-tooltip>
        </router-link>
        <router-link to="/solution">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Lösungen</v-btn>
            <span>Lösungen</span>
          </v-tooltip>
        </router-link>
        <router-link to="/newsroom">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Newsroom</v-btn>
            <span>Newsroom</span>
          </v-tooltip>
        </router-link>
        <router-link to="/kitrchenfinderLocation">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Kirchenfinder</v-btn>
            <span>Kirchenfinder</span>
          </v-tooltip>
        </router-link>
        <router-link to="/mediapartner">
          <v-tooltip bottom>
            <v-btn slot="activator" class="ma-0 mx-3 px-0 hidden-md-and-down" flat>Mediapartner</v-btn>
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
      register: false,
      login: false,
      password: false,
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