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
      </v-layout>
    </v-toolbar>

    <main >
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
        <!--<v-toolbar-side-icon ></v-toolbar-side-icon>-->
      </v-toolbar>
    </main>
   <!-- <v-toolbar
    color="#0B324F"
    dark
    scroll-off-screen
  >
    <v-img :max-width="170" contain :src="require(`@/assets/logo-woobii.jpg`)" />
    <v-spacer></v-spacer>
    <v-btn flat>KOSTENLOS ANMELDEN</v-btn>
    <v-btn flat>Einloggen</v-btn>
  </v-toolbar>
  <v-toolbar
    color="#0B324F"
    dark
    fixed
  >
    
    <v-img :max-width="120" contain :src="require(`@/assets/logo-woobii.jpg`)" />
    <v-btn flat>Home</v-btn>
    <v-btn flat>Lösungen</v-btn>
    <v-btn flat>Newsroom</v-btn>
    <v-btn flat>Kirchenfinder</v-btn>
    <v-btn flat>Mediapartner</v-btn>
    <v-toolbar-side-icon left  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar> -->

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
      <section>
            <v-img
                  :src="require(`@/assets/WooBii-hbanner.jpg`)"
                  :lazy-src="require(`@/assets/WooBii-hbanner.jpg`)"
                  class="grey lighten-2"
                  contain
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                   <v-layout
                   fill-height
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Der Digitale Newsroom <br> für christliche Gemeinden</h1>
            <div class="subheading mb-3 text-xs-center">Verbreiten Sie sekundenschnell Ihre wichtigsten Botschaften, News, Jobangebote und Eventankündigungen in deutschsprachigen christlichen Qualitätsmedien und im beliebten Kirchenfinder.</div>
            <v-tooltip top>
              <v-btn slot="activator" color="#FC732D" class="mt-5" dark large href="/pre-made-themes">Jetzt kostenlos testen</v-btn>
              <span>Jetzt kostenlos testen</span>
            </v-tooltip>
          </v-layout>
            </v-img>
        <!--<v-parallax :src="require(`@/assets/WooBii-hbanner.jpg`)" height="550">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Der Digitale Newsroom <br> für christliche Gemeinden</h1>
            <div class="subheading mb-3 text-xs-center">Verbreiten Sie sekundenschnell Ihre wichtigsten Botschaften, News, Jobangebote und Eventankündigungen in deutschsprachigen christlichen Qualitätsmedien und im beliebten Kirchenfinder.</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
             Jetzt kostenlos testen
            </v-btn>
          </v-layout>
        </v-parallax>-->
      </section>
       <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">WooBii - die crossmediale Lösung für lhre christliche Medienarbeit.</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card>
                    <v-card-title primary-title class="justify-center" style="background-color: #0B324F; color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-3">woobii Free</h3>
                        <h3 class="headline mb-3">0,00  <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        <v-tooltip top>
                          <v-btn slot="activator" color="#FC732D" dark>Kostenlos nutzen</v-btn>
                          <span>Kostenlos nutzen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-card-title >
                      <div>
                        <ul class="list list--two-line">
                          <li class="subheader">Today</li>
                          <li>...</li>
                          <hr class="divider">
                          <li class="subheader">Today</li>
                        </ul>
                        Gemeindeprofil im Kirchenfinder<br>
                        <div class="pl-3">woobii.com<br>
                        Kirchenfinder.eu<br>
                        Partnerportale</div>
                        Logo<br>
                        Header Bild<br>
                        Gemeindeangebote<br>
                        Besucheranzahl<br>
                        Telefonnummer<br>
                        Email- und Webadresse<br>
                        Anreiseplaner mit Google Maps<br>
                        Empfehlungsbutton
                      </div>
                    </v-list>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card>
                    <v-card-title primary-title class="justify-center" style="background-color: #0B324F; color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-2">woobii Plus</h3>
                        <h3 class="headline">19,99 <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        199,99 <v-icon color="#fff">euro_symbol</v-icon> pro Jahr
                        <v-tooltip top>
                          <v-btn slot="activator" color="#FC732D" dark>30 Tage gratis testen</v-btn>
                          <span>30 Tage gratis testen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-card-title >
                      <div>
                        Package ,,woobii Free"<br>
                        Werbefreies Gemeindeprofil<br>
                        Upload von Profil-Bilder/Videos (6)<br>
                        Gemeindenews mit Pressefoto<br>
                        <div class="pl-3">Veröffentlichung im Pressroom<br>
                        Veröffentlichung auf Kirchenfinder.eu<br>
                        Veröffentlichung auf Partnerportale</div>
                        Social Media Wall<br>
                        Eventticker<br>
                        Jobbörse<br>
                        Profilbewerbung auf WooBii auf kostenlosen Gemeindeprofil
                      </div>
                    </v-list>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card>
                    <v-card-title primary-title class="justify-center" style="background-color: #0B324F; color: #fff;">
                      <div class="text-xs-center">
                        <h3 class="headline mb-2">woobii Pro</h3>
                        <h3 class="headline">49,99 <v-icon color="#fff">euro_symbol</v-icon> pro Mouat</h3>
                        499,99 <v-icon color="#fff">euro_symbol</v-icon> pro Jahr
                        <v-tooltip top>
                          <v-btn slot="activator" color="#FC732D" dark>30 Dage gratis testen</v-btn>
                          <span>30 Dage gratis testen</span>
                        </v-tooltip>
                      </div>
                    </v-card-title>
                    <v-card-title >
                      <div>
                        Package ,,woobii Plus"<br>
                        Upload von Profil-Bilder/Videos (12)<br>
                        Hochwertige Veröffentlichung lhrer News auf Qualitätsmedienportal*<br>
                        *1 pro Monat
                      </div>
                    </v-list>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
       
  <v-footer height="auto" style="background:#0B324F" >
    <v-layout justify-center row wrap xs-12 >
      <v-flex py-3 text-xs-center white--text xs12 >
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
      <v-divider inset dark style="margin-left:1px;max-width:100%;background:#606c7d"></v-divider>
      <v-flex py-3 text-xs-center white--text xs12 >
        Ein Angebot von SALZUNDLICHT e.U.
      </v-flex>
    </v-layout>
  </v-footer>
    </v-content>    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
     return {
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
