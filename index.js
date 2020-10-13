const encode = require("./encode");
const decode = require("./decode");
const args = process.argv.slice(2);


if(args[0] === "encode"){
	console.log(encode(args[1], args[2]));
}

if(args[0] === 'decode'){
	console.log(decode(args[1], args[2]));
}
