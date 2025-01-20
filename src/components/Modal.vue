<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button class="close-button" @click="closeModal">X</button>
            <Card class="indhold" :category="categoryName" :title="title" :description="description" :companyName="companyName"/>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'Modal',
    components: {
        Card
    },
    props: {
        isVisible: {
            type: Boolean,
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
        categoryName: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>

<style>

.modal-overlay {
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
} 

.modal-overlay .modal-content {
    width: 400px;
    height: 500px;
    background-color: white; 
    padding: 20px;
    border-radius: 3px;
    position: fixed;
    justify-content: center; 
}  

.indhold{
    
}
.close-button {
    position: absolute; 
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}
</style>