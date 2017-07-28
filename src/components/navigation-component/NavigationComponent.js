import Auth from '../../services/authService';
import LoginModal from '../login-modal/template'
import RegistrationModal from '../registration-modal/template'

export default {
  name: 'navigation',
  data: () => ({
    navigation: '',
    showLogin: false,
    showRegistration: false,
    user: Auth.user,
  }),
  components: {
    LoginModal,
    RegistrationModal,
  }
};
