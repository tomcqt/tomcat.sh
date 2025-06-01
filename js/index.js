// Awesome website data handler

// Add projects
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

// add the social media links
let scontainer = document.getElementById("socials-container");
contacts.forEach((i, j, k) => {
  let element = document.createElement("span");

  element.style.color = i.color;
  element.onclick = function () {
    social(i.link);
  };

  let text = document.createTextNode(i.name);

  element.appendChild(text);
  scontainer.appendChild(element);

  if (j + 1 != k.length) {
    let dot = document.createTextNode(" • ");
    scontainer.appendChild(dot);
  }
});

// Make the social media links work
function social(name) {
  if (name != "%comingsoon%") {
    window.open(name);
  } else {
    alert("Coming soon!");
  }
}

// Add temporary message if enabled
if (temp.enabled) {
  document.getElementById("temp_title").innerHTML = temp.title;
  document.getElementById("temp_message").innerHTML = temp.message;
} else {
  document.getElementById("temp-message").remove();
}

// Add amount of projects to the header
let numbers = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "one hundred",
  dash: " ",
  above100: "more than one hundred",
};

function amountOfProjects() {
  let amount = projects.length;
  // let amount = Math.floor(Math.random() * 125); // for testing purposes
  let text = "";

  if (amount > 100) {
    text = numbers.above100;
  } else if (amount > 20) {
    if (amount % 10 == 0) {
      text = numbers[Math.floor(amount / 10) * 10];
    } else {
      text =
        numbers[Math.floor(amount / 10) * 10] +
        numbers.dash +
        numbers[amount % 10];
    }
  } else {
    text = numbers[amount];
  }

  return text;
}

document.getElementById("projects-header").innerText = document
  .getElementById("projects-header")
  .innerText.replace("amount", amountOfProjects());

// replace last update date based on data from data/misc.js
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let endings = [
  "st", // 1st
  "nd", // 2nd
  "rd", // 3rd
  "th", // 4th
  "th", // 5th
  "th", // 6th
  "th", // 7th
  "th", // 8th
  "th", // 9th
  "th", // 10th
  "th", // 11th
  "th", // 12th
  "th", // 13th
  "th", // 14th
  "th", // 15th
  "th", // 16th
  "th", // 17th
  "th", // 18th
  "th", // 19th
  "th", // 20th
  "st", // 21st
  "nd", // 22nd
  "rd", // 23rd
  "th", // 24th
  "th", // 25th
  "th", // 26th
  "th", // 27th
  "th", // 28th
  "th", // 29th
  "th", // 30th
  "st", // 31st
];

const enable_location = false;

function generateLastUpdated() {
  let time = misc.lastUpdated;
  let output = "";

  // check if user is in usa based on ip location
  if ("geolocation" in navigator && enable_location) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Simple check for USA coordinates (not very accurate but who cares)
        if (
          lat >= 24.396308 &&
          lat <= 49.384358 &&
          lon >= -125.0 &&
          lon <= -66.93457
        ) {
          output =
            months[time.month - 1] +
            " " +
            time.day.toString() +
            endings[time.day - 1] +
            ", " +
            (2000 + time.year).toString();
        } else {
          output =
            time.day.toString() +
            endings[time.day - 1] +
            " " +
            months[time.month - 1] +
            ", " +
            (2000 + time.year).toString();
        }

        document.getElementById("footer").innerText = document
          .getElementById("footer")
          .innerText.replace("DateHere", output);
      },
      () => {
        document.getElementById("footer").innerText = document
          .getElementById("footer")
          .innerText.replace(
            "DateHere",
            time.day.toString() +
              endings[time.day - 1] +
              " " +
              months[time.month - 1] +
              ", " +
              (2000 + time.year).toString()
          );
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
    return (
      time.day.toString() +
      endings[time.day] +
      " " +
      months[time.month] +
      ", " +
      (2000 + time.year).toString()
    );
  }
}

generateLastUpdated();
