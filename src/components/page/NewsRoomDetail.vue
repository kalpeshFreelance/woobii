<template>
  <v-content class="white">
    <section class="newsRoomSectionTop" style="border-bottom: 1px solid #EAEAEA;">
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
          <v-flex xs12 md6 class="newsDetail">
            <v-card flat color="white">
              <v-tabs slider-color="deep-orange accent-3">
                <v-tab>Text</v-tab>
                <v-tab  v-model="selectedTab">Bilder</v-tab>
                <v-tab>Dokument</v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text class="px-0">
                      <p class="caption mb-1">31.05.2018</p>
                      <p
                        class="caption mb-1"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <p
                        class="caption mb-1"
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div class="grey lighten-3 my-3 pa-2">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
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
                <v-icon small class="black--text mr-2">camera_alt</v-icon>
                Bilder
                <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
              </h2>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" class="mb-2"></v-img>
              <v-divider class="my-3"></v-divider>
              <h2 class="subheading font-weight-bold mb-3">
                <v-icon small class="black--text mr-2">edit</v-icon>
                Bilder
                <v-icon class="right black--text ml-2">keyboard_arrow_right</v-icon>
              </h2>
              <p class="caption mb-2">demo- 152769333-1527673223</p>
              <router-link to="/" class="caption mb-2">
                <p>.docs | 1.25 MB<v-icon small class="right black--text ml-2">edit</v-icon></p>
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