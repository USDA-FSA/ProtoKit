
<template>
  <div>
    <baseHeader></baseHeader>
    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Boil the Ocean</h1>
          <ul v-for="user in users">
            <li>
              <p>{{ user.name }} 
                
                <fsaLabel
                  TEXT="GREAT"
                  VARIATION="fsa-label--success"
                  LARGE="fsa-label--large"
                  CLASS_EXTRA=""
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
    <baseFooter></baseFooter>
  </div>
</template>

<script>
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';
import card from '../components/card/card';
import label from '../components/label/label';

import { mapState } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
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
    ...mapState({
      users: state => state.users.all
    })
  }
}
</script>