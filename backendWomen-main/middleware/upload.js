import { diskStorage, multer } from "multer"


var storage = diskStorage({


    destination : function(req, file ,cb){

    },
    filename : function(req, file , cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})



var upload = multer({
    storage : storage,
    fileFilter: function(req, file, cb){
        if (
            file.mimetype == "image/png"
        )
        {
            callback(null, true)
        }
        else{
            console.log("invalid file format")
        }
    }
})