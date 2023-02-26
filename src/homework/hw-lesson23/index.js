const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

window.onload = function () {

    function drawCircle(circle) {
        ctx.beginPath();
        ctx.ellipse(circle.x, circle.y, circle.radius, circle.radius, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#1e5799;';
        ctx.strokeText('Game Circle', 25, 100);
        ctx.font = "48px serif";
        ctx.fill();
    }

    function getRandom(min, max) { return Math.random() * (max - min) + min; }

    let balls = []

    for (let i = 1; i < 10; i++) {
        balls.push({
            x: i * 100,
            y: getRandom(100, 300),
            dx: getRandom(3, 5),
            dy: getRandom(3, 5),
            radius: getRandom(15, 30)
        })
    };

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const ball of balls) {
            ball.x = ball.x + ball.dx;
            ball.y = ball.y + ball.dy;
        }

        for (const ball of balls) {
            if ((ball.y + ball.radius >= c.height) || (ball.y - ball.radius <= 0)) {
                ball.dy = ball.dy * (-1);
                ball.y = ball.y + ball.dy;
            }

            if ((ball.x + ball.radius >= c.width) || (ball.x - ball.radius <= 0)) {
                ball.dx = ball.dx * (-1);
                ball.x = ball.x + ball.dx;
            }
        }

        for (const ball of balls) {
            drawCircle(ball);
        }
        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
}

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topp = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SPICE = { price: 15, calories: 0 };

    addTopping(topping) {
        this.topp.push(topping);
    }

    calculatePrice() {
        const price = this.size.price + this.stuffing.price;
        const toppPrice = this.topp.reduce((total, topping) => total + topping.price, 0);
        return price + toppPrice;
    }

    calculateCalories() {
        const calories = this.size.calories + this.stuffing.calories;
        const toppCalories = this.topp.reduce((total, topping) => total + topping.calories, 0);
        return calories + toppCalories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());

document.querySelector('button').addEventListener('click', function () {
    window.open("file:///C:/Users/glebk/OneDrive/Рабочий%20стол/kovalchuk/hillel-practice1/src/homework/hw-lesson23/game.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=400,right=1000,width=400,height=400");
});