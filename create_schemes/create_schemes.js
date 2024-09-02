import fs from 'fs'
import { readFiles } from './modules/_readfiles.js';
import { Scheme } from './modules/SchemeClass.js';


const ROOT_PATH = "./data/"

// use an absolute path to the folder where files are located
readFiles(ROOT_PATH, (filepath, name, ext, stat) => {
	const data = JSON.parse(fs.readFileSync(`${ROOT_PATH}${name + ext}`, 'utf8'));
	const folder_name = filepath.split("data/")[1].split(".json")[0]

	// iterate each scheme
	data.forEach((d) => {
		const NAME = d.name;
		const COLUMNS = d.columns;

		const scheme = new Scheme(NAME, COLUMNS)

		// create folder and file
		if (!fs.existsSync('output')) { fs.mkdirSync('output'); }
		if (!fs.existsSync('output/' + folder_name)) { fs.mkdirSync('output/' + folder_name); }
		const stream = fs.createWriteStream(`output/${folder_name}/${scheme.getFileName()}`);

		stream.once("open", (fd) => {
			stream.write(`${scheme.getRequiredLib()} \n`);
			stream.write(`\n`);
			stream.write(`${scheme.getColumnScheme()}\n`);
			stream.end();
		});
	})

});