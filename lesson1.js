console.log("Hello world!");

const simpleArraySum = xs => {
    let sum = 0;
    xs.forEach(item => {
        console.log(item);
        sum += item;
    });
    return sum;
};

const simpleArraySum2 = xs => xs.reduce((acc, x) => acc + x, 0);

const test1 = simpleArraySum([10,2,34]);
const test2 = simpleArraySum2([10,2,34]);
console.log(test1, test2);

const reverseString = word => {
    let reverseString = word.split("").reverse().join("");
    return reverseString;
};
  
const Size = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
};

const generateRandomItemList = n =>{
    const items = [];
    for (let i = 0; i <= n; i++){
        const item = {
            name: "David"+getRandomIntInclusive(0, 1000),
            cost: getRandomIntInclusive(0, 1000),
            size: Object.values(Size)[getRandomIntInclusive(0, 2)]
        }
        items.push(item);
    }
    return items;
};

const items = generateRandomItemList(3);
console.log(items);

const findCheapestItem = items => {
    let min = Infinity;
    let cheapest;
    for (let i = 0; i < items.length; i++){
        if (items[i].cost < min){
            min = items[i].cost;
            cheapest = items[i];
        }
    }
    return cheapest;
};

const findMostExpensiveItem = items => {
    let max = 0;
    let mostExpensive;
    for (let i = 0; i < items.length; i++){
        if (items[i].cost > max){
            max = items[i].cost;
            mostExpensive = items[i];
        }
    }
    return mostExpensive;
};

const cheapest = findCheapestItem(items);
const mostExpensive = findMostExpensiveItem(items);

console.log("Cheapest: ", cheapest);
console.log("Most expensive: ", mostExpensive);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}