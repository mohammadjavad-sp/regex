let search = document.getElementById("search");
let data = document.getElementById("data");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let input = document.getElementById("search").value;
  let sp = new RegExp(input,"ig")
  data.innerHTML = data.innerText.replace(sp,`<span>${input}</span>`)
});
