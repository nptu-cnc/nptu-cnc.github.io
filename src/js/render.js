const list = {
    data() {
        return {
            data: "Hello World",
            initial:false,
            isClick: [],
            jsonData: []
        }
    },
    async created() {
        let data = await fetch('/var/file/0/1000/img/4155/acaData.json')
        this.jsonData = await data.json();
                
    },
}

Vue.createApp(list).mount('#app');