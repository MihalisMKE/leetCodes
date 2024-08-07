const reduce = function(nums, fn, init) {

    let res = init;

    for(const n of nums){
        res = fn(res, n)
    } return res;

    return nums.reduce(fn, init);
};

module.exports = {reduce }