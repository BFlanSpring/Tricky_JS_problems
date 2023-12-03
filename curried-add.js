function curriedAdd() {
    let sum = 0;
  
    function add(num) {
      if (num === undefined) {
        return sum;
      }
      sum += num;
      return add;
    }
  
    return add;
  }
  

module.exports = { curriedAdd };
