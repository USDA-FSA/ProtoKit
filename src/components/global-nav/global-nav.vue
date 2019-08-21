<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <!-- loop here -->
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li v-for="item in items" class="fsa-nav-global__list-item">
            <div  v-if="item.hasChild=='true'">
              <button v-on:click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" class="fsa-nav-global__sub-menu-item">
                      <router-link :to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link></li>
                  </ul> 
                </div>
              </div>
            </div>
            <div v-else="false">
              <router-link :to='item.path' class="fsa-nav-global__link">
              <span class="fsa-nav-global__text">{{item.label}}</span>
            </router-link> 
            </div>
          </li>
        </ul>
        <!-- end loop -->
      </div>
    </div>
  </nav>
</template>

<script>

export default {

  props: {
    NAV_DATA: Array,
  },

  data: function(){
    return {
      menuOpen: false,
    }
  },

  computed: {
    
    items: function(){
      return this.NAV_DATA;
    }
    
  },

  methods: {
    
    toggleMenu: function(e){
      
      var item = e.currentTarget;
      var id = item.getAttribute('aria-controls');
      var ariaExpanded = item.getAttribute('aria-expanded');

      if (this.menuOpen) {
        
        this.menuOpen = false;
        item.setAttribute('aria-expanded', 'false');
        document.getElementById(id).setAttribute('aria-hidden', 'true');
      
      } else {

        this.menuOpen = true;
        item.setAttribute('aria-expanded', 'true');
        document.getElementById(id).setAttribute('aria-hidden', 'false');

      }

      item.addEventListener('focus',
        function (e) {
          if(this.menuOpen){
            this.menuOpen = false;
            item.setAttribute('aria-expanded', 'false');
            document.getElementById(id).setAttribute('aria-hidden', 'true');
          }
        }
      );
    },

    listenForKeys: function(event){   
      if(event.keyCode == 27){
        this.menuOpen = false;
        document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
    }

  },

  created(){
    window.addEventListener('keydown', this.listenForKeys);
  },
  beforeDestroy(){
    window.removeEventListener('keydown', this.listenForKeys);
  }

}
</script>