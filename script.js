$(document).ready(onReady);





function onReady() {
        console.log('Ready to run!!');


    $('#submitBtn').on('click', handleSubmit)
    $('#eeBody').on('click', '#deleteBtn', handleDelete)

}

    // Round to nearest 2 decimals
   
let monthTotal = 0
 let formattedMonthTotal = Math.round( monthTotal * 100) / 100
// The submit button //
    function handleSubmit() {
    

        // Getting the values of the inputs //

        // Input for First Name value
        let firstNameInput = $('#firstNInput').val();
        // Input for Last name value
        let lastNameInput = $('#lastNInput').val();
        // Input for Employee ID Number
        let eEIdInput = $('#eeIDInput').val();
        // Input for Job Title
        let titleInput = $('#titleInput').val();
        // Input for Annual Salary 
        let anuSalInput = $('#annualSalInput').val();

        // As I input values and submit it It will show up as numbers with commas in it
        // I understands that this seperate every 3 numbers and adds a "," in between it 
        // but dont understand all the /(?=(?:\d{3})+$)/ stuff.
        // what does all the / and ? \ means?
        // let commaInAnuSalNumbers = anuSalInput.split(/(?=(?:\d{3})+$)/).join(",")
        


        // Refreshes the inpute values when the submit btn is clicked
        event.preventDefault();

// appending the input values and delete Btn into the table //
$('#eeBody').append(`

    <tr>
        <td> 
            ${firstNameInput}
        </td>
        <td>
            ${lastNameInput}
        </td>
        <td>
            ${eEIdInput}
        </td>
        <td>
            ${titleInput}
        </td>
        <td>
            $ ${anuSalInput}
        </td>
        <td>
            <button id ='deleteBtn'>Delete</button>
        </td>
    </tr>
`)

  

    let anuSal = anuSalInput / 12
    // Total Monthly and add newly added values
    // formattedMonthTotal += anuSal
//    monthTotal += anuSal
   formattedMonthTotal += anuSal
    // Change the Total Month everytime a new values is added
    // $('#monthlyTotal').text(monthTotal) 
    $('#monthlyTotal').text(formattedMonthTotal) 

   





    // Add new appened Annual Sal value to Current monthly Total
    //  $('#monthlyTotal').append(monthTotal);
    // DO NOT NEED TO APPEND .TEXT IS ALREADY CHANGING IT THE TEXT
    
    

    
   


    // Emptying input values when click submit
    $('#firstNInput').val('');
    $('#lastNInput').val('');
    $('#eeIDInput').val('');
    $('#titleInput').val('');
    $('#annualSalInput').val('');

    // if (monthTotal > 20000) {
    //     $('#monthContainer').addClass('goRed');

    // }



  // TRIED If Statement, Change background color to red if 
    monthTotal > 20000
    if (formattedMonthTotal > 20000) {
        $('#monthContainer').addClass('goRed');

    }
  
}



    // The Delete button //
    function handleDelete() {
        $(this).parent().parent().remove();
    }
    
  


console.log('YAYY Its loaded!!');