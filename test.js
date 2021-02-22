// A C G T 
// U G C A 

const toRna = dna => {
 const arr = dna.split('');
 const rna = arr.map(item => {
     switch(item){
        case 'A':
            return 'U';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        case 'T':
            return 'A';
        default:
            return '';
     }
 }).join('');
 console.log(rna);

}


const case1 = toRna('');
const case2 = toRna('C');
const case3 = toRna('G');
const case4 = toRna('T');
const case5 = toRna('A');
const case6 = toRna('AATCGGGACTGTTACCC');
