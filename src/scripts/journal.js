console.log('journal.js');
const entries = []
const objectsEntry = {
    date: "4.11.2019",
    concept: "Introduced objects",
    content: "Took a dive into objects, arrays, and the differences betwen them",
    mood: "default",
    id: 1
}
const loopsEntry = {
    date: "4.11.2019",
    concept: "Experimented with different types of loops",
    content: "For loops, For Each loops--down the road we'll be looking into other types of loops.",
    mood: "default",
    id: 2
}
const functionsEntry = {
    date: "4.11.2019",
    concept: "Introduced functions",
    content: "Experimented with creating functions and calling them.",
    mood: "default",
    id: 3
}
entries.push(objectsEntry, loopsEntry, functionsEntry);
console.log(entries);
