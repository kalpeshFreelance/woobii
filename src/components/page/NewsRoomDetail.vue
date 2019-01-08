<template>
  <v-content class="mainWrapper white">
    <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
      <v-btn fab dark small color="primary" @click.stop="drawer = !drawer" class="btnFilter">
        <v-icon dark>filter_list</v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-card flat color="white" class="mobileFilterWarp">
          <v-card-text>
            <v-form>
              <v-text-field placeholder="Placeholder" append-icon="search" class="searchInput"></v-text-field>
              <v-select
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Gemeindetyp:"
                placeholder="Bitte auswählen"
              ></v-select>
              <v-select label="Ressort:" placeholder="Bitte auswählen"></v-select>
              <v-select label="Subressort:" placeholder="Stichwort einfügen"></v-select>
              <v-select label="Themen:" placeholder="Themen..."></v-select>
              <v-select label="People:" placeholder="People..."></v-select>
              <v-select
                label="Land:"
                placeholder="Land..."
                :items="LandList"
                item-text="name"
                v-model="land"
                item-value="id"
              ></v-select>
            </v-form>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-container class="white py-0">
        <v-layout>
          <v-flex xs6>
            <v-btn flat class="white black--text ma-0 px-0 btnTab">Kirchen</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn flat class="grey lighten-2 ma-0 right black--text">
              <v-icon class="mr-2">folder</v-icon>0 Lightbox
            </v-btn>
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
                  <v-select :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Gemeindetyp:"
                placeholder="Bitte auswählen"></v-select>
                  <v-select  label="Ressort:" placeholder="Bitte auswählen"></v-select>
                  <v-select  label="Subressort:" placeholder="Stichwort einfügen"></v-select>
                  <v-select label="Themen:" placeholder="Themen..."></v-select>
                  <v-select label="People:" placeholder="People..."></v-select>
                  <v-select
                    label="Land:"
                    placeholder="Land..."
                    :items="LandList"
                    item-text="name"
                    v-model="land"
                    item-value="id"
                  ></v-select>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 class="newsDetail">
            <v-card flat color="white">
              <v-tabs slider-color="deep-orange accent-3">
                <v-tab>Text</v-tab>
                <v-tab>Bilder</v-tab>
                <v-tab>Dokument</v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text class="px-0">
                      <p class="caption mb-1">{{ newsroomData[0].date | moment("DD.MM.YYYY")}}</p>
                      <p class="caption mb-1" v-html="newsroomData[0].description"></p>
                      <div class="grey lighten-3 my-3 pa-2">
                        <v-img
                          v-if="newsroomData[0].bannerimage"
                          :lazy-src="'http://dev.woobii.com/admin/'+newsroomData[0].bannerimage"
                          :src="'http://dev.woobii.com/admin/'+newsroomData[0].bannerimage"
                          class="mb-2"
                        />
                        <v-img
                          v-else
                          :src="require(`@/assets/woobii-banner.jpg`)"
                          :lazy-src="require(`@/assets/woobii-banner.jpg`)"
                          class="mb-2"
                        />
                        <p
                          class="caption font-weight-bold text-xs-center mb-1 orangeText"
                        >Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <p
                          class="caption font-weight-bold text-xs-center mb-1"
                        >There are many variations of passages</p>
                      </div>
                      <div class="grey lighten-3 my-3 pa-2">
                        <span
                          class="caption font-weight-bold"
                        >Zu dieser Presseinformation bieten wir:</span>
                        <v-btn small outline color="black" class="my-0">
                          <v-icon small dark class="mr-1">camera_alt</v-icon>2 Bider
                        </v-btn>
                        <v-btn small outline color="black" class="my-0">
                          <v-icon small dark class="mr-1">description</v-icon>1 Dokument
                        </v-btn>
                      </div>
                      <div class="grey lighten-3 my-3 pa-2">
                        <span class="body-2 font-weight-bold mb-0 mr-2">Presseinformation</span>
                        <span class="caption font-weight-bold mb-0">(2035 Zeichen)</span>
                      </div>
                      <p
                        class="caption font-weight-bold mb-1"
                      >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                      <p
                        class="caption mb-1"
                      >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                      <div class="topBottonBorder mt-3 py-3">
                        <v-btn small outline color="black" class="ma-0">
                          <v-icon small dark class="mr-1">print</v-icon>Seite drucken
                        </v-btn>
                        <v-btn small outline color="black" class="right ma-0">
                          <v-icon small dark class="mr-1">email</v-icon>Link Mailen
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text class="px-0">Bilder Text</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text class="px-0">Dokument Text</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-flex>
          <v-flex xs12 md3 class="newsRight">
            <v-card flat color="white">
              <v-btn depressed dark block class="grey darken-4 mb-0 textLeft">
                <v-icon small dark class="mr-2">edit</v-icon>Presseaussondunegn
              </v-btn>
              <v-btn depressed outline block class="mt-0 mb-2 textLeft">
                <span class="pl-4">ATP Stanorte</span>
              </v-btn>
              <v-btn depressed outline block class="mb-2 textLeft">
                <v-icon small dark class="mr-2">edit</v-icon>Downloads
              </v-btn>
              <v-btn depressed outline block class="mb-2 textLeft">
                <v-icon small dark class="mr-2">edit</v-icon>Pressekontakt
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <p class="caption mb-2">Alie Inhalte dieser Meldung als .zip:</p>
              <v-btn depressed dark block color="grey darken-4 mb-2 hoverCustom">
                <v-icon small dark class="mr-2">file_download</v-icon>Sofort downloaden
              </v-btn>
              <v-btn depressed dark block color="grey darken-4 hoverCustom">
                <v-icon small dark class="mr-2">folder</v-icon>Sofort downloaden
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <h2 class="subheading font-weight-bold mb-3">
                <v-icon small class="black--text mr-2">camera_alt</v-icon>Bilder
                <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
              </h2>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
              <v-divider class="my-3"></v-divider>
              <h2 class="subheading font-weight-bold mb-3">
                <v-icon small class="black--text mr-2">edit</v-icon>Bilder
                <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
              </h2>
              <p class="caption mb-2">demo- 152769333-1527673223</p>
              <router-link to="/" class="caption mb-2">
                <p>.docs | 1.25 MB
                  <v-icon small class="right black--text ml-2">edit</v-icon>
                </p>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <h2 class="subheading font-weight-bold mb-2">Pressekontakt</h2>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
              <p class="caption mb-1">
                <strong>Lucian Wilkinson</strong>
                <br>Uliam eum et elit officia in
              </p>
              <p class="caption mb-1">Sit rerum harum qui maxime soluta dolorem</p>
              <p class="caption mb-1">Telefonnummer: +291-97-4116196</p>
            </v-card>
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
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      newsroomData: {},
      GemeindetypeList: [],
      LandList: [],
      land: ""
    };
  },
  mounted() {
    this.newsroomdata(this.$route.params.slug);
    this.listofmuncipalty();
    this.listofcountry();
  },
  beforeDestroy() {},
  methods: {
    newsroomdata: function(slug) {
      var e = this;
      axios
        .get("/churcheview/newsroom?s=" + slug)
        .then(function(response) {
          if (response.data.status == true) {
            console.log(response.data.newsroom);
            e.newsroomData = response.data.newsroom;
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
    listofmuncipalty: function() {
      var e = this;
      axios
        .get("/adminglobal/getallmuncipalitytype")
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
    }
  }
};
</script>
<style scoped>
.progess-custom {
  margin: 0px;
}
</style>