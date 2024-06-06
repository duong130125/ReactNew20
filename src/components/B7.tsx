
export default function B7() {
    function createMyFirstPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Success!"); 
            }, 1000);
        });
    }

    createMyFirstPromise()
        .then((message) => {
            console.log("Result! " + message); 
        })

  return (
    <div>B7</div>
  )
}
