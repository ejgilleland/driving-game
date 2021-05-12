var gameboard = {
  $body: document.querySelector('body'),
  coinCounter: 0,
  $coinCounter: document.querySelector('.counter'),
  coinList: [],
  collisionCheck: function () {
    for (let i = 0; i < gameboard.coinList.length; i++) {
      if (car.positionX < gameboard.coinList[i].positionX + 35 &&
        car.positionX + 204 > gameboard.coinList[i].positionX &&
        car.positionY < gameboard.coinList[i].positionY + 35 &&
        car.positionY + 204 > gameboard.coinList[i].positionY) {
        gameboard.coinCounter++;
        gameboard.$coinCounter.textContent = 'Coins: ' + gameboard.coinCounter;
        gameboard.coinList[i].$coin.remove();
        gameboard.coinList.splice(i, 1);
      }
    }
  },
  CoinGenerator: function () {
    this.$coin = document.createElement('img');
    this.$coin.className = 'coin';
    this.$coin.setAttribute('src', 'images/coin-svgrepo-com.svg');
    this.positionX = Math.random() * 1600;
    this.positionY = Math.random() * 900;
    this.$coin.style.left = this.positionX + 'px';
    this.$coin.style.top = this.positionY + 'px';
    return this;
  }
};

var car = {
  $car: document.querySelector('img'),
  direction: 'east',
  moving: false,
  movingId: null,
  positionX: 0,
  positionY: 0,
  driving: function () {
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
  steering: function (event) {
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

window.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < 10; i++) {
    gameboard.coinList[i] = new gameboard.CoinGenerator();
    gameboard.$body.append(gameboard.coinList[i].$coin);
  }
});

window.addEventListener('keydown', car.steering);

setInterval(gameboard.collisionCheck, 128);
setInterval(function () {
  if (gameboard.coinList.length < 10) {
    gameboard.coinList.push(new gameboard.CoinGenerator());
    gameboard.$body.append(gameboard.coinList[gameboard.coinList.length - 1].$coin);
  }
}, 1000);
