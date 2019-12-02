
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Table &amp; Pagination</h1>
          <timeline></timeline>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS
const timeline = () => import('../../components/timeline/timeline');


export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    timeline: timeline
  },

  
  data(){
    return {
      itemsPerPage: 8,
    }
  },



  computed: {

    employees: function(){
      return this.$store.getters['employees/getEmployees'];
    },

    
  },
  

  methods: {


  },

  created(){
    //this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>