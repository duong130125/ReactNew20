
export default function B5() {
    function isPrimeWithPromise(number:number) {
        return new Promise((resolve, reject) => {
            if (typeof number !== 'number' || !Number.isInteger(number)) {
                reject("Đầu vào phải là số nguyên");
                return;
            }
    
            if (number <= 1) {
                resolve(false);
                return;
            }
    
            for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
                if (number % i === 0) {
                    resolve(false);
                    return;
                }
            }
    
            resolve(true);
        });
    }
    
    isPrimeWithPromise(2)
        .then(isPrime => {
            console.log(isPrime);
        })
        .catch(error => {
            console.log(error);
            
        })
    isPrimeWithPromise(4)
        .then(isPrime => {
            console.log(isPrime);
        })
        .catch(error => {
            console.log(error);
        })
    
  return (
    <div>B5</div>
  )
}
