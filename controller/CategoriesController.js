const imageFilter = require("../helpers/validation/image");
const UploadUsingMulter = require("../helpers/utils/UploadUsingMulter");
const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class CategoriesController extends BaseController{
  constructor(){
    super();
    this.folderPath = '/../../public/uploads/images/categories';
    this.mediaHostUrl = '/uploads/images/categories/';
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
    try{
      let { title, desc ,name} = req.body;
      const img_url = this.getMediaHostPath(req);
      let result = await this.create(req, 'Categories', { name,title, img_url, desc });
      reqHandler.sendSuccess(res, 'Category created successfully')(result);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }

  async getAllCategories(req,res){
    try{
      const options = {attributes:["id","title","name","img_url","desc"]};
      let categories = await super.getAllByCustomOptions(req,"Categories",options);
      categories = super.getActualObjFromSequelizeRes(categories);
      reqHandler.sendSuccess(res)(categories);
     }catch(err){
      reqHandler.sendError(req,res,err);
     }
  }  

}

module.exports = new CategoriesController();