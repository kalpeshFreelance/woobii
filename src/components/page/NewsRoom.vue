<template>
  <v-content class="white">
    <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
      <v-container class="white py-0">
        <v-layout>
          <v-flex xs6>
            <v-btn flat class="white black--text ma-0 text-lowercase btnTab">Kirchen</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn flat class="grey lighten-2 ma-0 right black--text text-lowercase">
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
