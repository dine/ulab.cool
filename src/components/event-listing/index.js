import ProjectListing from '../project-listing/template.vue';

export default {
  name: 'event-listing',
  props: [
    'name',
    'projects',
    'is-active',
    'date',
    'users'
  ],
  data() {
    return {
      active: this.isActive,
    }
  },
  components: {
    ProjectListing,
  },
};
