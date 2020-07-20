<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="UXP">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="UXP-123-XYZ">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>

import topper from './Topper.vue';
import footer from './Footer.vue';
import screenId from './ScreenId.vue';
import hiddenItems from '@/components/hidden/HiddenItems.vue';

export default {

  components: {
    topper: footerTopper,
    footer: footerFooter,
    screenId: footerScreenId,
    hiddenItems: hiddenItems
  }

}

</script>