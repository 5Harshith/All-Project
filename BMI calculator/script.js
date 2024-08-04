const calculateBtn = document.querySelector('#calculator_bmi');
const bmiResult = document.querySelector('#bmi_result');
const form = document.querySelector('form');
// prevent loading
form.addEventListener('submit', e =>{
    e.preventDefault();
});


calculateBtn =addEventListener('click',(event)=>
{
    const weight= document.querySelector('#weightfield').value;
    const height = document.querySelector('#heightfield').value;

   
    const result =weight/(height * height);
    let bmiMesg;
    let Msgcolor;

    if(weight === '' || height ===''){
       alert('Please enter the value ');
     }
    if(result <18.5)
    {
            bmiMesg = 'Thinner';
    }
    else if(result >=18.5 && result <=25)
        {
            bmiMesg = 'Normal';
            Msgcolor ='text-success';
        }
    else if(result >25 && result <=30)
        {
                bmiMesg = 'Overweight';
        
         }    
    else if(result >30 )
            {
                    bmiMesg = 'Obese';
            
             }  
    bmiResult.innerHTML =`<p id="bmi_result" class="mt-3" >BMI =<b>${Math.round(result * 100)/100}( <span class="${Msgcolor}">
    <b>${bmiMesg}</b></span> )</b></p>`
});

