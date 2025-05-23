<template>
    <div class="skills">
        <nav class="navbar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About Me</router-link>
            <router-link to="/achievements" class="nav-link">Achievements</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <div class="title">
            <h3>MY SKILLS</h3>
            <div class="sub-title">
                <h4 id="ts">Technical Skills</h4>
                <h4 id="ps">Professional Skills</h4>
            </div>
        </div>

        <div class="boxes">
            <div class="skill-container">
                <div class="skill 1">
                    <img src="@\assets\vue.png">
                    <p>Vue</p>
                </div>
                <div class="skill 2">
                    <img src="@\assets\html.png">
                    <p>HTML</p>
                </div>   
                <div class="skill 3">
                    <img src="@\assets\CSS.png">
                    <p>CSS</p>
                </div>
                <div class="skill 4">
                    <img src="@\assets\cpp.png">
                    <p>C++</p>
                </div>
                <div class="skill 5">
                    <img src="@\assets\JS.png">
                    <p>JS</p>
                </div>
                <div class="skill 6">
                    <img src="@\assets\MySQL.png">
                    <p>MySQL</p>
                </div>
                <div class="skill 7">
                    <img src="@\assets\BS.png">
                    <p>Bootsrap</p>
                </div>
                <div class="skill 8">
                    <img src="@\assets\C.png">
                    <p>C</p>
                </div>
            </div>

            <div class="courses-container">
                <div class="radial-bars">
                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewbox="0 0 200 200" class="c">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="information-1">
                            <div class="percentage">90%</div>
                            <div class="text">Creativity <br>90%</div>
                        </div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewbox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="information-1">
                            <div class="percentage">70%</div>
                            <div class="text">Team Work <br>70%</div>
                        </div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewbox="0 0 200 200" class="c">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="information-2">
                            <div class="percentage">80%</div>
                            <div class="text">Communication <br>80%</div>
                        </div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewbox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="information-2">
                            
                            <div class="text">Problem Solving <br>85%</div>
                            <div class="percentage">85%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
    text-align: center;
    padding: 20px;
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

h3 {
    align-content: center;
    text-align: center;
}

.sub-title {
    display: flex;
    justify-content: space-around;
    margin-top: -45px;
    gap: 230px;
}

#ps {
    display: flex;
    justify-content: left;
    margin-right: 9%;
}

.boxes {
    display: flex;
    justify-content: space-around;
    margin-top: -25px;
}

.skill-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 120px;
    margin-left: 120px;
    margin-bottom: 20px;
}

.skill {
    width: 200px;
    height: 70px;
    background-color: #D9D9D9;
    border-radius: 35px;
    align-items: center;
    text-align: center;
    align-content: center;
    display: flex;
    justify-content: center;
    gap: 25px;
}

img {
    width: 42px;
    background-color: #D9D9D9;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
}

p {
    background-color: #D9D9D9;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    font-family: Roboto;
}

.courses-container {
    display: flex;
    justify-content: space-evenly;
}

.radial-bars {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    row-gap: 15px;
    margin-top: 15%;
    margin-left: 38%;
}

.radial-bars .radial-bar {
    width: 50%;
    height: 200px;
    position: relative;
}

.radial-bars .radial-bar svg {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 200px;
    height: 190px;
    position: relative;
}

.radial-bars .radial-bar .progress-bar {
    stroke-width: 10;
    stroke: #362417;
    fill: transparent;
    stroke-dasharray: 502;
    stroke-dashoffset: 502;
    stroke-linecap: round;
    animation: animate-bar 1s linear forwards;
}

@keyframes animate-bar {
    100% {
        stroke-dashoffset: -1;
    }
}

.path {
    stroke-width: 10;
    stroke: #F1DABF;
    fill: transparent;
    stroke-dasharray: 502;
    stroke-dashoffset: 502;
    stroke-linecap: round;
}

.path-1 {animation: animate-path1 1s 1s linear forwards;}
.path-2 {animation: animate-path2 1s 1s linear forwards;}
.path-3 {animation: animate-path3 1s 1s linear forwards;}
.path-4 {animation: animate-path4 1s 1s linear forwards;}

@keyframes animate-path1 {
    100% {
        stroke-dashoffset: 50;
    }
}

@keyframes animate-path2 {
    100% {
        stroke-dashoffset: 135;
    }
}

@keyframes animate-path3 {
    100% {
        stroke-dashoffset: 85;
    }
}

@keyframes animate-path4 {
    100% {
        stroke-dashoffset: 75;
    }
}

.information-1 {
    position: absolute;
    top: -40%;
    left: 37%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-family: "Roboto";
    font-size: 13px;
    animation: showText 0.5 1s linear forwards;
    position: absolute;
    transform: translate(-50%, -50%);
}

.information-2 {
    position: absolute;
    top: -40%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-family: "Roboto";
    font-size: 13px;
    animation: showText 0.5 1s linear forwards;
    position: absolute;
    transform: translate(-50%, -50%);
}

.radial-bars .percentage {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 17px;
    animation: showText 0.5 1s linear forwards;
    opacity: 0;
}

.progress-bar .text {
    width: 100%;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    font-size: 17px;
    font-weight: 600;
    animation: showText 0.5s 1s linear forwards;
    opacity: 0;
}
</style>