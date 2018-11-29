<template>
  <v-app > <!-- class="progess-custom hidden-sm-and-up" -->
    <v-progress-linear  class="progess-custom hidden-sm-and-up" color="#FA6E2F" :indeterminate="true" height="5"></v-progress-linear>
    <v-toolbar color="#0B324F" class="hidden-md-and-down"
    dark :scroll-off-screen="true"  :scroll-target="'#scrolling-techniques'" style="background:#0B324F; border-bottom: 1px solid #606c7d;">
      <v-layout>        
        <v-img :max-width="150" contain :src="require(`@/assets/logo-woobii.jpg`)" />
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <v-btn slot="activator" flat>KOSTENLOS ANMELDEN</v-btn>
          <span>KOSTENLOS ANMELDEN</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat>Einloggen</v-btn>
          <span>Einloggen</span>
        </v-tooltip>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-btn slot="activator" flat dark>Einloggen</v-btn>
          <v-card dark>
            <v-card-text>
              <v-container grid-list-md>
                <h1 class="display-2 text-md-center">WooBii Login</h1>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field light placeholder="Username..." solo></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field light type="password" placeholder="Password..." solo></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-toolbar>

    <main>
      <v-toolbar prominent color="#0B324F" dark height="40" >
       <v-img  class="" :max-width="120" contain :src="require(`@/assets/logo-woobii.jpg`)" />
        <v-tooltip bottom>
          <v-btn slot="activator" class="hidden-md-and-down" flat>Home</v-btn>
          <span>Home</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" class="hidden-md-and-down" flat>Lösungen</v-btn>
          <span>Lösungen</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" class="hidden-md-and-down" flat>Newsroom</v-btn>
          <span>Newsroom</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" class="hidden-md-and-down" flat>Kirchenfinder</v-btn>
          <span>Kirchenfinder</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" class="hidden-md-and-down" flat>Mediapartner</v-btn>
          <span>Mediapartner</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <span class="hidden-md-and-up"> <v-toolbar-side-icon left  @click.stop="drawer = !drawer"> </v-toolbar-side-icon> </span>
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
    <v-content>
      <section class="hbanner">
        <v-img :src="require(`@/assets/WooBii-hbanner.jpg`)" :lazy-src="require(`@/assets/WooBii-hbanner.jpg`)" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)" class="grey lighten-2" contain>
              <v-layout  slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
              <v-layout fill-height column align-center justify-center class="text-xs-center white--text px-4">
                <h1 class="display-1 text-uppercase">Der Digitale Newsroom<br> für christliche Gemeinden</h1>
                <div class="subheading my-4">Verbreiten Sie sekundenschnell Ihre wichtigsten Botschaften, News, Jobangebote und Eventankündigungen in deutschsprachigen christlichen Qualitätsmedien und im beliebten Kirchenfinder.</div>
                <v-tooltip top>
                  <v-btn depressed dark large slot="activator" color="#FC732D">Jetzt kostenlos testen</v-btn>
                  <span>Jetzt kostenlos testen</span>
                </v-tooltip>
            </v-layout>
        </v-img>
      </section>
      <section class="hpackages">
        <v-layout column wrap class="py-4">
          <v-flex xs12 text-xs-center>
            <h2 class="headline mb-4">WooBii - die crossmediale Lösung für lhre christliche Medienarbeit.</h2>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl class="py-0">
              <v-layout row wrap>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-card-title class="justify-center py-4" style="color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-3">woobii Free</h3>
                        <h3 class="headline mb-3">0,00  <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        <v-tooltip top>
                          <v-btn depressed dark slot="activator" color="#FC732D">Kostenlos nutzen</v-btn>
                          <span>Kostenlos nutzen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Gemeindeprofil im Kirchenfinder</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>woobii.com</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>Kirchenfinder.eu</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>Partnerportale</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Logo</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Header Bild<v-icon small>info</v-icon></v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Gemeindeangebote</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Besucheranzahl</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Telefonnummer</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Email- und Webadresse</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Anreiseplaner mit Google Maps</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">check</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Empfehlungsbutton</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-card-title class="justify-center py-4" style="color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-2">woobii Plus</h3>
                        <h3 class="headline mb-1">19,99 <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        199,99 <v-icon small color="#fff">euro_symbol</v-icon> pro Jahr
                        <v-tooltip top>
                          <v-btn depressed dark slot="activator" color="#FC732D" bac>30 Tage gratis testen</v-btn>
                          <span>30 Tage gratis testen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Package ,,woobii Free"</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Werbefreies Gemeindeprofil</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Upload von Profil-Bilder/Videos (6)</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Gemeindenews mit Pressefoto</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>Veröffentlichung im Pressroom</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>Veröffentlichung auf Kirchenfinder.eu</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile class="ml-4 in_list">
                        <v-list-tile-content>
                          <v-list-tile-title>Veröffentlichung auf Partnerportale</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Social Media Wall</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Eventticker</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Profilbewerbung auf WooBii auf kostenlosen Gemeindeprofil</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-card-title class="justify-center py-4" style="color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-2">woobii Pro</h3>
                        <h3 class="headline mb-1">49,99 <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        499,99 <v-icon small color="#fff">euro_symbol</v-icon> pro Jahr
                        <v-tooltip top>
                          <v-btn depressed dark slot="activator" color="#FC732D">30 Dage gratis testen</v-btn>
                          <span>30 Dage gratis testen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Package ,,woobii plus"</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Upload von Profil-Bilder/Videos (12)</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Jobbörse</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Hochwertige Veröffentlichung lhrer News auf Qualitätsmedienportal*</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon size="20" color="#FC732D">done</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>*1 pro Monat</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
    <v-footer height="auto" color="#0B324F" >
      <v-layout justify-center row wrap xs-12 >
        <v-flex py-2 text-xs-center white--text xs12 >
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Kontakt</span></v-btn>
            <span>Kontakt</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Über uns</span></v-btn>
            <span>Über uns</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Presse</span></v-btn>
            <span>Presse</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Jobs</span></v-btn>
            <span>Jobs</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Datenschutz</span></v-btn>
            <span>Datenschutz</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">AGB</span></v-btn>
            <span>AGB</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" flat small><span class="white--text">Impressum</span></v-btn>
            <span>Impressum</span>
          </v-tooltip>
        </v-flex>
        <v-divider inset dark color="#606c7d" style="margin-left:1px;max-width:100%;"></v-divider>
        <v-flex py-3 text-xs-center white--text xs12 >
          Ein Angebot von SALZUNDLICHT e.U.
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
     return {
        dialog: false,
        // baseUrl: process.env.BASE_URL
        isMobile: false,
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 750
    }
  }
}
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>