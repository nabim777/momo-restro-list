<template>
  <div>
    <Header />
    <h1>Hello, {{ name }} Welcome on home Page</h1>
    <table>
      <caption>Momo Resturant List</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in resturants"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td>
            <router-link :to="'/update/'+item.id">
              Update
            </router-link>
            <button @click="deleteResturant(item.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from 'axios';
import Header from './Header.vue'

export default{
    name: "Home",
    components: {
        Header
    },
    data() {
        return {
            name: '',
            resturants: []
        }
    },
    //mounted run whenever the page is reloaded
    async mounted(){
        let user = localStorage.getItem("user-info")
        if (!user){
            this.$router.push({name:'SignUp'})
        }
        else{
            this.name = JSON.parse(user).name
        }
        this.loaddata()
    },
    methods: {
        async deleteResturant(id){
            let result = await axios.delete("http://localhost:3000/resturant/" + id)
            if(result.status == 200){
                this.loaddata()
            }
        },
        async loaddata(){
            let result = await axios.get("http://localhost:3000/resturant");
            this.resturants = result.data
        }
    }
}
</script>

<style>
table, td, th {
    border-collapse: collapse;
    text-align: left;
    padding: 15px;
    margin: 0 auto;
}

td, th{
    width: 160px;
    height: 40px;
}

th{
    background-color: #04AA6D;
    color:white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: skyblue;
    color: white;
}

td:first-child, th:first-child{
    width: auto;
}

/* Add space between 'Update' and 'Delete' */
button {
    margin-left: 20px; /* Adjust margin as needed */
    color: white;
    background-color: rgb(216, 89, 89);
    border-color: rgb(216, 89, 89);
}

button:hover {
    background-color: red;
}
caption {
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 10px; 
    }
</style>