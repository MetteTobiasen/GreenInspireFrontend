<template>
    <main class="hjem-page">
    <div class="column" style="width: 70%">
      <Card v-for="(item, index) in cardList" :key="index" :title="item.title" :description="item.description" :category="item.categoryName" :companyName="item.companyName"/>
    </div>
    </main>
</template>

<script>
      import Card from '../components/Card.vue';
      const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";
      const baseUrlCompany = "https://localhost:7070/api/Company";
      export default {
        created() {
          this.getAllNewsfeeds();
        },
        components: {
          Card
        },
        data() {
          return {
            newsFeedList: [],
            cardList: [],
            companyUser: [],
            searchQuery: ''
          };
        },
        methods: {
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
                  this.cardList.push({categoryName: newsfeed.categoryName, title: newsfeed.newsfeedTitle, description: newsfeed.newsfeedText, companyName: this.companyUser.companyName});
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
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 100%;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 10px;
    }
</style>

