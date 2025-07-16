<template>
    <div class="home-page">
        <nav class="navbar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About Me</router-link>
            <router-link to="/achievements" class="nav-link">Achievements</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <a href="https://drive.google.com/drive/u/0/folders/1jZhwZOI6_edm3CxuNT2fW4UwVISX00Xz" class="download-btn">Download CV</a>
        

        <div class="body">
            <div class="port">
                <h3 class="title">PORTFOLIO</h3>
            </div>
        
            <div class="content">
                <div class="intro">
                    <img src="@\assets\homeimg.png" class="profile-pic"/>
                </div>
            
            <div class="details">
                <p class="greeting">Hey!</p>
                <h1 class="name">It's Sanjana Gurung</h1>
                <h2 class="fd">Frontend Developer</h2>
                <p class="description">
                    A dedicated and creative front-end developer with a passion for crafting engaging and user-friendly web experiences. Let's connect and explore how we can collaborate to bring your vision to life.
                </p>
                <router-link to="/about" class="contact-link">
                    <img src="@\assets\arrowhp.png" class="arrow">
                </router-link>
            </div>
        </div>

        <div class="social-links">
            <a href="https://www.instagram.com/sanjanagurung31?igsh=bW5ndWF5MWJ1YnZo&utm_source=qr"><img src="@\assets\ig.png" class="social-icon"></a>
            <a href="https://www.linkedin.com/in/sanjana-gurung-02b137263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="@\assets\li.png" class="social-icon"></a>
            <a href="https://www.facebook.com/leeya.gurung.9?mibextid=LQQJ4d"><img src="@\assets\fb.png" class="social-icon"></a>
            <a href="https://github.com/settings/profile"><img src="@\assets\gh.png" class="social-icon"></a>
        </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
* {
    background-color: rgba(146, 129, 122, 1);
    box-sizing: border-box;
    scroll-behavior: smooth;
}

.home-page {
    text-align: center;
    padding: 20px;
}

.navbar {
    display: flex;
    justify-content: right;
    gap: 20px;
    margin-top: -4px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
}

.nav-link {
    text-decoration: none;
    color: #000500;
    font-style: roboto;
}

.nav-link.router-link-active {
    color: rgba(217, 217, 217, 1);
    background-color: #362417;
    padding: 3px 8px;
    border-radius: 8px;
    margin-top: -4px;
}

.nav-link.router-link-active:hover {
    background-color: #453223;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-around;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.profile-pic {
    width: 480px;
    height: 470px;
    margin-top: -15px;
}

.title {
    font-size: 30px;
    margin: 10px 0;
}

.details {
    text-align: center;
    align-content: center;
    align-items: center;
    width: 40%;
}

.greeting {
    font-size: 30px;
    color: #fcebeb;
    font-family: Roboto;
    font-weight: 500;
}

.name {
    font-size: 65px;
    color: #453223;
    font-weight: bold;
    font-family: Roboto;
    margin-top: -15px;
}

.fd {
    color: #453223;
    font-size: 42px;
    font-family: Roboto;
    font-weight: 500;
    margin-top: -20px;
}

.description {
    margin: 0px;
    font-size: 16px;
    text-align: center;
    align-content: center;
    font-size: 20px;
    color: #fcebeb;
    font-family: Roboto;
    line-height: 2rem;
}

.contact-link {
    display: inline-block;
    margin: 20px 0;
    font-size: 50px;
    width: 10px;
}

.arrowhp {
    width: 40px;
}

.arrow {
    display: inline-block;
    padding: 10px;
    color: #fff;
    border-radius: 50%;
    width: 60px;
}

.download-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #D9D9D9;
    color: #000500;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    position: absolute;
    top: 22px; 
    left: 50px; 
    padding: 8px 15px; 
    width: 128px;
    height: 32px;
    text-decoration: underline;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    font-style: roboto;
    font-weight: bold;
}

.download-btn:hover {
    background-color: rgb(244, 236, 236);
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
}

.social-links {
    margin-top: 5px;
    align-items: left;
    text-align: left;
    margin-left: 78px;
}

.social-icon {
    margin: 0 10px 0 10px;
    text-decoration: none;
    color: #362417;
    width: 45px;
    transition: 0.6s;
}

.social-icon:hover {
    transform: translate(0, -7px); 
    cursor: pointer;
}

@media (max-width: 900px){
    * {
        padding: 0;
    }
    .content {
        display: flex;
        justify-content: space-evenly;
    }
    .profile-pic {
        width: 300px;
        height: 310px;
    }
    .intro {
        display: flex;
        justify-content: space-around;
    }
    .social-links {
        margin-left: 0px;
        display: flex;
        justify-content: left;
        margin-bottom: 0;
        margin-top: -20px;
    }
    .details .greeting {
    font-size: 24px;

    }
    .details h1 {
    font-size: 40px;
    }
    .details h2 {
    font-size: 32px;
    }
    .details .description { 
    font-size: 15px;
    }
    .title {
        font-size: 25px;
    }
    .details {
        width: 50%;
    }
}   



</style>

