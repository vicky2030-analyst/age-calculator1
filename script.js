function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = randomColor();

        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function randomColor() {
    const colors = ["#ff0", "#0ff", "#f0f", "#0f0", "#f00", "#00f"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function calculateAge() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value; 
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please select DOB!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // next birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // countdown function
    function updateCountdown() {
        let now = new Date();
        let diff = nextBirthday - now;

        let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerHTML =
            `🎂 Next Birthday in: ${daysLeft}d ${hours}h ${minutes}m ${seconds}s`;
    }

    result.innerHTML = `
    <div class="user-info">
        <h3>👤 ${name ? name : "User"}</h3>
        <p>⚧ Gender: ${gender ? gender : "Not Selected"}</p>
    </div>

    <div class="age-card-container">

        <div class="age-card years">
            <h3>Years</h3>
            <p>${years}</p>
        </div>

        <div class="age-card months">
            <h3>Months</h3>
            <p>${months}</p>
        </div>

        <div class="age-card days">
            <h3>Days</h3>
            <p>${days}</p>
        </div>

    </div>

    <div id="countdown"></div>
    <div id="finalText" class="final-msg"></div>
`;
startConfetti();
startHearts();
playSound();

typeMessage("✨ Aapka din shubh ho! Have a wonderful day ✨", "finalText", 60);
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function startConfetti() {
    for (let i = 0; i < 80; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background = randomColor();
        confetti.style.animation = "fall 3s linear";

        setTimeout(() => confetti.remove(), 3000);
    }
}

function randomColor() {
    const colors = ["#ff0", "#0ff", "#f0f", "#0f0", "#f00", "#00f"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

function typeMessage(text, id, speed = 50) {
    let i = 0;
    let el = document.getElementById(id);
    el.innerHTML = "";

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

function playSound() {
    let audio = new Audio("https://www.soundjay.com/human/sounds/applause-8.mp3");
    audio.play();
}