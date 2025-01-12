<template>
    <main class="udforsk-page">
      <div class="search-container">
        <form @submit.prevent="search">
          <input type="text" v-model="searchQuery" placeholder="Search.." name="search">
          <button type="submit" style="display: inline-block; vertical-align: middle;">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div class="row" >
        <div class="column" v-for="(item, index) in cardList" :key="index" :style="{ width: '33.33%' }">
          <SmallCard 
          :title="item.title" 
          :description="item.description" 
          :category="item.categoryName" 
          :companyName="item.companyName"
          @click="openModal(item)"/>
        </div>
      </div>
        <Modal 
        v-if="showModal" 
        @close="showModal = false" 
        :isVisible="true" 
        :title="selectedCard.title" 
        :description="selectedCard.description" 
        :categoryName="selectedCard.categoryName" 
        :companyName="selectedCard.companyName"/>
  </main>
</template>

<script>
import SmallCard from '../components/SmallCard.vue';
import Modal from '../components/Modal.vue';
const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";
const baseUrlCompany = "https://localhost:7070/api/Company";
export default {
  created() {
    this.getAllNewsfeeds();
  },
  components: {
    SmallCard,
    Modal
  },
  data() {
    return {
      newsFeedList: [],
      cardList: [],
      companyUser: [],
      showModal: false,
      selectedCard: {
        title: '',
        description: '',
        categoryName: '',
        companyName: ''
      }
    };
  },
  methods: {
    openModal(card) {
      this.selectedCard = card;
      this.showModal = true;
    },
    async getAllNewsfeeds() {
      try{
        const response = await axios.get(baseUrlNewsfeed);
        this.newsfeedList = response.data;
        console.log(this.newsfeedList);
        this.newsfeedList.forEach(async (newsfeed) => 
        {
          if (newsfeed.companyUserId) {
            const url = baseUrlCompany + "/" + newsfeed.companyUserId;
            const companyUser = await axios.get(url);
            this.companyUser = companyUser.data;
            this.cardList.push({
              categoryName: newsfeed.categoryName, 
              title: newsfeed.newsfeedTitle, 
              description: newsfeed.newsfeedText, 
              companyName: this.companyUser.companyName});
          } else {
            console.error('Error: companyId is undefined for newsfeed:', newsfeed);
          }
        });
      }
      catch (error) {
        console.error('Error fetching newsfeeds:', error);
      }
    }
  }
};
</script>

<style>
body {
  font-family: "Montserrat", serif;
}
.modal img {
  max-width: 100%;
  height: auto;

}
.modal {
  max-width: 80%; /* Adjust this value as needed */
  margin: auto;
  padding: 20px;
  border-radius: 10px;
}
.udforsk-page .card {
  max-height: 350px; /* Adjust this value as needed */
  overflow: hidden;
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
.search-container {
  display: flex;
  align-items: center;
}
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Adjust this value as needed */
  margin-left: 210px;
}
.search-container input[type="text"] {
  flex: 1;
  padding: 6px;
  font-size: 17px;
  border: 1px solid #ccc;
}

.search-container button {
  padding: 6px 10px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}
.search-container button{
  margin-left: 40rem; 
} 

/* .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
} */

/* @media screen and (max-width: 400px) {
  .search-container {
    float: none;
  } 
  .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  input[type=text] {
    border: 1px solid #ccc;  
  }
}  */

  /* .topnav {
  overflow: hidden;
  background-color: #e9e9e9;
} */

/* .topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}   */

/* .topnav a:hover {
  background-color: #ddd;
  color: black;
} 

.topnav a.active {
  background-color: #2196F3;
  color: white;
}  */

/* .topnav input[type=text] {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}  */

/* @media screen and (max-width: 600px) { 
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}  */

</style>




