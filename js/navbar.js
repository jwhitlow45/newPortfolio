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

function clearPageContent() {
  main_content.innerHTML = "";
}

async function changePageContent(event) {
  clearPageContent();
  page_path = "./html/" + event.target.id + ".html";
  $(main_content).load(page_path);
}

function init() {
  clearPageContent();
  $(main_content).load("./html/home.html");
}