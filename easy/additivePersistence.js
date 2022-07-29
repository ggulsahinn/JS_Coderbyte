export const additivePersistence = (num) => {

    //Eğere verilen sayı bir rakamsa direk 0 döner
    if(num<10) return 0
    
    //Verilen parametrenin rakamlarının toplamını hesapla
    let sumOfDigits = sum(num)
    let additivePersistence = 1
    
    while(sumOfDigits > 9){
        //console.log(sumOfDigits)
        additivePersistence++
        sumOfDigits = sum(sumOfDigits)
    }
    
    return additivePersistence
}

const sum = (n) => {
    let sum = 0
    const arr = n.toString().split("")
    for(let i=0; i<arr.length; i++){
        sum += parseInt(arr[i]) 
    }
    return sum
}