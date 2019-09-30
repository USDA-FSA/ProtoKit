<template>
    <div>
        <field
          :ID="ID"
          :EXTRA_CLASSES="EXTRA_CLASSES"
          :LABEL="LABEL"
          :INPUT_VALUE="INPUT_VALUE"
          :INPUT_TYPE="INPUT_TYPE"
          :REQUIRED="REQUIRED"
          :ARIA_REQUIRED="ARIA_REQUIRED"
          :BEHAVIOR="BEHAVIOR"
          :ARIA_DESCRIBEDBY="ARIA_DESCRIBEDBY"
          :ERROR_FIELD="ERROR_FIELD"
          :HAS_HELP="HAS_HELP"
        >
          <template v-slot:labelDescribe>
            <span class="fsa-field__label-desc">Required</span>
          </template>
          <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
          <template v-slot:help>
            <slot v-if="HAS_HELP" name="help"></slot>
          </template>
          <template v-slot:message>
            <slot v-if="HAS_MESSAGE" name="message"></slot>
          </template>
          
          

        </field>
        <button class="fsa-btn fsa-btn--secondary">Search</button>
    </div>
</template>

<script>
import field from '../field/field';

export default {
  props: {
    ID: String,
    LABEL: String,
    REQUIRED: String,
    INPUT_VALUE: String,
    INPUT_TYPE: String,
    BEHAVIOR: String,
    EXTRA_CLASSES: String,
    ERROR_FIELD: String,
    MESSAGE: String,
    HELP: String,
    ARIA_REQUIRED: String,
    ARIA_DESCRIBEDBY: String,
    HAS_MESSAGE: String,
    HAS_HELP: String
    
  },
  components: {
    field: field,
  },

  computed: {
    ID: () => {this.ID},
    LABEL: () => {this.LABEL},
    REQUIRED: () => {this.REQUIRED},
    INPUT_VALUE: () => {this.INPUT_VALUE},
    INPUT_TYPE: () => {this.INPUT_TYPE},
    BEHAVIOR: () => {this.BEHAVIOR},
    EXTRA_CLASSES: () => {this.EXTRA_CLASSES},
    ERROR_FIELD: () => {this.ERROR_FIELD},
    MESSAGE: () => {this.MESSAGE},
    HELP: () => {this.HELP},
    ARIA_REQUIRED: () => {this.ARIA_REQUIRED},
    ARIA_DESCRIBEDBY: () => {this.ARIA_DESCRIBEDBY},
    HAS_MESSAGE: () => {this.HAS_MESSAGE},
    HAS_HELP: () => {this.HAS_HELP},
  }

}
</script>