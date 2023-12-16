// After the user clicks the password link
document.getElementById('passwordLink').addEventListener('click', function () {
    alert('The password is: TrustNo1');
});

// Checking the password input
function checkPassword() {
    let passwordInput = document.getElementById("password");
    let passwordValue = passwordInput.value;
    let introductionDiv = document.querySelector(".introductionDiv");

    // If the password is correct
    if (passwordValue === "TrustNo1") {
        // Hide the introduction text
        introductionDiv.style.visibility = "hidden";

        // Enable all the disabled radio inputs
        let rocketSpeed = document.getElementsByClassName("rocketSpeed");
        for (let i = 0; i < rocketSpeed.length; i++) {
            rocketSpeed[i].disabled = false;
        }

        let rocketTrajectory = document.getElementsByClassName("rocketTrajectory");
        for (let i = 0; i < rocketTrajectory.length; i++) {
            rocketTrajectory[i].disabled = false;
        }

        // Enable the launch button
        // Launch button should be enabled only if the user checked one of the options for both speed and trajectory
        function enableLaunchButton() {
            let rocketSpeed = document.querySelectorAll('.rocketSpeed');
            let rocketTrajectory = document.querySelectorAll('.rocketTrajectory')
            let launchBtn = document.getElementById('launchBtn');

            let speedCheck = Array.from(rocketSpeed).some(function (radioBtn) {
                return radioBtn.checked;
            });

            let trajectoryCheck = Array.from(rocketTrajectory).some(function (radioBtn) {
                return radioBtn.checked;
            });

            launchBtn.disabled = !(speedCheck && trajectoryCheck);
        }


        Array.from(rocketSpeed).forEach(function (radioBtn) {
            radioBtn.addEventListener('change', enableLaunchButton);
        });

        Array.from(rocketTrajectory).forEach(function (radioBtn) {
            radioBtn.addEventListener('change', enableLaunchButton);
        });

        // Disable the password and the OK button after validation
        passwordInput.disabled = true;
        okBtn.disabled = true;
    } else {
        window.alert("Incorrect password. Please try again.");
    }
}

// Move the rocket when the launch button is clicked
let launchBtn = document.getElementById('launchBtn');
launchBtn.addEventListener('click', function () {
    let rocket = document.querySelector('.rocket');
    let refreshBtn = document.getElementById("refreshBtn");

    // Speed options
    let slowSpeed = document.getElementById("slow");
    let normalSpeed = document.getElementById("normal");
    let fastSpeed = document.getElementById("fast");

    // Trajectory options
    let leftDirection = document.getElementById("left");
    let forwardDirection = document.getElementById("forward");
    let rightDirection = document.getElementById("right");

    // Move the rocket based on the selected speed level
    if (slowSpeed.checked) {
        rocket.style.transition = 'all 10s';
    } else if (normalSpeed.checked) {
        rocket.style.transition = 'all 5s';
    } else if (fastSpeed.checked) {
        rocket.style.transition = 'all 2.5s';
    }


    // Move the rocket based on the selected direction
    if (leftDirection.checked) {
        rocket.style.transform = 'rotate(-47deg) translate(-5vw, -110vh)';
    } else if (forwardDirection.checked) {
        rocket.style.transform = 'translate(0, -110vh)';
    } else if (rightDirection.checked) {
        rocket.style.transform = 'rotate(57deg) translate(5vw, -130vh)';
    }

    // Show the refresh button
    setTimeout(function () {
        refreshBtn.style.visibility = "visible";
    }, 3500);
});

// Refresh button actions
// Bring the racket to the starting position
refreshBtn.addEventListener('click', function () {
    let rocket = document.querySelector('.rocket');

    // Reset styles
    rocket.style.transition = '';
    rocket.style.transform = '';

    // Hide refresh button
    refreshBtn.style.visibility = "hidden";

    uncheckInputs();
});

// Uncheck the chosen radio inputs
function uncheckInputs() {
    let rocketSpeed = document.querySelectorAll(".rocketSpeed");
    let rocketTrajectory = document.querySelectorAll(".rocketTrajectory");

    for (let i = 0; i < rocketSpeed.length; i++) {
        rocketSpeed[i].checked = false;
    }

    for (let i = 0; i < rocketTrajectory.length; i++) {
        rocketTrajectory[i].checked = false;
    }
}