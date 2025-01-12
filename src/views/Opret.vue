<template>
<h3>Contact Form</h3>
<div class="column">
  <form v-on:submit="submitForm"> 
    <div class="overskrift">
      <h2>Opret opslag</h2>
    </div>

    <label for="companyId">Id</label>
    <!-- <input type="number" id="companyId" name="companyId" placeholder="Firma id.."> -->
    <select name="companyId" id="companyId" v-model="companyId">
    <option value="" selected="selectedId">Vælg firma id</option>
    <option v-for="companyUser in companyUserList" :key="companyUser.id" :value="companyUser.id">
      {{ companyUser.companyName }}
    </option>
    </select>
    <label for="category">Kategori</label>
    <!-- <input type="text" id="category" name="category" placeholder="Vælg kategori.."> -->
    <select name="subject" id="subject" v-model="selectedCategory"> 
    <option value="" selected="selectedCategory">Vælg kategori</option> 
    <option v-for="category in categoryList" :key="category.id" :value="category.id"> 
      {{ category.categoryName }}
    </option>
    </select>
    
    <label for="titel">Titel</label>
    <input class="titel" type="text" id="titel" name="title" placeholder="Titel på opslag..">

    <label for="description">Beskrivelse</label>
    <textarea id="description" name="description" placeholder="Skriv din beskrivelse her.." style="height:200px"></textarea>

    <label for="img">Billede</label>
    <input type="text" id="img" name="image" placeholder="Vælg billede..">
    <input type="submit" value="Opret" @click.prevent="submitForm">
  </form>
</div>
</template>

<script>

const baseUrl = "https://localhost:7070/api/Company";
const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";
const baseUrlCategory = "https://localhost:7070/api/Category";

import axios from 'axios';

export default {
  created() { 
    this.getAllCategories();
    this.getAllCompanyUsers();

  },
    data() {
        return {
            category: '',
            img: '',
            title: '',
            description: '',
            companyId: '',
            companyUserList: [],  
            categoryList: [],
            selectedCategory: "",
            selectedId: '',
            subject: ''
        };
    },
    methods:
    {
       async getAllCategories() {
          try{
              const response = await axios.get(baseUrlCategory);
              this.categoryList = response.data;
              console.log(this.categoryList);
          }
          catch (error) {
              console.error('Error fetching category:', error);
          }

        },
        async getCategoryById(id) {
          try{
              const url = baseUrlCategory + "/" + id;
              const response = await axios.get(url);
              categoryChosen = response.data;
          }
          catch (error) {
              console.error('Error fetching category id:', error);
          }

        },
        async getAllCompanyUsers() {
            try{
                const response = await axios.get(baseUrl);
                this.companyUserList = response.data;
                console.log(this.companyUserList);
            }
            catch (error) {
                console.error('Error fetching company:', error);
            }
        },
        async getCategoryIdByName(name) {
            try{
                const url = baseUrlCategory + "/" + "idByName" + "/" + name;
                const response = await axios.get(url);
                this.categoryIdForObject = response.data;
                console.log(response.data);
            }
            catch (error) {
                console.error('Error fetching category id:', error);
                throw error;
            }

        },
        async submitForm() {
            let NewNewsfeed = {
              newsfeed: {
                newsfeedImage: null,
                title: this.title,
                description: this.description,
                companyUserId: this.companyId
              },
              category: {
                categoryId: "",
                categoryName: this.selectedCategory
              }
            };
            try {
                await this.getCategoryIdByName(this.selectedCategory);
                this.category.categoryId = this.categoryIdForObject;
                console.log('categoryId:', categoryIdForObject);
                NewNewsfeed.category.categoryId = categoryId;
                const response = await axios.post(baseUrlNewsfeed, NewNewsfeed);                    
                console.log('Success:', response);                 
            }   
            catch (error) {
                console.error('Error:', error);
            }           
        }
    }
};
</script>

<style>
body {
  font-family: "Montserrat", serif;
}

*{
    box-sizing: border-box;    
} 

.overskrift {
  text-align: center;
  margin-bottom: 1em;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e6e2e2;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}



input[type=submit] {
  background-color: #51bd95;
  color: rgb(0, 0, 0);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #5edbad;
}

.column {
  margin-left: 20rem;
}

</style>