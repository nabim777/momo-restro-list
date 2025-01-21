<template>
  <div>
    <Header />
    <h1>Hello, Welcome on add resturant pages</h1>
    <form class="add">
      <input
        v-model="resturant.name"
        type="text"
        placeholder="Enter Name"
        name="name"
      >
      <input
        v-model="resturant.address"
        type="text"
        placeholder="Enter Address"
        name="Address"
      >
      <input
        v-model="resturant.contact"
        type="text"
        placeholder="Enter Contact"
        name="Contact"
      >
      <button
        type="button"
        @click="addResturant"
      >
        Add new Resturant
      </button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default{
    name: "Add",
    components: {
        Header
    },
    data(){
        return {
            resturant : {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    //mounted run whenever the page is reloaded
    mounted(){
        let user = localStorage.getItem("user-info")
        if (!user){
            this.$router.push({name:'SignUp'})
        }
    },
    methods:{
        async addResturant(){
            let result = await axios.post("http://localhost:3000/resturant",
            {
                name : this.resturant.name,
                address : this.resturant.address,
                contact : this.resturant.contact
            }
            );
            if(result.status == 201){
                alert("Added Sucessfully")
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>