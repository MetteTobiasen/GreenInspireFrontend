<template>
  <div class="column" style="width: 70%">
    <div class="card">
      <br><br>
      <h3 style="text-align:center">{{ category }}</h3>
          <br><br>
            <img src="C:\Users\Tobia\OneDrive\Zealand\Visual code\GreenInspire\src\assets\Images\Co2Neutral.webp" alt="" style="width:90%">
          <br><br>
          <h2>{{ title }}</h2>
          <br><br>
          <p class="text">{{ description }}</p>
          <br><br>  
          <p>{{ companyName }}</p>
          <br><br>
        <!-- <div class="card-category">{{ category }}</div>
        <img :src="imageSrc" alt="Card Image" class="card-image" />
        <div class="card-content">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-text">{{ description }}</p>
            <p class="card-profile">By {{ companyName }}</p>
        </div> -->
    </div>
  </div>
</template>

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
</div> -->


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
/* .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 16px;
}

.card-category {
    background-color: #f4f4f4;
    color: #555;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 8px;
    text-align: center;
}

.card-image {
    width: 100%;
    height: auto;
    display: block;
}

.card-content {
    padding: 16px;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 8px;
}

.card-text {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px;
}

.card-profile {
    font-size: 12px;
    color: #999;
} */


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



<!-- <</template>template>
    <div class="card">
      <div class="card-category">{{ category }}</div>
      <img :src="imageSrc" alt="Card Image" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-text">{{ description }}</p>
        <p class="card-profile">By {{ companyName }}</p>
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
        required: true
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
      companyId: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 16px;
  }
  
  .card-category {
    background-color: #f4f4f4;
    color: #555;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 8px;
    text-align: center;
  }
  
  .card-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 8px;
  }
  
  .card-text {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px;
  }
  
  .card-profile {
    font-size: 12px;
    color: #999;
  }
  </style>
   -->