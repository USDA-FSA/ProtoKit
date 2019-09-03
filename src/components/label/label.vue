<template>
  <span :class="'fsa-label ' + VARIATION + ' ' + LARGE + ' ' + CLASS_EXTRA" :title="ATTR_TITLE">
    {{ TEXT }}
  </span>
</template>
<script>
export default {
  props: {
    TEXT: String,
    VARIATION: String,
    LARGE: String,
    CLASS_EXTRA: String,
    ATTR_TITLE: String,
  },
}

</script>