
export default function B10() {

    function findElement(array:number[], value:number) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(array) || !array.every(Number.isInteger) || !Number.isInteger(value)) {
                reject(new Error("Tham số truyền vào không thoải mãi"));
                return;
            }

            const index:number = array.indexOf(value);
            if (index !== -1) {
                resolve(`Phần tử ${value} tìm thấy ở vị trí thứ ${index}.`);
            } else {
                reject(`Không tìm thấy phần tử ${value}`);
            }
        });
    }

    findElement([1, 2, 3, 4, 5], 3)
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    findElement([1, 2, 3, 4, 5], 6)
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("Error:", error); 
        });

  return (
    <div>B10</div>
  )
}
