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
            <v-btn small flat class="grey lighten-3 right ma-0 black--text btnSuche">
              Erweiterte Suche
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
            <v-dialog light v-model="editDialoglogo" max-width="440px">
              <v-card class="editDialog pa-3">
                <v-card-title class="subheading pd-1">Logo:</v-card-title>
                <v-card-text class="py-0">
                  <v-flex xs12>
                    <v-image-input
                      v-model="imageData"
                      :image-quality="0.85"
                      clearable
                      image-format="jpeg"
                    />
                  </v-flex>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    depressed
                    class="grey lighten-2"
                    @click="imageData = ''; editDialoglogo = false"
                  >Cancel</v-btn>
                  <v-btn depressed dark color="orange darken-1" @click="saveLogo">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-img
              v-if="churcheslogo"
              v-bind:src="'http://dev.woobii.com/admin/'+churcheslogo"
              max-width="175"
              class="mb-3"
              srcset
              lazy-src
            >
              <v-btn
                fab
                class="right"
                dark
                color="darken-1"
                @click="editDialoglogo = true"
                style="height: 25px;width: 25px;"
                v-if="userRoleCall != 1"
              >
                <v-icon style="font-size:12px">edit</v-icon>
              </v-btn>
            </v-img>
            <v-img
              v-else
              :src="require(`@/assets/woobii-banner.jpg`)"
              :lazy-src="require(`@/assets/woobii-banner.jpg`)"
              max-width="175"
              class="mb-3"
            >
              <v-btn
                fab
                class="right"
                dark
                color="darken-1"
                @click="editDialoglogo = true"
                style="height: 25px;width: 25px;"
                v-if="userRoleCall != 1"
              >
                <v-icon style="font-size:12px">edit</v-icon>
              </v-btn>
            </v-img>
            <p class="headline mb-2">{{ churchesData[0].title }}</p>
            <p class="subheading mb-2">
              FKÖ
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
                  <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <span class="headline">Über uns</span>
                        <v-btn
                          fab
                          small
                          class="right"
                          dark
                          @click="editDialogdesc = true"
                          style="height: 20px; padding: 0px; width: 20px;"
                          v-if="userRoleCall != 1"
                        >
                          <v-icon style="font-size:12px">edit</v-icon>
                        </v-btn>
                        <v-dialog light v-model="editDialogdesc" max-width="650px">
                          <v-card class="editDialog pa-3">
                            <v-card-title class="subheading pd-1">Über uns:</v-card-title>
                            <v-card-text class="py-0">
                              <v-flex xs12>
                                <wysiwyg name="description" v-model="aboutus" required/>
                              </v-flex>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn
                                depressed
                                class="grey lighten-2"
                                @click="editDialogdesc = false"
                              >Cancel</v-btn>
                              <v-btn
                                depressed
                                dark
                                @click="saveAboutUs"
                                color="orange darken-1"
                              >Save</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
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
                        >WOOBII.at empfiehlt folgende Gemeinden:</p>
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
                  <v-card-text>
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
                  <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="headline">Gemeindenews</p>
                        <v-container grid-list-md class="pa-0 tab3rd-edit-panel">
                          <v-layout row wrap>
                            <v-flex xs12>
                              <v-card light color="grey lighten-4">
                                <v-card-text>
                                  <v-textarea
                                    placeholder="Placeholder"
                                    background-color="grey lighten-4"
                                    solo
                                    flat
                                  ></v-textarea>
                                  <v-divider class="my-1"></v-divider>
                                  <v-btn depressed outline round color="indigo" class="heightStyle">
                                    <v-icon>camera_alt</v-icon>
                                  </v-btn>
                                  <v-btn depressed outline round color="indigo" class="heightStyle">
                                    <v-icon class="mr-1">videocam</v-icon>Video
                                  </v-btn>
                                  <v-btn
                                    depressed
                                    dark
                                    color="orange darken-1"
                                    class="heightStyle"
                                  >Veroffentlichen</v-btn>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                            <v-flex xs12></v-flex>
                          </v-layout>
                        </v-container>
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
                        <v-container grid-list-md class="pa-0 tab3rd-edit-panel">
                          <v-layout row wrap>
                            <v-flex
                              v-for="(newsroom, index) in churchesData.newsroom"
                              v-bind:class="[ index == 0 ? 'md12' : 'md6']"
                            >
                              <v-img
                                v-if="newsroom.bannerimage"
                                :lazy-src="'http://dev.woobii.com/admin/'+newsroom.bannerimage+'?v='+ Math.random()"
                                :src="'http://dev.woobii.com/admin/'+newsroom.bannerimage+'?v='+ Math.random()"
                                gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,.55)"
                              >
                                <v-container fill-height fluid>
                                  <v-layout px-2 column fill-height class="lightbox white--text">
                                    <v-spacer></v-spacer>
                                    <v-flex shrink>
                                      <v-layout row wrap>
                                        <v-flex
                                          xs12
                                          sm6
                                          md6
                                          class="pa-3"
                                          style="background-color: rgba(255,255,255,.75);"
                                        >
                                          <h4 class="body-1 my-1 black--text">
                                            <span class="font-weight-bold">{{ newsroom.category }}</span>
                                            <span class="ml-2" style="color:#fa6e2f;">|</span>
                                            {{ newsroom.subcategory }}
                                          </h4>
                                          <h4 class="body-1 my-1 black--text">{{ newsroom.title }}</h4>
                                          <v-btn
                                            fab
                                            class="editIconBtn"
                                            dark
                                            color="orange darken-1"
                                            @click="newsroomdetail(newsroom.newsid); editDialog = true"
                                            v-if="userRoleCall != 1"
                                          >
                                            <v-icon style="font-size:12px">edit</v-icon>
                                          </v-btn>
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-img>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <v-layout row wrap v-show="churchesData.newsroom">
                          <v-flex
                            d-flex
                            v-for="(newsroom, index) in churchesData.newsroom"
                            v-bind:class="[ index == 0 ? 'md12' : 'md6']"
                          >
                            <v-card flat color="white" class="grey lighten-4">
                              <!-- <v-img
                                v-if="newsroom.bannerimage"
                                :lazy-src="'http://dev.woobii.com/admin/'+newsroom.bannerimage+'?v='+ Math.random()"
                                :src="'http://dev.woobii.com/admin/'+newsroom.bannerimage+'?v='+ Math.random()"
                                gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,.55)"
                              >
                                <v-container fill-height fluid px-2 pt-0 v-if="index == 0">
                                  <v-layout fill-height>
                                    <v-flex xs12 flexbox>
                                      <v-spacer></v-spacer>
                                      <v-layout row wrap shrink>
                                        
                                        <v-flex xs6 style="background-color: rgba(255,255,255,.6);">
                                          <h4 class="body-1 my-2 dark--text">
                                            <span class="font-weight-bold">{{ newsroom.category }}</span>
                                            <span class="ml-2" style="color:#fa6e2f;">|</span>
                                            {{ newsroom.subcategory }}
                                          </h4>
                                          <h4 class="body-1 my-2 dark--text">{{ newsroom.title }}</h4>
                                        </v-flex>
                                        <v-flex xs6>
                                          <v-btn
                                            fab
                                            class="right"
                                            dark
                                            color="orange darken-1"
                                            @click="newsroomdetail(newsroom.newsid); editDialog = true"
                                            style="height: 25px;width: 25px;"
                                          >
                                            <v-icon style="font-size:12px">edit</v-icon>
                                          </v-btn>
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-img>-->
                              <!-- <v-card-text v-if="index != 0">
                                <h4 class="body-1 my-2">
                                  <span class="font-weight-bold">{{ newsroom.category }}</span>
                                  <span class="ml-2" style="color:#fa6e2f;">|</span>
                                  {{ newsroom.subcategory }}
                                </h4>
                                <h4 class="body-1 my-2">{{ newsroom.title }}</h4>
                              </v-card-text>-->
                            </v-card>
                          </v-flex>
                          <v-dialog light v-model="editDialog" max-width="800px">
                            <v-card class="editDialog pa-3">
                              <v-card-title
                                class="subheading"
                              >Bitte Fullen Sie zur Verffentlichung lher News folgende Felder aus:</v-card-title>
                              <v-card-text class="py-0">
                                <v-container grid-list-md class="pa-0">
                                  <v-layout row wrap>
                                    <v-flex xs12>
                                      <v-card
                                        light
                                        color="grey lighten-4"
                                        tile
                                        flat
                                        class="cartBorder"
                                      >
                                        <v-toolbar color="grey lighten-2" light flat height="45px">
                                          <v-toolbar-title>News</v-toolbar-title>
                                          <v-spacer></v-spacer>
                                          <v-btn icon>
                                            <v-icon>expand_more</v-icon>
                                          </v-btn>
                                        </v-toolbar>
                                        <v-card-text>
                                          <v-layout row wrap>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Newstitel</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <v-text-field
                                                v-model="formnews.newstitle"
                                                name="newstitle"
                                                required
                                                solo
                                              ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Teaser</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <v-text-field
                                                v-model="formnews.teaser"
                                                name="teaser"
                                                required
                                                solo
                                              ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Newsmeldung</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <wysiwyg
                                                v-model="formnews.newsmeldung"
                                                name="newsmeldung"
                                                required
                                              />
                                            </v-flex>
                                          </v-layout>
                                          <v-layout row wrap>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Ressort</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <v-autocomplete
                                                placeholder="Ressort"
                                                :items="category"
                                                item-text="category"
                                                item-value="id"
                                                v-model="formnews.ressort"
                                                v-on:change="categorySelected"
                                                solo
                                              ></v-autocomplete>
                                              <!-- <v-select :items="scategory" placeholder="Ressort" solo></v-select> -->
                                            </v-flex>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Kategorie</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <v-autocomplete
                                                placeholder="Kategorie"
                                                :items="subcategory"
                                                item-text="subcategory"
                                                item-value="id"
                                                v-model="formnews.kategorie"
                                                solo
                                              ></v-autocomplete>
                                            </v-flex>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Themen</v-flex>
                                            <v-flex xs12 sm9 md9>
                                              <v-text-field
                                                name="themen"
                                                v-model="formnews.themen"
                                                solo
                                              ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm3 md3 class="feildLabel">Veroffentlichung</v-flex>
                                            <v-flex xs12 sm3 md3>
                                              <v-text-field
                                                name="veroffentlichung"
                                                v-model="formnews.veroffentlichung"
                                                solo
                                                readonly
                                                @click="datemodal = true"
                                                append-icon="event"
                                              ></v-text-field>
                                              <v-dialog
                                                ref="dialog"
                                                v-model="datemodal"
                                                :return-value.sync="formnews.veroffentlichung"
                                                persistent
                                                lazy
                                                full-width
                                                width="290px"
                                              >
                                                <v-date-picker
                                                  v-model="formnews.veroffentlichung"
                                                  scrollable
                                                >
                                                  <v-spacer></v-spacer>
                                                  <v-btn
                                                    flat
                                                    color="primary"
                                                    @click="datemodal = false"
                                                  >Cancel</v-btn>
                                                  <v-btn
                                                    flat
                                                    color="primary"
                                                    @click="$refs.dialog.save(formnews.veroffentlichung)"
                                                  >OK</v-btn>
                                                </v-date-picker>
                                              </v-dialog>
                                            </v-flex>
                                            <v-flex
                                              xs12
                                              sm3
                                              md3
                                              class="feildLabel"
                                            >Inaktiv setzen (optional)</v-flex>
                                            <v-flex xs12 sm3 md3>
                                              <v-text-field
                                                name="inaktiv"
                                                v-model="formnews.inaktiv"
                                                solo
                                                readonly
                                                @click="datemodalI = true"
                                                append-icon="event"
                                              ></v-text-field>
                                              <v-dialog
                                                ref="dialogI"
                                                v-model="datemodalI"
                                                :return-value.sync="formnews.inaktiv"
                                                persistent
                                                lazy
                                                full-width
                                                width="290px"
                                              >
                                                <v-date-picker
                                                  v-model="formnews.inaktiv"
                                                  scrollable
                                                >
                                                  <v-spacer></v-spacer>
                                                  <v-btn
                                                    flat
                                                    color="primary"
                                                    @click="datemodalI = false"
                                                  >Cancel</v-btn>
                                                  <v-btn
                                                    flat
                                                    color="primary"
                                                    @click="$refs.dialogI.save(formnews.inaktiv)"
                                                  >OK</v-btn>
                                                </v-date-picker>
                                              </v-dialog>
                                            </v-flex>
                                          </v-layout>
                                        </v-card-text>
                                      </v-card>
                                    </v-flex>
                                    <v-flex d-flex xs12 sm6 md6>
                                      <v-layout row wrap>
                                        <v-flex d-flex xs12>
                                          <v-card
                                            light
                                            color="grey lighten-4"
                                            tile
                                            flat
                                            class="cartBorder"
                                          >
                                            <v-toolbar
                                              color="grey lighten-2"
                                              light
                                              flat
                                              height="45px"
                                            >
                                              <v-toolbar-title>Biddatei hochladen</v-toolbar-title>
                                              <v-spacer></v-spacer>
                                              <v-btn icon>
                                                <v-icon>expand_more</v-icon>
                                              </v-btn>
                                            </v-toolbar>
                                            <v-card-text>
                                              <v-layout row wrap>
                                                <v-flex xs12 sm3 md3 class="feildLabel">Datei</v-flex>
                                                <v-flex xs12 sm9 md9>
                                                  <v-layout row wrap>
                                                    <v-flex xs7 style="padding-right:0px;">
                                                      <v-text-field
                                                        xs8
                                                        sm8
                                                        md8
                                                        v-model="formnews.date"
                                                        solo
                                                      ></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs5 style="padding-left:0px;">
                                                      <v-btn
                                                        small
                                                        block
                                                        depressed
                                                        class="grey lighten-2 btn-detai"
                                                        @click="editBannerDialog = true"
                                                      >Durchsuchen</v-btn>
                                                    </v-flex>
                                                  </v-layout>
                                                  <v-dialog
                                                    light
                                                    v-model="editBannerDialog"
                                                    max-width="810px"
                                                  >
                                                    <v-card class="editDialog pa-3">
                                                      <v-card-title class="subheading pd-1">Banner:</v-card-title>
                                                      <v-card-text class="py-0">
                                                        <v-flex xs12>
                                                          <v-image-input
                                                            v-model="imageBannerData"
                                                            :image-quality="0.85"
                                                            clearable
                                                            :image-width="600"
                                                            :image-height="278"
                                                            image-format="jpeg"
                                                          />
                                                        </v-flex>
                                                      </v-card-text>
                                                      <v-card-actions>
                                                        <v-btn
                                                          depressed
                                                          class="grey lighten-2"
                                                          @click="imageBannerData = ''; editBannerDialog = false"
                                                        >Cancel</v-btn>
                                                        <v-btn
                                                          depressed
                                                          dark
                                                          color="orange darken-1"
                                                          @click="editBannerDialog = false; formnews.bannerimage=imageBannerData"
                                                        >Save</v-btn>
                                                      </v-card-actions>
                                                    </v-card>
                                                  </v-dialog>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6></v-flex>
                                              </v-layout>
                                            </v-card-text>
                                          </v-card>
                                        </v-flex>
                                        <v-flex d-flex xs12>
                                          <v-card
                                            light
                                            color="grey lighten-4"
                                            tile
                                            flat
                                            class="cartBorder"
                                          >
                                            <v-toolbar
                                              color="grey lighten-2"
                                              light
                                              flat
                                              height="45px"
                                            >
                                              <v-toolbar-title>Bildinformationen</v-toolbar-title>
                                              <v-spacer></v-spacer>
                                              <v-btn icon>
                                                <v-icon>expand_more</v-icon>
                                              </v-btn>
                                            </v-toolbar>
                                            <v-card-text>
                                              <v-layout row wrap>
                                                <v-flex xs12 sm4 md4 class="feildLabel">Bildtitel</v-flex>
                                                <v-flex xs12 sm8 md8>
                                                  <v-text-field
                                                    name="bildtitel"
                                                    v-model="formnews.bildtitel"
                                                    solo
                                                  ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm4 md4 class="feildLabel">Beschreibung</v-flex>
                                                <v-flex xs12 sm8 md8>
                                                  <v-textarea
                                                    name="beschreibung"
                                                    v-model="formnews.beschreibung"
                                                    solo
                                                  ></v-textarea>
                                                </v-flex>
                                                <v-flex xs12 sm4 md4 class="feildLabel">Bildrechte</v-flex>
                                                <v-flex xs12 sm8 md8>
                                                  <v-text-field
                                                    name="bildrechte"
                                                    v-model="formnews.bildrechte"
                                                    solo
                                                  ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm4 md4 class="feildLabel">Lizenz</v-flex>
                                                <v-flex xs12 sm8 md8>
                                                  <v-select
                                                    :items="items"
                                                    v-model="formnews.lizenz"
                                                    solo
                                                  ></v-select>
                                                </v-flex>
                                              </v-layout>
                                            </v-card-text>
                                          </v-card>
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                    <v-flex d-flex xs12 sm6 md6>
                                      <v-layout row wrap>
                                        <v-flex xs12>
                                          <v-card
                                            light
                                            color="grey lighten-4"
                                            tile
                                            flat
                                            class="cartBorder"
                                          >
                                            <v-card-text>
                                              <v-layout row wrap>
                                                <v-flex xs12 sm4 md4>
                                                  <v-img
                                                    src="https://picsum.photos/510/300?random"
                                                    aspect-ratio="1.2"
                                                  ></v-img>
                                                </v-flex>
                                                <v-flex xs12 sm8 md8>
                                                  <ul class="caption">
                                                    <li class="mb-2">Hochgeladen am: 20.08.2014</li>
                                                    <li class="my-2">DateigroBe: 3802,63 KB</li>
                                                    <li class="my-2">MaBe: 2912 x 1353 Pixel</li>
                                                    <li class="mt-2">Dateityp: .jpg</li>
                                                  </ul>
                                                </v-flex>
                                              </v-layout>
                                              <v-divider light class="my-3"></v-divider>
                                              <v-img
                                                v-if="imageBannerData"
                                                :lazy-src="imageBannerData"
                                                :src="imageBannerData"
                                              />
                                              <v-img
                                                v-else-if="formnews.bannerimage"
                                                :lazy-src="'http://dev.woobii.com/admin/'+formnews.bannerimage"
                                                :src="'http://dev.woobii.com/admin/'+formnews.bannerimage"
                                              />
                                              <v-img
                                                v-else
                                                :src="require(`@/assets/woobii-banner.jpg`)"
                                                :lazy-src="require(`@/assets/woobii-banner.jpg`)"
                                              />
                                              <div
                                                class="caption my-3"
                                              >Das Build wird zusatzlich zum Original auch in diesen GroBen zum Download angeboten:</div>
                                              <v-layout
                                                row
                                                wrap
                                                class="caption"
                                                style="border:1px solid #CCC;"
                                              >
                                                <v-flex
                                                  xs6
                                                  style="border:1px solid #CCC;border-top:none;border-left:none;"
                                                >1200 x 557</v-flex>
                                                <v-flex
                                                  xs6
                                                  style="border-bottom:1px solid #CCC;"
                                                >56,5 KB</v-flex>
                                                <v-flex
                                                  xs6
                                                  style="border-right:1px solid #CCC;"
                                                >600 x 278</v-flex>
                                                <v-flex xs6>23.2 KB</v-flex>
                                              </v-layout>
                                            </v-card-text>
                                          </v-card>
                                        </v-flex>
                                      </v-layout>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card-text>
                              <v-card-actions class="pt-4">
                                <v-container grid-list-md class="pa-0">
                                  <v-layout row wrap>
                                    <v-flex xs12 sm6 md6>
                                      <v-checkbox
                                        v-model="formnews.checkbox"
                                        label="Hauptnews auf GLAUBE.at (kostenpflichtig)"
                                        required
                                      ></v-checkbox>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                      <v-btn
                                        @click="editDialog = false"
                                        depressed
                                        small
                                        class="grey lighten-2"
                                      >LOSCHEN</v-btn>
                                      <v-btn
                                        @click="saveNewsroom"
                                        depressed
                                        small
                                        class="grey lighten-2"
                                      >SPEICHERN</v-btn>
                                      <v-btn
                                        depressed
                                        small
                                        dark
                                        @click="saveNewsroom"
                                        color="orange darken-1"
                                      >VEROFFENTLICHUN</v-btn>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
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
                  <v-card-text>
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
                  <v-card-text>
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
                                <p class="body-2 text-xs-center">
                                  Sonntag
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
                  <v-card-text>
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
                  <v-card-text>
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
            <!-- <v-btn flat block class="grey lighten-4 ma-0 mb-4 py-2">
              <v-rating
                v-model="rating"
                readonly
                dense
                small
                background-color="grey darken-4"
                color="grey darken-4"
              ></v-rating>Kirchengemeinde bewerten
            </v-btn>-->
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
        <v-dialog v-model="dialogLoader" hide-overlay persistent width="300">
          <v-card color="#FA6E2F" dark>
            <v-card-text>
              Please stand by
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
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
      userRole: localStorage.getItem("userRole")
        ? localStorage.getItem("userRole")
        : 1,
      churcheslogo: "",
      rating: 0,
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      churchesData: [],
      active_tab: "tab-1",
      searchLoading: false,
      churcheTitle: [],
      search: null,
      sharedialog: false,
      imageData: "",
      socialUrl:
        "http://dev.woobii.com/Kirchenfinder/" + this.$route.params.slug,
      socialTitle: "Woobii",
      socialDescription: "Woobii",
      socialQuote: "Woobii",
      editDialog: false,
      editDialogdesc: false,
      editDialoglogo: false,
      dialogLoader: false,
      datemodal: false,
      datemodalI: false,
      editBannerDialog: false,
      imageBannerData: "",
      date: "",
      items: ["Test", "Test", "Test"],
      checkbox: "",
      newsmeldung: "",
      subcategory: "",
      category: "",
      churcheid: "",
      aboutus: "",
      formnews: {
        id: "",
        newstitle: "",
        teaser: "",
        newsmeldung: "",
        ressort: "",
        kategorie: "",
        themen: "",
        veroffentlichung: "",
        inaktiv: "",
        date: "",
        bildtitel: "",
        beschreibung: "",
        bildrechte: "",
        lizenz: "",
        bannerimage: ""
      }
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
    this.listofcategory();
    this.listofsubcategory();
  },
  computed: {
    userRoleCall() {
      return this.$store.state.userRole;
    }
  },
  beforeDestroy() {},
  methods: {
    imageBannerDataChange: function() {},
    saveNewsroom: function() {
      this.dialogLoader = true;
      let e = this;
      axios
        .post("/churcheview/newsroomupdate", {
          id: this.formnews.id,
          newstitle: this.formnews.newstitle,
          teaser: this.formnews.teaser,
          newsmeldung: this.formnews.newsmeldung,
          ressort: this.formnews.ressort,
          kategorie: this.formnews.kategorie,
          themen: this.formnews.themen,
          veroffentlichung: this.formnews.veroffentlichung,
          inaktiv: this.formnews.inaktiv,
          date: this.formnews.date,
          bildtitel: this.formnews.bildtitel,
          beschreibung: this.formnews.beschreibung,
          bildrechte: this.formnews.bildrechte,
          lizenz: this.formnews.lizenz,
          bannerimage: this.formnews.bannerimage
        })
        .then(function(response) {
          //console.log(response);
          e.dialogLoader = false;
          e.editDialog = false;
          if (response.data.status == true) {
            e.churchdata(e.$route.params.slug);
            e.$toasted.success("Successfully Updated", {
              position: "top-center",
              duration: 2000
            });
          } else {
            e.$toasted.error("Please try after sometime", {
              position: "top-center",
              duration: 2000
            });
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
    saveLogo: function() {
      this.dialogLoader = true;
      let e = this;
      axios
        .post("/churcheview/logoupdate", {
          id: this.churcheid,
          logo: this.imageData
        })
        .then(function(response) {
          console.log(response);
          e.dialogLoader = false;
          e.editDialoglogo = false;
          if (response.data.status == true) {
            e.churcheslogo = "";
            e.churchdata(e.$route.params.slug);
            e.$toasted.success("Successfully Updated", {
              position: "top-center",
              duration: 2000
            });
          } else {
            e.$toasted.error("Please try after sometime", {
              position: "top-center",
              duration: 2000
            });
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
    saveAboutUs: function() {
      this.dialogLoader = true;
      let e = this;
      axios
        .post("/churcheview/aboutusupdate", {
          id: this.churcheid,
          aboutus: this.aboutus
        })
        .then(function(response) {
          console.log(response);
          e.dialogLoader = false;
          e.editDialogdesc = false;
          if (response.data.status == true) {
            e.churchdata(e.$route.params.slug);
            e.$toasted.success("Successfully Updated", {
              position: "top-center",
              duration: 2000
            });
          } else {
            e.$toasted.error("Please try after sometime", {
              position: "top-center",
              duration: 2000
            });
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
    newsroomdetail: function(id) {
      var self = this;
      this.searchLoading = true;
      // Simulated ajax query
      axios
        .get("/churcheview/newsroombyid?r=" + id)
        .then(function(response) {
          if (response.data.status == true) {
            self.formnews.id = response.data.newsroom[0].newsroom_id;
            self.formnews.newstitle = response.data.newsroom[0].nr_title;
            self.formnews.teaser = response.data.newsroom[0].nr_short_desc;
            self.formnews.newsmeldung =
              response.data.newsroom[0].nr_description;
            self.formnews.ressort = response.data.newsroom[0].nr_category;
            self.listofsubcategory(self.formnews.ressort);
            self.formnews.kategorie = response.data.newsroom[0].nr_subcategory;
            self.formnews.themen = "";
            self.formnews.veroffentlichung = "";
            self.formnews.inaktiv = "";
            self.formnews.bannerimage = response.data.newsroom[0].nr_banner;
            self.formnews.date = response.data.newsroom[0].nr_banner
              .split("/")
              .pop();
            self.formnews.bildtitel = "";
            self.formnews.beschreibung =
              response.data.newsroom[0].nr_banner_text;
            self.formnews.bildrechte = "";
            self.formnews.lizenz = "";
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
    categorySelected: function(event) {
      this.listofsubcategory(event);
    },
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
            e.churchesData = response.data.churche;
            e.churcheid = e.churchesData[0].id;
            e.churcheslogo = e.churchesData[0].logo + "?v=" + Math.random();
            e.aboutus = e.churchesData[0].about_us;
            e.rating = e.churchesData[0].rating;
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
    },
    listofcategory: function() {
      var e = this;
      axios
        .get("/churcheview/newsroomcategory")
        .then(function(response) {
          if (response.data.status == true) {
            e.category = response.data.catgory;
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
    listofsubcategory: function(cat = 1) {
      var e = this;
      axios
        .get("/churcheview/newsroomsubcategory/?c=" + cat)
        .then(function(response) {
          if (response.data.status == true) {
            e.subcategory = response.data.subcatgory;
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
.editr--content {
  background: #ffffff;
}
</style>