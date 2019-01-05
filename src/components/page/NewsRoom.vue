<template>
  <v-content class="white">
    <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
      <v-btn fab dark small color="primary" @click.stop="drawer = !drawer" class="btnFilter"><v-icon dark>filter_list</v-icon></v-btn>
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
              <v-text-field label="Themen:" placeholder="Themen..."></v-text-field>
              <v-text-field label="People:" placeholder="People..."></v-text-field>
              <v-text-field label="Land:" placeholder="Land..."></v-text-field>
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
                  <v-text-field label="Themen:" placeholder="Themen..."></v-text-field>
                  <v-text-field label="People:" placeholder="People..."></v-text-field>
                  <v-text-field label="Land:" placeholder="Land..."></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md9>
            <v-layout row wrap>
              <v-flex d-flex xs12 md4 v-if="newsroomList" v-for="news in newsroomList">
                <v-card flat color="grey lighten-4">
                  <a :href="'/newsroom/'+news.slug" class="caption black--text">
                    <v-img
                      v-if="news.bannerimage"
                      :lazy-src="'http://dev.woobii.com/admin/'+news.bannerimage"
                      :src="'http://dev.woobii.com/admin/'+news.bannerimage"
                      class="newsImage"
                    />
                    <v-img
                      v-else
                      :src="require(`@/assets/woobii-banner.jpg`)"
                      :lazy-src="require(`@/assets/woobii-banner.jpg`)"
                    />
                  </a>
                  <v-card-title>
                    <h4 class="caption text-uppercase mb-2" style="width: 100%;">
                      <span class="font-weight-black">{{news.category}}</span>
                      | {{news.subcategory}}
                    </h4>
                    <h4 class="caption text-uppercase font-weight-black mb-2" style="width: 100%;">
                      <a :href="'/newsroom/'+news.slug" class="caption black--text">{{news.title}}</a>
                    </h4>
                    <h4 class="caption">{{ news.author}} | {{ news.date | moment("DD.MM.YYYY")}}</h4>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- <v-flex d-flex xs12 md4>
                <v-card flat color="grey lighten-4">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                  <v-card-title>
                    <h4 class="caption text-uppercase mb-2">
                      <span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz
                    </h4>
                    <h4
                      class="caption text-uppercase font-weight-black mb-2"
                    >Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                    <h4 class="caption">epdO | 30.05.2018</h4>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 md4>
                <v-card flat color="grey lighten-4">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                  <v-card-title>
                    <h4 class="caption text-uppercase mb-2">
                      <span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz
                    </h4>
                    <h4
                      class="caption text-uppercase font-weight-black mb-2"
                    >Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                    <h4 class="caption">epdO | 30.05.2018</h4>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 md4>
                <v-card flat color="grey lighten-4">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                  <v-card-title>
                    <h4 class="caption text-uppercase mb-2">
                      <span class="font-weight-black">Evangeelische Kirch</span> | Kunstliche Intelligenz
                    </h4>
                    <h4
                      class="caption text-uppercase font-weight-black mb-2"
                    >Evangelischer Bund: Umfrage zu künstlicher Intelligenz und Religion</h4>
                    <h4 class="caption">epdO | 30.05.2018</h4>
                  </v-card-title>
                </v-card>
              </v-flex>-->
            </v-layout>
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
      newsroomList: {},
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      GemeindetypeList: []
    };
  },
  mounted() {
    this.newsroomlist();
    this.listofmuncipalty();
  },
  beforeDestroy() {},
  methods: {
    listofmuncipalty: function() {
      var e = this;
      axios
        .get("/adminglobal/getallmuncipalitytype")
        .then(function(response) {
          console.log(response.data);
          if (response.data.status == true) {
            console.log(response.data.allmuncipalitytype);
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
    newsroomlist: function() {
      var e = this;
      axios
        .get("/churcheview/newsroomlist")
        .then(function(response) {
          if (response.data.status == true) {
            e.newsroomList = response.data.newsroom;
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
