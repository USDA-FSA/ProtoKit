
<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>

export default {
  name: "app",
  watch: {
    $route (to, from){
        
    } 
  } 
};

</script>