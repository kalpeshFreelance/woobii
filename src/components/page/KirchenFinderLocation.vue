<template>
  <v-content class="mainWrapper white">
    <section class="kitchenFinderSectionTop">
      <v-container class="grey lighten-3 py-2">
        <v-layout row wrap>
          <v-flex xs12 md5>
            <v-form>
              <v-autocomplete
                :loading="searchLoading"
                :items="churcheTitle"
                item-text="title"
                item-value="link"
                :search-input.sync="search"
                @input="pageRedirect"
                cache-items
                flat
                hide-no-data
                hide-details
                label="Gemeindename oder Stichwort einfugen"
                append-icon="search"
                solo
              ></v-autocomplete>
              <!-- <v-text-field
                flat
                solo
                class
                placeholder="Gemeindename oder Stichwort einfugen"
                append-icon="search"
              ></v-text-field>-->
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
              :src="'http://dev.woobii.com/admin/'+churchesData[0].logo"
              max-width="175"
              class="mb-3"
            ></v-img>
            <p class="headline mb-2">{{ churchesData[0].title }}</p>
            <p class="subheading mb-2">FKÖ
              <br>
              <span class="caption">Freikirchen in {{ churchesData[0].country }}</span>
            </p>
            <p class="subheading mb-2">
              {{ churchesData[0].city }}
              <br>
              <span class="caption">{{ churchesData[0].country }}</span>
            </p>
            <p class="subheading mb-2">
              {{ churchesData[0].visitor_range }}
              <br>
              <span class="caption">Besucher</span>
            </p>
            <!--  <p class="caption mb-0">
              <v-rating
                v-model="rating"
                readonly
                dense
                background-color="grey darken-4"
                color="grey darken-4"
            ></v-rating>-->
            <!-- <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star</v-icon>
              <v-icon class="black--text">star_half</v-icon>
            <v-icon class="black--text">star_border</v-icon>-->
            <!-- 40 Besucherbewertungen
            </p>-->
          </v-flex>
          <v-flex xs12 md8>
            <v-img
              v-if="churchesData[0].bannerimage"
              :lazy-src="'http://dev.woobii.com/admin/'+churchesData[0].bannerimage"
              :src="'http://dev.woobii.com/admin/'+churchesData[0].bannerimage"
            />
            <v-img
              v-else
              :src="require(`@/assets/woobii-banner.jpg`)"
              :lazy-src="require(`@/assets/woobii-banner.jpg`)"
            />
          </v-flex>
          <v-flex xs12 md8 class>
            <v-tabs slider-color="grey darken-3" v-model="active_tab">
              <v-tab grow href="#tab-1">Über uns</v-tab>
              <v-tab href="#tab-2">Angebote</v-tab>
              <v-tab href="#tab-3">Neuigkeiten</v-tab>
              <v-tab href="#tab-4">Social Media Wall</v-tab>
              <v-tab href="#tab-5">Events</v-tab>
              <v-tab href="#tab-6">Jobs</v-tab>
              <!-- <v-tab href="#tab-7">Bewertungen</v-tab> -->
              <v-tab-item id="tab-1">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Über uns</p>
                        <div
                          class="blue-grey lighten-5 text-xs-center pa-2"
                          v-if="churchesData[0].about_us == ' '"
                        >
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Über uns</span>
                          </span>
                        </div>
                        <div v-html="churchesData[0].about_us"></div>
                        <!-- <p class="body-1 font-weight-bold">
                          <v-icon small class="black--text mr-1">expand_more</v-icon>Weiterlesen
                        </p>-->
                        <p
                          class="headline"
                          style="margin-top: 15px;"
                        >GLAUBE.at empfiehlt folgende Gemeinden:</p>
                        <v-layout row wrap>
                          <v-flex d-flex xs12 md6 v-for="churche in churchesData.featuredChurch">
                            <v-card flat color="white" class="kFinderWrap">
                              <a :href="'/Kirchenfinder/'+churche.slug" class="caption black--text">
                                <v-img
                                  v-if="churche.bannerimage"
                                  :lazy-src="'http://dev.woobii.com/admin/'+churche.bannerimage"
                                  :src="'http://dev.woobii.com/admin/'+churche.bannerimage"
                                  class="kitchenImage"
                                />
                                <v-img
                                  v-else
                                  :src="require(`@/assets/woobii-banner.jpg`)"
                                  :lazy-src="require(`@/assets/woobii-banner.jpg`)"
                                />
                              </a>
                              <v-card-text class="pa-0">
                                <a
                                  :href="'/Kirchenfinder/'+churche.slug"
                                  class="caption black--text"
                                >
                                  <h4 class="body-1 my-2">{{ churche.title }}</h4>
                                </a>
                                <div>
                                  <v-chip
                                    small
                                    label
                                    dark
                                    class="white--text my-1"
                                    v-for="tag in splitTag(churche.tags)"
                                  >{{tag}}</v-chip>
                                </div>
                                <div class="my-2">
                                  <v-rating
                                    v-model="churche.rating"
                                    readonly
                                    dense
                                    small
                                    background-color="grey darken-4"
                                    color="grey darken-4"
                                  ></v-rating>
                                  <!-- <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star_half</v-icon>
                                  <v-icon small class="black--text">star_border</v-icon>-->
                                  <span class="body-1 font-weight-bold ml-2">{{churche.rating}}</span>
                                </div>
                                <a
                                  :href="'/Kirchenfinder/'+churche.slug"
                                  class="caption black--text"
                                >
                                  <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                                </a>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <!-- <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="kFinderWrap">
                              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                              <v-card-text class="pa-0">
                                <h4 class="body-1 my-2">Every Nation Innsbruck</h4>
                                <div>
                                  <v-chip small label dark class="white--text ma-0">Top Gemeinde</v-chip>
                                </div>
                                <div class="my-2">
                                  <v-rating
                                    v-model="rating"
                                    readonly
                                    dense
                                    small
                                    background-color="grey darken-4"
                                    color="grey darken-4"
                                  ></v-rating>
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
                                  <v-rating
                                    v-model="rating"
                                    readonly
                                    dense
                                    small
                                    background-color="grey darken-4"
                                    color="grey darken-4"
                                  ></v-rating>
                                  <span class="body-1 font-weight-bold ml-2">4,49</span>
                                </div>
                                <a href class="caption black--text">
                                  <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                                </a>
                              </v-card-text>
                            </v-card>
                          </v-flex>-->
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-2">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Angebote</p>
                        <div
                          class="blue-grey lighten-5 text-xs-center pa-2"
                          v-if="churchesData.offers == ''"
                        >
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Angebote</span>
                          </span>
                        </div>
                        <div class="dealsWrap px-2" v-if="churchesData.offers">
                          <div class="wrap" v-for="offer in churchesData.offers">
                            <v-tooltip top>
                              <!-- <h4 class="body-1">{{ offer.offer_name }}</h4> -->
                              <v-img
                                slot="activator"
                                v-if="offer.offer_img"
                                :lazy-src="'http://dev.woobii.com/admin/'+offer.offer_img"
                                :src="'http://dev.woobii.com/admin/'+offer.offer_img"
                                class="imgDeal"
                              >
                                <span class="backgroundColor"></span>
                              </v-img>
                              <span>{{ offer.offer_name }}</span>
                            </v-tooltip>
                          </div>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-3">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Gemeindenews</p>
                        <div
                          class="blue-grey lighten-5 text-xs-center pa-2"
                          v-if="churchesData.newsroom == ''"
                        >
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Gemeindenews</span>
                          </span>
                        </div>

                        <v-layout row wrap v-show="churchesData.newsroom">
                          <v-flex
                            d-flex
                            v-for="(newsroom, index) in churchesData.newsroom"
                            v-bind:class="[ index == 0 ? 'md12' : 'md6']"
                          >
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img
                                v-if="newsroom.bannerimage"
                                :lazy-src="'http://dev.woobii.com/admin/'+newsroom.bannerimage"
                                :src="'http://dev.woobii.com/admin/'+newsroom.bannerimage"
                              >
                                <v-container fill-height fluid v-if="index == 0">
                                  <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                      <h4 class="body-1 my-2 white--text">
                                        <span class="font-weight-bold">{{ newsroom.category }}</span>
                                        <span class="ml-2" style="color:#fa6e2f;">|</span>
                                        {{ newsroom.subcategory }}
                                      </h4>
                                      <h4 class="body-1 my-2 white--text">{{ newsroom.title }}</h4>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-img>
                              <v-card-text v-if="index != 0">
                                <h4 class="body-1 my-2">
                                  <span class="font-weight-bold">{{ newsroom.category }}</span>
                                  <span class="ml-2" style="color:#fa6e2f;">|</span>
                                  {{ newsroom.subcategory }}
                                </h4>
                                <h4 class="body-1 my-2">{{ newsroom.title }}</h4>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <!-- <v-flex d-flex xs12 md6>
                            <v-card flat color="white" class="grey lighten-4">
                              <v-img
                              v-if="newsroom.bannerimage"
                              :lazy-src="'http://dev.woobii.com/admin/'+newsroom.bannerimage"
                              :src="'http://dev.woobii.com/admin/'+newsroom.bannerimage"
                            />
                              <v-card-text>
                                <h4 class="body-1 my-2">
                                  <span class="font-weight-bold">{{ newsroom.category }}</span>
                                  <span class="ml-2" style="color:#fa6e2f;">|</span> {{ newsroom.subcategory }}
                                </h4>
                                <h4
                                  class="body-1 my-2"
                                >{{ newsroom.title }}</h4>
                              </v-card-text>
                            </v-card>
                          </v-flex>-->
                          <!-- <v-flex d-flex xs12 md6>
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
                          </v-flex>-->
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-4">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Social Media Wall</p>
                        <div class="blue-grey lighten-5 text-xs-center pa-2">
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Social Media Wall</span>
                          </span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-5">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Events</p>
                        <div
                          class="blue-grey lighten-5 text-xs-center pa-2"
                          v-if="churchesData.events == ''"
                        >
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Events</span>
                          </span>
                        </div>
                        <v-layout
                          row
                          class="mb-3"
                          v-if="churchesData.events"
                          v-for="event in churchesData.events"
                        >
                          <v-flex d-flex md3 class="pa-0">
                            <v-card dark tile flat color="dark">
                              <v-card-text>
                                <p class="body-2 text-xs-center">Sonntag
                                  <br>
                                  <span class="display-2">{{ event.event_date | moment("DD") }}</span>
                                  <br>
                                  {{ event.event_date | moment("MMM YYYY") }}
                                  <br>
                                  {{ event.event_date | moment("HH:mm") }}
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex md9 class="pa-0">
                            <v-card light tile flat color="grey lighten-4">
                              <v-card-text>
                                <h3 class="headline font-weight-medium mb-1">{{ event.event_title }}</h3>
                                <h3 class="body-3 mb-2">{{ event.event_date }}</h3>
                                <p class="body-1">{{ event.event_description }}</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <!-- <v-layout row class="mb-3">
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
                        </v-layout>-->
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-6">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Jobs</p>
                        <div
                          class="blue-grey lighten-5 text-xs-center pa-2"
                          v-if="churchesData.jobs == ''"
                        >
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Jobs</span>
                          </span>
                        </div>
                        <v-layout
                          row
                          class="mb-3"
                          v-if="churchesData.jobs"
                          v-for="job in churchesData.jobs"
                        >
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
                                  {{job.job_title}}
                                  <span
                                    class="right body-1"
                                  >{{job.date | moment("DD.MM.YYYY")}}</span>
                                </h3>
                                <p class="body-1">{{job.job_description}}</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <!-- <v-layout row>
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
                        </v-layout>-->
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-7">
                <v-card flat>
                  <v-card-text class="px-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Bewertungen</p>
                        <!-- <div class="blue-grey lighten-5 text-xs-center pa-2">
                          <span class="subtitle blue-grey--text">
                            <v-icon large class="blue-grey--text">error_outline</v-icon>
                            <br>No data found in
                            <br>
                            <span class="title">Bewertungen</span>
                          </span>
                        </div>-->
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
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Christuszentrierte Predigten
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="title font-weight-regular mt-4">Gemeinschaft</p>
                        <p class="body-1 pl-3">
                          Kleingruppen & Hauskreise
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Genertfruhstuck & Gebetsabende
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Dienstbereitschaft
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="title font-weight-regular mt-4">Nachfolge</p>
                        <p class="body-1 pl-3">
                          Sehnsucht Gott ahnlicher zu werden
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Genertfruhstuck & Gebetsabende
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                        <p class="body-1 pl-3">
                          Dienstbereitschaft
                          <span class="right">
                            <v-rating
                              v-model="rating"
                              readonly
                              dense
                              background-color="grey darken-4"
                              color="grey darken-4"
                            ></v-rating>
                          </span>
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-flex>
          <v-flex xs12 md4 class="tabRight">
            <v-btn flat block class="colorGreen ma-0 mb-3 py-2" @click="sharedialog = true">
              <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
            </v-btn>
            <v-dialog v-model="sharedialog" max-width="290" dark>
              <v-card>
                <v-card-title class="mr-2">
                  <v-icon class="mr-2">share</v-icon>Kirchengemeinde empfehlen
                </v-card-title>
                <v-card-text class="mt-0">
                  <social-sharing
                    :url="socialUrl"
                    :title="socialTitle"
                    :description="socialDescription"
                    :quote="socialQuote"
                    hashtags="Woobii"
                    twitter-user="woobii"
                    inline-template
                  >
                    <div class="socialBox">
                      <network network="email">
                        <v-icon class>email</v-icon>Email
                      </network>
                      <network network="facebook">
                        <v-icon class>fab fa-facebook</v-icon>Facebook
                      </network>
                      <network network="twitter">
                        <v-icon class>fab fa-twitter-square</v-icon>Twitter
                      </network>
                      <network network="googleplus">
                        <v-icon class>fab fa-google-plus-square</v-icon>Google +
                      </network>
                      <network network="linkedin">
                        <v-icon class>fab fa-linkedin</v-icon>LinkedIn
                      </network>
                      <network network="pinterest">
                        <v-icon class>fab fa-pinterest-square</v-icon>Pinterest
                      </network>
                      <network network="skype">
                        <v-icon class>fab fa-skype</v-icon>Skype
                      </network>
                    </div>
                  </social-sharing>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
              <v-rating
                v-model="churchesData[0].rating"
                readonly
                dense
                small
                background-color="grey darken-4"
                color="grey darken-4"
              ></v-rating>Kirchengemeinde bewerten
            </v-btn>
            <p class="headline">Gemeindeprofil</p>
            <p class="body-1">
              <span class="font-weight-bold black--text">Gottesdienste</span>
              <br>
              {{churchesData[0].timing}}
            </p>
            <p class="body-1" v-html="churchesData[0].address"></p>
            <!-- <p class="body-1">
                <span class="font-weight-bold black--text">Head Office</span>
                <br>Gutenbergstr. 6
                <br>6020 Innsbruck
                <br>Osterreich
            </p>-->
            <p class="body-1" v-if="churchesData[0].head_office">
              Tel: {{churchesData[0].head_office}}
              <br>
              <a
                v-if="churchesData[0].email_id"
                :href="'mailto:'+churchesData[0].email_id"
                target="new"
              >{{churchesData[0].email_id}}</a>
            </p>
            <p class="body-1" v-if="churchesData[0].website">
              <a href>{{ churchesData[0].website }}</a>
            </p>
            <GmapMap
              :center="{lat: parseFloat(churchesData[0].lat), lng: parseFloat(churchesData[0].lng)}"
              :zoom="12"
              map-type-id="roadmap"
              style="width: 100%; height: 180px"
            >
              <GmapMarker
                :position="{lat: parseFloat(churchesData[0].lat), lng: parseFloat(churchesData[0].lng)}"
                :clickable="true"
                :draggable="false"
                @click="center={lat: parseFloat(churchesData[0].lat), lng: parseFloat(churchesData[0].lng)}"
              />
            </GmapMap>
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
      rating: 3,
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      churchesData: [],
      active_tab: "tab-1",
      searchLoading: false,
      churcheTitle: [],
      search: null,
      sharedialog: false,
      socialUrl: "http://dev.woobii.com/Kirchenfinder/" + this.$route.params.slug,
      socialTitle: "Woobii",
      socialDescription: "Woobii",
      socialQuote: "Woobii"
    };
  },
  watch: {
    search(val) {
      if (val.length >= 3) {
        val && val !== this.select && this.querySelections(val);
      } else {
        this.churcheTitle = [];
      }
    }
  },
  mounted() {
    this.churchdata(this.$route.params.slug);
  },
  beforeDestroy() {},
  methods: {
    pageRedirect: function(event) {
      this.$router.push("/Kirchenfinder/" + event);
      this.churchdata(this.$route.params.slug);
    },
    splitTag: function(value) {
      if (!value) return "";
      value = value.split(",");
      return value;
    },
    querySelections(v) {
      var self = this;
      this.searchLoading = true;
      // Simulated ajax query
      axios
        .get("/churcheview/churchebyname?t=" + v)
        .then(function(response) {
          if (response.data.status == true) {
            console.log(response.data.churche);
            self.churcheTitle = response.data.churche;
            self.socialTitle = churchesData[0].title;
            self.socialDescription = churchesData[0].title;
            self.socialQuote = churchesData[0].title;
            self.searchLoading = false;
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
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
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
<style>
.socialBox {
  text-align: center;
  margin: auto;
}
.socialBox i {
  font-size: 20px;
  line-height: 16px;
  margin-right: 5px;
}
.socialBox span {
  margin-right: 20px;
  margin-bottom: 10px;
  display: inline-block;
  cursor: pointer;
}
</style>