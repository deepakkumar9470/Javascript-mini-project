/* Each Student has to enter respective subjects marks
Find Total
Find Percentage
Find Grade
Check Pass of Fail
Comined Data and show */

// Getting the value from inputs
const calcy=()=>{
    let ai=document.getElementById('ai').value;
    let os=document.getElementById('os').value;
    let ds=document.getElementById('ds').value;
    let dbms=document.getElementById('dbms').value;
    let cn=document.getElementById('cn').value;
    let grade='';
   
    // Total Marks
    let totalGrade=parseFloat(ai)+parseFloat(os)+parseFloat(ds)+parseFloat(dbms)+parseFloat(cn);
   
    // Total Percentage
    let percentage=(totalGrade/500)* 100;
    
    
    // Cheking Grades
    if(percentage <= 100 && percentage>=80){
        grade='A';
    }else if(percentage <=79 && percentage>=60){
        grade='B';
    }else if(percentage <=59 && percentage>=40){
        grade='C';
    }else{
        grade='F';
    }
    
    if(percentage>=35.5){
      document.getElementById('showData').innerHTML=`Your total marks out of 500 is ${totalGrade},Percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`  
    }else{
        document.getElementById('showData').innerHTML=`Your total marks out of 500 is ${totalGrade},Percentage is ${percentage}%.<br> Your grade is ${grade}. You are Fail.`
    }
    
    
    
}
