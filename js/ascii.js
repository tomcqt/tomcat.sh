const outEl = document.getElementById("out");
const codeEl = document.getElementById("code");
const delay = 50;

// The full code as string (escaped)
let codeString = `for(d=\`K3M--###K#KA/FbXBM?VME578HI(8I\\\`/\\\\I<URLI?FbV0XGB60bNbRbZG^PY=PVX:^M@ // click code to start
8NX=:PNRY8bNbM9>P*#QM\\\`##\`.replace(/\\n/g,''),_=0;_<534;){for(k=0;((d[_/6|0]. // idea from a1k0n.net
charCodeAt()-35)>>(_++%6))&1;k++);process.stdout.write(" _/\\\\\\n,\`)('<-"[k])} // copy code (node.js)`;

// do not edit (special string to format colors)
let colorString = `p  owcg                              P gP g                                 R                      g                     P g  cb      oP   pGg oGwcoGwco  Gr p  owcoGygwcwcococ R                      b          c  o gc gwc  ogycoGwc oGw      cw     cb    og   P   g       ywyorGC                     `;

const charset = " _/\\\n,`)('<-";

// We'll treat the encoded data (d) as the same as in the code string for highlighting
const d = `K3M--###K#KA/FbXBM?VME578HI(8I\`/\\I<URLI?FbV0XGB60bNbRbZG^PY=PVX:^M@8NX=:PNRY8bNbM9>P*#QM\`#`; // byte highlights are on this string

const TOTAL_BITS = 534; // original code outputs 641 chars
let bitIndex = 0; // corresponds to "_"

let output = "";

_ = 0;
o = "";

// write all letters as spans
let currentColor = "";
const colors = {
  p: "#ca9ee6",
  P: "#f4b8e4",
  r: "#e78284",
  o: "#ef9f76",
  y: "#e5c890",
  g: "#a6d189",
  c: "#99d1db",
  b: "#8caaee",
  w: "#c6d0f5",
  G: "#838ba7",
  C: "#838ba7", // for the copy button
  R: "#838ba7", // for the comments
};
codeString.split("").forEach((i, j) => {
  if (colorString[j] != " ") {
    currentColor = colorString[j];
  }
  if (i != "\n") {
    const span = document.createElement("span");
    span.textContent = i;
    span.style.color = colors[currentColor];
    if (currentColor == "C") {
      span.onclick = copy;
    } else if (currentColor != "R") {
      span.onclick = signature;
    }
    if (currentColor == "R") {
      span.style.cursor = "default";
    }
    codeEl.appendChild(span);
  } else {
    const br = document.createElement("br");
    codeEl.appendChild(br);
  }
});

async function copy() {
  try {
    const textToCopy = codeString
      .replace("// click code to start", "")
      .replace("// idea from a1k0n.net", "// copied from tomcat.sh")
      .replace("// copy code (node.js)", "// made with <3 -- 228 B");
    await navigator.clipboard.writeText(textToCopy);
    alert("code copied!\nput it in a file and do node [filename] to run.");
  } catch (err) {
    alert("failed to copy text. check console?");
    console.log(err);
  }
}

function signature() {
  _ = 0;
  output = "";
  codeEl.onclick = null;
  if (outEl.innerHTML != "") {
    const interval = setInterval(() => {
      if (outEl.innerText.length > 1) {
        outEl.innerText = outEl.innerText.split("").slice(0, -2).join("");
        outEl.innerHTML += '<span style="background:#cad3f5">&nbsp;</span>';
      } else {
        outEl.innerHTML = "";
        clearInterval(interval);
        codeEl.onclick = signature;
      }
    }, delay);
    return;
  }
  outEl.style.display = "block";
  let dataOffset = 7;
  const interval = setInterval(() => {
    // compute k (number of consecutive 1-bits)
    let k = 0;
    while (true) {
      const idx = Math.floor(_ / 6);
      if (idx >= d.length) {
        console.log("broke!");
        console.log(_);
        break;
      }
      const bit = ((d.charCodeAt(idx) - 35) >> _ % 6) & 1;
      _++;
      if (bit) k++;
      else break;
    }

    // Append output char
    const ch = charset[k] || "?";
    output += ch;
    outEl.textContent = output;

    outEl.innerHTML += '<span style="background:#cad3f5">&nbsp;</span>';

    const spans = Array.from(codeEl.querySelectorAll("span"));

    const charsOffset = 254;

    spans.forEach((span) => {
      span.className = ""; // remove all classes
    });

    if (Math.floor(_ / 6) + dataOffset - 7 > 68) {
      dataOffset = dataOffset + 23;
    }

    spans[Math.floor(_ / 6) + dataOffset].classList.add("bytehl");
    if (spans[Math.floor(_ / 6) + dataOffset].innerText == "\\") {
      spans[Math.floor(_ / 6) + dataOffset + 1].classList.add("bytehl");
      dataOffset++;
    }

    if (Math.floor(_ / 6) + dataOffset - 7 > 68) {
      dataOffset = dataOffset - 23;
    }

    let charsOffset2 = 0;
    if (k >= 4) {
      charsOffset2 = 1;
    }
    if (k >= 5) {
      charsOffset2 = 2;
    }
    spans[k + charsOffset + charsOffset2].classList.add("charhl");
    if (spans[k + charsOffset + charsOffset2].innerText == "\\") {
      spans[k + charsOffset + charsOffset2 + 1].classList.add("charhl");
    }

    window.scrollTo(0, document.body.scrollHeight);

    // stop when done
    if (_ >= TOTAL_BITS) {
      clearInterval(interval);
      setTimeout(() => {
        spans.forEach((span) => {
          span.className = ""; // remove all classes
        });
        codeEl.onclick = signature;
        outEl.getElementsByTagName("span")[0].classList.add("blink");
      }, delay);
    }
  }, delay);
}
