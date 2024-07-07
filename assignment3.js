/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates);


/*Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr); 

/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/
let string = 'INDIA';
let array = string.split('');

array.splice(1, 4, 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');

let newString = array.join('');
console.log(newString); 

//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let text = "This is a string with at least twenty characters.";
let vowels = text.match(/[aeiouAEIOU]/g).length;
let consonants = text.match(/[^aeiouAEIOU\s\d\W]/g).length;

console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);



/*Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "I love JavaScript!";
let correctedSentence = correctfn(sentence, "JavaScript", "Python");
console.log(correctedSentence); 

/*Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.*/
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const filteredArr = inputArr.filter(num => num > 5);
console.log(filteredArr); 

/*Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.*/
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => {
    const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(result);


/*Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

console.log(repeatedSumOfDigits(456)); 

//Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}

let paragraph = "This is a sample paragraph with a number of words.";
console.log(countWords(paragraph)); 

/*Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH*/
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); 



/*Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const res = Object.keys(studentsData).map(student => {
    const scores = Object.values(studentsData[student]);
    const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
    return { [student]: { average: average } };
});

console.log(res);
