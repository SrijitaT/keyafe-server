const { imageFilter } = require("../helpers/validation/image");
const multer = require('multer');
const path = require("path");
const models = require("../models");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/../public/uploads/images/categories'));
    },
  
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, extension) + '_' + Date.now() + extension)
    }
  });

const upload =  multer({ storage, fileFilter: imageFilter })

const uploadCatalogue = async (req, res) => {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any
      let { title, desc ,name} = req.body;
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      }
      else if (!req.file) {
        return res.send('Please select an image to upload');
      }
  
  
      // Display uploaded image for user validation
      const fileUploaded = req.protocol + "://" + req.hostname + ":5000/"+"uploads/images/categories/" + req.file.filename;
      models.Categories.create({ name,title, img_url: fileUploaded, desc }, { fields: ['title','name', 'img_url', 'desc'] })
      .then(cat => {
        res.send({ title, img_url: fileUploaded, desc })
      }).catch(err => res.status(500).send({error:err.message}))
    
}


const getAllCategories = async function(req,res){
  try{
   let categories = await models.Categories.findAll({attributes:["id","title","name","img_url","desc"]});
   categories = categories.map(c=>c.dataValues);
   res.send(categories)
  }catch(err){
    res.status(500).send({"msg":"Something went wrong while fetching categories"})
  }
}

module.exports = { uploadCatalogue, upload, getAllCategories };