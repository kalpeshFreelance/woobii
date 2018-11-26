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
    <v-content class="white">
      <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
        <v-container class="white py-0">
          <v-layout>
            <v-flex xs6>
              <v-btn flat  class="white black--text ma-0 text-lowercase btnTab">Kirchen</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn flat class="grey lighten-2 ma-0 right black--text text-lowercase"><v-icon class="mr-2">folder</v-icon>0 Lightbox</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="newsRoomSection">
        <v-container fluid grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex xs12 md3>
              <v-card flat color="white" class="newsRoomFilter">
                <v-card-text>
                  <v-form>
                    <v-text-field placeholder="Placeholder" append-icon="search"></v-text-field>
                    <v-select :items="items" label="Gemeindetyp:" placeholder="Bitte auswählen"></v-select>
                    <v-select :items="items" label="Ressort:" placeholder="Bitte auswählen"></v-select>
                    <v-select :items="items" label="Subressort:" placeholder="Stichwort einfügen"></v-select>
                    <v-text-field label="Themen:" placeholder="Themen..."></v-text-field>
                    <v-text-field label="People:" placeholder="People..."></v-text-field>
                    <v-text-field label="Land:" placeholder="Land..."></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md9>
              <v-layout row wrap>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                    <v-card-title>
                      <h4 class="caption text-uppercase mb-2"><span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz</h4>
                      <h4 class="caption text-uppercase font-weight-black mb-2">Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                      <h4 class="caption">epdO | 30.05.2018</h4>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                    <v-card-title>
                      <h4 class="caption text-uppercase mb-2"><span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz</h4>
                      <h4 class="caption text-uppercase font-weight-black mb-2">Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                      <h4 class="caption">epdO | 30.05.2018</h4>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                    <v-card-title>
                      <h4 class="caption text-uppercase mb-2"><span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz</h4>
                      <h4 class="caption text-uppercase font-weight-black mb-2">Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                      <h4 class="caption">epdO | 30.05.2018</h4>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 md4>
                  <v-card flat color="grey lighten-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                    <v-card-title>
                      <h4 class="caption text-uppercase mb-2"><span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz</h4>
                      <h4 class="caption text-uppercase font-weight-black mb-2">Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                      <h4 class="caption">epdO | 30.05.2018</h4>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
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
