// Awesome website data handler

// Add projects (modern card layout)
const projContainer = document.getElementById("projects-container");
projects.forEach((p, idx) => {
  const card = document.createElement("article");
  card.className = "project-card";
  // stagger reveal timing per card
  card.style.transitionDelay = `${idx * 80}ms`;

  const title = document.createElement("h3");
  title.textContent = p.name;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.innerHTML = p.desc;
  if (p.link) {
    desc.innerHTML = desc.innerHTML.replace(
      "%link%",
      '<a href="' + p.link.url + '">' + p.link.name + "</a>"
    );
  }
  card.appendChild(desc);

  const meta = document.createElement("div");
  meta.style.marginTop = "8px";
  meta.style.display = "flex";
  meta.style.justifyContent = "space-between";
  meta.style.alignItems = "center";

  const when = document.createElement("small");
  when.style.color = "var(--muted)";
  when.textContent = p.time || "";
  meta.appendChild(when);

  const src = document.createElement(p.source ? "a" : "span");
  src.textContent = p.source ? "Source Code" : "Source Disabled";
  if (p.source) src.href = p.source;
  src.style.fontSize = "smaller";
  src.style.color = p.source ? "var(--accent1)" : "var(--disabled)";
  src.style.textAlign = "right";
  if (!p.source) src.classList.add("nocursor");
  meta.appendChild(src);

  card.appendChild(meta);

  projContainer.appendChild(card);
});

// add the social media links
let scontainer = document.getElementById("socials-container");

// helper: convert hex (#rrggbb or #rgb) to rgba string
function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(255,255,255,${alpha})`;
  if (hex.startsWith("rgba")) return hex; // already rgba
  let h = hex.replace("#", "").trim();
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

contacts.forEach((c, idx) => {
  let el = document.createElement("button");
  el.className = "social-pill";
  el.textContent = c.name;
  // use contact color subtly
  try {
    el.style.color = c.color || "var(--muted)";
    el.style.borderColor = hexToRgba(c.color || "#ffffff", 0.1);
    // set a CSS variable for hover accent (used by CSS to color the hover gradient)
    el.style.setProperty(
      "--social-accent",
      hexToRgba(c.color || "#7a48ff", 0.14)
    );
  } catch (e) {
    el.style.borderColor = "rgba(255,255,255,0.03)";
  }
  el.onclick = () => social(c.link);
  // small stagger for socials
  el.style.transitionDelay = `${idx * 40}ms`;
  scontainer.appendChild(el);
});

// IntersectionObserver to trigger reveal animations when elements enter viewport
function setupRevealObserver() {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  // observe project cards, cards (sidebar), and social pills
  document
    .querySelectorAll(".project-card, .card, .social-pill")
    .forEach((el) => {
      obs.observe(el);
    });
}

// run after DOM is ready; scripts are loaded at end of body so safe to run now
setupRevealObserver();

// after reveal is done, remove the transition-delay on everything
document.addEventListener("transitionend", () => {
  document
    .querySelectorAll(".project-card, .card, .social-pill")
    .forEach((el) => {
      el.style.transitionDelay = "0ms";
    });
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
  if (temp.poll.enabled) {
    document.getElementById("temp_yes").innerHTML = temp.poll.text.yes;
    document.getElementById("temp_no").innerHTML = temp.poll.text.no;
  } else {
    document.getElementById("temp_vote").remove();
  }
  // add webhook code
  document.getElementById("temp_yes").onclick = () => {
    fetch(temp.poll.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "user pressed yes",
        username: "tomcat.sh poll",
      }),
    });
  };
  document.getElementById("temp_no").onclick = () => {
    fetch(temp.poll.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "user pressed no",
        username: "tomcat.sh poll",
      }),
    });
  };
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
}

generateLastUpdated();
