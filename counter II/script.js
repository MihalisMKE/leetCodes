const createCounter = function(init){
    let count = init;
    return {
        increment: (n) => {
            count++;
            return count;
        },
        decrement: (n) => {
            count--;
            return count;
        },
        reset: (n) => {
            count = init;
            return count;
        }
    }
};