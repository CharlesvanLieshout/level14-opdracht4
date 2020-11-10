//while loop

const colors = ['yellow', 'blue', 'red', 'orange'];
while (colors.length > 0) {
    colors.shift(colors);
console.log(colors);
}

//for loop

for (colors = ['yellow', 'blue', 'red', 'orange']; colors.length > 0; colors.length--){

console.log(colors)}

//forEach

const colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element));