console.log('Vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data:{
    user,
    contacts,
    chats,
  },
  methods:{
    getMessageClass(index){
      if (chats[index].writere === "user"){
        return true
      }
    }
  }
})