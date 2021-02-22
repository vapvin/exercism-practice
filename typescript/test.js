class Words{
    constructor(){}
    count(str){
        const words = str.split(' ');
        const wordMap = new Map();
        words.forEach(item => {
            const word = new RegExp(item,'g');
            let count = (str.match(word) || []).length;
            console.log(count)
            wordMap.set(item, count);
        });
        return wordMap;
    }
}

const word = new Words();

console.log(word.count('is is is test code is master rust python rust rust'));