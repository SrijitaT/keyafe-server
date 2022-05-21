const imageFilter = require("../helpers/validation/image");
const UploadUsingMulter = require("../helpers/utils/UploadUsingMulter");
const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");
const { sequelize } = require("../models");
const {v4: uuidv4} = require('uuid');
const Joi = require("joi");

class ProductController extends BaseController{
  constructor(){
    super();
    this.folderPath = '/../../public/uploads/images/products';
    this.mediaHostUrl = '/uploads/images/products/';
    this.upUsingMulter = new UploadUsingMulter(this.folderPath)
  }
  
  uploadFile(){
    return this.upUsingMulter.upload(imageFilter).single('file');
  }

  upload(req,res,next){
    const cb = this.validateImgCb.bind(this,req,res,next);
    return this.uploadFile()(req,res,cb);
  }

  getMediaHostPath(req){
    return `${req.protocol}://${req.hostname}:${req.app.get("port")}${this.mediaHostUrl}${req.file.filename}`;
  }

   async validateImgCb(req,res,next){
    if (req.fileValidationError) {
      reqHandler.sendError(req,res,req.fileValidationError);
    }
    else if (!req.file) {
      reqHandler.sendError(req,res,"Please select an image to upload")
    }else{
      next();
    }
  }

  async insertToDbAfterUpload(req,res){
    try {
        let { title,desc,cat_id,type_id,unit_price,qty,weight,shape_id,original_flavour_id,currency,qty_measure,unit } = req.body;
        const img_url = this.getMediaHostPath(req);
        const result = await sequelize.transaction(async (t) => {
        const prod_det = await this.create(req,'ProductDetails',{ desc,unit_price,qty,weight,currency,
          qty_measure,unit},{transaction:t})
        const prod_det_id = super.getDataValueFromSequelizeRes(prod_det).id;
        const productObj = { id:uuidv4(),title,cat_id,type_id,prod_det_id,img_url,shape_id,original_flavour_id }
        const prod = await this.create(req,'Product',productObj,{transaction:t})
        return prod;
      });
    
      // If the execution reaches this line, the transaction has been committed successfully
      // `result` is whatever was returned from the transaction callback (the `user`, in this case)
      reqHandler.sendSuccess(res, 'Product created successfully')(result);
    } catch (error) {
    
      // If the execution reaches this line, an error occurred.
      // The transaction has already been rolled back automatically by Sequelize!
      console.log("req.file===",req.file);
      reqHandler.sendError(req,res,error);
    }
  }

  async getProductsByCategory(req,res){
    try{
      const schema = Joi.object({category_name: Joi.string().required()});
      const { error } = schema.validate(req.params);
      reqHandler.validateJoi(error, 400, 'Bad Request', error ? error.message : 'Requires category name to fetch details');
      const options = {where:{name:req.params.category_name}};
      const categories = await super.getAllByCustomOptions(req,"Categories",options);
      const cat_id = super.getDataValueFromSequelizeRes(categories)[0].id;
      const pOptions = {where:{cat_id}}
      const prod = await super.getList(req,"Product",pOptions); //pagination of results
      reqHandler.sendSuccess(res)(prod);
     }catch(err){
      reqHandler.sendError(req,res,err);
     }
  }  

  async updateProduct(req,res){
    try{
     const {title,cat_id,type_id,prod_det_id,img_url,shape_id,original_flavour_id,createdAt,updatedAt} = req.body;
     const updatedRow = await super.updateById(req,"Product",{title,cat_id,type_id,prod_det_id,img_url,shape_id,original_flavour_id,createdAt,updatedAt},"prod_id")
     reqHandler.sendSuccess(res)(updatedRow);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
}

module.exports = new ProductController();