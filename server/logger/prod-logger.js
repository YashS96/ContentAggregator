import { format, createLogger, transports} from 'winston'

const { combine, json, errors, timestamp}  = format

function prodLogger(){    
    const logger = createLogger({
        format: combine(
                        json(),
                        errors({stack: true}), // for stacktrace
                        timestamp(),
                        ),
        defaultMeta:{ sercie: `user-service`},
        transports: [new transports.Console()]
    })
    return logger;
}

export default prodLogger;