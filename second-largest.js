function secondLargest ( numbers ) {
    let firstLargestNumber = Math.max(...numbers);
        let newArr = [];
        for (let index = 0; index < numbers.length; index++) {
            if(numbers[index] !==firstLargestNumber){
                newArr.push(numbers[index]);
            }
        }
        let secondLargestNumber = Math.max(...newArr)
        return secondLargestNumber;
    }
    console.log(secondLargest([1,2,3,4,5,6,7,8,9,10]))