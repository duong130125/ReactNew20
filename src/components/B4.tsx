
export default function B4() {
    async function  sumWithAsyncAwait(numbers: number[]) {
        return await new Promise((resolve, reject) => {
            if (numbers.every(num => typeof num === 'number')) {
                const sum = numbers.reduce((acc, num) => acc + num, 0);
                resolve(sum);
            } else {
                reject('Đã xảy ra lỗi.');
            }
        });
    }
    const numbersArray:number[] = [1, 9, 3, 4, 7];
    
    sumWithAsyncAwait(numbersArray)
        .then(sum => {
            console.log(sum);
        })
        .catch(error => {
            console.log(error);
        });
  return (
    <div>B4</div>
  )
}
