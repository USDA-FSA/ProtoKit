
<template>
  <div>
    <appHeader></appHeader>
    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Boil the Ocean</h1>
          <p>
            <button class="fsa-btn fsa-btn--secondary" @click="removeExtentions">Remove .com Extentions</button>
          </p>
          <ul v-for="user in users">
            <li>
              <p>{{ user.name }} 
                
                <fsaLabel
                  TEXT="GREAT"
                  EXTRA_CLASSES="fsa-label--success fsa-label--large"
                  ATTR_TITLE="Great Person"
                ></fsaLabel>

              </p>
              <p>{{ user.email }}</p>
            </li>
          </ul>
        </div>
        <div class="fsa-section__bd">
          <div>
            <card NAME="Associates:" :CARDDATA="cardData"></card>
          </div>
        </div>
      </div>
    </main>
    <appFooter></appFooter>
  </div>
</template>

<script>
// COMPONENTS
import appHeader from '../components/header/Header.vue';
import appFooter from '../components/footer/Footer.vue';
//import card from '../components/card/card';
//import label from '../components/label/label';
const card = () => import('@/components/card/Card.vue');
const label = () => import('@/components/label/Label.vue');

//import { mapState } from 'vuex';

export default {

  components: {
    appHeader: appHeader,
    appFooter: appFooter,
    card: card,
    fsaLabel: label,
  },

 data(){
    return {
      cardData: [
        {
          label: "Employer",
          desc: "USDA"
        },
        { 
          label: "Position",
          desc: "Accountant"
        }
      ]
    }
  },

  computed: {
    users: function() {
      let u = this.$store.getters['users/getUsers'];
      return u.reverse(); // reverse() the array to show latest first 
    }
  },

  methods: {
    /*
      removeExtentions() is a test Action that will delete ".com" from any email address in the data
    */
    removeExtentions(){
      this.$store.dispatch('users/killExtention');
    },

  },

}
</script>