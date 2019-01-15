<template>
  <v-content class="mainWrapper white">
    <section class="hbanner">
      <v-img
        :src="require(`@/assets/WooBii-hbanner.jpg`)"
        :lazy-src="require(`@/assets/WooBii-hbanner.jpg`)"
        gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
        class="grey lighten-2"
        contain
      >
        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        </v-layout>
        <v-layout
          fill-height
          column
          align-center
          justify-center
          class="text-xs-center white--text px-4"
        >
          <h1 class="display-1 text-uppercase">Der Digitale Newsroom
            <br>für christliche Gemeinden
          </h1>
          <div
            class="subheading my-4"
          >Verbreiten Sie sekundenschnell Ihre wichtigsten Botschaften, News, Jobangebote und Eventankündigungen in deutschsprachigen christlichen Qualitätsmedien und im beliebten Kirchenfinder.</div>
          <v-tooltip top>
            <v-btn
              depressed
              dark
              large
              href="/pre-made-themes"
              slot="activator"
              color="#FC732D"
            >Jetzt kostenlos testen</v-btn>
            <span>Jetzt kostenlos testen</span>
          </v-tooltip>
        </v-layout>
      </v-img>
    </section>
    <section class="hpackages">
      <v-layout column wrap class="py-4">
        <v-flex xs12 text-xs-center>
          <h2
            class="headline mb-4"
          >WooBii - die crossmediale Lösung für lhre christliche Medienarbeit.</h2>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl class="py-0">
            <v-layout row wrap class="hidden-md-and-down">
              <v-flex d-flex xs12 md3>
                <v-card flat color="grey lighten-4">
                  <v-card-title class="justify-center py-4" style="color: #fff;">
                    <div class="text-xs-center">
                      <h3 class="headline mb-3">woobii Free</h3>
                      <h3 class="headline mb-3">0,00
                        <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                      </h3>
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
                        <v-list-tile-title>Header Bild
                          <v-icon small>info</v-icon>
                        </v-list-tile-title>
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
              <v-flex d-flex xs12 md3>
                <v-card flat color="grey lighten-4">
                  <v-card-title class="justify-center py-4" style="color: #fff;">
                    <div class="text-xs-center">
                      <h3 class="headline mb-2">woobii Plus</h3>
                      <h3 class="headline mb-1">19,99
                        <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                      </h3>199,99
                      <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
                      <v-tooltip top>
                        <v-btn
                          depressed
                          dark
                          slot="activator"
                          color="#FC732D"
                          bac
                        >30 Tage gratis testen</v-btn>
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
              <v-flex d-flex xs12 md3>
                <v-card flat color="grey lighten-4">
                  <v-card-title class="justify-center py-4" style="color: #fff;">
                    <div class="text-xs-center">
                      <h3 class="headline mb-2">woobii Pro</h3>
                      <h3 class="headline mb-1">49,99
                        <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                      </h3>499,99
                      <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
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
              <v-flex d-flex xs12 md3>
                <v-card flat color="grey lighten-4">
                  <v-card-title class="justify-center py-4" style="color: #fff;">
                    <div class="text-xs-center">
                      <h3 class="headline mb-2">woobii Pro</h3>
                      <h3 class="headline mb-1">50,99
                        <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                      </h3>509,99
                      <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
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
            <v-layout class="hidden-lg-and-up">
              <v-flex x12>
                <v-tabs centered grow v-model="active" color="white" light slider-color="indigo " class="mobilePackageTab">
                  <v-tab class="grey lighten-4">woobii<br/>Free</v-tab>
                  <v-tab class="grey lighten-4">woobii<br/>Plus</v-tab>
                  <v-tab class="grey lighten-4">woobii<br/>Pro</v-tab>
                  <v-tab class="grey lighten-4">woobii<br/>Pro</v-tab>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <v-layout>
                          <v-flex d-flex xs12>
                            <v-card flat color="grey lighten-4">
                              <v-card-title class="justify-center py-4" style="color: #fff;">
                                <div class="text-xs-center">
                                  <h3 class="headline mb-3">woobii Free</h3>
                                  <h3 class="headline mb-3">0,00
                                    <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                                  </h3>
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
                                    <v-list-tile-title>Header Bild
                                      <v-icon small>info</v-icon>
                                    </v-list-tile-title>
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
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <v-layout>
                          <v-flex d-flex xs12>
                            <v-card flat color="grey lighten-4">
                              <v-card-title class="justify-center py-4" style="color: #fff;">
                                <div class="text-xs-center">
                                  <h3 class="headline mb-2">woobii Plus</h3>
                                  <h3 class="headline mb-1">19,99
                                    <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                                  </h3>199,99
                                  <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
                                  <v-tooltip top>
                                    <v-btn
                                      depressed
                                      dark
                                      slot="activator"
                                      color="#FC732D"
                                      bac
                                    >30 Tage gratis testen</v-btn>
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
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <v-layout>
                          <v-flex d-flex xs12 md3>
                            <v-card flat color="grey lighten-4">
                              <v-card-title class="justify-center py-4" style="color: #fff;">
                                <div class="text-xs-center">
                                  <h3 class="headline mb-2">woobii Pro</h3>
                                  <h3 class="headline mb-1">50,99
                                    <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                                  </h3>509,99
                                  <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
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
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <v-layout>
                          <v-flex d-flex xs12 md3>
                            <v-card flat color="grey lighten-4">
                              <v-card-title class="justify-center py-4" style="color: #fff;">
                                <div class="text-xs-center">
                                  <h3 class="headline mb-2">woobii Pro</h3>
                                  <h3 class="headline mb-1">50,99
                                    <v-icon color="#fff">euro_symbol</v-icon>pro Mouat
                                  </h3>509,99
                                  <v-icon small color="#fff">euro_symbol</v-icon>pro Jahr
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
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
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