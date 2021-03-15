
var car = {
  $car: document.querySelector('img'),
  direction: 'east'
};

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    car.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    car.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    car.direction = 'west';
  } else if (event.key === 'ArrowUp') {
    car.direction = 'north';
  }
  car.$car.className = car.direction;
});
