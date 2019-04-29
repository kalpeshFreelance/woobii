<template>
  <v-content class="mainWrapper white">
    <section class="kitchenFinderSectionTop">
      <v-btn fab dark small color="primary" @click.stop="drawer = !drawer" class="btnFilter">
        <v-icon dark>filter_list</v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-card flat color="white" class="mobileFilterWarp">
          <v-card-text>
            <v-form>
              <v-autocomplete
                placeholder="Bitte auswählen"
                :items="LandList"
                @change="listofcity"
                item-text="name"
                v-model="land"
                item-value="id"
                label="Land"
              ></v-autocomplete>
              <v-autocomplete
                :items="OrtList"
                item-text="place"
                item-value="id"
                label="Stadt"
                placeholder="Munchen"
                @input="mapCenterloation"
              ></v-autocomplete>
              <!-- <v-select label="Umfeld-Radius" placeholder="0"></v-select> -->
              <v-label>
                <span class="custom">Umfeld-Radius</span>
              </v-label>
              <v-slider v-model="radius" class="mt-0" :max="21000" :min="8000"></v-slider>
              <v-select
                :items="topCommunity"
                item-text="type"
                item-value="id"
                label="Top Gemeinden"
                v-model="topGemeinden"
                @input="mapCenterloation"
                placeholder="Nur Top Gemeinden (Empfehlung)"
              ></v-select>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                label="Gemeindetyp"
                v-model="gemeindetyp"
                @input="mapCenterloation"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select
                :items="communitySize"
                label="Gemeindegröße"
                placeholder="Bitte auswählen"
                v-model="gemeindegrobe"
                @input="mapCenterloation"
              ></v-select>
              <v-select
                :items="langauages"
                label="Sprache"
                placeholder="Bitte auswählen"
                v-model="sprache"
                @input="mapCenterloation"
              ></v-select>
              <!-- <v-combobox
                :items="rateing"
                label="Bewertung"
                v-model="bewertung"
                @input="mapCenterloation"
                placeholder="Bitte auswählen"
              >
                <template slot="selection" slot-scope="data">
                  <v-rating
                    v-model="data.item"
                    readonly
                    dense
                    small
                    background-color="grey darken-4"
                    color="grey darken-4"
                  ></v-rating>
                </template>
                <template slot="item" slot-scope="data">
                  <v-rating
                    v-model="data.item"
                    readonly
                    dense
                    small
                    background-color="grey darken-4"
                    color="grey darken-4"
                  ></v-rating>
                </template>
              </v-combobox> -->
              <!-- <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Angebot"
                    v-model="angebot"
                    placeholder="Bitte auswählen"
              ></v-select>-->
            </v-form>
            <div class="dealsWrap">
              <h4 class="body-1">Angebote</h4>
              <!-- <v-img
                    v-if="offers"
                    v-for="(offer, index) in offers"
                    :src="'http://dev.woobii.com/admin/'+offer.dealImg"
                    v-bind:class="[isActive ? activeClass : errorClass]"
                    :id="`img-`+index"
                    @click="offerImage"
              ><v-icon color="green darken-4">check_circle</v-icon></v-img>-->
              <v-tooltip v-if="offers" v-for="(offer, index) in offers" bottom>
                <v-img
                  slot="activator"
                  :src="'http://dev.woobii.com/admin/'+offer.dealImg"
                  class="imgDeal"
                >
                  <label>
                    <input
                      type="checkbox"
                      name="offer[]"
                      @input="mapCenterloation"
                      :value="offer.dealId"
                    >
                    <span class="backgroundColor"></span>
                  </label>
                </v-img>
                <span>{{offer.deal}}</span>
              </v-tooltip>
            </div>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
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
    <section class="kitchenFinderSection">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12 md3>
            <v-card flat color="white" class="kitchenFinderFilter">
              <v-card-text>
                <v-form>
                  <v-autocomplete
                    placeholder="Bitte auswählen"
                    :items="LandList"
                    @change="listofcity"
                    item-text="name"
                    v-model="land"
                    item-value="id"
                    label="Land"
                  ></v-autocomplete>
                  <v-autocomplete
                    :items="OrtList"
                    item-text="place"
                    item-value="id"
                    label="Stadt"
                    placeholder="Munchen"
                    @input="mapCenterloation"
                  ></v-autocomplete>
                  <!-- <v-select label="Umfeld-Radius" placeholder="0"></v-select> -->
                  <v-label>
                    <span class="custom">Umfeld-Radius</span>
                  </v-label>
                  <v-slider v-model="radius" class="mt-0" :max="21000" :min="8000"></v-slider>
                  <v-select
                    :items="topCommunity"
                    item-text="type"
                    item-value="id"
                    label="Top Gemeinden"
                    v-model="topGemeinden"
                    @input="mapCenterloation"
                    placeholder="Nur Top Gemeinden (Empfehlung)"
                  ></v-select>
                  <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    label="Gemeindetyp"
                    v-model="gemeindetyp"
                    @input="mapCenterloation"
                    placeholder="Bitte auswählen"
                  ></v-select>
                  <v-select
                    :items="communitySize"
                    label="Gemeindegröße"
                    placeholder="Bitte auswählen"
                    v-model="gemeindegrobe"
                    @input="mapCenterloation"
                  ></v-select>
                  <v-select
                    :items="langauages"
                    label="Sprache"
                    placeholder="Bitte auswählen"
                    v-model="sprache"
                    @input="mapCenterloation"
                  ></v-select>
                  <!-- <v-select
                    :items="rateing"
                    label="Bewertung"
                    v-model="bewertung"
                    @input="mapCenterloation"
                    placeholder="Bitte auswählen"
                  ></v-select>-->
                  <!-- <v-combobox
                    :items="rateing"
                    label="Bewertung"
                    v-model="bewertung"
                    @input="mapCenterloation"
                    placeholder="Bitte auswählen"
                  >
                    <template slot="selection" slot-scope="data">
                      <v-rating
                        v-model="data.item"
                        readonly
                        dense
                        small
                        background-color="grey darken-4"
                        color="grey darken-4"
                      ></v-rating>
                    </template>
                    <template slot="item" slot-scope="data">
                      <v-rating
                        v-model="data.item"
                        readonly
                        dense
                        small
                        background-color="grey darken-4"
                        color="grey darken-4"
                      ></v-rating>
                    </template>
                  </v-combobox> -->
                  <!-- <v-select
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Angebot"
                    v-model="angebot"
                    placeholder="Bitte auswählen"
                  ></v-select>-->
                </v-form>
                <div class="dealsWrap">
                  <h4 class="body-1">Angebote</h4>
                  <!-- <v-img
                    v-if="offers"
                    v-for="(offer, index) in offers"
                    :src="'http://dev.woobii.com/admin/'+offer.dealImg"
                    v-bind:class="[isActive ? activeClass : errorClass]"
                    :id="`img-`+index"
                    @click="offerImage"v-model="offerData"
                  ><v-icon color="green darken-4">check_circle</v-icon></v-img>-->
                  <v-tooltip v-if="offers" v-for="(offer, index) in offers" bottom>
                    <v-img
                      slot="activator"
                      :src="'http://dev.woobii.com/admin/'+offer.dealImg"
                      class="imgDeal"
                    >
                      <label>
                        <input
                          type="checkbox"
                          name="offer[]"
                          @input="mapCenterloation"
                          :value="offer.dealId"
                        >
                        <span class="backgroundColor"></span>
                      </label>
                    </v-img>
                    <span>{{offer.deal}}</span>
                  </v-tooltip>
                </div>
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
                        <p class="caption mb-0">
                          Anzahl an Gemeinden
                          <br>im gewählten Bereich
                        </p>
                        <span class="display-1 font-weight-bold my-0">{{totalcount}}</span>
                      </v-flex>
                      <v-flex d-flex xs12 md4>
                        <p class="caption mb-0">
                          Anzahl an Gemeinden
                          <br>mit lhrer Vorauswahl
                        </p>
                        <span class="display-1 font-weight-bold my-0">32</span>
                      </v-flex>
                      <v-flex d-flex xs12 md4>
                        <p class="caption mb-0">
                          Top Gemeinden
                          <br>in lhrer Vorauswahl
                        </p>
                        <span class="display-1 font-weight-bold my-0">{{topTotalChurches}}%</span>
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
                  <router-link :to="'/Kirchenfinder/'+churche.slug" class="caption black--text">
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
                  </router-link>
                  <v-card-text class="pa-0">
                    <router-link :to="'/Kirchenfinder/'+churche.slug" class="caption black--text">
                      <h4 class="body-1 my-2">{{ churche.title }}</h4>
                    </router-link>
                    <div>
                      <v-chip
                        small
                        label
                        dark
                        class="white--text my-1"
                        v-for="tag in splitTag(churche.tags)"
                      >{{tag}}</v-chip>
                    </div>
                    <!-- <div class="my-2">
                      <v-rating
                        v-model="churche.rating"
                        readonly
                        dense
                        small
                        background-color="grey darken-4"
                        color="grey darken-4"
                      ></v-rating> -->
                      <!-- <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star</v-icon>
                      <v-icon small class="black--text">star_half</v-icon>
                      <v-icon small class="black--text">star_border</v-icon>-->
                      <!-- <span class="body-1 font-weight-bold ml-2">{{churche.rating}}</span>
                    </div> -->
                    <a :href="'/Kirchenfinder/'+churche.slug" class="caption black--text">
                      <v-icon small class="black--text">chevron_right</v-icon>Zur Gemeinde
                    </a>
                  </v-card-text>
                </v-card>
              </v-flex>
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
        lat: 52.52,
        lng: 13.4
      },
      page: 1,
      totalcount: 0,
      userPosition: null,
      zoom: 10,
      radius: 10000,
      rateing: [1, 2, 3, 4, 5],
      selectCity: 0,
      land: 0,
      markers: [],
      offers: [],
      churchesList: [],
      circleBounds: {},
      GemeindetypeList: [],
      LandList: [],
      OrtList: [],
      communitySize: ["110 - 440"],
      topCommunity: ["Top Gemeinde", "Best Gemeinde", "Best Rating"],
      langauages: [
        "Französisch",
        "Deutsch",
        "Chinesisch",
        "Ungarisch",
        "Persisch",
        "Englisch",
        "Arabisch",
        "Französisch",
        "Portugiesisch",
        "Rumänisch",
        "Koreanisch"
      ],
      countryflag: false,
      offerData: [],
      angebot: "",
      bewertung: "",
      sprache: "",
      gemeindegrobe: "",
      gemeindetyp: "",
      topGemeinden: "",
      topTotalChurches: 0,
      searchLoading: false,
      churcheTitle: [],
      search: null
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
    this.churchlist();
    this.listofcountry();
    this.listofcity();
    this.listofmuncipalty();
    this.listofoffer();
  },
  methods: {
    pageRedirect: function(event) {
      this.$router.push("/Kirchenfinder/" + event);
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
    splitTag: function(value) {
      if (!value) return "";
      value = value.split(",");
      return value;
    },
    centerOnUser() {
      if (this.userPosition) {
        this.center = this.userPosition;
      }
    },
    setUserPosition(position) {
      this.userPosition = position;
    },
    listofoffer: function() {
      var e = this;
      axios
        .get("/churcheview/offers")
        .then(function(response) {
          if (response.data.status == true) {
            e.offers = response.data.offer;
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
    listofmuncipalty: function(land = 0, ort = 0) {
      var e = this;
      let url = "/adminglobal/getallmuncipalitytype";
      if (land > 0 || ort > 0) {
        url = url + "/?l=" + land + "&o=" + ort;
      }
      axios
        .get(url)
        .then(function(response) {
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
    listofcity: function(id) {
      var e = this;
      this.listofmuncipalty(this.land);
      if (e.land == "") {
        var city = "AT";
      } else {
        var cityData = e.LandList.filter(col => {
          return col.id.match(id);
        });
        if (cityData.length > 0) {
          var city = cityData[0].country_code;
        }
        e.dialogLoader = true;
      }
      e.page = 1;
      e.selectCity = 0;
      e.countryflag = true;
      let all = false;
      if (this.selectCity == 0 && this.land == 0) {
        all = false;
      } else {
        all = true;
      }
      e.churchlist(0, 0, e.land, all);

      axios
        .get("/adminglobal/getallcity/?id=" + city)
        .then(function(response) {
          if (response.data.status == true) {
            e.OrtList = response.data.cities.city;
            e.dialogLoader = false;
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
    mapCenterloation: function(event) {
      var e = this;
      var cityData = "";
      if (Number.isInteger(parseInt(event))) {
        cityData = e.OrtList.filter(col => {
          return col.id.match(event);
        });
      } else {
        if (event.isArray) {
          if (event.target.name == "offer[]") {
            var index = e.offerData.indexOf(event.target.value);
            if (index > -1) {
              e.offerData.splice(index, 1);
            } else {
              e.offerData.push(event.target.value);
            }
          }
        } else {
          e.churchlist(0, e.selectCity, e.land, false);
        }
      }
      if (cityData.length == 1) {
        e.center.lat = parseFloat(cityData[0].lat);
        e.center.lng = parseFloat(cityData[0].lng);
        e.selectCity = cityData[0].id;
        e.page = 1;
        e.churchlist(0, e.selectCity, e.land, false);
        e.markerCount(e.center.lat, e.center.lng, e.markers);
      } else {
        if (!Number.isInteger(parseInt(event))) {
          e.churchlist(0, e.selectCity, e.land, false);
        } else {
          e.churchlist(0, e.selectCity, e.land, false);

          //e.center.lat = parseFloat("48.116667");
          //e.center.lng = parseFloat("14.866667");
        }
      }
    },
    listofcountry: function() {
      var e = this;
      axios
        .get("/adminglobal/getallcountry")
        .then(function(response) {
          if (response.data.status == true) {
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

    churchlist: function(pageNum = 0, city = 0, country = 14, all = true) {
      var e = this;
      var strQuery = "";
      if (e.topGemeinden) {
        strQuery += "&topGemeinden=" + e.topGemeinden;
      }
      if (e.gemeindetyp) {
        strQuery += "&gemeindetyp=" + e.gemeindetyp;
      }
      if (e.gemeindegrobe) {
        strQuery += "&gemeindegrobe=" + e.gemeindegrobe;
      }
      if (e.sprache) {
        strQuery += "&sprache=" + e.sprache;
      }
      if (e.bewertung) {
        strQuery += "&bewertung=" + e.bewertung;
      }
      if (e.offerData.length > 0) {
        strQuery += "&offerData=" + e.offerData;
      }
      axios
        .get(
          "/churcheview/churchelist?p=" +
            pageNum +
            "&all=" +
            all +
            "&city=" +
            city +
            "&country=" +
            country +
            strQuery
        )
        .then(function(response) {
          if (response.data.status == true) {
            e.churchesList = response.data.churches.community;
            if (response.data.churches.community) {
              e.totalcount = response.data.churches.communitycount;
              e.topTotalChurches = Math.round(
                (response.data.churches.topChurches /
                  response.data.churches.communitycount) *
                  100
              );
              e.markers = [];
              for (var prop in response.data.churches.community) {
                e.markers.push({
                  lat: parseFloat(response.data.churches.community[prop].lat),
                  lng: parseFloat(response.data.churches.community[prop].lng)
                });
              }
              e.markerCount(e.center.lat, e.center.lng, e.markers);
            } else {
              e.totalcount = 0;
              e.markers = [];
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
    onPageChange: function(pageNum) {
      if (this.countryflag == true) {
        this.selectCity = 0;
      }
      let all = false;
      if (this.selectCity == 0 && this.land == 0) {
        all = false;
      } else {
        all = true;
      }
      this.churchlist(pageNum - 1, this.selectCity, this.land, all);
    },
    markerCount: function(lat, lng, marker) {
      console.log("In side marker count");
      var loc1 = lat + "," + lng; //Marker Radius Co-ords
      var loc2 = new google.maps.LatLng(marker[0].lat, marker[0].lng); //Marker Co-ords

      var diff = google.maps.geometry.spherical.computeDistanceBetween(
        loc1,
        loc2
      );

      if (diff < circle.getRadius()) {
        alert(loc2 + " Inside Radius");
      } else {
        alert(loc2 + " Outside Radius");
      }
    }
  }
};
</script>
<style>
.progess-custom {
  margin: 0px;
}
.v-responsive.v-image.imgDeal {
  margin-right: 5px !important;
}
</style>
