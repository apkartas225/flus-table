export const parseData = miliseconds => {
    let date = new Date(miliseconds),
    month = date.getMonth() + 1,
    day = date.getDate(),
    year = date.getFullYear();

    day = day < 10 ? `${0}${day}` : day;
    
    return  `${day}.${month}.${year}`;
}
   