
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Search RxJS</h1>

          <search
              ID="search"
              EXTRA_CLASSES=""
              LABEL="Search"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="search__help"
              ERROR_FIELD=""
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="search__help" class="fsa-field__help">Enter your search team above</span>
              </template>
              <template v-slot:message>
                <span id="search__error-message" class="fsa-field__message" role="alert">You forgot a search term!</span>
              </template>

            </search>

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
import search from '../../components/search/search';

// COMPONENTS

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    search: search,
  },

  data(){
    return {

    }
  },


  computed: {
    ...mapState({
      navigationData: state => state.navigation.all,
    })  
  },
  

}
</script>