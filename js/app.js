Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    user,
    contacts,
    data,
    contactImage: '../img/avatar_1.jpg',
    contactName: 'Michele',
    contactIndex: 0,
  },
  methods: {
    changeContact(name, image, index) {
      this.contactName = name;
      this.contactImage = '.' + image;
      this.contactIndex = index;
    },
  },
});
