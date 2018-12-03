<template>
  <v-content class="white">
    <section class="kitchenFinderSectionTop">
      <v-container class="grey lighten-3 py-2">
        <v-layout>
          <v-flex xs12 md5>
            <v-form>
              <v-text-field flat solo class placeholder="Gemeindename oder Stichwort einfugen" append-icon="search"></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs12 md2>
            <v-btn small flat class="grey lighten-3 right ma-0 black--text btnSuche">
              Erweiterte Suche <v-icon class="ml-1">expand_more</v-icon>
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
    <section class="kitchenFinderSection">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center class="kirchenTopDetails">
          <v-flex xs12 md4>
            <v-img src="http://dev.woobii.com/html/images/kik.png" max-width="175" class="mb-3"></v-img>
            <p class="headline mb-2">Kirche in Kino</p>
            <p class="subheading mb-2">FKÖ
              <br>
              <span class="caption">Freikirchen in Österreich</span>
            </p>
            <p class="subheading mb-2">Innsbruck
              <br>
              <span class="caption">Österreich</span>
            </p>
            <p class="subheading mb-2">100-200
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
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
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
                        <p
                          class="body-1 font-weight-bold"
                        >Gemeinsam in Bewegun. Mit Chrustus im Zentrum.</p>
                        <p
                          class="body-1"
                        >Unsere Kirchengemeinde ist dazu, den dreienigen Gott in allem, was sie tut, zu verherrlichen und sich an ihm zu freuen, indem sie auf Gott hort ihn durch Wort und Tat lobt.</p>
                        <p
                          class="body-1"
                        >Lorem ipsum dolor sit amet, cu eum alienum nominavi, qui sumo decore ei. Vis erat salutandi adipiscing eu, eam fabellas mnesarchum ei. Ad has omnes adolescens, summo nobis explicari duo in. Eum quis amet impedit eu, an duo brute indoctum. Mei fastidii consetetur et.</p>
                        <p class="body-1">Wir wollen damit Gott die Ehre geben.</p>
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
                                <h4 class="body-1 my-2"><span class="font-weight-bold">Ausland</span><span class="ml-2" style="color:#fa6e2f;">|</span> Israel</h4>
                                <h4 class="body-1 my-2">70 Jahre Staat Israel: Evangelischer Oberkichenrat gratuliert</h4>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text>
                                <h4 class="body-1 my-2"><span class="font-weight-bold">Ausland</span><span class="ml-2" style="color:#fa6e2f;">|</span> Israel</h4>
                                <h4 class="body-1 my-2">70 Jahre Staat Israel: Evangelischer Oberkichenrat gratuliert</h4>
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
                                <p class="body-2 text-xs-center">Sonntag<br/><span class="display-2">10</span><br />JUN 2018<br />10:00 Uhr</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-1">Gottesdienst</h3>
                                <h3 class="body-3 mb-2">10:00 - 11:30 Uhr</h3>
                                <p class="body-1">TschamlerstraBe 7<br/>
                                6020 Innsbruck</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <v-layout row class="mb-3">
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <p class="body-2 text-xs-center">Sonntag<br/><span class="display-2">10</span><br />JUN 2018<br />10:00 Uhr</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-1">Gottesdienst</h3>
                                <h3 class="body-3 mb-2">10:00 - 11:30 Uhr</h3>
                                <p class="body-1">TschamlerstraBe 7<br/>
                                6020 Innsbruck</p>
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
                                <h3 class="headline font-weight-medium mb-2">Poster<span class="right body-1">10.06.2018</span></h3>
                                <p class="body-1">Vollzeit<br/>
                                Kirche im Kino, Innsbruck (A)</p>
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
                                <h3 class="headline font-weight-medium mb-2">Jugend mitarbeiter<span class="right body-1">04.05.2018</span></h3>
                                <p class="body-1">Ehrenamtlich<br/>
                                Kirche im Kino, Innsbruck (A)</p>
                                <p class="body-1">Die Kirche im Kino sucht zum nachstmoglichen zeitpunkt Uterstutzung in unserer Jugendgruppe.</p>
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
      ]
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
    }
  }
};
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>