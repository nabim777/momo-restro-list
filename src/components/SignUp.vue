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
      <p
        v-if="nameError"
        class="error-message"
      >
        {{ nameError }}
      </p>
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
      >
      <p
        v-if="emailError"
        class="error-message"
      >
        {{ emailError }}
      </p>
      <input
        v-model="password"
        type="password"
        placeholder="Password"
      >
      <p
        v-if="passwordError"
        class="error-message"
      >
        {{ passwordError }}
      </p>
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
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
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
        validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
        async signUp()
        {
            // clear previous error messages
            this.nameError = '';
            this.emailError = '';
            this.passwordError = '';
            if (this.name === '') {
                this.nameError = 'Name is required.';
            }
            if (this.email === '') {
                this.emailError = 'Email is required.';
            } else if (!this.validateEmail(this.email)) {
                this.emailError = 'Invalid email format.';
            }
            if (this.password === '') {
                this.passwordError = 'Password is required.';
            }

            // stop execution if there are any errors
            if (this.nameError || this.emailError || this.passwordError) {
                return;
            }
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