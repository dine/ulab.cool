import ProjectService from '../../services/projectService';
import ProjectTile from '../../components/project-tile/template.vue';

export default {
  name: 'main-view',
  data() { return { projects: [] }; },
  methods: {
    loadProjects(ProjectService) {
      ProjectService.getProjects(this)
        .then(projects => {
          this.projects = projects;
        })
        .catch(err => console.log(err));
    }
  },
  components: {
    ProjectTile,
  },
  beforeMount () {
    this.loadProjects(ProjectService);
  }
};
