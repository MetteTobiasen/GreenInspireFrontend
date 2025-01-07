<template>
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