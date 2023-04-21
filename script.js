const {createApp} = Vue;

createApp({

  data(){
    return{
      isLoading : true,
      apiUrl : 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails : []
    }
  },

  methods : {
    getApi(){
      axios.get(this.apiUrl)
        .then ((result) => {
          this.mails.push(result.data.response);
        })
    },

    getMails(){
      for (let i = 0; i < 10; i++) {
        this.getApi();
      }
    }
  },

  mounted(){
    this.getMails(),
    console.log(this.mails);
  }

}).mount('#app')