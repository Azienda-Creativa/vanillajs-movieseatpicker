const container = document.querySelector(".container")
const seats = document.querySelectorAll(".seat")
const screen = document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")
// + transforms string into number
let ticketPrice = +movieSelect.value

let setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex)
  localStorage.setItem("selectecMoviePrice", moviePrice)
}

let updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex))
}

//select movie
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
  console.log(e.target.selectedIndex, e.target.value)
  updateSelectedCount()
})
// select seat
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected")

    updateSelectedCount()
  }
})
