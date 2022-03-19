const { imageFilter } = require("../helpers/validation/image");
const multer = require('multer');
const path = require("path");
const models = require("../models");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/../public/uploads/images/products'));
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
      let { title,desc,cat_id,type_id,unit_price,qty,weight,shape_id,original_flavour_id } = req.body;
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      }
      else if (!req.file) {
        return res.send('Please select an image to upload');
      }      
      // Display uploaded image for user validation
      const img_url = req.protocol + "://" + req.hostname + ":5000/"+"uploads/images/products/" + req.file.filename;
      models.Product.create({ title,desc,cat_id,type_id,unit_price,qty,weight,img_url,shape_id,original_flavour_id }, { fields: ['title','desc','cat_id','type_id','unit_price','qty','weight','img_url','shape_id','original_flavour_id'] })
      .then(prod => {
        res.send({ title,desc,cat_id,type_id,unit_price,qty,weight,img_url,shape_id,original_flavour_id })
      }).catch(err => res.status(500).send({error:err.message}))
    
}


const getProductsByCategory = async (req,res)=>{
  let {category_name} = req.params;
  try{
  let cat = await models.Categories.findOne({where:{name:category_name},attributes:['id','name']});
  let cat_id = cat.dataValues.id;
  let prod = await models.Product.findAll({ where: { cat_id} })
  res.send(prod)
  }catch(err){
    console.log("get products by ct error",err);
  }
}

module.exports = { uploadCatalogue,upload,getProductsByCategory };