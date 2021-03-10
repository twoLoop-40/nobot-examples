const args = process.argv.slice(2);
const [name1] = args;

if (name1 === undefined) {
  console.error('Please pass a name, e.g. node hello.js Shaun');
  process.exit(0);
}

console.log(`Good day to you, ${name1}`);
