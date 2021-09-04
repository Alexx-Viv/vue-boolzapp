Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    user,
    contacts,
    data,
    displayContact: [],
    contactImage: '../img/avatar_1.jpg',
    contactName: 'Michele',
    contactIndex: 0,
    searchContact: '',
    userMessage: '',
    timestamp: '',
  },
  methods: {
    changeContact(name, image, index) {
      this.contactName = name;
      this.contactImage = '.' + image;
      this.contactIndex = index;
      console.log(index);
    },
    addMessage(userMessage, contactIndex) {
      const today = new Date();
      const date =
        today.getFullYear() +
        '/' +
        (today.getMonth() + 1) +
        '/' +
        today.getDate();
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      const dateTime = date + ' ' + time;
      this.timestamp = dateTime;

      const newMessage = {
        date: this.timestamp,
        message: userMessage,
        status: 'sent',
      };

      this.data.contacts[contactIndex].messages.push(newMessage);

      this.userMessage = '';

      setTimeout(() => {
        const newMessage = {
          date: this.timestamp,
          message: 'ok',
          status: 'received',
        };
        this.data.contacts[contactIndex].messages.push(newMessage);
      }, 1000);
    },
    test() {
      this.displayContact = [];

      for (let i = 0; i < this.contacts.length; i++) {
        if (
          this.contacts[i].name
            .toLowerCase()
            .includes(this.searchContact.toLowerCase().trim())
        ) {
          this.displayContact.push(this.contacts[i]);
        }
      }

      console.log(this.displayContact);
    },
  },
  created() {
    this.displayContact = this.contacts;
  },
});
