import { format, createLogger, transports} from 'winston'

// custom string console logger
const { printf, timestamp, combine, colorize, errors}  = format

const customFormat = printf(({level, message, timestamp, stack})=>{
return `${timestamp} ${level}:  ${stack || message} `
}) 

function devLogger(){  

    const logger = createLogger({
        format: combine(
                        colorize(),
                        errors({stack: true}), // for stacktrace
                        timestamp(),
                        customFormat
                        ),
        transports: [new transports.Console()]
    })
    
    return logger;
}

export default devLogger;