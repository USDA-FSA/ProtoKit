
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
          date: 'Wednesday, 04/05/2015 5:10 PM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
        },
        {
          type: 'systemUser',
          itemClass: 'fsa-timeline__item--system',
          actorLabel: 'Jane Doe',
          actorLink: '#',
          label: '',
          labelClass: '',
          actionLabel: 'commented on',
          date: 'Wednesday, 04/05/2015 5:10 PM',
          dateTime: '2015-05-28T09:02:10.517-05:00',
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

  created(){
    //this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>