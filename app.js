const container = document.querySelector(".container")
const screen = document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")
// + transforms string into number
let ticketPrice = +movieSelect.value

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

//select movie
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value
  updateSelectedCount()
})
// select seat
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected")

    updateSelectedCount()
  }
})
