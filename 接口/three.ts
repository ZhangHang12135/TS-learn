interface SearchFunc {
    (source: string, substring: string): boolean;
}
let mySearch: SearchFunc;
// 这里的参数名倒是没什么限制，但是类型一定要对应
mySearch = function(sourc: string, subString: string) {
  let result = sourc.search(subString);
  return result > -1;
}
let mySearch2: SearchFunc;
mySearch2 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}