const { imageFilter } = require("../helpers/validation/image");
const UploadUsingMulter = require("../helpers/utils/UploadUsingMulter");
const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");
//const models = require("../models");


class CategoriesController extends BaseController{
  constructor(){
    super();
    this.folderPath = '/../public/uploads/images/categories';
    this.mediaHostUrl = '/uploads/images/categories/';
    this.upUsingMulter = new UploadUsingMulter(this.folderPath)
  }
  upload(){
    return this.upUsingMulter.upload(imageFilter);
  }
  getMediaHostPath(req){
    return `${req.protocol}"://"${req.hostname}":"${req.app.get("port")}${this.mediaHostUrl}${req.file.filename}`;
  }
   async validateAndInsertToDbAfterUpload(req,res){
    let { title, desc ,name} = req.body;
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    }
    else if (!req.file) {
      return res.send('Please select an image to upload');
    }
    const img_url = this.getMediaHostPath(req);
    try{
      let result = await this.create(req, 'Categories', { name,title, img_url, desc });
      reqHandler.sendSuccess(res, 'Category created successfully')(result);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
  async getAllCategories(req,res){
    try{
      let options = {attributes:["id","title","name","img_url","desc"]};
      let categories = await super.getAllByCustomOptions(req,"Categories",options);
      categories = this.getActualObjFromSequelizeRes(categories);
      reqHandler.sendSuccess(res)(categories);
     }catch(err){
      reqHandler.sendError(req,res,err);
     }
  }  

}

module.exports = new CategoriesController();