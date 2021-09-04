Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    user,
    contacts,
    data,
    contactImage: '../img/avatar_3.jpg',
    contactName: 'Samuele',
  },
  methods: {
    changeContact(name, image) {
      this.contactName = name;
      this.contactImage = '.' + image;
    },
  },
});
