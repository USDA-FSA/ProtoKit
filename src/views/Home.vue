
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
      </div>
    </div>

    <div class="fsa-section">
      <div class="fsa-section__bd">
        <div>
            <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="MODAL-UNIQUE-ID_01">Open Modal</button>
            <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="GROWL-UNIQUE-ID_01">Open Growl</button>

            <pagination
              ID="UNIQUE_PAGINATION_ID"
              EXTRA_CLASS=""
              :TOTAL_PAGES="totalPages"
              :ITEMS_PER_PAGE="itemsPerPage"
              :CURRENT_PAGE="currentPage"
              :DISPLAY_PAGINATION=true
              :TOTAL_ITEMS="totalItems"
              :NUMBER_SPREAD="numberSpread" 
            ></pagination>

            <pkTable
              ID="UNIQUE_TABLE_ID"
              SR_CAPTION="A table of employees"
              EXTRA_CLASS="fsa-table--responsive fsa-table--responsive-horizontal"
              :HEADERS_DATA="tableHeadersData"
              :TABLE_DATA="tableData"
              USE_PAGINATION="false" 
            ></pkTable>

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
  
    <growl GROWL_ID="GROWL-UNIQUE-ID_01"
      VARIATION="fsa-growl--error"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="Houston, we have a problem."
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

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import field from '../components/field/field';
import table from '../components/table/table';
import pagination from '../components/pagination/pagination';
import modal from '../components/modal/modal';
import growl from '../components/growl/growl';
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';
import growlVue from '../components/growl/growl.vue';
import paginationVue from '../components/pagination/pagination.vue';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    field: field,
    pkTable: table,
    pagination: pagination,
    modal: modal,
    growl: growl,
    whiteout: whiteout,
  },

  data(){
    return {
      itemsPerPage: 8,
      currentPage: 2,
      numberSpread: 7
    }
  },


  computed: {
    ...mapState({
      navigationData: state => state.navigation.all,
      users: state => state.users.all,
      employees: state => state.employees.all,
    }),

    ...mapGetters('users', {
      fatUsers: 'fatUsers'
    }),

    tableHeadersData: function(){
      let emp = this.$store.state.employees.all;
      return emp.headerData;
    },

    tableData: function(){
      let emp = this.$store.state.employees.all;
      return emp.tableData;
    },

    totalItems: function(){
      let emp = this.$store.state.employees.all;
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return totalItems;
    },

    totalPages: function(){
      let emp = this.$store.state.employees.all;
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return Math.ceil( totalItems / this.itemsPerPage );
    }
  },
  

  methods: {

    ...mapActions('users',{
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
    this.$store.dispatch('users/getUsersApi');
    this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>