<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="em"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="pass"
            :rules="passRules"
            label="Password*"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <button @click="findUser">
            View
          </button>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    valid: false,
    full: '',
    pass: '',
    passRules: [
      v => !!v || 'Password is required',
      v => v.length <= 15 || 'Password must be less than 15 characters'
    ],
    em: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => !!v || 'E-mail is required'
    ]
  }),
  computed: mapGetters(['fullList']),
  methods: {
    ...mapActions(['findUserName']),
    findUser () {
      if (this.em && this.pass) {
        const user = {
          email: this.em,
          pass: this.pass
        }
        this.findUserName(user)
      }
    }
  }
}
</script>

<style scoped>
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
