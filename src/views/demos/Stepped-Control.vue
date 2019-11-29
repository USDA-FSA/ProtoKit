
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Stepped Control</h1>

          <div class="fsa-grid">
            <div class="fsa-grid__1/2">
              <div class="fsa-section__bd">
                <div>
                  <card NAME="Associates:" :CARDDATA="cardData"></card>
                </div>
              </div>
            </div>
            <div class="fsa-grid__1/2">
              <div class="fsa-section__bd">
                <div>
                  <card NAME="Associates:" :CARDDATA="cardData"></card>
                </div>
              </div>
            </div>
          </div>

          <steppedControl
            EXTRA_CLASSES="fsa-stepped-control--sticky"
            DISPLAY_MESSAGE="true"
            CURRENT_STEP="1"
            TOTAL_STEPS="5"
            BACK_LABEL="Back"
            BACK_URL="/"
            USE_GROWL_ON_CANCEL="true"
            GROWL_ID="stepped-control-growl-id"
            URL_PREFIX="fsa"
            USE_GROWL_ON_SUBMIT="true"
            ON_SUBMIT_GROWL_ID="stepped-control-submit-growl-id"
            CONTINUE_LABEL="Save and Submit"
            CONTINUE_URL="/demo/modal-growl/"
          >
          </steppedControl>

        </div>
      </div>
    </main>

    <growl GROWL_ID="stepped-control-growl-id"
      VARIATION="fsa-growl--error"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="Are you sure?"
    >
      <template v-slot:growlBody>
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p>And another line here for kicks.</p>
        <p>
          <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
          <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
        </p>
      </template>
    </growl>
    <growl GROWL_ID="stepped-control-submit-growl-id"
      VARIATION="fsa-growl--success"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="New Contract Created"
    >
      <template v-slot:growlBody>
        <p>A new contract has been successfully been crated. You can now return to the home page.</p>
        <p>
          <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--primary" type="button">Okay</button>
        </p>
      </template>
    </growl>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS
const growl = () => import('../../components/growl/growl');
const whiteout = () => import('../../components/whiteout/whiteout');
const steppedControl = () => import('../../components/stepped-control/stepped-control');
const card = () => import('../../components/card/card'); 

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    growl: growl,
    whiteout: whiteout,
    steppedControl: steppedControl,
    card: card
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
    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    }
  },
  

  methods: {

  },

  created(){

  }
}
</script>