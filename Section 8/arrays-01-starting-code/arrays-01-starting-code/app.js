const numbers = [1, 2, 3];
console.log(numbers);

//const moreNumbers = new Array(5); // creates an array with length of whatever argument is passed in. The new keyword can also be omitted.
//console.log(moreNumbers);

//const yetMoreNumbers = Array.of(1, 2); // Not used often, but when used typically used to create a dynamic array
//console.log(yetMoreNumbers);

const moreNumbers = Array.from('Hi!'); // Allows you to convert an iterable to an array
console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

// Arrays can be of mixed or same data types in JS.
const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData)
    {
        for (const dataPoint of data)
            {
                console.log(dataPoint);
            }      
    }

    console.log(personalData[1]);

