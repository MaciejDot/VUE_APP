export  default function(stringDate){
    let date = new Date(stringDate);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
}