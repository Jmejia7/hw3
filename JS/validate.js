/*--
File: validate.js
other Files: style.css,index.html index.js 
parctice using jquery validation plug in. Helpful to prevent wrong input before an action. 
using rules and messages to display and update until user correctly enters inputs.
Jorge Mejia , UMass Lowell Computer Science, jorge_mejia1@student.uml.edu
credits:https://jqueryvalidation.org/
Copyright (c) JM 
updated by JM on june 22, 2025
-->*/


$(document).ready(function(){
  

$.validator.methods.maxlength = function (value,element,param){
    var valuenum = parseInt(value);
    var length = value.length;// accounting for the negative symbol. 
    if (valuenum >0 ) // do not want multiple whitespaces. so only alows the user to enter 2 digits.
    {
     return this.optional( element ) || ( length <= param)
    }
     if(valuenum == 0 ) //  prevent line full of zero
     {
     return this.optional( element ) || ( length <= param-1);
     }
    return this.optional( element ) || ( length <= param+1 );
};

$.validator.addMethod("max_greaterthan_min", function(value, element, param) {
    var maxvalue = parseInt(value);
    var minsibling = $(param).val();
    var minvalue = parseInt(minsibling);
    return this.optional(element) || (maxvalue>=minvalue);
},
"The max rows and max columns should be greater than or equal to the min.");

$.validator.addMethod("integer", function(value, element) {
  return this.optional(element) || /^-?\d+$/.test(value); //regex allows - and digits same as NAN
}, "Please enter a whole number, no floats or doubles allowed.");
  
$("#RangeForm").validate({ 
    

rules: {
    minRow: {required:true, min:-50, max:50, integer:true, minlength:1, maxlength:2
                
            },
    maxRow: { required: true,  min:-50, max:50,integer:true, minlength:1,maxlength:2,
            max_greaterthan_min:"#minRow" 
             },
    minCol: { required: true,  min: -50, max:50,integer:true, minlength:1,maxlength:2
               
             },
    maxCol: { required: true,  min: -50, max:50,integer:true, minlength:1,maxlength:2,
             max_greaterthan_min:"#minCol" 
             }
        },
messages: {
    minRow: {   required: "Please enter the min row", 
                integer:"Input only Integers values",
                min: "Your input must be an integer greater than -50",
                max:"Your input must be an integer lower than 50",
                minlength:"Enter a valid integer",
                maxlength:"Your integer must contain at most two digits."
                 
                },
    maxRow: {   required: "Please enter the max row",
                integer: "Input only Integers values",
                min: "Your input must be an integer greater than -50",
                max:"Your input must be an integer lower than 50",
                minlength:"Enter a valid integer",
                maxlength:"Your integer must contain at most two digits.",
                max_greaterthan_min:"Input must be greater than minimum rows"
                 
                },
    minCol: {   required: "Please enter min column", 
                integer:"Input only Integers values",
                min: "Your input must be an integer greater than -50", 
                max:"Your input must be an integer lower than 50",
                minlength:"Enter a valid integer",
                maxlength: "Your integer must contain at most two digits."
            
                },
    maxCol: {   required: "Please enter max column", 
                integer:"Input only Integers values",
                min: "Your input must be an integer greater than -50",
                max:"Your input must be an integer lower than 50",
                minlength:"Enter a valid integer",
                maxlength:"Your integer must contain at most two digits.",
                max_greaterthan_min:"Input must be greater than minimum columns"
                
                }
        
        },
    
    errorClass: "error",
    validClass: "success",
    errorElement: "em",
    focusInvalid: true, 
    debug: true,

  invalidHandler: function (event, validator) { 
    var count = validator.numberOfInvalids();
    var str = "Please fill out the remaining fields. (Remaining: " + count + ")";
    $("#error ul").html("<li>" + str + "</li>");
},
  //number of ems = number of errors

    errorPlacement: function (error, element){
    $(error).insertAfter(element);
    
        },
    

submitHandler: function(form){

    console.log("validation complete");
    retrieveValues();
    console.dir(form("#RangeForm"));
    },
});
});