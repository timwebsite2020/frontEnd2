var nameEl;

function withmouse(x) {
  nameEl = document.querySelector('#data' + x);
  nameEl.classList.add("hover");
  nameEl.innerHTML = '';
  // nameEl.innerHTML = '<p class="text"></p>';
  // hexEl.querySelector(".text").textContent = "bye";
  nameEl.innerHTML = sampleData[x].text2;
}

function withoutmouse(x) {
  nameEl = document.querySelector('#data' + x);
  nameEl.classList.remove("hover");
  nameEl.textContent = '';
  nameEl.innerHTML = '';
  nameEl.innerHTML = sampleData[x].text1;
  // nameEl.querySelector(".text").textContent = '';
}