
export default function B8() {

    function countDown(seconds:number) {
        return new Promise((resolve, reject) => {
            if (typeof seconds !== 'number' || !Number.isInteger(seconds) || seconds <= 0) {
                reject("Tham số truyền vào không thỏa mãi");
                return;
            }

            const intervalId = setInterval(() => {
                console.log(seconds);
                seconds--;

                if (seconds <= 0) {
                    clearInterval(intervalId);
                    resolve("Hoàn thành quá trình đếm");
                }
            }, 1000);
        });
    }

    countDown(5)
        .then((message) => {
            console.log(message); 
        })
        .catch((error) => {
            console.error("Error:", error);
        });

  return (
    <div>B8</div>
  )
}
