import Auth from '../../services/authService';
import Modal from '../modal/template';

export default {
  name: 'registration-modal',
  data: () => ({
    credentials: {
      email: '',
      username: '', 
      firstPassword: '',
      secondPassword: '',
    },
    errorMessage: ''
  }),
  methods: {
    hasError() {
      return this.errorMessage.length > 0;
    },
    signup(credentials) {
      var credentials = {
        email: this.credentials.email,
        username: this.credentials.username, 
        plainPassword: {
          first: this.credentials.firstPassword,
          second: this.credentials.secondPassword,
        }
      }

      Auth.signup(this, credentials, '')
        .then(r => {
          console.log('success', r);
          this.$emit('close');
        })
        .catch(r => {
          console.log('error', r);
          this.errorMessage = 'Your username or password are incorrect!';
        });
    }
  },
  components: {
    Modal,
  },
};
