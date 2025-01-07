<template>
    <main class="hjem-page">
    <div class="column" style="width: 70%">
      <Card v-for="(item, index) in newsFeedList" :key="index" :title="item.newsfeedTitle" :text="item.newsfeedText" :category="item.categoryName
" />
    </div>
        <!-- <div class="column" style="width: 70%">
        <div class="card">
          <br><br>
	        <h3 style="text-align:center">Kategori</h3>
          <br><br>
          <img src="" alt="John" style="width:90%">
          <br><br>
          <h2>Solceller på vej</h2>
          <br><br>
          <p class="text">bla bla bla bla blab lb b djb bjdje b jdej b djej bjdjd bdjjd bjdjd bjdjdj bdjjdjdjb djdjdjb djdjb ddjb bdjjdjd b</p>
          <br><br>
          <p>Novo Nordisk</p>
          <br><br>
            
        </div>

        <div class="card">
	        <h3 style="text-align:center">Kategori</h3>
            <img src="" alt="John" style="width:90%">
            <h2>Solceller på vej</h2>
            <p class="text">bla bla bla bla blab lb b djb bjdje b jdej b djej bjdjd bdjjd bjdjd bjdjdj bdjjdjdjb djdjdjb djdjb ddjb bdjjdjd b</p>
            <p>Novo Nordisk</p>
            <p><button>Read more</button></p>
        </div>
        </div>      -->
    </main>
</template>

<script>
      import Card from '../components/Card.vue';
      const baseUrlNewsfeed = "https://localhost:7070/api/Newsfeed";
      export default {
        created() {
          this.getAllNewsfeeds();
        },
        components: {
          Card
        },
        data() {
          return {
            newsFeedList: []
          };
        },
        methods: {
          async getAllNewsfeeds() {
          try{
              const response = await axios.get(baseUrlNewsfeed);
              this.newsfeedList = response.data;
              console.log(this.newsfeedList);
          }
          catch (error) {
              console.error('Error fetching newsfeeds:', error);
          }

        }
         }
      };
      </script>

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-bottom: 2rem;
}

.text {
  color: black;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>

