<template>
    <div class="profile-form">
        <div>
            <label>Company Name:</label>
            <p>{{ form.companyName }}</p>
        </div>
        <div>
            <label>Industry Name:</label>
            <p>{{ form.industryName }}</p>
        </div>
        <div>
            <label>Company Logo:</label>
            <img :src="form.companyLogo" alt="Company Logo" v-if="form.companyLogo" />
        </div>
        <div>
            <label>Company CVR:</label>
            <p>{{ form.companyCVR }}</p>
        </div>
        <div>
            <label>Company Size:</label>
            <p>{{ form.companySize }}</p>
        </div>
        <div>
            <label>Email:</label>
            <p>{{ form.email }}</p>
        </div>
        <div>
            <label>Password:</label>
            <p>{{ form.password }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                companyName: 'Example Company',
                industryName: 'Technology',
                companyLogo: 'path/to/logo.png',
                companyCVR: '12345678',
                companySize: '50',
                email: 'example@example.com',
                password: 'password123'
            }
        };
    }
};
</script>

<style scoped>
.profile-form {
    max-width: 600px;
    margin: 0 auto;
}
.profile-form div {
    margin-bottom: 15px;
}
.profile-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
.profile-form p {
    margin: 0;
}
.profile-form img {
    max-width: 100px;
    height: auto;
}
</style>
