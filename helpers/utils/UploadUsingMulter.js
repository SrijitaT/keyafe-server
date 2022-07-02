const multer = require("multer");
const path = require("path");

class UploadUsingMulter {
	constructor (folderPath) {
		this.folderPath = folderPath;
	}
	storage () {
		return multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, path.join(__dirname, this.folderPath));
			}.bind(this),
          
			// By default, multer removes file extensions so let's add them back
			filename: function (req, file, cb) {
				const extension = path.extname(file.originalname);
				cb(null, path.basename(file.originalname, extension) + '_' + Date.now() + extension)
			}
		});
	}
	upload (fileFilter) {
		return multer({ storage:this.storage(), fileFilter })
	}
}

module.exports = UploadUsingMulter;