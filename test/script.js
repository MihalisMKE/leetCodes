

const stringCoverter = (input) => {
    if (typeof input !== 'string'){
        throw new Error('Input must be string');
    }
    
let text = input.split('');


    for(i = 0; i < text.length; i++){
        if(i % 2 == 0){
            text[i] = text[i].toUpperCase();
        } else {
            text[i] = text[i].toLowerCase();
        }
    }

    return text.join('');

}


module.exports= {stringCoverter};