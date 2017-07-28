import Modal from '../modal/template.vue';

export default {
  name: 'project-listing',
  props: [
    'description',
    'users',
    'name',
    'icon'
  ],
  data: () => ({
    isModalOpen: false
  }),
  components: {
    Modal,
  },
};
