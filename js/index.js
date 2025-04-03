for (let i = 0; i < projects.length; i++) {
  let megacontainer = document.getElementById("projects-container");

  let container = document.createElement("div");
  container.classList.add("project");

  let elmName = document.createElement("p");
  let txtName = document.createTextNode(projects[i].name);

  let elmDesc = document.createElement("p");
  let txtDesc = document.createTextNode(projects[i].desc);

  let elmSource = document.createElement("a");
  let txtSource;
  if (projects[i].source) {
    txtSource = document.createTextNode("Click here to view the source code.");
  } else {
    txtSource = document.createTextNode(
      "Source code unavaliable for this project."
    );
    elmSource.classList.add("nocursor");
  }

  let elmTime = document.createElement("p");
  let txtTime = document.createTextNode(projects[i].time);

  let elmSpac = document.createElement("p");
  let txtSpac = document.createTextNode(
    i + 1 == projects.length
      ? "linespacerlinespacerlinespacerlinespacerlinespacerlinespacerlinespacerlinespacer"
      : /*"linespacerlinespacerlinespacerlinespacerlinespacerlinespacer"*/ ""
  );

  elmName.appendChild(txtName);
  container.appendChild(elmName);

  elmDesc.appendChild(txtDesc);
  container.appendChild(elmDesc);

  elmSource.appendChild(txtSource);
  container.appendChild(elmSource);
  if (projects[i].source) {
    elmSource.href = projects[i].source;
  }

  elmTime.appendChild(txtTime);
  container.appendChild(elmTime);

  elmSpac.appendChild(txtSpac);
  elmSpac.classList.add("linespacer");
  container.appendChild(elmSpac);

  megacontainer.appendChild(container);

  if (projects[i].link != false) {
    elmDesc.innerHTML = elmDesc.innerHTML.replace(
      "%link%",
      '<a href="' + projects[i].link.url + '">' + projects[i].link.name + "</a>"
    );
  }
}

function social(name) {
  if (urls[name] != "%comingsoon%") {
    window.open(urls[name]);
  } else {
    alert("Coming soon!");
  }
}

if (temp.enabled) {
  document.getElementById("temp_title").innerHTML = temp.title;
  document.getElementById("temp_message").innerHTML = temp.message;
} else {
  document.getElementById("temp-message").remove();
}
