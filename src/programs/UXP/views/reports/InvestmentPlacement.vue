
<template>
  <div>
    <appHeader></appHeader>
    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Investment Placement - Word</h1>
          <h4>normal</h4>
          <ul v-for="user in users">
            <li>
              <p>{{ user.name }}</p>
              <p>{{ user.email }}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <appFooter></appFooter>
  </div>
</template>

<script>
// COMPONENTS
import appHeader from '../../components/header/Header.vue';
import appFooter from '../../components/footer/Footer.vue';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    appHeader: appHeader,
    appFooter: appFooter
  },

  computed: {
    ...mapState({
      users: state => state.users.all
    })
  },
  
  methods: {

  },

  created(){
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>