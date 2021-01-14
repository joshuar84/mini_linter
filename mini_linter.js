// This is the original story
let story =
    'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Array of over used words
let overusedWords = ["really", "very", "basically"];

// Array of unnecessary words
let unnecessaryWords = ["extremely", "literally", "actually"];

// Array of each word in the story
const storyWords = story.split(" ");

// Logging to the console the word count
console.log(storyWords.length);

// Array of story words with unnecessay words filtered out
const betterWords = storyWords.filter((word) => {
    if (!unnecessaryWords.includes(word)) {
        return word;
    };
});

// Logging to the console the word count of betterWords array
console.log(betterWords.length);

// This function takes in an array of words and returns a new array of each word that is in the overUsedWords array
const overUsedWordCount = (arrayOfWords) => {
    let arrOfEachOverUsed = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (overusedWords.includes(arrayOfWords[i])) {
            let wordIndex = overusedWords.findIndex((word) => {
                return word === arrayOfWords[i];
            });
            let word = overusedWords[wordIndex];
            arrOfEachOverUsed.push(word);
        }
    }
    return arrOfEachOverUsed;
};

// Saved the return value of calling the overUsedWordCount function with betterWords as an argument
const arrOfEachWord = overUsedWordCount(betterWords);

// Defined a function that takes an array of words and returns an object with the words as keys and the word count for each word as values
const arrayIntoObject = (arrayOfWords) => {
    const object = {};
    arrayOfWords.forEach((word) => {
        if (!(word in object)) {
            object[word] = 1;
        } else {
            object[word] = object[word] + 1;
        }
    });
    return object;
};

// Saved the return value of calling arrayIntoObject function with arrOfEachWord as an argument
const objectWithWordCount = arrayIntoObject(arrOfEachWord);

// This function takes in an object with words as the key and logs to the console how many times they used each word which is the values of the keys.
const objIntoStrings = obj => {
    for (let key in obj) {
        console.log(`You used the word ${key} ${obj[key]} time(s).`);
    };
};

// calls a function that takes in an object with words as keys and word count as the values and logs to the console how many times they used each word.
objIntoStrings(objectWithWordCount);

// This function takes in an array of words and counts how many periods(.) and exclamation points(!) there, effectively counting the sentences.
const sentenceCounter = arrOfWords => {
    const period = '.';
    const exclmPoint = '!';
    let count = 0;
    arrOfWords.forEach((word) => {
        if (word[word.length - 1] === period || word[word.length - 1] === exclmPoint) {
            count++;
        };
    });
    return count;
};

// Saved into a variable the return value of calling sentenceCounter with betterWords as an argument
const sntncCntr = sentenceCounter(betterWords);

// Console logging sntncCntr
console.log(sntncCntr);