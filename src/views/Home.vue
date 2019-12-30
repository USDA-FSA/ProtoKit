
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
              EXTRA_CLASSES=""
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
              EXTRA_CLASSES=""
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

            <button class="fsa-btn fsa-btn--secondary" type="submit">Add User</button> 

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


export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    field: field,
  },
  
  computed: {
    /*

    The below methods access the store getter functions to create
    a dynamic (reactive) data structure that is always in sync with
    the state of the application
    
    The naming convention to access the data follows the below:
    ['moduleName/methodName']

    eg. getters['users/getUsers']

    moduleName: "export const users ... " <--- located in _store/users.modules.js 
    methodName: ---> "getUsers(state){ ... "
    
    */

    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    },

    users: function(){
      return this.$store.getters['users/getUsers'];
    },

    employees: function(){
      return this.$store.getters['employees/getEmployees'];
    },

    tableHeadersData: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      return emp.headerData;
    },

    tableData: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      return emp.tableData;
    },

    totalItems: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return totalItems;
    },

    totalPages: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return Math.ceil( totalItems / this.itemsPerPage );
    }
  },
  

  methods: {
    /*
    
    $store.dispatch(...) is how you call a Vuex action within a module.

    In the below instance we are passing in the 'user' object to the addNewUser action of the users module
    The same naming structure is used here as in the above computed properties.
    
    */

    submitForm: function( user ){
      this.$store.dispatch('users/addNewUser', user);
    },

    resetForm: function(t){
      t.name.value = "";
      t.email.value = "";
    },
    
    handleSubmit(e){
      this.submitForm(
        {
          name: e.target.name.value,
          email: e.target.email.value
        }  
      );
      this.resetForm(e.target);
    },

  },

  beforeCreate(){
    /*

    Using the created Vue 'lifecycle hook', we call the store action to retrieve the data
    actions are asychronous, which allows them to call external APIs or run complex calculations
    that could potentially take longer than a single cycle to complete
    
    Uses the same naming convention as the computed properties above
    
    */
    this.$store.dispatch('users/getUsersApi');
    this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>