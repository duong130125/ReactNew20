
export default function B3() {
    function sumWithPromise(numbers: number[]) {
        return new Promise((resolve, reject) => {
            if (numbers.every(num => typeof num === 'number')) {
                const sum = numbers.reduce((acc, num) => acc + num, 0);
                resolve(sum);
            } else {
                reject('Đã xảy ra lỗi.');
            }
        });
    }
    const numbersArray:number[] = [1, 9, 3, 4, 7];
    
    sumWithPromise(numbersArray)
        .then(sum => {
            console.log(sum);
        })
        .catch(error => {
            console.log(error);
        });
    
  return (
    <div>B3</div>
  )
}
