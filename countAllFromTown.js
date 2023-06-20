function countAllFromTown(stringList, RegStartString){
    const ListArray = stringList.split(",");
    let Count = 0;
    for (i=0; i<ListArray.length; i++){
        if (ListArray[i].includes(RegStartString)){
      Count++
      }
  }
return Count
}