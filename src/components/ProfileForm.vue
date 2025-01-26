<template>
    <div class="profile-form">
        <div>
            <label>Virksomhed Navn:</label>
            <p>{{ companyName }}</p>
        </div>
        <div>
            <label>Branche:</label>
            <p>{{ industryName }}</p>
        </div>
        <!-- <div>
            <label>Company Logo:</label>
            <img :src="companyLogo" alt="Company Logo"/>
        </div> -->
        <div>
            <label>CVR:</label>
            <p>{{ companyCVR }}</p>
        </div>
        <div>
            <label>Virksomhed Størrelse:</label>
            <p>{{ companySize }}</p>
        </div>
        <div>
            <label>Email:</label>
            <p>{{ email }}</p>
        </div>
        <div>
            <label>Password:</label>
            <p class="password">{{ password }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileForm",
      props: {
          companyName: {
              type: String,
              required: true
          },
          industryName: {
              type: String,
              required: false
          },
          companyLogo: {
              type: String,
              required: false
          },
          companyCVR: {
              type: Number,
              required: true
          },
            companySize: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        } 
};
</script>

<style scoped>

.body {
    font-family: "Montserrat", serif;
}
.profile-form {
    align-content: center;
    /* padding: 30px; */
    /* border: 1px solid #ccc; */
    margin-left: 10rem;
    width: 125%;
    /* background-color: #f9f9f9; */

}
.profile-form div {
    margin-bottom: 15px;
}
.profile-form label {
    display: block;
    margin-bottom: 5px;
    /* font-weight: bold; */
}
.profile-form p {
    margin: 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #e6e2e2;
    border-radius: 4px;
}
.profile-form img {
    max-width: 100px;
    height: auto;
    border: 1px solid #e6e2e2;
    border-radius: 4px;
    padding: 5px;
    background-color: #fff;
}
.profile-form div {
    margin-bottom: 15px;
}
.profile-form label {
    display: block;
    margin-bottom: 5px;
    /* font-weight: bold; */
}
.profile-form p {
    margin: 0;
}

.password {
    font-family: 'text-security-disc';
    -webkit-text-security: disc;
    -moz-text-security: disc;
    /* text-security: disc; */
}
</style>
