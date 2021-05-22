function superbowlWin(arry){
       for (const record of arry){
           if (record.result === 'W'){
               return(record.year)
           }
       }       
    
}
record.find(superbowlWin)
//console.log (record.find(element => record.result === 'w'))
/*for (const result of record){
    if(result.find(record) === 'W'){
        return result
    }
}*/
