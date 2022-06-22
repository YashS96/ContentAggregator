import devLogger from './dev-logger.js'
import prodLogger from './prod-logger.js'

let logger = null;

if(process.env.NODE_ENV === 'development') {
    logger = devLogger()
}
else{
    logger = prodLogger()
}

export default logger;