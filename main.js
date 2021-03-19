
var car = {
  $car: document.querySelector('img'),
  direction: 'east',
  moving: false,
  movingId: null,
  positionX: 0,
  width: 204,
  positionY: 0,
  height: 204,
  driving: function() {
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
  },
  steering: function(event) {
    if (event.key === ' ') {
      car.moving = !car.moving;
      if (car.moving) {
        car.movingId = window.setInterval(car.driving, 16);
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
  }
};

var coin = {
  $coin: document.querySelector('.coin'),
  positionX: 500,
  width: 35,
  positionY: 500,
  height: 35,
  collisionCheck: function() {
    if (car.positionX < coin.positionX + coin.width &&
      car.positionX + car.width > coin.positionX &&
      car.positionY < coin.positionY + coin.height &&
      car.positionY + car.height > coin.positionY) {
      console.log('poots');
    }
  }
};

window.addEventListener('keydown', car.steering);

setInterval(coin.collisionCheck, 16);
