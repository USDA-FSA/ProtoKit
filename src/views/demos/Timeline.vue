
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Timeline</h1>
          <timeline
            :TIMELINE_DATA="timelineData"
            >
          </timeline>
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
      timelineData: [
        {
          type: 'system',
          itemClass: 'fsa-timeline__item--system',
          actorLabel: '',
          actorLink: '',
          label: 'Submitted',
          labelClass: 'fsa-label',
          actionLabel: 'on',
          comment: '',
          receiveLabel: '',
          receiver: '',
          receiverLink: '',
          date: 'Monday, 04/03/2015 6:02 AM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'systemUser',
          itemClass: 'fsa-timeline__item--system',
          actorLabel: 'Jane Doe',
          actorLink: '#',
          label: 'Approved',
          labelClass: 'fsa-label',
          actionLabel: 'request on',
          comment: '',
          receiveLabel: '',
          receiver: '',
          receiverLink: '',
          date: 'Wednesday, 04/05/2015 5:08 PM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'userCommentEdit',
          itemClass: 'fsa-timeline__item--user',
          actorLabel: 'Jane Doe',
          actorLink: '#',
          label: '',
          labelClass: '',
          actionLabel: 'commented on',
          comment: 'The inspection request identifies this site enrolled in three Land Use programs. While technically possible, it is quite rare and needs to be verified.',
          receiveLabel: '',
          receiver: '',
          receiverLink: '',
          date: 'Wednesday, 04/05/2015 5:10 PM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'systemUser',
          itemClass: 'fsa-timeline__item--system',
          actorLabel: 'Jane Doe',
          actorLink: '#',
          label: 'Assigned',
          labelClass: 'fsa-label--general',
          actionLabel: 'on',
          comment: '',
          receiveLabel: 'to',
          receiver: 'Todd Stanley',
          receiverLink: '#',
          date: 'Thursday, 04/06/2015 12:28 PM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'userCommentEdit',
          itemClass: 'fsa-timeline__item--user',
          actorLabel: 'Todd Stanley',
          actorLink: '#',
          label: '',
          labelClass: '',
          actionLabel: 'commented on',
          comment: 'On my way to the site now.',
          receiveLabel: '',
          receiver: '',
          receiverLink: '',
          date: 'Thursday, 05/28/2015 7:02 AM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'systemUser',
          itemClass: 'fsa-timeline__item--system',
          actorLabel: 'Todd Stanley',
          actorLink: '#',
          label: 'In Progress',
          labelClass: 'fsa-label--warning',
          actionLabel: 'on',
          comment: '',
          receiveLabel: 'changed the status to ',
          receiver: '',
          receiverLink: '',
          date: 'Thursday, 05/28/2015 8:30 AM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'userCommentAdd',
          itemClass: 'fsa-timeline__item--add-comment',
          actorLabel: 'Todd Stanley',
          actorLink: '',
          label: '',
          labelClass: '',
          actionLabel: 'comments:',
          comment: '',
          receiveLabel: '',
          receiver: '',
          receiverLink: '',
          date: '',
          dateTime: '',
        },

      ],      
    }
  },



  computed: {

    employees: function(){
      return this.$store.getters['employees/getEmployees'];
    },

    
  },
  

  methods: {


  },

  beforeCreate(){
    //this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>