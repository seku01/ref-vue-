const app = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: 'Vue is great!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        //this.message = this.currentUserInput;  @input="saveInput" dom
        this.message = this.$refs.userText.value;
        //console.dir(this.$refs.userText);  -input! all properties
      },
    },
  });
  
  app.mount('#app');
  
  //(how vue works = > Reactivity => virtual DOM
  //vue instance lifecycle
  //1. createApp({...})   <beforeCreate() (can console log this) <created()....mounted...updated...
