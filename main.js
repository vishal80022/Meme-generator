// const memeGenerator = document.querySelector(".meme-generator");
const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-author");

const updateDetail = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by : ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      updateDetail(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
