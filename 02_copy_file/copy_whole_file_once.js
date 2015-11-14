var fs = require('fs');

function copy(src, dest) {
	fs.writeFileSync(dest, fs.readFileSync(src));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));  //The first two parameter is "node", and the program name(copy_whole_file_once), so slice them.


