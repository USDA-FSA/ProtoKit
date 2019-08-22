<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <!-- loop here -->
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li v-for="item in items" class="fsa-nav-global__list-item">
            <div v-if="item.hasChild=='true'">
              <button :id="item.uid+'-BTN'" v-on:click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
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

      let item = e.currentTarget;
      let id = item.getAttribute('aria-controls');
      let expanded = item.getAttribute('aria-expanded');

      console.log("expanded? "+expanded)

      this.closeAllMenus();

      if (expanded=="true") {
        
        //this.menuOpen = false;
        item.setAttribute('aria-expanded', 'false');
        document.getElementById(id).setAttribute('aria-hidden', 'true');
        console.log("menu should be CLOSED");
        

      } else {

        //this.menuOpen = true;
        item.setAttribute('aria-expanded', 'true');
        document.getElementById(id).setAttribute('aria-hidden', 'false');
        console.log("menu should be OPEN");
        
      }
      
      

      /*
      item.addEventListener('focus',
        function (e) {
          if(this.menuOpen){
            this.menuOpen = false;
            item.setAttribute('aria-expanded', 'false');
            document.getElementById(id).setAttribute('aria-hidden', 'true');
          }
        }
      );
      */
      
    },

    closeAllMenus: function(){

      let menuBtns = document.getElementsByClassName('fsa-nav-global__link--has-sub-menu');

      for (let i = 0; i < menuBtns.length; i++) {
        let btn = menuBtns[i];
        let id = btn.getAttribute('aria-controls');

        if ( btn.getAttribute('aria-expanded') ) {
          btn.setAttribute('aria-expanded', 'false');
          document.getElementById(id).setAttribute('aria-hidden', 'true');
        }
      }
    },

    listenForKeys: function(event){   
      if(event.keyCode == 27){

        this.closeAllMenus();
        /*
        if(document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]')){
          document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
          document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
        }
        */
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