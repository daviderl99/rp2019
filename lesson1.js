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