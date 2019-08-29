
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Who Are You?</h1>
        <div>
          <form @submit.prevent="handleSubmit">

            <field
              ID="name"
              CLASS_EXTRA=""
              LABEL="Full Name"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="name__help"
              ERROR_FIELD=""
              HAS_HELP="true"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="name__help" class="fsa-field__help">Use your full name, please.</span>
              </template>
              <template v-slot:message>
                <span id="name-id__error-message" class="fsa-field__message" role="alert">Hey, you forgot your own name, silly!</span>
              </template>

            </field>

            <field
              ID="email"
              CLASS_EXTRA=""
              LABEL="E-Mail"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="email__help"
              ERROR_FIELD=""
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="email__help" class="fsa-field__help">Only valid emails should be used.</span>
              </template>
              <template v-slot:message>
                <span id="email__error-message" class="fsa-field__message" role="alert">Hey, you forgot your email address!</span>
              </template>

            </field>

            <button class="fsa-btn fsa-btn--secondary" type="submit">Set User</button> 

          </form>
          
        </div>
        <div>
            <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="MODAL-UNIQUE-ID_01">Show Modal</button>
            <button class="fsa-btn fsa-btn--secondary" v-on:click="killExt">Kill Extention</button>

            <table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal fic-inspections fic-inspections--status-filter-is-all" id="inspectionsTable">
              <caption class="sr-only">Inspections</caption>
              <thead class="fic-inspections__thead">
                <tr class="fic-inspections__row--thead">
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Full Name</button></th>
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Email Address</button></th>
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Actions</button></th>
                </tr>
              </thead>
              <tbody class="fic-inspections__tbody" id="pt__progress-alt-1">
                <tr v-for="user in users" class="fic-inspections__row" data-status="is-complete" data-assignee="assignedto-norm-peterson">
                  <td aria-label="Name">{{ user.name }}</td>
                  <td aria-label="Email">{{ user.email }}</td>
                  <td aria-label="Actions Button"><button class="fsa-btn fsa-btn--secondary">Delete</button></td>
                </tr>
              </tbody>
            </table>
            
          </div>  
        </div>
      </div>
    </main>
    <modal MODAL_ID="MODAL-UNIQUE-ID_01" MODAL_TITLE="Who Clicked Me?">
      <template v-slot:modalBody>
        <fieldset>
          <div class="fsa-field">
            <label class="fsa-field__label" for="thingthing-name_887sh">First Name <span class="fsa-field__label-desc">Required</span></label>
            <input data-behavior="validate-empty-field track-change" class="fsa-input fsa-field__item" id="thingthing-name_887sh" name="thingthing-name_887sh" type="text" value="Stringer">
            <span class="fsa-field__message" id="thingthing-name__error_887sh-message-01" role="alert">This field is required</span>
          </div>
          <div class="fsa-field fsa-m-t--l">
            <button class="fsa-btn fsa-btn--primary" type="button" data-behavior="close-modal whiteout-dismiss" aria-controls="UNIQUE-ID-458s5g8w5">Save</button>
            <button class="fsa-btn fsa-btn--flat" data-behavior="close-modal" type="button">Cancel</button>
          </div>
        </fieldset>
      </template>
    </modal>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import field from '../components/field/field';
import card from '../components/card/card';
import modal from '../components/modal/modal';
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    card: card,
    field: field,
    modal: modal,
    whiteout: whiteout,
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
      navigationData: state => state.navigation.all,
      users: state => state.users.all,
    }),
    ...mapGetters('users', {
      fatUsers: 'fatUsers'
    })
  },
  

  methods: {

    ...mapActions('users',{
      killExt: 'killExtention',
      submitForm: 'addNewUser'
    }),
    
    handleSubmit(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      e.target.name.value = "";
      e.target.email.value = "";
      this.submitForm( user );
    },

  },

  created(){
    //this.$store.dispatch('navigation/getNavApi');
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>