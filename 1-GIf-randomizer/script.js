let APIKEY = "XGFI395wJ4btleHm5h6PlxhetZ9hOIrF";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("button").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data.images.downsized["url"];
        img.alt = content.data.images.downsized["title"];
        fc.textContent = content.data["title"];
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
