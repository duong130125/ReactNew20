
export default function B2() {
    function divideNumbers(numerator: number, denominator: number) {
        try {
            if (denominator === 0 || numerator === 0 ) {
                throw new Error('Lỗi: Không thể chia cho 0');
            }
            if (typeof numerator !== 'number' || typeof denominator !== 'number') {
                throw new Error('Lỗi: Phải nhập vào hai số');
            }

            const result:number = numerator / denominator;
            console.log(result);
        } catch (error) {
            console.log(error.message);
        } finally {
            console.log('Kết thúc hàm divideNumbers');
        }
    }
    
    divideNumbers(10, 2);  
    divideNumbers(10, 0);  
    divideNumbers('abc', 2);  
  return (
    <div>B2</div>
  )
}
