<template>
    <main class="profil-page">
        <div class="column" style="width: 70%">
        <div>
            <h2 class="overskrift">Profil</h2>
        </div>
        <ProfileForm :companyName="user.companyName" :industryName="user.industryName" :companyCVR="user.companyCvr" :companySize="user.companySize" :email="user.email" :password="user.userPassword"/>
        </div>
    </main>
</template>

<script>
const UrlCompany = "https://localhost:7070/api/Company";

import ProfileForm from '../components/ProfileForm.vue';
import axios from 'axios';

        export default {
            created() {
                this.getUser();
            },
            components: {
                ProfileForm,
            },
            props: ['user'],
            data() {
                return {
                    user: {
                        companyName: "",
                        industryName: "",
                        companyLogo: "",
                        companyCVR: null,
                        companySize: "",
                        email: "",
                        userPassword: "",
                    },
                };
            },
            
            methods: {
                async getUser() {
                    try {
                        const url = UrlCompany + "/" + 2;
                        const response = await axios.get(url);
                        this.user = response.data;
                        console.log(this.user);
                    } catch (error) {
                        console.error('Error fetching user:', error);
                    }
                },
            },
        };
</script>

<style scoped>
body {
  font-family: "Montserrat", serif;
}
*{
    box-sizing: border-box;    
} 
.overskrift {
    text-align: center;
    margin-bottom: 1em;
    margin-left: 16em;
}


</style>
