// How can you make this more scalable and reusable later?
function findArmstrongNumbers(numbers) {
   let armstrong=[];
   let  sum = 0;
   for (let num = 0; num <=numbers[numbers.length-1]; num++) {
        let num_str = num.toString();
        let l = num_str.length;
        for (let i = 0; i < num_str.length; i++) {
            sum += Math.pow(parseInt(num_str[i]), l);
        }
        if (sum === num) {
            armstrong.push(num);
        }
        sum=0;
    }
    // console.log(armstrong);
    return armstrong;
}
findArmstrongNumbers([1000]);

module.exports = {findArmstrongNumbers}
