// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './logger.js';
// console.log(logger)
// logger('Test messenge...', TYPE_LOG)
// logger('Test messenge...', TYPE_WARN)
// logger('Test messenge...', TYPE_ERROR)


import logger from './logger.js';   // logger export default

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js'

console.log(logger)
logger('Test messenge...', TYPE_LOG)
logger('Test messenge...', TYPE_WARN)
logger('Test messenge...', TYPE_ERROR)


// Trường hợp ko export default constants.js sử dụng, sẽ xuất ra 1 object
import * as constants from './constants.js'
console.log(constants);
