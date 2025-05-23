<template>
    <div class="about">
        <nav class="navbar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About Me</router-link>
            <router-link to="/achievements" class="nav-link">Achievements</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <div class="whole">
            <div class="about-me">
                <h1>About Me!</h1>
                <div class="details">
                    <ul class="custom-list">
                        <li>Name : Sanjana Gurung</li>
                        <li>DOB : October 31, 2002</li>
                        <li>Nationality : Bhutanese</li>
                        <li>Address : Dagana, Bhutan</li>
                        <li>Phone No : +975 17763035</li>
                        <li>Email : gurungsanjana31@gmail.com</li>
                    </ul>
                </div>

                <div class="para">
                    <p>I am a final year student in Delhi Technological University pursuing B.Tech in Mathematics and Computing Engineering. I am interested in developing interesting and fun websites.</p>
                </div>
            </div>

            <div class="right">
                <div class="photo">
                    <img src="@\assets\amimage.png">
                </div>
                
                <router-link to="/achievements" class="achievement-link">
                    <img src="@\assets\arrowhp.png" class="arrowam">
                </router-link>
            </div>

            
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: right;
    gap: 20px;
    margin-top: 16px;
    margin-right: 20px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
}

.nav-link {
    text-decoration: none;
    color: #000;
}

.nav-link.router-link-active {
    color: rgba(217, 217, 217, 1);
    background-color: #362417;
    padding: 3px 8px;
    border-radius: 8px;
    margin-top: -3px;
}

.nav-link.router-link-active:hover {
    background-color: #453223;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.whole {
    display: flex;
    align-items: center;
    margin-top: 5px;
    justify-content: space-evenly;
    margin-left: 75px;
}

.about-me {
    align-content: left;
    text-align: left;
    align-items: left;
    font-family: Roboto;
    display:flex;
    flex-direction: column;
}

h1 {
    margin-left: 45px;
    font-size: 50px;
    margin-top: 0px;
    letter-spacing: 5px;
    color: #362417;
}

.photo {
    width: 385px;
    height: 485px;
    margin-right: 150px;
    align-content: right;
    display: flex;
    align-items: right;
    text-align: right;
    margin-top: 20px;
}

.arrowam {
    width: 45px;
    margin-top: 35px;
    margin-left: 30%;
}

.details {
    display: flex;
    width: 60%;
    margin-top: -10px;
    letter-spacing: 1.5px;
}

.custom-list {
    list-style-type: none;
    align-items: left;
    text-align: left;
    line-height: 2.5rem;
    margin-top: 0px;
    margin-left: 20px;
}

li {
    font-size: 20px;
    color: #362417;
    font-weight: 500;
}

.para {
    font-family: Roboto;
    line-height: 2.2rem;
    font-size: 20px;
    margin-left: 45px;
    width: 700px;
    font-weight: 500;
    color: #f5eeee;
    letter-spacing: 1.2px;
    width: 60%;
    margin-top: 10px;
}
</style>