
function sumOfN(Arr){
    let sum = 0;
    Arr.forEach(element => {
        sum += element;
    });
    return (sum);
}

// Importing the Module as a [JavaScript-OBJECT], so that It Can Be Cansumable;
module.exports = {
    sumOfNFunction: sumOfN,
    writerName: `I'm Hamza Shaikh`,
    repo: 'gitHub'
}
// & [Another Way] -> to "Export-Module" As A [Single-Variable]
// module.exports.[Key] = [Value]; // As "Written-Below"
module.exports.fatherName = 'Javed Shaikh :)';
