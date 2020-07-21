<template>
  <footer>

    <topper></topper>

    <appFooter 
      APP_ABBR_NAME="UXP">
    </appFooter>
    <screenId
      SCREEN_ID="UXP-123-XYZ">
    </screenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>

import topper from '@/components/footer/Topper.vue';
import appFooter from '@/components/footer/Footer.vue';
import screenId from '@/components/footer/ScreenId.vue';
import hiddenItems from '@/components/hidden/HiddenItems.vue';

export default {

  components: {
    topper: topper,
    appFooter: appFooter,
    screenId: screenId,
    hiddenItems: hiddenItems
  }

}

</script>