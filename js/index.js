var projects = [
  {
    name: "adyOS",
    desc: "A full GNU/Linux-inspired pseudo-operating system written in JavaScript. You can view the website at %link%.",
    link: {
      name: "ady.best",
      url: "https://ady.best/",
    },
    source: "https://git.ady.best/",
    time: "Made During: January 2025",
  },
  {
    name: "Tanuki",
    desc: "A custom social media service that I made over Summer 2024. This project is currently down.",
    link: false,
    source: "https://git.tomcat.sh/tanukitweaks/",
    time: "Made During: Summer 2024",
  },
  {
    name: "Telatro",
    desc: "A port of Balatro to the web. This project is being hosted at %link%.",
    link: {
      name: "telatro.tomcat.sh",
      url: "https://telatro.tomcat.sh/",
    },
    source: "https://git.tomcat.sh/Telatro/",
    time: "Made during: March 2025",
  },
  {
    name: "tomcat.sh",
    desc: "The website that you are currently on!",
    link: false,
    source: "https://git.tomcat.sh/tomcat.sh",
    time: "Made during: March 2024 through Today",
  },
  {
    name: "tomcat's braille art workspace",
    desc: "A program that I made to make ASCII art using the Braille characters. This project is currently being hosted at %link%.",
    link: {
      name: "tomcat.sh/braille",
      url: "https://www.tomcat.sh/braille",
    },
    source: false,
    time: "Made During: December 2023",
  },
];

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
      : "linespacerlinespacerlinespacerlinespacerlinespacerlinespacer"
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

let urls = {
  email: "mailto://hi@tomcat.sh",
  github: "https://git.tomcat.sh/",
  discord: "https://discord.com/users/1059605055411601429",
  twitter: "https://twitter.com/txmcqt",
  bluesky: "https://bsky.app/profile/tomcat.sh",
  reddit: "https://reddit.com/u/tomcatonrblx",
  youtube: "https://youtube.com/@tomcat.c",
  twitch: "https://twitch.tv/tomcatsh",
  steam: "https://steamcommunity.com/id/tomcatsh/",
};

function social(name) {
  if (urls[name] != "%comingsoon%") {
    window.open(urls[name]);
  } else {
    alert("Coming soon!");
  }
}
