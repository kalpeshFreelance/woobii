<template>
  <div class="main-header">
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
        <!-- <v-tooltip bottom>
          <v-btn slot="activator" flat class="hover-orange">KOSTENLOS ANMELDEN</v-btn>
          <span>KOSTENLOS ANMELDEN</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat class="hover-orange">Einloggen</v-btn>
          <span>Einloggen</span>
        </v-tooltip>-->
        <v-dialog v-model="dialogreg" max-width="600px">
          <v-btn slot="activator" flat class="hover-orange">KOSTENLOS ANMELDEN</v-btn>
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <v-icon small class="mr-2 lockIcon">lock</v-icon>
                <h1 class="display-2 text-md-center mb-2">Registrierung</h1>
                <h2 class="display-1 text-md-center mb-2" style="color:#fa6e2f">woobii Plus</h2>
                <p class="body-2 text-md-center mb-4">30 Tage gratis testen
                  <br>dann 19,99 pro Monat (oder 199,99 pro Jahr)
                </p>
                <v-layout row wrap>
                  <form @submit.prevent="submit('form-1')" data-vv-scope="form-1">
                    <v-flex xs12 md10 offset-md1>
                      <v-autocomplete
                        light
                        placeholder="Gemeindetyp"
                        solo
                        v-model="gemeindetype"
                        :items="GemeindetypeList"
                        v-validate="'required'"
                        :error-messages="errors.collect('form-1.gemeindetype')"
                        label="Gemeindetyp"
                        item-text="type"
                        item-value="id"
                        data-vv-name="gemeindetype"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-autocomplete
                        light
                        placeholder="Land"
                        solo
                        v-model="land"
                        @change="listofcity"
                        :items="LandList"
                        v-validate="'required'"
                        :error-messages="errors.collect('form-1.land')"
                        label="Land"
                        item-text="name"
                        item-value="id"
                        data-vv-name="land"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-autocomplete
                        light
                        placeholder="Ort"
                        solo
                        v-model="ort"
                        :items="OrtList"
                        v-validate="'required'"
                        :error-messages="errors.collect('form-1.ort')"
                        label="Ort"
                        item-text="place"
                        item-value="id"
                        data-vv-name="ort"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        placeholder="Gemeindename..."
                        solo
                        type="text"
                        v-validate="'required'"
                        v-model="gemeindename"
                        :error-messages="errors.collect('form-1.gemeindename')"
                        label="Gemeindename"
                        data-vv-name="gemeindename"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        placeholder="Emailadresse (Ihr Benutzername)..."
                        solo
                        type="email"
                        v-validate="'required|email'"
                        v-model="Emailadresse"
                        :error-messages="errors.collect('form-1.Emailadresse')"
                        label="Emailadresse"
                        data-vv-name="Emailadresse"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        placeholder="Passwort..."
                        solo
                        type="password"
                        v-validate="'required'"
                        v-model="enterpassword"
                        :error-messages="errors.collect('form-1.enterpassword')"
                        label="Password"
                        data-vv-name="enterpassword"
                        autocomplete="enterpassword"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        placeholder="Re-Enter Passwort..."
                        solo
                        type="password"
                        v-validate="'required|confirmed:enterpassword'"
                        v-model="reenterpassword"
                        :error-messages="errors.collect('form-1.reenterpassword')"
                        label="Re-Enter Password"
                        data-vv-name="reenterpassword"
                        autocomplete="reenterpassword"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-btn block flat class="btn-SignIn" type="submit">Registrieren</v-btn>
                    </v-flex>
                  </form>
                  <v-flex xs6>
                    <v-btn outline color="white" class="right" @click="facebookLogin">
                      <v-icon small class="mr-2">fab fa-facebook-f</v-icon>Facebook
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white" @click="twitterLogin">
                      <v-icon small class="mr-2">fab fa-twitter</v-icon>Twitter
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialoglog" max-width="600px">
          <v-btn slot="activator" flat class="hover-orange">Einloggen</v-btn>
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <v-icon small class="mr-2 lockIcon">lock</v-icon>
                <h1 class="display-2 text-md-center mb-4">WooBii Login</h1>
                <v-layout row wrap>
                  <v-form @submit.prevent="submit('form-2')" data-vv-scope="form-2">
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        type="text"
                        placeholder="Email/Username..."
                        solo
                        v-validate="'required'"
                        v-model="emailusername"
                        :error-messages="errors.collect('form-2.emailusername')"
                        label="Email/Username"
                        data-vv-name="emailusername"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        solo
                        type="password"
                        placeholder="Passwort..."
                        v-validate="'required'"
                        v-model="loginpassword"
                        :error-messages="errors.collect('form-2.loginpassword')"
                        label="Password"
                        data-vv-name="loginpassword"
                        autocomplete="loginpassword"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-btn type="submit" block flat class="btn-SignIn">Sign in!</v-btn>
                    </v-flex>
                  </v-form>
                  <v-flex xs12 class="text-xs-center">
                    <span
                      class="body-1 white--text"
                      @click="login = false, password = !password"
                    >Passwort vergessen</span>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white" class="right" @click="facebookLogin">
                      <v-icon small class="mr-2">fab fa-facebook-f</v-icon>Facebook
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn outline color="white" @click="twitterLogin">
                      <v-icon small class="mr-2">fab fa-twitter</v-icon>Twitter
                    </v-btn>
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
                <form @submit.prevent="submit('form-3')" data-vv-scope="form-3">
                  <h1 class="display-2 text-md-center mb-4">Passwort Vergessen</h1>
                  <v-layout row wrap>
                    <v-flex xs12 md10 offset-md1>
                      <v-text-field
                        light
                        placeholder="Emailadresse..."
                        solo
                        v-model="forgotemail"
                        :error-messages="errors.collect('form-3.forgotemail')"
                        label="Emailadresse"
                        v-validate="'required|email'"
                        data-vv-name="forgotemail"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md10 offset-md1>
                      <v-btn type="submit" block flat class="btn-SignIn">Einreichen</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
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
        <router-link to="/kirchenfinder">
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
        <router-link to="/kirchenfinder">
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
      temporary
      fixed
      right
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list class="pt-0" dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <router-link to="/">
            <v-list-tile-content @click.stop="drawer = !drawer">
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>group_work</v-icon>
          </v-list-tile-action>
          <router-link to="/solution">
            <v-list-tile-content @click.stop="drawer = !drawer">
              <v-list-tile-title>Lösungen</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <router-link to="/newsroom" @click.stop="drawer = !drawer">
            <v-list-tile-content>
              <v-list-tile-title>Newsroom</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>track_changes</v-icon>
          </v-list-tile-action>
          <router-link to="/kirchenfinder">
            <v-list-tile-content @click.stop="drawer = !drawer">
              <v-list-tile-title>Kirchenfinder</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <router-link to="/mediapartner">
            <v-list-tile-content @click.stop="drawer = !drawer">
              <v-list-tile-title>Mediapartner</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click.stop="drawer = !drawer" @click="dialogreg = !dialogreg">
            <v-list-tile-title>KOSTENLOS ANMELDEN</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click.stop="drawer = !drawer" @click="dialoglog = !dialoglog">
            <v-list-tile-title>Einloggen</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Header",
  data: () => ({
    // baseUrl: process.env.BASE_URL
    register: false,
    login: false,
    password: false,
    isMobile: false,
    drawer: null,
    fixed: true,
    fixedHeader: true,
    offsetTop: 0,
    dialogreg: false,
    dialoglog: false,

    GemeindetypeList: [],
    LandList: [],
    OrtList: [],
    gemeindetype: "",
    land: "",
    ort: "",
    gemeindename: "",
    Emailadresse: "",
    enterpassword: "",
    reenterpassword: "",
    emailusername: "",
    forgotemail: "",
    loginpassword: "",
    dictionary: {
      attributes: {
        forgotemail: "Emailadresse",
        forgotemail: "Emailadresse",
        emailusername: "Email/Username",
        reenterpassword: "Re-Enter Password",
        enterpassword: "Passwort",
        loginpassword: "Passwort"
        // custom attributes
      },
      custom: {}
    }
  }),
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.$validator.localize("en", this.dictionary);
    this.listofcountry();
    this.listofcity();
    this.listofmuncipalty();
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  methods: {
    facebookLogin() {
      this.$store.dispatch("signinUserWithFacebook");
    },
    twitterLogin() {
      this.$store.dispatch("signinUserWithTwitter");
    },
    loginsubmit() {},
    forgotsubmit() {},
    submit(scope) {
      this.$validator.validateAll(scope).then(result => {
        console.log(scope);
        console.log(result);
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
        }
      });
    },
    listofmuncipalty: function() {
      var e = this;
      axios
        .get("/adminglobal/getallmuncipalitytype")
        .then(function(response) {
          console.log(response.data);
          if (response.data.status == true) {
            console.log(response.data.allmuncipalitytype);
            e.GemeindetypeList = response.data.allmuncipalitytype;
          }
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
    listofcity: function(id) {
      var e = this;
      if (e.land == "") {
        var city = "DE";
      } else {
        var cityData = e.LandList.filter(col => {
          return col.id.match(id);
        });
        var city = cityData[0].country_code;
      }
      axios
        .get("/adminglobal/getallcity/?id=" + city)
        .then(function(response) {
          console.log(response.data);
          if (response.data.status == true) {
            console.log(response.data.cities);
            e.OrtList = response.data.cities.city;
          }
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
    listofcountry: function() {
      var e = this;
      axios
        .get("/adminglobal/getallcountry")
        .then(function(response) {
          console.log(response.data);
          if (response.data.status == true) {
            console.log(response.data.countries);
            e.LandList = response.data.countries.country;
          }
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
    onResize() {
      this.isMobile = window.innerWidth < 750;
      if (this.isMobile == true) {
        this.fixedHeader = false;
        this.fixed = false;
      }
    },
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop >= 60) {
        this.fixedHeader = false;
        this.fixed = false;
        if (this.isMobile == true) {
          this.fixedHeader = false;
          this.fixed = false;
        }
      } else {
        this.fixedHeader = true;
        this.fixed = true;
        if (this.isMobile == true) {
          this.fixedHeader = false;
          this.fixed = false;
        }
      }
    }
  }
};
</script>