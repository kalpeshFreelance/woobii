<template>
  <v-content class="white">
    <section class="kitchenFinderSectionTop">
      <v-container class="grey lighten-3 py-2">
        <v-layout>
          <v-flex xs12 md5>
            <v-form>
              <v-text-field
                flat
                solo
                class
                placeholder="Gemeindename oder Stichwort einfugen"
                append-icon="search"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs12 md2>
            <v-btn
              small
              flat
              class="grey lighten-3 right ma-0 black--text btnSuche"
            >Erweiterte Suche
              <v-icon class="ml-1">expand_more</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <section class="newsRoomSectionTop">
        <v-container class="white py-0">
          <v-layout>
            <v-flex xs12>
              <v-btn flat class="white black--text ma-0 px-0 btnTab">Kirchen</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </section>
    <section class="kitchenFinderSection" v-if="churchesData">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center class="kirchenTopDetails">
          <v-flex xs12 md4>
            <v-img
              v-if="churchesData[0].logo"
              :src="'/admin/'+churchesData[0].logo"
              max-width="175"
              class="mb-3"
            ></v-img>
            <p class="headline mb-2">{{ churchesData[0].title }}</p>
            <p class="subheading mb-2">FKÖ
              <br>
              <span class="caption">Freikirchen in Österreich</span>
            </p>
            <p class="subheading mb-2">Innsbruck
              <br>
              <span class="caption">Österreich</span>
            </p>
            <p class="subheading mb-2">
              {{ churchesData[0].visitor_range }}
              <br>
              <span class="caption">Besucher</span>
            </p>
            <p class="caption mb-0">
              <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star_half</v-icon>
              <v-icon class="black--text">star_border</v-icon>
              <br>40 Besucherbewertungen
            </p>
          </v-flex>
          <v-flex xs12 md8>
            <v-img
              v-if="churchesData[0].bannerimage"
              :src="require(`@/assets/woobii-banner.jpg`)"
              :lazy-src="'/admin/'+churchesData[0].bannerimage"
            />
            <v-img
              v-else
              :src="require(`@/assets/woobii-banner.jpg`)"
              :lazy-src="require(`@/assets/woobii-banner.jpg`)"
            />
          </v-flex>
          <v-flex xs12 class>
            <v-tabs slider-color="grey darken-3">
              <v-tab>Über uns</v-tab>
              <v-tab>Angebote</v-tab>
              <v-tab>Neuigkeiten</v-tab>
              <v-tab>Social Media Wall</v-tab>
              <v-tab>Events</v-tab>
              <v-tab>Jobs</v-tab>
              <v-tab>Bewertungen</v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Über uns</p>
                        <div v-html="churchesData[0].about_us"></div>
                        <p class="body-1 font-weight-bold">
                          <v-icon small class="black--text mr-1">expand_more</v-icon>Weiterlesen
                        </p>
                        <p class="headline">GLAUBE.at empfiehlt folgende Gemeinden:</p>
                        <v-layout row wrap>
                          <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="kFinderWrap">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text class="pa-0">
                                <h4 class="body-1 my-2">Every Nation Innsbruck</h4>
                                <div>
                                  <v-chip small label dark class="white--text ma-0">Top Gemeinde</v-chip>
                                </div>
                                <div class="my-2">
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star_half</v-icon>
                                  <v-icon small class="black--text">star_border</v-icon>
                                  <span class="body-1 font-weight-bold ml-2">4,49</span>
                                </div>
                                <a href class="caption black--text">
                                  <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                                </a>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="kFinderWrap">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text class="pa-0">
                                <h4 class="body-1 my-2">Every Nation Innsbruck</h4>
                                <div>
                                  <v-chip small label dark class="white--text ma-0">Top Gemeinde</v-chip>
                                </div>
                                <div class="my-2">
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star</v-icon>
                                  <v-icon small class="black--text">star_half</v-icon>
                                  <v-icon small class="black--text">star_border</v-icon>
                                  <span class="body-1 font-weight-bold ml-2">4,49</span>
                                </div>
                                <a href class="caption black--text">
                                  <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                                </a>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-2 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Angebote</p>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Gemeindenews</p>
                        <v-layout row wrap>
                          <v-flex d-flex md12>
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text>
                                <h4 class="body-1 my-2">
                                  <span class="font-weight-bold">Ausland</span>
                                  <span class="ml-2" style="color:#fa6e2f;">|</span> Israel
                                </h4>
                                <h4
                                  class="body-1 my-2"
                                >70 Jahre Staat Israel: Evangelischer Oberkichenrat gratuliert</h4>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text>
                                <h4 class="body-1 my-2">
                                  <span class="font-weight-bold">Ausland</span>
                                  <span class="ml-2" style="color:#fa6e2f;">|</span> Israel
                                </h4>
                                <h4
                                  class="body-1 my-2"
                                >70 Jahre Staat Israel: Evangelischer Oberkichenrat gratuliert</h4>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Text 4</p>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Events</p>
                        <v-layout row class="mb-3">
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <p class="body-2 text-xs-center">Sonntag
                                  <br>
                                  <span class="display-2">10</span>
                                  <br>JUN 2018
                                  <br>10:00 Uhr
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-1">Gottesdienst</h3>
                                <h3 class="body-3 mb-2">10:00 - 11:30 Uhr</h3>
                                <p class="body-1">TschamlerstraBe 7
                                  <br>6020 Innsbruck
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <v-layout row class="mb-3">
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <p class="body-2 text-xs-center">Sonntag
                                  <br>
                                  <span class="display-2">10</span>
                                  <br>JUN 2018
                                  <br>10:00 Uhr
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-1">Gottesdienst</h3>
                                <h3 class="body-3 mb-2">10:00 - 11:30 Uhr</h3>
                                <p class="body-1">TschamlerstraBe 7
                                  <br>6020 Innsbruck
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Jobs</p>
                        <v-layout row class="mb-3">
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <h1 class="display-3 text-xs-center">KIK</h1>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-2">
                                  Poster
                                  <span class="right body-1">10.06.2018</span>
                                </h3>
                                <p class="body-1">Vollzeit
                                  <br>Kirche im Kino, Innsbruck (A)
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <v-layout row>
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <h1 class="display-3 text-xs-center">KIK</h1>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-2">
                                  Jugend mitarbeiter
                                  <span class="right body-1">04.05.2018</span>
                                </h3>
                                <p class="body-1">Ehrenamtlich
                                  <br>Kirche im Kino, Innsbruck (A)
                                </p>
                                <p
                                  class="body-1"
                                >Die Kirche im Kino sucht zum nachstmoglichen zeitpunkt Uterstutzung in unserer Jugendgruppe.</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <p class="headline">Bewertungen</p>
                        <p
                          class="body-1 font-weight-bold"
                        >Deine Meinung zahlt. Teile deine Erfahrung damit andere fie passende Gemeinde finden.</p>
                        <v-btn flat dark class="blue darken-4 ma-0 mb-4 py-2">
                          <v-icon class="mr-3">fab fa-facebook</v-icon>Log in with Facebook
                        </v-btn>
                        <p class="title font-weight-regular">Gottesdienste</p>
                        <p class="body-1 pl-3">
                          Offenheit fur neue Besucher
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Christuszentrierte Predigten
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="title font-weight-regular mt-4">Gemeinschaft</p>
                        <p class="body-1 pl-3">
                          Kleingruppen & Hauskreise
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Genertfruhstuck & Gebetsabende
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Dienstbereitschaft
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="title font-weight-regular mt-4">Nachfolge</p>
                        <p class="body-1 pl-3">
                          Sehnsucht Gott ahnlicher zu werden
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Genertfruhstuck & Gebetsabende
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Dienstbereitschaft
                          <span class="right">
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star</v-icon>
                            <v-icon class="black--text">star_half</v-icon>
                            <v-icon class="black--text">star_border</v-icon>
                          </span>
                        </p>
                      </v-flex>
                      <v-flex xs12 md4 class="tabRight">
                        <v-btn flat block class="colorGreen ma-0 mb-3 py-2">
                          <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                        </v-btn>
                        <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class>stars</v-icon>
                          <v-icon class="mr-2">stars</v-icon>Kirchengemeinde bewerten
                        </v-btn>
                        <p class="headline">Gemeindeprofil</p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Gottesdienste</span>
                          <br>Heden Sonntag
                          <br>100:00 bis 11:30 Uhr
                        </p>
                        <p class="body-1">Cineplexx-Kino
                          <br>TschamlerstraBe 7 (Sudring)
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">
                          <span class="font-weight-bold black--text">Head Office</span>
                          <br>Gutenbergstr. 6
                          <br>6020 Innsbruck
                          <br>Osterreich
                        </p>
                        <p class="body-1">Tel: +43 699 18114153
                          <br>
                          <a
                            href="mailto:knotakt@kirchenimkno.at"
                            target="new"
                          >knotakt@kirchenimkno.at</a>
                        </p>
                        <p class="body-1">
                          <a href>www.kirchenimkno.at</a>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  name: "KitrchenFinderLocation",
  data() {
    return {
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      churchesData: []
    };
  },
  mounted() {
    this.churchdata(this.$route.params.slug);
  },
  beforeDestroy() {},
  methods: {
    churchdata: function(slug) {
      var e = this;
      axios
        .get("/churcheview/churche?s=" + slug)
        .then(function(response) {
          if (response.data.status == true) {
            console.log(response.data.churche);
            e.churchesData = response.data.churche;
          }
          // console.log(response.data);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
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
          console.log(error.config);
        });
    }
  }
};
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>