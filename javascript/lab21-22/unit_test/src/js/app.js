let power = {
    pow: function pow(x, num){
        let powResult = 1;
        if(x == 0){
            return 1;
        }
        else if (x == 1){
            return num;
        }
        else{
            for(let i = 1; i <= x; i++){
                powResult *= num;
            }
            return powResult;
        }
    }
}

console.log(power.pow(6, 8));
try {
    module.exports = power;
} catch (e) {}
