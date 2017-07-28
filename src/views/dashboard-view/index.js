import ProjectService from '../../services/projectService';
import EventListing from '../../components/event-listing/template.vue';
import Countdown from '../../components/countdown/template.vue';

export default {
  name: 'dashboard-view',
  data() {
    return {
      events: [
        {
          name: 1,
          date: 'March 31, 2017',
          projects: [],
          isActive: true,
        },
        {
          name: 2,
          isActive: false,
          date: 'February 28, 2017',
          projects: [
            {
              icon: '',
              name: 'Usabilla Unchained',
              description: 'A block chain technology for rewarder user feedback.',
              users: [
                {
                  name: 'George',
                }
              ]
            },
            {
              icon: '',
              name: '',
              description: '',
            },
          ],
        },
        {
          name: 3,
          isActive: false,
          date: 'January 30, 2017',
          projects: [
            {
              icon: '',
              name: 'Usabilla Unchained',
              description: 'A block chain technology for rewarder user feedback.',
              users: [
                {
                  name: 'George',
                }
              ]
            },
            {
              icon: '',
              name: '',
              description: '',
            },
          ],
        },
      ],
    };
  },
  methods: {
    loadProjects(ProjectService) {
      ProjectService.getProjects(this)
        .then(projects => {
          this.events[0].projects = projects;
        })
        .catch(err => console.log(err));
    }
  },
  beforeMount () {
    this.loadProjects(ProjectService);
  },
  components: {
    EventListing,
    Countdown,
  },
};
