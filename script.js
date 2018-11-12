const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height= 500;

function Paddel(width, height, color, positionX, positionY){
    this.width = width;
    this.height = height;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = 3;
    this.middleHeight = height / 2;
  }

  function Ball(size, color, positionX, positionY){
    this.width = size;
    this.height = size;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.middleHeight = size / 2;
    this.speedX = 2;
    this.speedY = 2;
    this.directionX = true; //true = w prawo
    this.directionY = true; //true = w dół
  }

  const drawObject = (collisionObjects, context) => {
    collisionObjects.forEach(collisionObject => {
        context.fillStyle = collisionObject.color;
        context.fillRect(collisionObject.positionX, collisionObject.positionY, collisionObject.width, collisionObject.height);
    });
  }

  const collisionObjects = [];

  const PlayerPaddel = new Paddel(20, 120, 'green', 10, 50);
  const ComputerPaddle = new Paddel(20, 120, 'red', canvas.width - 30, 100);
  const Ball1 = new Ball(8, 'black', canvas.width / 2  -4, canvas.height / 2 - 4);
  const Ball2 = new Ball( 8, 'grey', 50, 50);
  const Ball3 = new Ball( 8, 'yellow', 450, 300);

  collisionObjects.push(PlayerPaddel, ComputerPaddle, Ball1);
  collisionObjects.push(Ball2, Ball3);

drawObject(collisionObjects, ctx);

