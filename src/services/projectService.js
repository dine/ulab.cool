import router from '../router';
import {API_URL} from './api';

const PROJECTS_URL = API_URL + 'projects';

export default {
  getProjects(context) {
    return context.$http
      .get(PROJECTS_URL)
      .then(({data}) => data);
  },

  getProject(context, id) {
    return context.$http.get(PROJECTS_URL + '/' + id)
      .then(({data}) => data);
  }
}
