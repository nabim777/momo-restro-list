<template>
  <div>
    <img
      src="../assets/restrologo.png"
      class="logo"
      alt="resturant"
    >
    <h3>Login</h3>
    <div class="login">
      <input
        id="email"
        v-model="email"
        type="text"
        placeholder="Enter Name or email"
      >
      <p
        v-if="emailError"
        class="error-message"
      >
        {{ emailError }}
      </p>
      <input
        id="password"
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
      <p
        v-if="errorMessage && !emailError && !passwordError"
        class="error-message"
      >
        {{ errorMessage }}
      </p>
      <button
        type="submit"
        @click="login"
      >
        Login
      </button>
      <p>
        <router-link to="/Sign-Up">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
    name : 'Login',
    data(){
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            errorMessage: ''
        } 
    },
        //mounted will load whenever page is loaded
        //this will check the value in application storage if there is user it will redirect to the home page
    mounted(){
        //this will get the value from loaclstorage named user-info
        let user = localStorage.getItem('user-info');
        //if user is login then redirect homepage
        if (user){
            this.$router.push({name:'Home'})
        }
    },
    methods:{
        async login()
        {
            // Clear previous error messages
            this.emailError = '';
            this.passwordError = '';
            this.errorMessage = '';

            // Check for empty
            if (this.email === '') {
                this.emailError = "Email field cannot be empty.";
            }

            if (this.password === '') {
                this.passwordError = "Password filed cannot be empty.";
            }

            // Stop execution if there are validation errors
            if (this.emailError || this.passwordError) {
                return;
            }

            // Determine if the input is an email
            const isEmail = /\S+@\S+\.\S+/.test(this.email);

            // http://localhost:3000/user?email=nabinaale@gmail.com&password=@123
            // this is api for filtering the required username with email and password
            let result = await axios.get(`http://localhost:3000/user`, {
                params: isEmail
                    ? { email: this.email, password: this.password }
                    : { name: this.email, password: this.password },
                });
            console.warn(result)
            if(result.status==200 && result.data.length>0){
                // JSON.stringify just convert json into string
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                //this will navigate to home.vue
                this.$router.push({name:'Home'})
            }
            else{
                this.errorMessage = "Invalid email or password. Please try again."
            }
        }  
    }
}
</script>
