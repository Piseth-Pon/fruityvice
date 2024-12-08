import FRUITS from "./data.js"
console.log("everything is starting from here")

// PART I: display all card
const fruitsWrapper = document.querySelector(".fruits-wrapper")
fruitsWrapper.innerHTML = ``
for (let i = 0; i < FRUITS.length; i++) {
  fruitsWrapper.innerHTML = fruitsWrapper.innerHTML + `
  <div class="fruit-card">
        <div class="fruit-card-head">
          <img class="fruit-icon" src="${FRUITS[i].image}" alt="">
          <h4>${FRUITS[i].name}</h4>
          <button class="btn btn-icon">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </button>
        </div>

        <div class="fruit-card-body">
          <div class="fruit-frame">
            <img src="${FRUITS[i].image}" alt="">
          </div>

          <div class="fruit-detail">
            <h4>Name: ${FRUITS[i].name}</h4>
            <h4>Family: ${FRUITS[i].family}</h4>
            <h4>Genus: ${FRUITS[i].genus}</h4>
            <h4>Nutritions</h4>
            <ul>
              <li>Calories: ${FRUITS[i].nutritions.calories}</li>
              <li>Fat: ${FRUITS[i].nutritions.fat}</li>
              <li>Sugar: ${FRUITS[i].nutritions.sugar}</li>
              <li>Carbohydrates: ${FRUITS[i].nutritions.carbohydrates}</li>
              <li>Protein: ${FRUITS[i].nutritions.protein}</li>
            </ul>
          </div>

        </div>
      </div>
  `
}

// PART II: Accordion
const heads = document.querySelectorAll(".fruit-card-head")
for (let i = 0; i < heads.length; i++) {
  heads[i].addEventListener("click", () => {

    const body = heads[i].nextElementSibling
    body.classList.toggle("toggle-body")

  })
}

// PART III: Handle Search
const searchForm = document.querySelector("#searchForm")
const searchFruit = document.querySelector("#searchFruit")
searchForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const fruitname = searchFruit.value
  let fruit = FRUITS.find((object) => object.name == fruitname)
  console.log(fruit)

  const resultWrapper = document.querySelector(".result-wrapper")
  resultWrapper.innerHTML = `
  <div class="fruit-card search-result">
        <div class="fruit-card-head">
          <img class="fruit-icon" src="${fruit.image}" alt="">
          <h4>Avocado</h4>
          <button class="btn btn-icon" id="closeBtn">
            <ion-icon name="close-circle-sharp"></ion-icon>
          </button>
        </div>

        <div class="fruit-card-body toggle-body">
          <div class="fruit-frame">
            <img src="${fruit.image}" alt="">
          </div>

          <div class="fruit-detail">
            <h4>Name: ${fruit.name}</h4>
            <h4>Family: ${fruit.family}</h4>
            <h4>Order: ${fruit.order}</h4>
            <h4>Genus: ${fruit.genus}</h4>
            <h4>Nutritions</h4>
            <ul>
              <li>Calories: ${fruit.nutritions.calories}</li>
              <li>Fat: ${fruit.nutritions.fat}</li>
              <li>Sugar: ${fruit.nutritions.sugar}</li>
              <li>Carbohydrates: ${fruit.nutritions.carbohydrates}</li>
              <li>Protein: ${fruit.nutritions.protein}</li>
            </ul>
          </div>

        </div>
      </div>
  
  
  
  `

  const closeBtn = document.querySelector("#closeBtn")
  closeBtn.addEventListener("click", () => {
    resultWrapper.innerHTML = ``
  })

})