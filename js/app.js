var CANVAS_WIDTH = 505;
var LEFT_BOUND = 0;
var RIGHT_BOUND = 400;
var BOTTOM_BOUND = 400;
var UP_BOUND = 0;

// Enemies our player must avoid
var Enemy = function( x = 0, y = 0, speed = 25 ) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if( this.x >= CANVAS_WIDTH ) {
      this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';

  this.x = 200;
  this.y = 400;
};

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function( key ) {
  console.log( key );


  if( key == 'left' ) {
    if( this.x > LEFT_BOUND ) {
        this.x -= 100;
    }
  }
  else if( key == 'right' ) {
    if( this.x < RIGHT_BOUND ) {
      this.x += 100;
    }
  }
  else if( key == 'up' ) {
    if( this.y > UP_BOUND ) {
      this.y -= 90;
    }
  }
  else if( key == 'down' ) {
    if( this.y < BOTTOM_BOUND ) {
      this.y += 90;
    }
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push( new Enemy( 0, 60, 31 ) );
allEnemies.push( new Enemy( 0, 60, 73 ) );

allEnemies.push( new Enemy( 0, 140, 35 ) );
allEnemies.push( new Enemy( 0, 140, 67 ) );

allEnemies.push( new Enemy( 0, 220, 47 ) );
allEnemies.push( new Enemy( 0, 220, 81 ) );

player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
