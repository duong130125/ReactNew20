
export default function B9() {

    function sortArrayWithPromise(array:number[]) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(array) || !array.every(Number.isInteger)) {
                reject('Mảng truyền vào không thỏa mãn');
                return;
            }

            setTimeout(() => {
                const sortedArray = array.sort((a, b) => a - b);
                resolve(sortedArray);
            }, 0);
        });
    }

    sortArrayWithPromise([1, 7, 2, 5, 9, 5])
        .then((sortedArray) => {
            console.log(sortedArray);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });

  return (
    <div>B9</div>
  )
}
