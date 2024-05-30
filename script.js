const closeIcon = document.getElementById("close-icon");
closeIcon.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("window").style.display = "none";
});

const resess = document.getElementById("resess");
resess.addEventListener("click", () => {
    document.getElementById("window").style.display = "flex";
    document.getElementById("popup-content").innerHTML = `
    <h2>Undergraduate Research Assistant</h2>
    <h4>ReSeSS Research Lab - UBC Department of Electrical and Computer Engineering</h4>
    <h5>Jan 2024 - April 2024</h5>
    <br>
    <p class="indent">During my time with ReSeSS I was working on a server mock tool; a project extension to the mobile application coverage research stream at the ReSeSS Research Lab. This work was supervised by Dr. Julia Rubin, an associate professor at the University of British Columbia. Additional work includes collaboration with other members of the lab, including bouts of replication, verification, and validation on research findings.</p>
    `
});

const tutor = document.getElementById("tutor");
tutor.addEventListener("click", () =>{
    document.getElementById("window").style.display = "flex";
    document.getElementById("popup-content").innerHTML = `
    <h2>Private Tutor</h2>
    <h5>Oct 2021 - Present</h5>
    <br>
    <p class="indent">My tutoring philosophy has always been to tailor my teaching towards the student's needs and learning styles. My services include a complementary development plan, custom lesson plans, extra materials, and a summary after every session. I have accumulated 450+ hours tutoring youth in various academic subjects. Currently, my expertise is in Mathematics, and Physics, however I have also tutored Chemistry and English in the past. I am also open to tutoring University/higher education level Mathematics, Physics, Statistics, and many more. Please contact me through my socials for more information and/or rates.</p>
    `
});

const dayCamp = document.getElementById("day-camp");
dayCamp.addEventListener("click", () =>{
    document.getElementById("window").style.display = "flex";
    document.getElementById("popup-content").innerHTML = `
    <h2>Day Camp Leader</h2>
    <h4>False Creek Community Center</h4>
    <h5>Jul 2022 - Aug 2022</h5>
    <br>
    <p class="indent">I was a day camp leader at the false creek community center in the summer of 2022. I was fortunate enough to work with the youth in my community. As a day camp leader, my responsibilities included developing and implementing engaging daily activities and programs to promote physical, emotional, and social development. There was constant communication with my coworkers, supervisor, and the parents of the youth, which was crucial in creating/fostering a positive environment for the camp to be successful. From this position, I was also able to obtain First Aid & CPR/AED Level C certification, and Kayak Instructor certification.</p>
    `
});

// document.getElementById("window").style.display = "flex";

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("window").style.display === "flex"){
        document.getElementById("window").style.display = "none";
    }
});

const nolinks = document.querySelectorAll(".disabled-link");
nolinks.forEach(link => {
    link.addEventListener("click", () => {
        window.alert("My apologies, this section is currently under construction, please contact me for more details.");
    });
});