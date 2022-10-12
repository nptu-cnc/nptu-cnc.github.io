export default {
    data() {
        return {
            hello: "This is a bar",
        }
    },
    template: `
        <div>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        </div>
    `,

}



