{
    const toggleTheme = document.getElementById("toggle-theme");
    const toggleText = document.getElementById("toggle-text");
    const toggleColors = document.getElementById("toggle-colors");
    const toggleIcon = document.getElementById("toggle-icon")

    const rootStyles = document.documentElement.style;

    const flagsElement = document.getElementById("flags")

    const textsToChange = document.querySelectorAll("[data-section]");

    const changeLenguage = async(lenguage) =>{
        const requestJson = await fetch(`./languages/${lenguage}.json`);
        const texts = await requestJson.json();

        for(const textToChange of textsToChange){
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            textToChange.innerHTML=texts[section][value]
        }
    }

    flagsElement.addEventListener('click', (e)=>{
        changeLenguage(e.target.parentElement.dataset.lenguage);
    })

    toggleTheme.addEventListener('click', ()=>{
        document.body.classList.toggle("dark");
        if(toggleIcon.src.includes("moon.svg")){
            toggleIcon.src = "assets/icons/sun.svg";
            toggleText.textContent = "Ligth Mode";
        }else{
            toggleIcon.src = "assets/icons/moon.svg";
            toggleText.textContent = "Dark Mode";
        }
    })

    toggleColors.addEventListener("click", (e)=>{
        rootStyles.setProperty("--primary-color", e.target.dataset.color)
    })
}