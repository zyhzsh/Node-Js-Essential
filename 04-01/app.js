
// const counter = require("./myModule");

// counter.inc();
// counter.inc();
// counter.inc();
// counter.inc();

// console.log(counter.getCount());

/// Better version ...

const {getCount,inc,dec} = require("./myModule");

inc();
inc();
inc();
inc();


console.log(getCount());
