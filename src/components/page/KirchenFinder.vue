<template>
  <v-content class="white">
    <section class="kitchenFinderSectionTop">
      <v-container class="grey lighten-3 py-2">
        <v-layout row wrap>
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
        <v-layout row wrap justify-center>
          <v-flex xs12 md3>
            <v-card flat color="white" class="kitchenFinderFilter">
              <v-card-text>
                <v-form>
                  <v-text-field placeholder="Placeholder" append-icon="search"></v-text-field>
                  <v-select :items="items" label="Gemeindetyp:" placeholder="Bitte auswählen"></v-select>
                  <v-select :items="items" label="Ressort:" placeholder="Bitte auswählen"></v-select>
                  <v-select :items="items" label="Subressort:" placeholder="Stichwort einfügen"></v-select>
                  <v-text-field label="Themen:" placeholder="Themen..."></v-text-field>
                  <v-text-field label="People:" placeholder="People..."></v-text-field>
                  <v-text-field label="Land:" placeholder="Land..."></v-text-field>
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
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
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
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "App",
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
