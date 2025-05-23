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

                    <h4 class="des">CGPA - 8.0 (Till 3rd Semester)</h4>
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
                    </ul>
                </div>
            </div>

            <div class="experience">
                <button class="title3">Experiences</button>
                <h3>Social Media Marketing Intern - MYeKIGAI</h3>
                <h4>June 2023 - Sepetember 2023</h4>
                <ul class="exp-list">
                <li>
                    <p>Managed all social media platforms of the company</p>
                </li>
                <li>
                    <p>Guided the content writing team and graphic design team on the type of post and content to post</p>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
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
    justify-content: center;
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
    left: 600px; 
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
    gap: 85px;
}

.exp-list {
    line-height: 20px;
    font-size: 19px;
    color: #534036;
    font-weight: 600;
    max-width: 88%;
    text-align: left;
    align-items: left;
    align-content: left;
    padding: 0;
    margin: 0;
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

.activities-list {
    color: #534036;
    line-height: 20px;
    font-size: 19px;
    font-style: roboto;
    font-weight: 600;
    max-width: 88%;
    padding: 0;
    margin: 0;
}
</style>