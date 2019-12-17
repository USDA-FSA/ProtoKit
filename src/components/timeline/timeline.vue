<template>
  <div>
    <div class="fsa-timeline">

      <div v-for="event in timelineData"
        :class="'fsa-timeline__item ' + event.itemClass">

        <div v-if="event.type=='userCommentAdd'">
          <div  class="fsa-timeline__hd">
            <label class="fsa-field__label" for="inspectionCommentField--104"><strong>{{event.actorLabel}}</strong> {{ event.actionLabel }}</label>
          </div>

          <div class="fsa-timeline__bd">
            <div class="fsa-m-b--s">
              <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--104" name="inspectionCommentField"></textarea>
            </div>
            <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
          </div>
        </div>
        <div v-else >
          <div class="fsa-timeline__hd">
            <strong v-if="event.type=='systemUser' || event.type=='userCommentEdit'"><a :href="event.actorLink">{{event.actorLabel}}</a></strong> 
            <span v-if="event.type!='userCommentEdit'" :class="'fsa-label '+event.labelClass">{{ event.label }}</span> 
            {{ event.receiveLabel }} 
            <a :href="event.receiverLink">{{event.receiver}}</a> 
            {{ event.actionLabel }} 
            <time :datetime="event.dateTime">{{ event.date }}</time>
            <span v-if="event.type=='userCommentEdit'" class="fsa-timeline__action">
              <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> 
              <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button>
            </span>
          </div>
          <div v-if="event.type=='userCommentEdit'" class="fsa-timeline__bd">
            {{ event.comment }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    TIMELINE_DATA: Array
  },
  
  computed: {
    timelineData: function(){
      return this.TIMELINE_DATA;
    },
  }
}
</script>