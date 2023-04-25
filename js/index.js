let img = document.querySelectorAll(".img img")
let arrayOfImages = [...img]
let sources = []
arrayOfImages.map(item => sources.push(item.getAttribute("src")))
console.log(sources)
let i = 0;

const nextImg = () => {
  if(i >= sources.length - 1){
    i = -1
  }
  i ++ ;
  return setImg()
}

const setImg = () => {
  return arrayOfImages.map(item => item.setAttribute("src",sources[i]))
}

const prevImg = () => {
  if(i <= 0){
    i = sources.length
  }
  i--;
  setImg()
}