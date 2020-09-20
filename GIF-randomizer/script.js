let APIKEY = "XGFI395wJ4btleHm5h6PlxhetZ9hOIrF";
const button = document.getElementById("button");
//document.addEventListener("DOMContentLoaded", () => {

function click() {
  button.addEventListener("click", function () {
    //alert("hello");
    //validation code to see State field is mandatory.
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((content) => {
        //deta,meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data["embed_url"];
        img.alt = content.data["title"];
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
