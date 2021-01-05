'use strict';

/**
 * 生成指定长度的随机字符串
 * @param {*} length 字符串长度
 */
function randomKey(length) {
    const STR = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
    let result = ''
    for (let i = 0; i < length; i++) {
        result += STR[Math.trunc(Math.random() * STR.length)];
    }
    return result;
}