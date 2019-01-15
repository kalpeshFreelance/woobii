       
  <template>
  <v-footer height="auto" color="#0B324F">
    <v-layout justify-center row wrap xs-12>
      <v-flex text-xs-center white--text xs12>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Kontakt</span>
          </v-btn>
          <span>Kontakt</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Über uns</span>
          </v-btn>
          <span>Über uns</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Presse</span>
          </v-btn>
          <span>Presse</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Jobs</span>
          </v-btn>
          <span>Jobs</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Datenschutz</span>
          </v-btn>
          <span>Datenschutz</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">AGB</span>
          </v-btn>
          <span>AGB</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" flat small>
            <span class="white--text">Impressum</span>
          </v-btn>
          <span>Impressum</span>
        </v-tooltip>
      </v-flex>
      <v-divider inset dark color="#606c7d" style="margin-left:1px;max-width:100%;"></v-divider>
      <v-flex py-2 text-xs-center white--text xs12>Ein Angebot von SALZUNDLICHT e.U.</v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>