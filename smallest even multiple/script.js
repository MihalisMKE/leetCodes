const smallestEvenMultiple = function(n) {

    for(i = n; i <= 2 * n; i++){
        if(i % n == 0 && i % 2 == 0){
            return i;
        }
    }
};