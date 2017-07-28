import Auth from '../../services/authService';
import Modal from '../modal/template';

export default {
  name: 'login-modal',
  data: () => ({
    credentials: {
      username: '',
      password: '',
    },
    errorMessage: ''
  }),
  methods: {
    hasError() {
      return this.errorMessage.length > 0;
    },
    login(credentials) {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      Auth.login(this, credentials, '')
        .then(r => {
          this.$emit('close');
        })
        .catch(r => {
          this.errorMessage = 'Your username or password are incorrect!';
        });
    }
  },
  components: {
    Modal,
  },
};
