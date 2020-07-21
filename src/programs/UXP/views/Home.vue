
<template>
  <div>
    <appHeader></appHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          
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



export default {

  components: {
    appHeader: appHeader,
    appFooter: appFooter
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

  },
  

  methods: {
    /*
    
    $store.dispatch(...) is how you call a Vuex action within a module.

    In the below instance we are passing in the 'user' object to the addNewUser action of the users module
    The same naming structure is used here as in the above computed properties.
    
    */



  },

}
</script>