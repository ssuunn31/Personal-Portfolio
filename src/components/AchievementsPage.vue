<template>
    <div class="achievements">
        <nav class="navbar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About Me</router-link>
            <router-link to="/achievements" class="nav-link">Achievements</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <div class="education">
            <button class="title1">Education</button>

            <div class="Edu-Box">
                <div class="year">
                    <ul class="customised-list">
                        <li>
                            <h3 class="year-list">2017-2018</h3>
                        </li>
                        <li>
                            <h3 class="year-list">2020-2021</h3>
                        </li>
                        <li>
                            <h3 class="year-list">2021-2025</h3>
                        </li>
                    </ul>
                </div>

                <div class="description">
                    <h4 class="des">BCSE Percentage - 87.8%</h4>
                    <p class="despara">Class X - Daga Central School</p>

                    <h4 class="des">BCSE Percentage - 86%</h4>
                    <p class="despara">Class XII - Ugyen Academy</p>

                    <h4 class="des">CGPA - 8.06</h4>
                    <p class="despara">Delhi Technological University</p>
                </div>
            </div>
        </div>

        <div class="below">
            <div class="activities">
                <button class="title2">Activities</button>
                <div class="act">
                    <ul class="activities-list">
                        <li>
                            <p>Recipient of Indian Council for Cultural Relation Scholarship (ICCR)</p>
                        </li>
                        <li>
                            <p>Ranked 28th Nationally for Engineering Scholarship Abroad (DAHE) in the academic year 2021</p>
                        </li>
                        <li>
                            <p>Regional Runners Up in Table Tennis representing Dagana Dzongkhag</p>
                        </li>
                        <li>
                            <p>National Level Golden Youth Awards Contestant representing Dagana District</p>
                        </li>
                        <li>
                            <p>Recipient of His Majesty's Certificate of Academic Excellence</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="experience">
                <button class="title3">Experiences</button>

                <div class="experience-1">
                    <h3>Social Media Marketing Intern - MYeKIGAI</h3>
                    <h4>June 2023 - Sepetember 2023</h4>
                        <ul class="exp-list">
                            <li>
                                <p>Managed all social media platforms of the company</p>
                            </li>
                            <li>
                                <p>Guided the content writing team and graphic design team on the 
                                    type of post and content to post</p>
                            </li>
                            <li>
                                <p>Came up with creative ideas for the company to post on their various
                                    social media platforms
                                </p>
                            </li>
                        </ul>
                </div>
                
                <div class="experience-2">
                    <h3>Web Developer Intern - DrukSmart</h3>
                    <h4>June 2024 - July 2024</h4>
                        <ul class="exp-list">
                            <li>
                                <p>Reinforced foundational knowledge of HTML, CSS and JavaScript by working
                                    on diverse mini projects like registration forms, calculator and game 
                                    applications, etc</p>
                            </li>
                            <li>
                                <p>Designed a personal portfolio from scratch using various design tools like Canva. And then,
                                    implemented my personal portfolio using te Vue.js framework
                                </p>
                            </li>
                            <li>
                                <p>Worked on one of the projects of the company. Created custom error pages and implemented them</p>
                            </li>
                        </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.achievements {
    position: relative;
    margin-left: 70px;
}

.navbar {
    display: flex;
    justify-content: right;
    gap: 20px;
    margin-top: 16px;
    margin-right: 20px;
    font-family: Roboto;
    font-size: 15px;
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

.Edu-Box {
    display:flex;
    gap: 190px;
    
}

.year {
    display: flex;
    text-align: inline;
    line-height: 5rem;
    font-size: 30px;
    font-weight: bold;
    color: #e1d7d7;
}

.year-list {
    font-size: 29px;
}

.description {
    text-align: inline;
    line-height: 1.3rem;
    color: #362417;
    text-align: left;
    margin-top: 30px;
}

.title1 {
    font-size: 23px;
    background-color: #D9D9D9;
    color: #000500;
    border: none;
    border-radius: 20px;
    position: absolute;
    left: 200px; 
    padding: 8px 11px; 
    width: 130px;
    height: 45px;
    font-weight: bold;
}

.title3 {
    font-size: 23px;
    background-color: #D9D9D9;
    color: #000500;
    border: none;
    border-radius: 20px; 
    padding: 8px 11px; 
    width: 155px;
    height: 45px;
    font-weight: bold;
    margin-left: 140px;
    margin-bottom: 8px;
}

h2 {
    font-size: 28px;
    margin-bottom: -10px;
    font-weight: bold;
    font-family: "Roboto";
}

h3 {
    margin-bottom: -18px; 
    font-size: 22.5px;
    font-family: "Roboto";
    margin-top: 15px;
}

h4 {
    font-size: 20px;
    font-weight: semi-bold;
    margin-bottom: -5px;
    font-family: "Roboto";
}

.des {
    font-family: "Roboto";
    font-size: 19.5px;
    letter-spacing: 1px;
}

.despara {
    font-size: 15px;
}

.below {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 120px;
}

.experience {
    margin-top: -290px;
    margin-bottom: 4vh;
    padding-bottom: 0px;
    margin-left: 200px;
    margin-right: -200px;
    max-width: 65%;
    
}

.experience-2 {
    margin-top: 40px;
}

.exp-list {
    line-height: 20px;
    font-size: 19px;
    color: #534036;
    font-weight: 600;
    max-width: 75%;
    padding: 0;
}

.title2 {
    font-size: 23px;
    background-color: #D9D9D9;
    color: #000500;
    border: none;
    border-radius: 20px;
    left: 15px;
    padding: 8px 15px; 
    width: 130px;
    height: 45px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-left: 200px; 
}

.activities {
    padding: 0;
    max-width: 100%;
    margin-right: -250px;
}

.activities-list {
    color: #534036;
    line-height: 20px;
    font-size: 19px;
    font-style: roboto;
    font-weight: 600;
    max-width: 100%;
    max-width: 700px;
    padding: 0;
    margin: 0;
}
</style>