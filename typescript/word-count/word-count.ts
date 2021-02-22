class Words{
    constructor(){}
    count(str: string): Map<string, number>{
        const words: string[] = str.split(' ');
        const wordMap: Map<string, number> = new Map();
        words.forEach(item => {
            const word: RegExp = new RegExp(item,'g');;
            let count:number = (str.match(word) || []).length;
            wordMap.set(item, count);
        });
        return wordMap;
    }
}

export default Words;