
var car = {
  $car: document.querySelector('img'),
  direction: 'east',
  moving: false,
  movingId: null,
  positionX: 0,
  positionY: 0
};

window.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    car.moving = !car.moving;
    if (car.moving) {
      car.movingId = window.setInterval(function () {
        car.positionX += 8;
        car.$car.style.left = car.positionX + 'px';
      }, 16);
    } else {
      window.clearInterval(car.movingId);
    }
  } else if (event.key === 'ArrowRight') {
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
