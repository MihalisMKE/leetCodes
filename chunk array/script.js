const chunk = function(arr, size) {

    const res = [];
    let subarr = [];

    for(i = 0; i < arr.length; i++){
        subarr.push(arr[i]);
        if(subarr.length === size){
            res.push(subarr);
            subarr = [];
        }
    }
    if(subarr.length){
        res.push(subarr);
    }

    return res;
};