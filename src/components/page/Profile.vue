<template>
  <v-content class="mainWrapper white">
    <section class="myProfile">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12>
            <h1 class="subheading mb-3">
              Welcome
              <span v-if="profile.username">, {{profile.username}}</span>
            </h1>
            <v-layout row wrap>
              <!-- <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Full Name</span>
                : Kalpesh Kathane
              </v-flex>-->
              <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Email ID</span>
                : {{profile.email}}
              </v-flex>
              <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Password</span>
                : ********
                <v-btn flat small color="green" @click="password = true">Change Password</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider class="my-4"></v-divider>
        <v-layout row wrap justify-center>
          <v-flex xs12 md6>
            <v-toolbar flat color="white">
              <v-toolbar-title class="subheading">My Kirchen</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-btn
                small
                outline
                color="green"
                @click="resetForm(); editKirchen = true"
              >Add Kirchen</v-btn> -->
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="churchList"
              hide-actions
              style="border: 1px solid #CCC;"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.community }}</td>
                <td>{{ props.item.city }}</td>
                <td>
                  <!-- <v-btn small outline color="green">Edit</v-btn> -->
                  <v-btn small outline color="red" :to="'/Kirchenfinder/'+props.item.slug">View</v-btn>
                </td>
              </template>
            </v-data-table>
          </v-flex>
          <v-flex xs12 md6>
            <v-toolbar flat color="white">
              <v-toolbar-title class="subheading">My Newsrooms</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                small
                outline
                color="green"
                @click="resetForm(); editDialog = true"
              >Add Newsroom</v-btn>
            </v-toolbar>
            <v-data-table
              :headers="headers1"
              :items="newsroomList"
              hide-actions
              style="border: 1px solid #CCC;"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.newsroom }}</td>
                <td>{{ props.item.community }}</td>
                <td>
                  <v-btn
                    small
                    outline
                    color="green"
                    @click="newsroomdetail(props.item.newsroom_id); editDialog = true"
                  >Edit</v-btn>
                  <v-btn small outline color="red" :to="'/newsroom/'+props.item.slug">View</v-btn>
                </td>
              </template>
            </v-data-table>
          </v-flex>
          <v-dialog v-model="password" max-width="600px">
            <v-card dark class="transparentDialog">
              <v-card-text>
                <v-container grid-list-md>
                  <v-icon small class="mr-2 lockIcon">lock</v-icon>
                  <form @submit.prevent="submit('form3')" data-vv-scope="form3">
                    <h1 class="display-2 text-md-center mb-4">Change Passwort</h1>
                    <v-layout row wrap>
                      <v-flex xs12 md10 offset-md1>
                        <v-text-field
                          light
                          placeholder="Password"
                          solo
                          v-model="form3.password"
                          :error-messages="errors.collect('form3.password')"
                          label="Password"
                          name="password"
                          type="password"
                          v-validate="'required|min:4|max:12'"
                          data-vv-name="password"
                          ref="password"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md10 offset-md1>
                        <v-text-field
                          light
                          placeholder="Confirm Password"
                          solo
                          name="password_confirmation"
                          type="password"
                          v-model="form3.confirmpassword"
                          :error-messages="errors.collect('form3.confirmpassword')"
                          label="Confirm Password"
                          v-validate="'required|min:4|max:12|confirmed:password'"
                          data-vv-name="password"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md10 offset-md1>
                        <v-btn type="submit" block flat class="btn-SignIn">Einreichen</v-btn>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <!---- EMail --->
          <v-dialog light v-model="editDialog" max-width="800px">
            <v-card class="editDialog pa-3">
              <v-card-title
                class="subheading"
              >Bitte Fullen Sie zur Verffentlichung lher News folgende Felder aus:</v-card-title>
              <v-card-text class="py-0">
                <v-container grid-list-md class="pa-0">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card light color="grey lighten-4" tile flat class="cartBorder">
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
                              <v-text-field v-model="formnews.teaser" name="teaser" required solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm3 md3 class="feildLabel">Kirchen</v-flex>
                            <v-flex xs12 sm9 md9>
                              <v-autocomplete
                                placeholder="Kirchen"
                                :items="churchList"
                                item-text="community"
                                item-value="comm_id"
                                v-model="formnews.community"
                                solo
                              ></v-autocomplete>
                              <!-- <v-select :items="scategory" placeholder="Ressort" solo></v-select> -->
                            </v-flex>
                            <v-flex xs12 sm3 md3 class="feildLabel">Newsmeldung</v-flex>
                            <v-flex xs12 sm9 md9>
                              <wysiwyg v-model="formnews.newsmeldung" name="newsmeldung" required/>
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
                              <v-text-field name="themen" v-model="formnews.themen" solo></v-text-field>
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
                                <v-date-picker v-model="formnews.veroffentlichung" scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="datemodal = false">Cancel</v-btn>
                                  <v-btn
                                    flat
                                    color="primary"
                                    @click="$refs.dialog.save(formnews.veroffentlichung)"
                                  >OK</v-btn>
                                </v-date-picker>
                              </v-dialog>
                            </v-flex>
                            <v-flex xs12 sm3 md3 class="feildLabel">Inaktiv setzen (optional)</v-flex>
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
                                <v-date-picker v-model="formnews.inaktiv" scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="datemodalI = false">Cancel</v-btn>
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
                          <v-card light color="grey lighten-4" tile flat class="cartBorder">
                            <v-toolbar color="grey lighten-2" light flat height="45px">
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
                                      <v-text-field xs8 sm8 md8 v-model="formnews.date" solo></v-text-field>
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
                                  <v-dialog light v-model="editBannerDialog" max-width="810px">
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
                          <v-card light color="grey lighten-4" tile flat class="cartBorder">
                            <v-toolbar color="grey lighten-2" light flat height="45px">
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
                                  <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
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
                                  <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
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
                          <v-card light color="grey lighten-4" tile flat class="cartBorder">
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
                              <v-layout row wrap class="caption" style="border:1px solid #CCC;">
                                <v-flex
                                  xs6
                                  style="border:1px solid #CCC;border-top:none;border-left:none;"
                                >1200 x 557</v-flex>
                                <v-flex xs6 style="border-bottom:1px solid #CCC;">56,5 KB</v-flex>
                                <v-flex xs6 style="border-right:1px solid #CCC;">600 x 278</v-flex>
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
                      <v-btn @click="saveNewsroom" depressed small class="grey lighten-2">SPEICHERN</v-btn>
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
          <v-dialog light v-model="editKirchen" max-width="800px">
            <v-card class="editDialog pa-3">
              <v-card-title
                class="subheading"
              >Bitte Fullen Sie zur Verffentlichung lher News folgende Felder aus:</v-card-title>
              <v-card-text class="py-0">
                <v-container grid-list-md class="pa-0">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card light color="grey lighten-4" tile flat class="cartBorder">
                        <v-toolbar color="grey lighten-2" light flat height="45px">
                          <v-toolbar-title>Title</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>expand_more</v-icon>
                          </v-btn>
                        </v-toolbar>
                        <v-card-text>
                          <v-layout row wrap>
                            <v-flex xs12 sm3 md3 class="feildLabel">Church Title</v-flex>
                            <v-flex xs12 sm9 md9>
                              <v-text-field
                                v-model="formnews.newstitle"
                                name="newstitle"
                                required
                                solo
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm3 md3 class="feildLabel">Newsmeldung</v-flex>
                            <v-flex xs12 sm9 md9>
                              <wysiwyg v-model="formnews.newsmeldung" name="newsmeldung" required/>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex d-flex xs12>
                      <v-card light color="grey lighten-4" tile flat class="cartBorder">
                        <v-toolbar color="grey lighten-2" light flat height="45px">
                          <v-toolbar-title>Title</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>expand_more</v-icon>
                          </v-btn>
                        </v-toolbar>
                        <v-card-text>
                          <v-layout row wrap>
                            <v-flex xs12 sm2 md2 class="feildLabel">Address</v-flex>
                            <v-flex xs12 sm4 md4 class="pr-3">
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Country</v-flex>
                            <v-flex xs12 sm4 md4>
                              <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">City</v-flex>
                            <v-flex xs12 sm4 md4 class="pr-3">
                              <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Email</v-flex>
                            <v-flex xs12 sm4 md4>
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Contact Person</v-flex>
                            <v-flex xs12 sm4 md4 class="pr-3">
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Contact No</v-flex>
                            <v-flex xs12 sm4 md4>
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Head Office No</v-flex>
                            <v-flex xs12 sm4 md4 class="pr-3">
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm2 md2 class="feildLabel">Website Address</v-flex>
                            <v-flex xs12 sm4 md4>
                              <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-layout row wrap>
                        <v-flex d-flex xs12>
                          <v-card light color="grey lighten-4" tile flat class="cartBorder">
                            <v-toolbar color="grey lighten-2" light flat height="45px">
                              <v-toolbar-title>Title</v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-btn icon>
                                <v-icon>expand_more</v-icon>
                              </v-btn>
                            </v-toolbar>
                            <v-card-text>
                              <v-layout row wrap>
                                <v-flex xs12 sm4 md4 class="feildLabel">Latitude</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Longutude</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-text-field name="bildtitel" v-model="formnews.bildtitel" solo></v-text-field>
                                </v-flex>
                                <v-flex xs3>
                                  <v-text-field
                                    class="mt-0"
                                    label="Visitor Min"
                                    hide-details
                                    single-line
                                    solo
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                  <v-range-slider class="range-slider" :max="1000" :min="1" :step="10" solo></v-range-slider>
                                </v-flex>
                                <v-flex xs3>
                                  <v-text-field
                                    label="Visitor Max"
                                    class="mt-0"
                                    hide-details
                                    single-line
                                    solo
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Start Time</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-text-field name="bildtitel" prepend-icon="access_time" v-model="formnews.bildtitel" readonly solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Closing Time</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-text-field name="bildtitel" prepend-icon="access_time" v-model="formnews.bildtitel" readonly solo></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-layout row wrap>
                        <v-flex d-flex xs12>
                          <v-card light color="grey lighten-4" tile flat class="cartBorder">
                            <v-toolbar color="grey lighten-2" light flat height="45px">
                              <v-toolbar-title>Title</v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-btn icon>
                                <v-icon>expand_more</v-icon>
                              </v-btn>
                            </v-toolbar>
                            <v-card-text>
                              <v-layout row wrap>
                                <v-flex xs12 sm4 md4 class="feildLabel">Tags</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Langauages</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Denomination</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                                </v-flex>
                                <v-flex xs12 sm4 md4 class="feildLabel">Offers</v-flex>
                                <v-flex xs12 sm8 md8>
                                  <v-select :items="items" v-model="formnews.lizenz" solo></v-select>
                                </v-flex>
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
                        @click="editKirchen = false"
                        depressed
                        small
                        class="grey lighten-2"
                      >LOSCHEN</v-btn>
                      <v-btn @click="saveNewsroom" depressed small class="grey lighten-2">SPEICHERN</v-btn>
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
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      headers: [
        {
          text: "Church",
          align: "left",
          sortable: true,
          value: "community"
        },
        { text: "City", value: "city" },
        { text: "Action", value: "action" }
      ],
      headers1: [
        {
          text: "Newsroom",
          align: "left",
          sortable: true,
          value: "newsroom"
        },
        {
          text: "Church",
          align: "left",
          sortable: true,
          value: "community"
        },
        { text: "Action", value: "action" }
      ],
      password: false,
      churchList: [],
      newsroomList: [],
      profile: [],
      editDialog: false,
      editKirchen: false,
      form3: {
        password: "",
        confirmpassword: ""
      },
      items: ["Test", "Test", "Test"],
      subcategory: [],
      category: [],
      datemodal: false,
      datemodalI: false,
      editBannerDialog: false,
      imageBannerData: "",
      formnews: {
        id: "",
        newstitle: "",
        teaser: "",
        community: "",
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
  mounted() {
    this.getProfileData();
    this.listofcategory();
    this.listofsubcategory();
  },
  methods: {
    resetForm() {
      this.formnews.id = "";
      this.formnews.newstitle = "";
      this.formnews.teaser = "";
      this.formnews.community = "";
      this.formnews.newsmeldung = "";
      this.formnews.ressort = "";
      this.formnews.kategorie = "";
      this.formnews.themen = "";
      this.formnews.veroffentlichung = "";
      this.formnews.inaktiv = "";
      this.formnews.date = "";
      this.formnews.bildtitel = "";
      this.formnews.beschreibung = "";
      this.formnews.bildrechte = "";
      this.formnews.lizenz = "";
      this.formnews.bannerimage = "";
    },
    getProfileData() {
      var self = this;
      this.searchLoading = true;
      // Simulated ajax query
      axios
        .post("/adminuser/profile", {
          user: localStorage.getItem("email")
        })
        .then(function(response) {
          if (response.data.status == true) {
            self.churchList = response.data.community;
            self.searchLoading = false;
            self.newsroomList = response.data.newsroom;
            self.profile = response.data.profile;
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
    submit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result == true && scope == "form3") {
          this.forgotsubmit();
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
            self.formnews.community = response.data.newsroom[0].comm_id;
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
    forgotsubmit() {
      var e = this;
      axios
        .post("/adminuser/password", {
          email: localStorage.getItem("email"),
          password: this.form3.password
        })
        .then(function(response) {
          //console.log(response);
          if (response.data.status == true) {
            e.form3.password = "";
            e.form3.confirmpassword = "";
            e.password = false;
            e.$toasted.success("Successfully updated", {
              position: "top-center",
              duration: 2000
            });
          } else {
            e.$toasted.error("Something went wrong, please try againe", {
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
    saveNewsroom: function() {
      this.dialogLoader = true;
      let e = this;
      axios
        .post("/churcheview/newsroomupdate", {
          id: this.formnews.id,
          community: this.formnews.community,
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
    }
  }
};
</script>
<style>
.progess-custom {
  margin: 0px;
}
table.v-table thead tr {
  height: 50px;
  background: #eee;
}
.theme--light.v-table thead th {
  color: #000;
}
</style>
