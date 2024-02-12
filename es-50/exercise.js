const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

const indexToRemove = names.indexOf("Giovanni");
if (indexToRemove !== -1) {
    names.splice(indexToRemove, 1);
}

names.push("Pippo");

names.unshift("Giovanni");

console.log(names);
