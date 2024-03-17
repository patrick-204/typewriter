const sentence = "hello there from lighthouse labs";
let time = 0;
// let newSentence = sentence.split('');

for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
    if (Number(char) + 1 === sentence.length) {
      process.stdout.write('\n');
    }
  }, time);
  time += 50;
}

