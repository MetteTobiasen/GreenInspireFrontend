<template>
  <div class="column" style="width: 70%">
    <div class="card">
      <h4 Class="category" style="text-align:center">{{ category }}</h4>
            <img src="C:\Users\Tobia\OneDrive\Zealand\Hovedopgave\BillederNewsfeed\Co2Neutral.webp" alt="" style="width:90%">
          <br><br>
          <h3 class="title">{{ title }}</h3>
          <!-- <br><br> -->
          <p class="text" style="text-align:center">{{ description }}</p>
          <p class="company">{{ companyName }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        category: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        newsfeedId: {
            type: Number,
            required: false
        },
            companyId: {
            type: Number,
            required: false
        }
    }
};
</script>

<style scoped>

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  /* max-width: 50rem; */
  /* margin: auto; */
  text-align: center;
  font-family: "Montserrat", serif;
  margin-bottom: 2rem;
  margin-left: 10rem;
  width: 115%;  
  padding: 20px;
  background: #fbfafa;
border-radius: 0;
}
.card {
  box-shadow: none;
} 
.card {
  border: 1px solid rgb(216, 207, 207);
} 

img {
  border: 1px solid rgb(216, 207, 207);
}

.title {
  color: rgb(96, 92, 92);
  border-bottom: 1px solid rgb(216, 207, 207);
  padding-bottom: 20px;
  font-size: 15.5px
}
.company{
  margin-top: 10px;
  font-weight: bold;
  color: rgb(96, 92, 92);
  font-size: 13px;
}

.category{
  margin-bottom: 15px;
  color: rgb(97, 93, 93);
  font-size: 12px;
}

.text {
  color: rgb(76, 73, 73);
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  border-bottom: 1px solid rgb(216, 207, 207);
  padding-bottom: 20px;
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
  color: rgb(22, 22, 22);
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>