<template>
    <div class="column" style="width: 70%">
      <div class="card">
            <h4 Class="category" style="text-align:center">{{ category }}</h4>
            <img src="C:\Users\Tobia\OneDrive\Zealand\Visual code\GreenInspire\src\assets\Images\Co2Neutral.webp" alt="" style="width:90%">
            <br><br>
            <h3 class="title">{{ title }}</h3>
            <!-- <p class="text" style="text-align:justify">{{ description }}</p> -->
            <p class="company">{{ companyName }}</p>
            <p class="readMore"><a style="font-size: 15px;" href="#" @click.prevent="openModal">Læs mere</a></p>
      </div>
    </div>
</template>  
  
  <script>
  import Modal from '../components/Modal.vue';
  export default {
      name: "Card",
      components: {
          Modal
      },
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
      },
  
  methods: {
    openModal() {
      this.$emit('open-modal', {
        title: this.title,
        description: this.description,
        category: this.category,
        companyName: this.companyName
      });
    }
  }
};
</script>
  
<style scoped>

.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card {
    height: 100%;
  }
  .card {
    text-align: center;
    font-family: "Montserrat", serif;
    margin-bottom: 2rem;
    margin-left: 10rem;
    width: 125%;  
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
    color: rgb(76, 73, 73);
    font-size: 16px;
    
  }

  .company{
    margin-top: 10px;
    font-weight: bold;
    color: rgb(76, 73, 73);
    font-size: 12px;
    
  }
  
  .category{
    margin-bottom: 15px;
    color: rgb(76, 73, 73);
    font-size: 13px;
  }
  
  .text {
    color: rgb(76, 73, 73);
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
  }

  .card:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
    .readMore {      
      margin-top: 10px;
      color: rgb(76, 73, 73);
      /* border: 1px solid rgb(216, 207, 207); */
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