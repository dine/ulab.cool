import router from '../router';
import {API_URL} from './api';

const PROJECTS_URL = API_URL + 'projects';

export default {
    getProjects(context) {
        document.cookie = 'PHPSESSID=ptt6q29b73hceolf8u2sndlm5g';
        return context.$http
            // .get(PROJECTS_URL, {params: {foo: 'bardfgdfg'}, headers: {'Cookie': 'PHPSESSID=ptt6q29b73hceolf8u2sndlm5g'}})
            .get(PROJECTS_URL)
            .then(({data}) => data);
    },

    getProject(context, id) {
        return context.$http.get(PROJECTS_URL + '/' + id)
            .then(({data}) => data);
    }
}
