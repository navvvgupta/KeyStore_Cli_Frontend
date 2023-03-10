const imgPath='https://keystore-cli-backend.onrender.com/imgUpload'
const axios = require( 'axios' );
const { log } = require('console');
const path=require('path')
const fs=require('fs')
const chalk = require('chalk') ;

 
const ImageUpload = async (data) => {
    const filePath=path.join(__dirname+'/authStorage/authToken.txt')
    const authtoken = fs.readFileSync(filePath, 'utf8')
    if(!authtoken){
        log(chalk.red.bold('First SignIn  !! '))
        return
    }
    log(data)
    const data1 = {
        "img_name":data.name,
        "img_path":data.path,
        "authtoken":authtoken
    }
    try {
       await axios.post(imgPath,data1).
       then((res)=>{
        log(chalk.green("Image Added ")) ;
        process.exit(0);
       })
    
    }
    catch (error) {
        log(error)
        // log(chalk.yellow(error.response.data.msg));
        process.exit(1);
    }

}

module.exports = ImageUpload
