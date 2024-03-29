const container = document.querySelector(".container")
const seats = document.querySelectorAll(".seat")
const screen = document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")
// + transforms string into number
let ticketPrice = +movieSelect.value

const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex)
  localStorage.setItem("selectecMoviePrice", moviePrice)
}

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex))
  //console.log(seatsIndex)
  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}
// get data fomr local storage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))

  if (selectedSeats && selectedSeats.length > 0) {
    // Populate UI with selected seats
    console.log(selectedSeats)
  } else {
    // Handle case where no selected seats are found in localStorage
    console.log("No selected seats found in localStorage")
  }
}
// if (selectedSeats !== null && selectedSeats.length > 0) {
//   seats.forEach((seat, index) => {
//     if (selectedSeats.indexOf(index) > -1) {
//       seat.classList.add("selected")
//     }
//   })
// }

//select movie
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
  updateSelectedCount()
})
// select seat
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected")

    updateSelectedCount()
  }
})
