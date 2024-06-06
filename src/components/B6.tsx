
export default function B6() {
  function isPrimeWithPromise(number: number) {
    return new Promise<boolean>((resolve, reject) => {
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

  async function checkPrime(number: number) {
      try {
          const isPrime = await isPrimeWithPromise(number);
          console.log(isPrime);
      } catch (error) {
          console.log(error);
      }
  }

  checkPrime(2);
  checkPrime(4);
  return (
    <div>B6</div>
  )
}
