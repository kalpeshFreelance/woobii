<template>
  <v-content class="mainWrapper white">
    <section class="myProfile">
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12>
          <h1 class="subheading mb-3">Welcome, Kalpesh ufra Classic350</h1>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Full Name</span>
                : Kalpesh Kathane
              </v-flex>
              <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Email ID</span>
                : classic350@bullet.fatfat
              </v-flex>
              <v-flex xs12 md6>
                <span style="width:85px;display: -webkit-inline-box;">Password</span>
                : ******** <v-btn flat small color="green">Change Password</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider class="my-4"></v-divider>
        <v-layout row wrap justify-center>
          <v-flex xs12 md6>
            <h1 class="subheading mb-3">My Newsrooms</h1>
            <v-data-table :headers="headers" :items="desserts" hide-actions style="border: 1px solid #CCC;">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td><v-btn small outline color="green">Edit</v-btn></td>
                <td><v-btn small outline color="red">Delete</v-btn></td>
              </template>
            </v-data-table>
          </v-flex>
          <v-flex xs12 md6>
            <h1 class="subheading mb-3">My Newsrooms</h1>
            <v-data-table :headers="headers" :items="desserts" hide-actions style="border: 1px solid #CCC;">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td><v-btn small outline color="green">Edit</v-btn></td>
                <td><v-btn small outline color="red">Delete</v-btn></td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
        }
      ]
    };
  }
};
</script>
<style>
.progess-custom {
  margin: 0px;
}
table.v-table thead tr {
  height: 50px;
  background: #EEE;
}
.theme--light.v-table thead th {
  color: #000;
}
</style>
