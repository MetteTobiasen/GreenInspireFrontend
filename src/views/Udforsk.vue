<template>
    <main class="udforsk-page">
      <div class="search-container">
        <form @submit.prevent="search">
          <input type="text" v-model="searchQuery" placeholder="Søg.." name="search" @input="onSelected($event)">
          <!-- <button type="submit" style="display: inline-block; vertical-align: middle;">
            <i class="fa fa-search"></i>
          </button> -->
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
      searchQuery: '',
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
        let url = baseUrlNewsfeed;        
        if (this.searchQuery) {
          url += "?searchQuery=" + this.searchQuery;
        }
        const response = await axios.get(url);
        this.newsfeedList = response.data;
        console.log(this.newsfeedList);
        this.newsfeedList.forEach(async (newsfeed) => 
        {
          if (newsfeed.companyUserId) {
            const url = baseUrlCompany + "/" + newsfeed.companyUserId;
            const companyUser = await axios.get(url);
            this.companyUser = companyUser.data;
            this.cardList = this.newsfeedList.map(newsfeed => ({
              categoryName: newsfeed.categoryName, 
              title: newsfeed.newsfeedTitle, 
              description: newsfeed.newsfeedText, 
              companyName: this.companyUser.companyName}));
          } else {
            console.error('Error: companyId is undefined for newsfeed:', newsfeed);
          }
        });
      }
      catch (error) {
        console.error('Error fetching newsfeeds:', error);
      }
    },
    onSelected:function(event){
          this.searchQuery = event.target.value;
            this.getAllNewsfeeds();
        }
  }
};
</script>

<style>
body {
  font-family: "Montserrat", serif;
}

/* .udforsk-page .card {
  max-height: 350px; 
  overflow: hidden;
} */

.udforsk-page{
  padding: 20px;
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
  align-items: center;
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

.udforsk-page .column {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.udforsk-page .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1; 
}

.udforsk-page .card .title {
  white-space: normal; 
  min-height: 40px; 
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>




