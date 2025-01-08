<template>
    <main class="profil-page">
        <profile-form :user="user" v-if="user"></profile-form>
    </main>
</template>

<script>
const UrlCompany = "https://localhost:7070/api/Company";

import ProfileForm from '../components/ProfileForm.vue';
import axios from 'axios';

        export default {
            components: {
                ProfileForm,
            },
            data() {
                return {
                    user: "",
                };
            },
            created() {
                this.fetchUser();
            },
            methods: {
                async fetchUser() {
                    try {
                        const url = UrlCompany + "/" + 2;
                        const response = await axios.get(url);
                        this.user = response.data;
                    } catch (error) {
                        console.error('Error fetching user:', error);
                    }
                },
            },
        };
</script>


