
export default function B1() {
    function calculateBMI(weight: number, height: number) {
        try {
            if (typeof weight !== 'number' || typeof height !== 'number' || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                throw new Error('Cân nặng và chiều cao không hợp lệ');
            }
    
            const bmi: number = weight / (height * height);
            console.log(bmi.toFixed(2));
        } catch (error) {
            console.log(error.message);
        }
    }
    
    calculateBMI(70, 1.75);  
    calculateBMI("70", 1.75);  
    calculateBMI(70, -1.75);  
  return (
    <div>B1</div>
  )
}
