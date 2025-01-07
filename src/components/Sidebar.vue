<template>
  <div class="sidenav">
    <div>
      <div class="logo"><img src="C:\Users\Tobia\OneDrive\Zealand\Hovedopgave\Logoer\logoForslag12.png" alt="logo" />
            
        </div>
            <router-link class="button" to="/hjem">
                <span class="material-icons">home</span>
                <span class="text">Hjem</span>
            </router-link>
            <router-link class="button" to="/udforsk">
                <span class="material-icons">dataset</span>
                <span class="text">Udforsk</span>
            </router-link>
            <router-link class="button" to="/søg">
                <span class="material-icons">search</span>
                <span class="text">Søg</span>
            </router-link>
            <router-link class="button" to="/profil">
                <span class="material-icons">account_circle</span>
                <span class="text">Profil</span>
            </router-link>
            <router-link class="button" to="/opret">
                <span class="material-icons">add_circle</span>
                <span class="text">Opret</span>
            </router-link>
        </div>
  </div>
</template>

<style Lang="scss" scoped>

body {
  font-family: "Montserrat", serif; 
}

.logo{
  display: flex;
  /* align-items: center;  */
   
}

.sidenav {
  height: 100%; 
  display: flex;
  flex-direction: column; 
  /* width: 160px;  */
  position: fixed;
  min-height: 100vh; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: #ffffff;
  overflow-x: hidden; 
  padding-top: 20px; 

  width: var(--sidebar-width); 
  flex-shrink: 0;
  
}

.sidenav a {
  padding: 6px 8px 6px 16px; 
  text-decoration: none;
  font-size: 25px;
  color: #131212;
  display: block;
  align-items: center;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  /* margin-left: 160px;  */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  
}

 @media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
} 
</style>

