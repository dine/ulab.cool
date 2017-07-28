export default {
  name: 'countdown',
  props: [
    'date'
  ],
  data() {
    const vm = this;
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      nextDate: Math.trunc(Date.parse(this.date) / 1000),
    }
  },
  computed: {
    seconds() {
      return (this.nextDate - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.nextDate - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.nextDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.nextDate - this.now) / 60 / 60 / 24);
    }
  },
  created() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  }
};
