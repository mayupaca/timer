let args = process.argv.slice(2);
args = args.map(Number);
let alarms = args.map((arg) => arg * 1000);

const beep = () => process.stdout.write("\007")
const ring = (delay) => {
  if (!isNaN(delay) && delay >= 0) {
    setTimeout(beep, delay)
  }
};
for (let alarm of alarms) {
  ring(alarm)
};

//map, forEach, for loop
// node timer1.js 10 3 5 15 9
// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds