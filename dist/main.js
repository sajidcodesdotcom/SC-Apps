const time=document.querySelector(".notify__time");setInterval((()=>{let e=(new Date).toLocaleTimeString();time.textContent=e}),1e3);const allApps=document.querySelectorAll(".app_interface"),allIcons=document.querySelectorAll(".apps>*");allIcons.forEach((e=>{e.addEventListener("click",(e=>{allApps.forEach(((t,a)=>{t.classList.remove("active"),e.target.classList.contains(t.classList[1])&&t.classList.add("active"),""==e.target.classList.value&&document.querySelector(".app_interface.recipe_app").classList.add("active")}))}))}));const recipeForm=document.querySelector(".recipe_form"),recipeInput=document.querySelector(".recipe_input"),recipeWrapper=document.querySelector(".recipe_grid"),App_ID="2a23a5be",App_Key="a83d4bf12be8eba5f78cf153910733d1";let APP_URL=`https://api.edamam.com/search?q=chicken&app_id=2a23a5be&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`;const fetchRecipies=async e=>{APP_URL=`https://api.edamam.com/search?q=${e=e||"cake"}&app_id=2a23a5be&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`;try{let e=await fetch(APP_URL),t=(await e.json()).hits;return console.log(t),t}catch(e){console.log("error")}};recipeInput.addEventListener("keypress",(()=>{renderRecipe()})),recipeForm.addEventListener("submit",(e=>{e.preventDefault()}));const renderRecipe=async()=>{const e=await fetchRecipies(recipeInput.value);let t="";e.forEach((e=>{const{image:a,label:n,ingredientLines:o}=e.recipe;console.log(n);let r="";o.forEach((e=>{r+=`<li>${e}</li>`})),t+=`\n        <div class="recipe_flex">\n    <img src=${a} alt="image">\n    <div class="recipe_info">\n    <h3>${n}</h3>\n    <ol>${r}</ol>\n    </div>\n        </div>\n    `})),recipeWrapper.innerHTML=t};window.onload=renderRecipe();const todoList=document.querySelector(".todo_list"),todoForm=document.querySelector(".todo_app_form"),todoinput=document.querySelector(".todo_app_input");function handleTodoSubmit(e){e.preventDefault();const t=[];let a=todoinput.value;t.push(a),todoinput.value&&todoMarkup(t),todoinput.value=""}function todoMarkup(e){e.map((e=>{let t=document.createElement("li");t.classList.add("todo_list_item");let a=document.createElement("input");a.classList.add("todo_list_checkbox"),a.type="checkbox";let n=document.createElement("p");n.classList.add("todo_list_text"),n.textContent=e;let o=document.createElement("i");o.classList.add("fas","fa-trash-alt"),o.onclick=e=>deleteListItem(e),a.onclick=()=>a.checked?n.style.color="hsl(225, 14%, 43%)":n.style.color="white",t.append(a),t.append(n),t.append(o),todoList.append(t)}))}function deleteListItem(e){e.target.parentElement.remove()}todoForm.addEventListener("submit",handleTodoSubmit);const weatherMain=document.querySelector(".weather_main_content"),weatherStats=document.querySelector(".weather_stats"),weatherInput=document.querySelector(".weather_main_form input"),weatherForm=document.querySelector(".weather_main_form"),handleWeatherSubmit=async e=>{e&&e.preventDefault();let t="paris";weatherInput.value&&(t=weatherInput.value);const a=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=1c378d9838833e61cc4974ccc7b04fc5`;try{const e=await fetch(a),t=await e.json(),{name:n,main:o,weather:r,clouds:c,sys:i,wind:s}=t,l=`<div class="weather_main_logo">\n                <img class="weather_main_icon" src="http://openweathermap.org/img/wn/${r[0].icon}@2x.png" alt="" />\n                <h2 class="weather_main_main">${r[0].main}</h2>\n                </div>\n                <h2 class="weather_main_name">${n} <small><sup>${i.country}</sup</small></h2>\n                <p class="weather_main_description">${r[0].description}</p>`;let p=o.temp-273.15;const d=`<div class="weather_stats_temp">Temperature: ${Math.round(p)}C<sup>o</sup></div>\n                <div class="weather_stats_pressure">Pressure: ${o.pressure}hPa</div>\n                <div class="weather_stats_humidity">Humidity: ${o.humidity}%</div>\n                <div class="weather_stats_wind">Wind Speed: ${s.speed}m/s</div>`;weatherMain.innerHTML=l,weatherStats.innerHTML=d}catch(e){weatherMain.textContent="please Enter correct City Name"}weatherInput.value="",weatherInput.focus()};window.onload=handleWeatherSubmit(),weatherForm.addEventListener("submit",handleWeatherSubmit);