import ProjectService from '../../services/projectService';

export default {
  props: ['id'],
  data: () => ({
    project: {
      name: '',
      creator: {},
      users: [],
      description: '',
    },
  }),
  methods: {
    getCollaborators() {
      return this.project.users
        .map(user => user.name)
        .reduce((acc, curr) => acc ? acc + ', ' + curr : curr, '');
    },
    loadProject(ProjectService) {
      if (this.$route.params.id) {
        const id = this.$route.params.id;
        ProjectService.getProject(this, id)
          .then(project => {
            this.project = project;
          })
          .catch(err => console.log(err));
      }
    }
  },
  beforeMount () {
    this.loadProject(ProjectService);
  },
};
