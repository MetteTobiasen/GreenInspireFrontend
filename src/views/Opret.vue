<template>
<h3>Contact Form</h3>
<div class="container">
  <form v-on:submit="submitForm"> 
    <label for="category">Kategori</label>
    <input type="text" id="category" name="category" placeholder="Your category..">

    <label for="img">First Name</label>
    <input type="text" id="img" name="image" placeholder="Your image..">

    <label for="titel">Titel</label>
    <input type="text" id="titel" name="title" placeholder="Your titel..">

    <label for="description">Beskrivelse</label>
    <textarea id="description" name="description" placeholder="Write your description.." style="height:200px"></textarea>

    <label for="companyId">Last Name</label>
    <input type="number" id="companyId" name="companyId" placeholder="Your company id..">

    <input type="submit" value="Submit"> 
  </form>
</div>
</template>

<script>

const baseUrl = "https://localhost:7070/api/Company";
const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";

export default {
    data() {
        return {
            category: '',
            img: '',
            titel: '',
            subject: '',
            companyId: '',
            companyUser: [],           
        };
    },
    methods:
    {
        async getCompanyNameById(id) {
            try{
                const url = baseURL + "/" + id;
                const response = await axios.get(url);
                companyUser = response.data;
            }
            catch (error) {
                console.error('Error fetching companyId:', error);
            }

        },
        async submitForm() {
            const NewNewsfeed = {
                newsfeedImage: null,
                titel: this.titel,
                description: this.subject,
                companyId: this.companyId
            };
            const img = this.img;
            const category =  this.category;

            try {                   
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
body {font-family: "Montserrat", serif;}
* {
    box-sizing: border-box;
    
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>