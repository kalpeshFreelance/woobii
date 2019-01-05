<template>
  <v-content class="white">
    <section class="kitchenFinderSectionTop">
      <v-btn fab dark small color="primary" @click.stop="drawer = !drawer" class="btnFilter"><v-icon dark>filter_list</v-icon></v-btn>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-card flat color="white" class="mobileFilterWarp">
          <v-card-text>
            <v-form>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Land"
                placeholder="Bitte auswählen"
              ></v-select>
             <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Stadt"
                placeholder="Munchen"
              ></v-select>
              <v-select label="Umfeld-Radius" placeholder="0"></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Top Gemeinden"
                placeholder="Nur Top Gemeinden (Empfehlung)"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Gemeindetyp"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Gemeindegröße"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Sprache"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Bewertung"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Angebot"
                placeholder="Bitte auswählen"
              ></v-select>
            </v-form>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-container class="grey lighten-3 py-2">
        <v-layout row wrap>
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
    <section class="kitchenFinderSection">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12 md3>
            <v-card flat color="white" class="kitchenFinderFilter">
              <v-card-text>
                <v-form>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Land"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Stadt"
                    placeholder="Munchen"
                  ></v-select>
                  <v-select label="Umfeld-Radius" placeholder="0"></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Top Gemeinden"
                    placeholder="Nur Top Gemeinden (Empfehlung)"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Gemeindetyp"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Gemeindegröße"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Sprache"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Bewertung"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Angebot"
                    placeholder="Bitte auswählen"
                  ></v-select>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md9>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card flat color="white" class="kFinderMapWrap">
                  <v-card-text class="pa-3">
                    <v-layout row wrap>
                      <v-flex d-flex xs12 md4>
                        <p class="caption mb-0">Anzahl an Gemeinden
                          <br>im gewählten Bereich
                        </p>
                        <span class="display-1 font-weight-bold my-0">248</span>
                      </v-flex>
                      <v-flex d-flex xs12 md4>
                        <p class="caption mb-0">Anzahl an Gemeinden
                          <br>mit lhrer Vorauswahl
                        </p>
                        <span class="display-1 font-weight-bold my-0">32</span>
                      </v-flex>
                      <v-flex d-flex xs12 md4>
                        <p class="caption mb-0">Top Gemeinden
                          <br>in lhrer Vorauswahl
                        </p>
                        <span class="display-1 font-weight-bold my-0">48%</span>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <GmapMap
                    :center="center"
                    :zoom="zoom"
                    map-type-id="roadmap"
                    style="width: 100%; height: 450px"
                  >
                    <GmapMarker
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m"
                      :clickable="true"
                      :draggable="false"
                      @click="center=m"
                    />
                    <GmapCircle
                      :bounds="circleBounds"
                      :center="center"
                      :radius="radius"
                      :options="{editable: false}"
                    ></GmapCircle>
                  </GmapMap>
                  <!--<googlemaps-map
                    :center.sync="center"
                    :zoom.sync="zoom"
                    map-type-id="roadmap"
                         style="width: 100%; height: 450px"              
                  >:options="mapOptions"
                    @idle="onIdle"
                    @click="onMapClick"
                    :label="{
                        color: marker === currentmarker ? 'white' : 'black',
                        fontFamily: 'Material Icons',
                        fontSize: '20px',
                        text: 'star_rate',
                      }"
                  <!-- User Position-->
                  <!--<googlemaps-user-position @update:position="setUserPosition"/>
                    <googlemaps-marker
                      v-for="(marker, index) of markers"
                      :key="index"                      
                      :position="marker"
                    >
                    </googlemaps-marker>
                    <!-- <circle :bounds.sync="circleBounds" :center.sync="center" :radius.sync="100000" :options="{editable: true}"></circle> 
                  </googlemaps-map>-->
                  <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img> -->
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row wrap v-if="churchesList">
              <v-flex d-flex xs12 md4 v-for="churche in churchesList">
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
                    <a :href="'/Kirchenfinder/'+churche.slug" class="caption black--text">
                      <h4 class="body-1 my-2">{{ churche.title }}</h4>
                    </a>
                    <div>
                      <v-chip small label dark class="white--text ma-0">Top Gemeinde</v-chip>
                    </div>
                    <div class="my-2">
                      <v-rating v-model="rating" readonly dense small background-color="grey darken-4" color="grey darken-4"></v-rating>
                      <!-- <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star_half</v-icon>
                      <v-icon small class="black--text">star_border</v-icon> -->
                      <span class="body-1 font-weight-bold ml-2">4,49</span>
                    </div>
                    <a :href="'/Kirchenfinder/'+churche.slug" class="caption black--text">
                      <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                    </a>
                  </v-card-text>
                </v-card>
              </v-flex>
              <!-- <v-flex d-flex xs12 md4>
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
              <v-flex d-flex xs12 md4>
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
              <v-flex d-flex xs12 md4>
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
              </v-flex>-->
            </v-layout>
               <div class="text-xs-center">
                <v-pagination
                  v-model="page"
                  :length="Math.floor(totalcount/30)"
                  :total-visible="7"
                   @input="onPageChange"
                ></v-pagination>
              </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      rating: 3,
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      center: {
        lat: 48.2142855,
        lng: 16.4191467
      },
      page: 1,
      totalcount: 0,
      userPosition: null,
      zoom: 11,
      radius: 10000,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      markers: [],
      churchesList: [],
      circleBounds: {},
      GemeindetypeList: []
    };
  },
  mounted() {
    this.churchlist();
    this.listofmuncipalty();
  },
  methods: {
    centerOnUser() {
      if (this.userPosition) {
        this.center = this.userPosition;
      }
    },
    setUserPosition(position) {
      this.userPosition = position;
    },
    listofmuncipalty: function() {
      var e = this;
      axios
        .get("/adminglobal/getallmuncipalitytype")
        .then(function(response) {
          console.log(response.data);
          if (response.data.status == true) {
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
    churchlist: function(pageNum = 0) {
      var e = this;
      axios
        .get("/churcheview/churchelist?p="+pageNum)
        .then(function(response) {
          if (response.data.status == true) {
            e.churchesList = response.data.churches.community;
            if (response.data.churches.community) {
              e.totalcount = response.data.churches.communitycount;
              for (var prop in response.data.churches.community) {
                e.markers.push({ lat:  parseFloat(response.data.churches.community[prop].lat), lng:  parseFloat(response.data.churches.community[prop].lng) });
              }
            }
          }
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
    onPageChange :function(pageNum){
      this.churchlist(pageNum-1);
    }
  }
};
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>
