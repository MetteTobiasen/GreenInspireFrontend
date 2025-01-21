<template>
    <main class="søg-page">
    <div >
        <div class="search-container">
        <label class="categoryLabel" for="category">Søg efter kategori</label>
        <select class="form-control" name="selectedCategory" id="selectedCategory" v-model="selectedCategory" @change="onSelected($event)">
            <!-- <option value="" disabled selected>Vælg kategori</option> -->
            <option v-for="category in categoryList" :key="category.id" :value="category.id">
                {{ category.categoryName }}
            </option>
        </select>
        </div>
        <div class="row" >
            <div class="column" v-for="(item, index) in cardList" :key="index" :style="{ width: '33.33%' }">
                <SmallCard 
                :title="item.title" 
                :description="item.description" 
                :companyName="item.companyName" 
                :category="item.categoryName"
            /> 
            </div>
        </div>
    
    </div>
    </main>
</template>

<script>

import axios from 'axios';
import SmallCard from '../components/SmallCard.vue';

const baseUrlCategory = "https://localhost:7070/api/Category";
const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";
const baseUrlCompany = "https://localhost:7070/api/Company";

export default {
    components: {
        SmallCard
    },
    created() { 
    this.getAllCategories();
    this.getAllNewsfeeds();
  },
    data() {
        return {
            categoryList: [],
            selectedCategory: '',
            newsfeedList: [],
            cardList: [],
            companyUser: [],
            chosenCategory: ''
        };
    },
    methods: { 
        async getAllNewsfeeds() {
            try{             
            const response = await axios.get(baseUrlNewsfeed);           
            this.newsfeedList = response.data;            
            console.log("list of newsfeed: ", this.newsfeedList);  
            console.log("selected Category: ", this.selectedCategory);                  
            this.cardList = []; // Clear the cardList before pushing new items
            for (const newsfeed of this.newsfeedList) {
                if (newsfeed.companyUserId) {
                const url = baseUrlCompany + "/" + newsfeed.companyUserId;
                const companyUser = await axios.get(url);
                this.companyUser = companyUser.data;
                if(newsfeed.categoryName == this.selectedCategory){
                    this.cardList.push({
                    categoryName: newsfeed.categoryName, 
                    title: newsfeed.newsfeedTitle, 
                    description: newsfeed.newsfeedText, 
                    companyName: this.companyUser.companyName                        
                    });
                }
                } else {
                console.error('Error: companyId is undefined for newsfeed:', newsfeed);                
                }
            }    
            } catch (error) {       
            console.error('Error fetching newsfeeds:', error);       
            }
        },
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
        async getNewsfeedWithChosenCategory(){
            this.cardList.forEach(newsfeed => {
                if(newsfeed.categoryId == this.selectedCategory){
                    this.cardList.push(newsfeed);
                }
            });
        },
        onSelected:function(event){
          this.selectedCategory = event.target.value;
            this.getAllNewsfeeds();
        }
    }  
};
</script>

<style scoped>
.søg-page {
    padding: 20px;
}

.categoryLabel {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}
select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
}

select:focus {
    outline: none;
    border-color: #b4bcb5;
}

option {
    padding: 10px;
}

.card .title {
  font-size: 14px; /* Adjust this value as needed */
}
.card .description {
  font-size: 5px; /* Adjust this value as needed */
  max-height: 50px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;    
}
.card .category {
  font-size: 12px; /* Adjust this value as needed */
  margin-left: 10px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;     
}

.column {
  float: left;
  width: 25%;
}

.row{
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  width: 130%;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Adjust this value as needed */
  
}
.search-container input[type="text"] {
  flex: 1;
  padding: 6px;
  font-size: 17px;
  border: 1px solid #ccc;
  width: 300%;
}

.search-container button {
  padding: 6px 10px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  margin-left: 40rem; 
} 

.search-container button:hover {
  background: #ccc;
}

.søg-page .column {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.søg-page .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1; 
}

.søg-page .card .title {
  white-space: normal; 
  min-height: 40px; 
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

