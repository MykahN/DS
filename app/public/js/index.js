const Offer = {
    data() {
        return {
            "result": {},
            "offers": [
                {
                    "id": 1,
                    "name": "Mykah Netzky",
                    "salary": 125000,
                    "bonus": 10000,
                    "company": "EY",
                    "offerDate": "2021-10-12"
                },

                {
                    "id": 2,
                    "name": "Abhi Sridhar",
                    "salary": 65000,
                    "bonus": 1000,
                    "company": "IU",
                    "offerDate": "2021-10-12"
                }
            ]
        }
    },

    created() {
        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then((json) => {
            console.log("Got json back:", json);
            this.result = json.results[0];
        })
        .catch( (error) => {
            console.error(error);
        });
    },
}

Vue.createApp(Offer).mount('#offerApp')