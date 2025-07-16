<template>
    <div class="contact">
        <nav class="navbar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About Me</router-link>
            <router-link to="/achievements" class="nav-link">Achievements</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <div class="title">
            <h2>CONTACT ME</h2>
        </div>

        <div class="contact-container">
            <div class="social-container">
                <h1 class="connect">Lets Connect!</h1>
                <div class="contact-options">
                    <div class="info">
                        <img src="@\assets\email.png" class="options">
                        <p>gurungsanjana31@gmail.com</p>
                    </div>
                    <div class="info">
                        <img src="@\assets\phone.png" class="options">
                        <p>+975 17910330</p>
                    </div>
                </div>
                <div class="social-links">
                    <a href="https://www.instagram.com/sanjanagurung31?igsh=bW5ndWF5MWJ1YnZo&utm_source=qr"><img src="@\assets\ig.png" class="social-icon"></a>
                    <a href="https://www.linkedin.com/in/sanjana-gurung-02b137263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="@\assets\li.png" class="social-icon"></a>
                    <a href="https://www.facebook.com/leeya.gurung.9?mibextid=LQQJ4d"><img src="@\assets\fb.png" class="social-icon"></a>
                    <a href="https://github.com/settings/profile"><img src="@\assets\gh.png" class="social-icon"></a>
                </div>

                <a href="https://drive.google.com/drive/u/0/folders/1jZhwZOI6_edm3CxuNT2fW4UwVISX00Xz" target="_blank" class="download">Download CV</a>
            </div>

            <div class="submit-container">
                <div class="upper">
                    <div class="box1">
                        <input type="text" name="name" placeholder ="Name" class="name-box">
                    </div> 
                    <div class="box2">
                        <input type="text" name="email" placeholder ="Email" class="email-box">
                    </div>
                </div>
                <div class="box3">
                    <input type="text" name="message" placeholder ="Message" class="message-box">
                </div>
                <button class="btn">Submit</button>
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

.title {
    align-items: center;
    text-align: center;
    color: #362417;
}

.contact-container {
    display: flex;
    justify-content: space-around;
}

.social-container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    align-content: center;
    align-items: center;
    width: 35%;
}

.connect {
    font-family: Roboto;
    font-weight: bold;
    font-size: 40px;
    margin-top: -20px;
    letter-spacing: 0.5px;
}

.contact-options {
    margin-top: -90px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 35px;
}

.options {
    width: 32px;
    height: 32px;
}

.info {
    display: flex;
    gap: 20px;
}

p {
    text-align: inline;
    margin-top: 5px;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 500;
    color: #D9D9D9;
}

.social-links {
    display: flex;
    justify-content: space-around;
    height: 48px;
    margin-top: -90px;
    margin-left: -40px;
}

.social-icon:hover {
    transform: translate(0, -7px); 
    cursor: pointer;
}

.download {
    font-size: 16px;
    background-color: #D9D9D9;
    color: #000500;
    border: none;
    border-radius: 12px;
    cursor: pointer; 
    padding: 8px 15px; 
    text-decoration: underline;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    background-color: #362417;
    border: none;
    width: 50%;
    height: 42px;
    color: #D9D9D9;
    align-content: center;
    text-align: center;
    align-items: center;
    font-family: Roboto;
    font-size: 15px;
    justify-content: center;
    box-sizing: border-box;
    margin-top: -15%;
    margin-left: 0px;
}

.download:hover {
    background-color: #462f1e;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.submit-container {
    display: flex;
    flex-direction: column;
    width: 55%;
}

.upper {
    display: flex;
    margin-top: 5%;
    width: 100%;
}

.box1 {
    width: 35%;
    height: 54px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 24px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 8% 0 25%;
    padding: 8px;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 16px;
    color: #6e6d6d;
    font-family: Roboto;
    font-size: 15px;
}

.box2 {
    width: 45%;
    height: 54px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 24px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 15% 0 0px;
    padding: 8px;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 16px;
    color: #6e6d6d;
    font-family: Roboto;
    font-size: 15px;
}

.name-box {
    background-color: #D9D9D9;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    outline: none;
}

.email-box {
    background-color: #D9D9D9;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    outline: none;
}

.message-box {
    background-color: #D9D9D9;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    text-align: top left;
    align-content: top left;
    align-items: top left;
    outline: none;
}

.box3 {
    width:60%;
    height: 240px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 25px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 6% 15% 0 25%;
    padding: 8px;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 15px;
    color: #6e6d6d;
    font-family: Roboto;
    font-size: 15px;
}

.btn {
    background-color: #362417;
    border: none;
    border-radius: 20px;
    width: 60%;
    height: 45px;
    color: #D9D9D9;
    align-content: center;
    text-align: center;
    align-items: center;
    font-family: Roboto;
    font-size: 15px;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 50px;
    margin-left: 25%;
}

.btn:hover {
    background-color: #462f1e;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

</style>