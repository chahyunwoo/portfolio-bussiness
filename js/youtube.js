const youtube = document.querySelector("#youtube");
const headline = youtube.querySelector(".headlineVideo");
const videos = youtube.querySelector(".videos");

const key = `AIzaSyAdo3TEXjvTi-2C_p9Z8zgbQD3uCz_JnAs`;
const playlistIdTitle = `PLdHIHMgBSgjLvkAKDUouMhPeTNpc8JBVi`;
const playlistIdCont = `PLdHIHMgBSgjJ3713BTQGAlowsgrlb7T5x`;
const urlTitle = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistIdTitle}&maxResults=1`;
const urlCont = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistIdCont}&maxResults=6`;

fetch(urlTitle)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let item = json.items[0];
    let result = "";

    let title = item.snippet.title;

    let con = item.snippet.description;

    let date = item.snippet.publishedAt;

    date = date.split("T")[0];

    result = `
    <h1>HEADLINE NEWS</h1>
    <article>
      <a href="${item.snippet.resourceId.videoId}" class="pic">
        <img src="${item.snippet.thumbnails.standard.url}">
      </a>
      <div class="con">
        <h2>${title}</h2>
        <p>${con}</p>
        <span>${date}</span>
      </div>
    </article>
    `;

    headline.innerHTML = result;
  });

fetch(urlCont)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;
    let result = "";

    items.map((item) => {
      let title = item.snippet.title;

      if (title.length > 30) {
        title = title.substr(0, 30) + "...";
      }

      let con = item.snippet.description;

      if (con.length > 50) {
        con = con.substr(0, 50) + "...";
      }

      let date = item.snippet.publishedAt;

      date = date.split("T")[0];

      result += `<article>
            <a href="${item.snippet.resourceId.videoId}" class="pic">
                <img src="${item.snippet.thumbnails.medium.url}">
            </a>
            <div class="con">
                <h2>${title}</h2>
                <p>${con}</p>
                <span>${date}</span>
            </div>
        </article>`;
    });
    videos.innerHTML = result;
  });

youtube.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.closest("a")) return;

  const videoId = e.target.closest("a").getAttribute("href");

  let pop = document.createElement("figure");

  pop.classList.add("pop");

  pop.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" width="100%" height="100%"></iframe>
    <span class="btnClose">CLOSE</span>`;

  youtube.append(pop);
});

youtube.addEventListener("click", (e) => {
  const pop = youtube.querySelector(".pop");

  if (pop) {
    const close = pop.querySelector(".btnClose");
    if (e.target === close) pop.remove();
  }
});
