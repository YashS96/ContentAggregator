import logger from "../logger/index.js";

export const login = async (req, res) => {

    try{
        res.status(200).json(`Login`);
    }
    catch(err) {
        logger.info(err)
    }
}

export const logout = async (req, res) => {
    try{

    }
    catch(err){
        
    }
}