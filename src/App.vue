<template>
<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
  padding: 0;
}

.logo{
    height: 220px
  }
  
.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    margin-right: 21px;
    color: #fff;
    background-color: skyblue;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}
.register button:hover, .login button:hover, .add button:hover{
    border: 1px solid rgb(15, 157, 201);
    background-color: rgb(15, 157, 201);
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: -19px;
    font-size: 14px;
}
</style>
