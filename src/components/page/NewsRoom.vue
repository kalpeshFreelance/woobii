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
              <v-autocomplete
                :loading="searchLoading"
                :items="newsroomTitle"
                item-text="title"
                item-value="link"
                :search-input.sync="search"
                @input="pageRedirect"
                cache-items
                flat
                hide-no-data
                hide-details
                label="Search News"
                append-icon="search"
                solo
              ></v-autocomplete>
              <v-text-field placeholder="Placeholder" append-icon="search" class="searchInput"></v-text-field>
              <v-autocomplete
                label="Land:"
                placeholder="Land..."
                :items="LandList"
                item-text="name"
                item-value="id"
                @change="listofmuncipalty"
                @input="searchfilter"
                v-model="sland"
              ></v-autocomplete>
              <v-autocomplete
                :items="GemeindetypeList"
                item-text="type"
                item-value="id"
                label="Gemeindetyp:"
                placeholder="Bitte auswählen"
                @input="searchfilter"
                v-model="gemeindetyp"
              ></v-autocomplete>
              <v-autocomplete
                label="Ressort:"
                placeholder="Bitte auswählen"
                :items="category"
                item-text="category"
                item-value="category"
                @input="searchfilter"
                v-model="scategory"
              ></v-autocomplete>
              <v-autocomplete
                label="Subressort:"
                placeholder="Stichwort einfügen"
                :items="subcategory"
                item-text="subcategory"
                item-value="subcategory"
                @input="searchfilter"
                v-model="ssubcategory"
              ></v-autocomplete>
              <v-autocomplete label="Themen:" placeholder="Themen..."></v-autocomplete>
              <v-autocomplete
                label="People:"
                placeholder="People..."
                :items="publisher"
                item-text="title"
                item-value="pid"
                @input="searchfilter"
                v-model="spublisher"
              ></v-autocomplete>
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
                  <v-autocomplete
                    :loading="searchLoading"
                    :items="newsroomTitle"
                    item-text="title"
                    item-value="link"
                    :search-input.sync="search"
                    @input="pageRedirect"
                    cache-items
                    flat
                    hide-no-data
                    hide-details
                    placeholder="Search News"
                    append-icon="search"
                    solo
                    style="margin-bottom: 16px;"
                  ></v-autocomplete>
                  <!-- <v-text-field placeholder="Placeholder" append-icon="search" class="searchInput"></v-text-field> -->
                  <v-autocomplete
                    label="Land:"
                    placeholder="Land..."
                    :items="LandList"
                    item-text="name"
                    @input="searchfilter"
                    v-model="sland"
                    item-value="id"
                  ></v-autocomplete>
                  <v-autocomplete
                    :items="GemeindetypeList"
                    item-text="type"
                    item-value="id"
                    label="Gemeindetyp:"
                    placeholder="Bitte auswählen"
                    @change="listofmuncipalty"
                    @input="searchfilter"
                    v-model="gemeindetyp"
                  ></v-autocomplete>
                  <v-autocomplete
                    label="Ressort:"
                    placeholder="Bitte auswählen"
                    :items="category"
                    item-text="category"
                    item-value="id"
                    @change="categorySelected"
                    @input="searchfilter"
                    v-model="scategory"
                  ></v-autocomplete>
                  <v-autocomplete
                    label="Subressort:"
                    placeholder="Stichwort einfügen"
                    :items="subcategory"
                    item-text="subcategory"
                    item-value="id"
                    @input="searchfilter"
                    v-model="ssubcategory"
                  ></v-autocomplete>
                  <v-autocomplete label="Themen:" placeholder="Themen..."></v-autocomplete>
                  <v-autocomplete
                    label="People:"
                    placeholder="People..."
                    :items="publisher"
                    item-text="title"
                    item-value="pid"
                    @input="searchfilter"
                    v-model="spublisher"
                  ></v-autocomplete>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md9>
            <v-layout row wrap>
              <v-flex d-flex xs12 md4 v-if="newsroomList" v-for="news in newsroomList">
                <v-card flat color="grey lighten-4">
                  <router-link :to="'/newsroom/'+news.slug" class="caption black--text">
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
                  </router-link>
                  <v-card-title>
                    <h4 class="caption text-uppercase mb-2" style="width: 100%;">
                      <span class="font-weight-black">{{news.category}}</span>
                      | {{news.subcategory}}
                    </h4>
                    <h4 class="caption text-uppercase font-weight-black mb-2" style="width: 100%;">
                      <router-link
                        :to="'/newsroom/'+news.slug"
                        class="caption black--text"
                      >{{news.title}}</router-link>
                    </h4>
                    <h4 class="caption">{{ news.author}} | {{ news.date | moment("DD.MM.YYYY")}}</h4>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="text-xs-center">
              <v-pagination
                v-model="page"
                :length="totalcount"
                :total-visible="5"
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
      // baseUrl: process.env.BASE_URL
      isMobile: false,
      drawer: null,
      searchLoading: false,
      newsroomTitle: [],
      search: null,
      newsroomList: {},
      GemeindetypeList: [],
      LandList: [],
      category: [],
      subcategory: [],
      publisher: [],
      land: "",
      page: 1,
      totalcount: 0,
      sland: "",
      spublisher: "",
      ssubcategory: "",
      scategory: "",
      gemeindetyp: ""
    };
  },
  mounted() {
    this.newsroomlist();
    this.listofmuncipalty();
    this.listofcountry();
    this.listofcategory();
    this.listofsubcategory();
    this.listofpublisher();
  },
  beforeDestroy() {},
  watch: {
    search(val) {
      if (val.length >= 3) {
        val && val !== this.select && this.querySelections(val);
      } else {
        this.churcheTitle = [];
      }
    }
  },
  methods: {
    pageRedirect: function(event) {
      this.$router.push("/newsroom/" + event);
      this.churchdata(this.$route.params.slug);
    },
    querySelections(v) {
      var self = this;
      this.searchLoading = true;
      // Simulated ajax query
      axios
        .get("/churcheview/newsroombyname?t=" + v)
        .then(function(response) {
          if (response.data.status == true) {
            self.newsroomTitle = response.data.newsroom;
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
    categorySelected: function(event) {
      this.listofsubcategory(event);
    },
    onPageChange: function(pageNum) {
      console.log(pageNum);
      // if (this.countryflag == true) {
      //   this.selectCity = 0;
      // }
      // let all = false;
      // if (this.selectCity == 0 && this.land == 0) {
      //   all = false;
      // } else {
      //
      // }
      let all = true;
      this.newsroomlist(pageNum - 1, all);
    },
    searchfilter: function(pageNum = 1) {
      this.newsroomlist(0, true);
      if (this.sland) {
        this.listofmuncipalty(this.sland);
      }
    },
    listofmuncipalty: function(land) {
      var e = this;
      let url = "/adminglobal/getallmuncipalitytype";
      if (land) {
        url = url + "/?l=" + land;
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
    newsroomlist: function(pageNum = 0, all = true) {
      var e = this;
      var strQuery = "";
      if (e.gemeindetyp) {
        strQuery += "&gemeindetyp=" + e.gemeindetyp;
      }
      if (e.gemeindegrobe) {
        strQuery += "&sland=" + e.sland;
      }
      if (e.scategory) {
        strQuery += "&scategory=" + e.scategory;
      }
      if (e.ssubcategory) {
        strQuery += "&ssubcategory=" + e.ssubcategory;
      }
      if (e.spublisher) {
        strQuery += "&spublisher=" + e.spublisher;
      }

      axios
        .get(
          "/churcheview/newsroomlist?p=" + pageNum + "&all=" + all + strQuery
        )
        .then(function(response) {
          if (response.data.status == true) {
            e.newsroomList = response.data.newsroom.newsroomList;

            if (response.data.newsroom.newsroomcount > 0) {
              if (response.data.newsroom.newsroomcount >= 12) {
                let count = response.data.newsroom.newsroomcount;

                let div = count / 12;
                let mod = count % 12;

                if (mod >= 0) {
                  e.totalcount = div + 1;
                } else {
                  e.totalcount = div;
                }
              } else {
                e.totalcount = 0;
              }
            } else {
              e.totalcount = 0;
            }
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
    },
    listofpublisher: function() {
      var e = this;
      axios
        .get("/churcheview/newsroompublisher")
        .then(function(response) {
          if (response.data.status == true) {
            e.publisher = response.data.publisher;
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
