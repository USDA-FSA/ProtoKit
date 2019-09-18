
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

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
    </main>

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

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    field: field,
    pkTable: table,
    pagination: pagination,
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