<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Fullname
          </th>
          <th class="text-left">
            Age
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userList" :key="item.name">
          <td>{{ item.fullname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: mapGetters(['userList'])
}
</script>
