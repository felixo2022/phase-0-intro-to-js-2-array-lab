
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat(cat);

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat(cat);

function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = [...cats, name];
    return cats1;
}
appendCat(cat);

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = [name, ...cats];
    return cats1;
}
prependCat(cat);
function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = cats.splice(0, 2);
    return cats1;
}
removeLastCat();
function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = cats.splice(1, 2);
    return cats1;
}
removeFirstCat(); 
