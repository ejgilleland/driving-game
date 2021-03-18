
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
        if (car.direction === 'east') {
          car.positionX += 8;
          car.$car.style.left = car.positionX + 'px';
        } else if (car.direction === 'south') {
          car.positionY += 8;
          car.$car.style.top = car.positionY + 'px';
        } else if (car.direction === 'west') {
          car.positionX -= 8;
          car.$car.style.left = car.positionX + 'px';
        } else if (car.direction === 'north') {
          car.positionY -= 8;
          car.$car.style.top = car.positionY + 'px';
        }
      }, 16);
    } else {
      window.clearInterval(car.movingId);
    }
  } else if (event.key === 'ArrowRight') {
    car.direction = 'east';
    car.$car.className = car.direction;
  } else if (event.key === 'ArrowDown') {
    car.direction = 'south';
    car.$car.className = car.direction;
  } else if (event.key === 'ArrowLeft') {
    car.direction = 'west';
    car.$car.className = car.direction;
  } else if (event.key === 'ArrowUp') {
    car.direction = 'north';
    car.$car.className = car.direction;
  }
});
