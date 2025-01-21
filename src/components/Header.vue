<template>
  <div class="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/add">
      Add Resturant
    </router-link>
    <a
      href="#"
      @click="logout"
    >Logout</a>
  </div>
</template>

<script>

export default({
    name: 'Header',
    methods:{
        logout(){
            // localStorage.removeItem("user-info");
            // this will clear the local storage
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
})
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;

}

.nav a{
    text-align: center;
    color: #f2f2f2;
    float: left;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px; 
    margin-right: 4px;
}

.nav a:hover{
    background-color: #ddd;
    color:#222
}

</style>