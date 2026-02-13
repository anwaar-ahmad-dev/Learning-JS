// BMI calculator

function bmi(weight, height) {
    let bmi_value = weight / (height * height);
    if (bmi_value <= 18.5) return `${bmi_value.toFixed(1)} => Underweight`;
    if (bmi_value > 18.5 && bmi_value <= 24.9)`${bmi_value.toFixed(1)} => NormalWeight`;
    if (bmi_value > 24.9 && bmi_value <= 29.9)`${bmi_value.toFixed(1)} => Overweight`;
    return `${bmi_value.toFixed(1)} => Obese`;
}
console.log(bmi(100, 1.7));