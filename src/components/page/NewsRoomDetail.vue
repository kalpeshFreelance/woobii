<template>
  <v-content class="mainWrapper white">
    <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
      <v-btn fab dark small color="primary" @click.stop="drawer = !drawer" class="btnFilter">
        <v-icon dark>filter_list</v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" fixed temporary>
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
          </v-flex>
          <v-flex xs12 md6 class="newsDetail">
            <v-card flat color="white">
              <v-tabs v-model="active" slider-color="deep-orange accent-3">
                <v-tab key="1">Text</v-tab>
                <v-tab key="2">Bilder</v-tab>
                <v-tab key="3">Dokument</v-tab>
                <v-tab-item key="1">
                  <v-card flat>
                    <v-card-text class="px-0">
                      <p class="caption mb-1">{{ newsroomData.text[0].date | moment("DD.MM.YYYY")}}</p>
                      <p class="caption mb-1" v-html="newsroomData.text[0].short_desc"></p>
                      <div class="grey lighten-3 my-3 pa-2">
                        <v-img
                          v-if="newsroomData.attachment.image[0].attachment"
                          :lazy-src="'http://dev.woobii.com/admin/'+newsroomData.attachment.image[0].attachment"
                          :src="'http://dev.woobii.com/admin/'+newsroomData.attachment.image[0].attachment"
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
                        >{{newsroomData.attachment.image[0].description}}</p>
                        <p
                          class="caption font-weight-bold text-xs-center mb-1"
                        >There are many variations of passages</p>
                      </div>
                      <div
                        class="grey lighten-3 my-3 pa-2"
                        v-if="newsroomData.attachment.image.length != 0 || newsroomData.attachment.document.length != 0 "
                      >
                        <span
                          class="caption font-weight-bold"
                        >Zu dieser Presseinformation bieten wir:</span>
                        <v-btn
                          small
                          outline
                          color="black"
                          class="my-0"
                          @click="next(1)"
                          v-if="newsroomData.attachment.image.length > 0"
                        >
                          <v-icon small dark class="mr-1">camera_alt</v-icon>
                          {{newsroomData.attachment.image.length}} Bider
                        </v-btn>
                        <v-btn
                          small
                          outline
                          color="black"
                          class="my-0"
                          @click="next(2)"
                          v-if="newsroomData.attachment.document.length > 0"
                        >
                          <v-icon small dark class="mr-1">description</v-icon>
                          {{newsroomData.attachment.document.length}} Dokument
                        </v-btn>
                      </div>
                      <div class="grey lighten-3 my-3 pa-2">
                        <span class="body-2 font-weight-bold mb-0 mr-2">Presseinformation</span>
                        <span class="caption font-weight-bold mb-0">({{ contentLength() }} Zeichen)</span>
                      </div>
                      <p class="caption mb-1" v-html="newsroomData.text[0].description"></p>
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
                <v-tab-item key="2">
                  <v-layout row wrap class="mt-2">
                    <v-flex xs12>
                      <h3 class="body-1">{{ newsroomData.attachment.image[0].description }}</h3>
                    </v-flex>
                    <v-flex xs12 class="py-0">
                      <v-img
                        v-if="newsroomData.attachment.image[imageIndex].attachment"
                        :lazy-src="'http://dev.woobii.com/admin/'+newsroomData.attachment.image[imageIndex].attachment"
                        :src="'http://dev.woobii.com/admin/'+newsroomData.attachment.image[imageIndex].attachment"
                        class="mb-2"
                      />
                    </v-flex>
                    <v-flex xs12>
                      <div
                        class="body-1"
                      >Neuzugang in der Geschäftsführung von ATP-Berlin: Niklas Veelken.</div>
                      <div
                        class="caption font-italic font-weight-light grey--text my-3"
                      >Credits: ATP/Rauschmeir</div>
                      <v-layout row wrap>
                        <v-flex xs1></v-flex>
                        <v-flex xs5></v-flex>
                        <v-flex xs3>Maße</v-flex>
                        <v-flex xs3>Größe</v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap>
                        <v-flex xs1>
                          <v-radio></v-radio>
                        </v-flex>
                        <v-flex xs5>Original</v-flex>
                        <v-flex xs3 class="grey--text">2480 x 3100</v-flex>
                        <v-flex xs3 class="grey--text">703.96 KB</v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap>
                        <v-flex xs1>
                          <v-radio></v-radio>
                        </v-flex>
                        <v-flex xs5>Medium</v-flex>
                        <v-flex xs3 class="grey--text">1200 x 1500</v-flex>
                        <v-flex xs3 class="grey--text">227.84 KB</v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap>
                        <v-flex xs1>
                          <v-radio></v-radio>
                        </v-flex>
                        <v-flex xs5>Klein</v-flex>
                        <v-flex xs3 class="grey--text">600 x 750</v-flex>
                        <v-flex xs3 class="grey--text">69.6 KB</v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap class="tabsTextFeilds">
                        <v-flex xs1>
                          <v-radio></v-radio>
                        </v-flex>
                        <v-flex xs5>Benutzerdefiniert</v-flex>
                        <v-flex xs6>
                          <v-text-field v-model="custwidth" label="" single-line outline class="mr-2"></v-text-field>X
                          <v-text-field v-model="custheight" label="" single-line outline class="ml-1"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap>
                        <v-flex xs6>
                          <v-btn large depressed outline block class="mb-2 textLeft hoverCustom">
                            <v-icon small dark class="mr-2">file_download</v-icon>Sofort downloaden
                          </v-btn>
                        </v-flex>
                        <v-flex xs6>
                          <v-btn large depressed outline block class="mb-2 textLeft hoverCustom">
                            <v-icon small dark class="mr-2">folder</v-icon>In die Lightbox legen
                          </v-btn>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs4 v-for="image in newsroomData.attachment.image">
                          <v-img                            
                            :lazy-src="'http://dev.woobii.com/admin/'+image.attachment"
                            :src="'http://dev.woobii.com/admin/'+image.attachment"
                          />
                          <h2
                            class="bilder-imgCaption grey lighten-2 body-1 font-weight-bold px-2 py-1 mb-3"
                          >1160 X 1120
                            <v-icon small class="right red--text mr-2">camera_alt</v-icon>
                          </h2>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-tab-item>
                <v-tab-item key="3" v-if="newsroomData.attachment.document">
                  <v-layout row wrap class="mt-2 tabsDocument">
                    <v-flex xs12>
                      <h3 class="body-1 mb-3">{{ newsroomData.attachment.image[0].description }}</h3>
                    </v-flex>
                    <v-flex d-flex xs12 md3>
                      <v-card light tile flat style="border:1px solid #CCC;">
                        <v-card-text>
                          <v-icon light size="60">description</v-icon>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md9>
                      <v-layout row wrap>
                        <v-flex xs6>.pdf</v-flex>
                        <v-flex xs6>137.01 KB</v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout row wrap>
                        <v-flex xs12 md6>
                          <v-btn depressed outline block class="mb-2 textLeft hoverCustom">
                            <v-icon small dark class="mr-2">file_download</v-icon>Sofort downloaden
                          </v-btn>
                        </v-flex>
                        <v-flex xs12 md6>
                          <v-btn depressed outline block class="mb-2 textLeft hoverCustom">
                            <v-icon small dark class="mr-2">folder</v-icon>In die Lightbox legen
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
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
              <div v-if="newsroomData.attachment.image && active == 0">
                <a @click="next(1)">
                  <h2 class="subheading font-weight-bold mb-3">
                    <v-icon small class="black--text mr-2">camera_alt</v-icon>Bilder
                    <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
                  </h2>
                </a>         
              <silentbox-group>
                <div v-for="imageValue in newsroomData.attachment.image">
                   <silentbox-item :src="'http://dev.woobii.com/admin/'+imageValue.attachment" :description="imageValue.description">
                  <v-img
                    :lazy-src="'http://dev.woobii.com/admin/'+imageValue.attachment"
                    :src="'http://dev.woobii.com/admin/'+imageValue.attachment"
                  />
                  </silentbox-item>
                  <a @click="next(1)">
                  <h2
                    class="bilder-imgCaption grey lighten-2 body-1 font-weight-bold px-2 py-1 mb-3"
                  >1160 X 1120
                    <v-icon small class="right red--text mr-2">camera_alt</v-icon>
                  </h2>
                  </a>
                </div>
              </silentbox-group>
                <v-divider class="my-3"></v-divider>
              </div>
              <div v-if="newsroomData.attachment.document  && active == 0">
                <a @click="next(2)">
                  <h2 class="subheading font-weight-bold mb-3">
                    <v-icon small class="black--text mr-2">edit</v-icon>Dokument
                    <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
                  </h2>
                </a>
                <a @click="next(2)" class="caption mb-2"
                  v-for="document in newsroomData.attachment.document">
                  <p class="caption mb-2">
                    {{ document.attachment | documentName }} | 1.25 MB
                    <v-icon small class="right black--text ml-2">edit</v-icon>
                  </p>
                </a>
              </div>
              <div v-if="active == 0">
              <v-divider class="my-3"></v-divider>
              <h2 class="subheading font-weight-bold mb-2">Pressekontakt</h2>
              <v-img
                v-if="newsroomData.publisher[0].image"
                :lazy-src="'http://dev.woobii.com/admin/'+newsroomData.publisher[0].image"
                :src="'http://dev.woobii.com/admin/'+newsroomData.publisher[0].image"
                class="mb-2"
              />
              <p class="caption mb-1">
                <strong>{{newsroomData.publisher[0].name}}</strong>
                <br>
                {{newsroomData.publisher[0].designation}}
              </p>
              <p class="caption mb-1" v-html="newsroomData.publisher[0].address"></p>
              <p class="caption mb-1">Telefonnummer: {{newsroomData.publisher[0].contact}}</p>
              <p class="caption mb-1">{{newsroomData.publisher[0].email}}</p>
              </div>
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
      land: "",
      active: 0,
      imageGallery: [],
      custwidth: '',
      custheight: '',
      imageIndex: 0
    };
  },
  filters: {
    documentName: function(val) {
      let doc = val.split("/");
      return doc.pop();
    }
    // prettyBytes: function(num) {
    //   // jacked from: https://github.com/sindresorhus/pretty-bytes
    //   if (typeof num !== "number" || isNaN(num)) {
    //     throw new TypeError("Expected a number");
    //   }

    //   var exponent;
    //   var unit;
    //   var neg = num < 0;
    //   var units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    //   if (neg) {
    //     num = -num;
    //   }

    //   if (num < 1) {
    //     return (neg ? "-" : "") + num + " B";
    //   }

    //   exponent = Math.min(
    //     Math.floor(Math.log(num) / Math.log(1000)),
    //     units.length - 1
    //   );
    //   num = (num / Math.pow(1000, exponent)).toFixed(2) * 1;
    //   unit = units[exponent];

    //   return (neg ? "-" : "") + num + " " + unit;
    // }
  },
  mounted() {
    this.newsroomdata(this.$route.params.slug);
    this.listofmuncipalty();
    this.listofcountry();
  },
  beforeDestroy() {},
  methods: {
    next: function(e) {
      const active = e;
      this.active = active <= 2 ? active : 0;
    },
    contentLength(){
      var content = this.newsroomData.text[0].description;
      content = content.toString();
      return (content.replace(/<[^>]*>/g, '')).length;
    },
    discardSelected() {
      var dataImage = this.newsroomData.attachment.image
      dataImage.splice(this.imageIndex, 1); 
      return dataImage
    },
    newsroomdata: function(slug) {
      var e = this;
      axios
        .get("/churcheview/newsroom?s=" + slug)
        .then(function(response) {
          if (response.data.status == true) {
            e.newsroomData = response.data.newsroom;
            e.imageGallery = e.newsroomData.attachment.image;
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