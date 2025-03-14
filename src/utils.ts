/**
 * 转化成RMB元字符串
 *
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
 export function yuan(value: number | string, digits: number = 2): string {
  if (typeof value === 'number') {
    value = value.toFixed(digits);
  }
  return `&yen ${value}`;
}

/**
 * 格式化金额
 * @param num
 * @param [format]
 * @returns {string}
 */
 export function moneyFormat(num: number|string, format:number):string {
  format = format ? format : 0;
  if (format == 0) {
    return num+ '';
  }
  format = format > 0 && format <= 20 ? format : 2;
  num = parseFloat((num + '').replace(/[^\d\.-]/g, '')).toFixed(format) + '';
  var l = num.split('.')[0].split('').reverse(),
    r = num.split('.')[1];
  var t = '';
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
}

/**
 * 价格转换浮点型
 * @param {String}  格式化价格文本
 * @return {Number}
 */
 export  function rmoney(s:string):number {
  return parseFloat(s.replace(/[^\d\.-]/g, ''));
}


/**
 * 
 * @param {string}  电话号码
 */
 export function phoneFormat(num:string):string {
  num = num.trim();
  return num.substring(0, 3) + '****' + num.substring(7);
}

/**
 *  @param {string}
 */
export function ToCDB(str:string):string{
  var tmp = "";
  for(var i=0;i<str.length;i++){
      if(str.charCodeAt(i)>65248&&str.charCodeAt(i)<65375){
          tmp += String.fromCharCode(str.charCodeAt(i)-65248);
      }else{
          tmp += String.fromCharCode(str.charCodeAt(i));
      }
  }
  return tmp
}