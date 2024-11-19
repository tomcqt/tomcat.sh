var projects = [
  {
    "name": "Tanuki",
    "desc": "A custom social media service that I made over Summer 2024. This project is currently down.",
    "time": "Made During: Summer 2024"
  },
  {
    "name": "tomcat's braille art workspace",
    "desc": "A program that I made to make ASCII art using the Braille characters. This project is currently being hosted at tomcat.sh/braille.",
    "time": "Made During: December 2023"
  }
];

for (let i = 0; i < projects.length; i++) {
  let megacontainer = document.getElementById("projects-container");

  let container = document.createElement("div");
  container.classList.add("project");
  
  let elmName = document.createElement("p");
  let txtName = document.createTextNode(projects[i].name);

  let elmDesc = document.createElement("p");
  let txtDesc = document.createTextNode(projects[i].desc);

  let elmTime = document.createElement("p");
  let txtTime = document.createTextNode(projects[i].time);

  let elmSpac = document.createElement("p");
  let txtSpac = document.createTextNode("linespacerlinespacerlinespacerlinespacerlinespacerlinespacer");

  elmName.appendChild(txtName);
  container.appendChild(elmName);
  elmDesc.appendChild(txtDesc);
  container.appendChild(elmDesc);
  elmTime.appendChild(txtTime);
  container.appendChild(elmTime);
  elmSpac.appendChild(txtSpac);
  elmSpac.classList.add("linespacer");
  container.appendChild(elmSpac);

  megacontainer.appendChild(container);
}
