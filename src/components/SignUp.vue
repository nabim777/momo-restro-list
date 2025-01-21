<template>
  <div>
    <img
      src="../assets/restrologo.png"
      class="logo"
      alt="cooker"
    >
    <h3>Sign Up</h3>
    <div class="register">
      <input
        v-model="name"
        type="text"
        placeholder="Enter Name"
      >
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
      >
      <input
        v-model="password"
        type="password"
        placeholder="Password"
      >
      <button @click="signUp">
        Sign up
      </button>
      <p>
        <router-link to="/login">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>

import axios from "axios"
export default{
    name : 'SignUp',
    data()
    {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    //mounted will load whenever page is loaded
    mounted(){
        //this will get the value from loaclstorage named user-info
        let user = localStorage.getItem('user-info');
        //if user is login then redirect homepage
        if (user){
            this.$router.push({name:'Home'})
        }
    },
    methods:{
        async signUp()
        {
            console.warn("signUp",this.name,this.email,this.password)
            let result= await axios.post("http://localhost:3000/user",
            {
                name: this.name,
                email: this.email,
                password: this.password
            }
            )
            console.warn(result);
            if(result.status == 201)
            {
                alert("Signup done")
                // JSON.stringify just convert json into string
                localStorage.setItem("user-info",JSON.stringify(result.data))
                //this will navigate to home.vue
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>