//global elements
const main_content = document.getElementById("main-content");

// navbar buttons
const navbar_home = document.getElementById("home");
const navbar_education = document.getElementById("education");
const navbar_experience = document.getElementById("experience");
const navbar_projects = document.getElementById("projects");
const navbar_references = document.getElementById("references");

// Event listeners
navbar_home.addEventListener("click", changePageContent);
navbar_education.addEventListener("click", changePageContent);
navbar_experience.addEventListener("click", changePageContent);
navbar_projects.addEventListener("click", changePageContent);
navbar_references.addEventListener("click", changePageContent);

//cards
card_container =document.getElementById("card-container");

function clearPageContent() {
  card_container.innerHTML = "";
}

async function changePageContent(event) {
  clearPageContent();
  content_path = "./content/" + event.target.id + ".json";
  createCards(content_path);
}

function init() {
  clearPageContent();
  createCards("./content/home.json")
}

function createCards(path) {
  fetch(path)
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    let html_string = "";
    for (let i = 0; i < jsondata["cards"].length; i++) {
      let card = jsondata["cards"][i];
      let content = card["content"];
      let content_divs = ""
      for (let j = 0; j < content.length; j++) {
        content_divs += `<li class="card-bullet">${content[j]}</li>`
      }
      let link_content = "";
      if (card["link"] != undefined) {
        link_content = `<div class="card-link-container"><a href="${card["link"]}" target="_blank"><div class="card-link">Source Code</div></a></div>`;
      }
      let html_content = `<div class="card">
                      <div class="card-header">
                        <img class="card-image" src="${card["img_path"]}">
                        <div class="card-header-text">
                          <div class="card-title">${card["title"]}</div>
                          <div class="card-subtitle">${card["subtitle"]}</div>
                          <div class="card-date">${card["date"]}</div>
                        </div>
                      </div>
                      <div class="card-content">${content_divs}</div>
                      ${link_content}
                    </div>`;
      html_string += html_content; 
    }
    html_string = $.parseHTML(html_string);
    $(card_container).append(html_string);
  });
}