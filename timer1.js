const times = process.argv.slice(2);
const timer = function(times) {
  for (const time of times){
    setTimeout((times) => {
      console.log('alarm');
      return process.stdout.write('\x07');
    }, time * 1000); 
  }
};

timer(times); 