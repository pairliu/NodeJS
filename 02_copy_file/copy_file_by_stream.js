var fs = require('fs');

function copy(src, dest) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dest));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));


