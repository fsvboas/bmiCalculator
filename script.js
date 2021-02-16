const btn = document.querySelector(".btn")

function bmi() {
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector(".result");

    document.querySelector(".result").classList.add("active");

    function Calculation() {
        const bmiCalculation = (weight / ((height / 100) * (height / 100))).toFixed(2);

        let classification = "";

        if (bmiCalculation < 18.5) {
            classification = "Underweight";
            document.querySelector(".result").style.backgroundColor = "#f9a825";
        } else if (bmiCalculation < 25) {
            classification = "Normal"
            document.querySelector(".result").style.backgroundColor = "#018786";
        } else if (bmiCalculation < 30) {
            classification = "Overweight"
            document.querySelector(".result").style.backgroundColor = "#f9a825";
        } else {
            classification = "Obese"
            document.querySelector(".result").style.backgroundColor = "#b00020";
        }

        result.textContent = `Your BMI is ${bmiCalculation} and you is in the ${classification} category.`;
    }

    if (height === "" || weight === "") {
        alert("Please fill out all fields")
    } else {
        Calculation();
        document.querySelector(".restart").classList.add("active");
    }
}

btn.addEventListener("click", bmi);

const reload = document.querySelector(".restart");
reload.addEventListener("click", restartApp);

function restartApp() {
    document.querySelector(".result").classList.remove("active");
    document.querySelector(".cm").value = "";
    document.querySelector(".kg").value = "";
    document.querySelector(".restart").classList.remove("active");
}

/* DARK MODE */
let darkMode = localStorage.getItem("darkMode");
const changeTheme = document.querySelector(".changeTheme");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}

changeTheme.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});