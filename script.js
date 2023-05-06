$(document).ready(onReady);


let monthTotal;


function onReady() {
        console.log('Ready to run!!');


    $('#submitBtn').on('click', handleSubmit)
    $('#eeBody').on('click', '#deleteBtn', handleDelete)


    



// The submit button //
function handleSubmit() {
    

    // Getting the values of the inputs //
    let firstNameInput = $('#firstNInput').val();
    let lastNameInput = $('#lastNInput').val();
    let eEIdInput = $('#eeIDInput').val();
    let titleInput = $('#titleInput').val();
    let anuSalInput = $('#annualSalInput').val();

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
            ${anuSalInput}
        </td>
        <td>
            <button id ='deleteBtn'>Delete</button>
        </td>
    </tr>
`)


    // Append the annual salary value into monthly total
    monthTotal = anuSalInput
    $('#monthlyTotal').text(monthTotal)

    // Add new appened Annual Sal value to Current monthly Total
   


    // Emptying input values when click submit
    $('#firstNInput').val('');
    $('#lastNInput').val('');
    $('#eeIDInput').val('');
    $('#titleInput').val('');
    $('#annualSalInput').val('');
}

// The ❌/Delete button //
function handleDelete() {
    $(this).parent().parent().remove();
}
    
    // TRIED If Statement, Change background color to red if 
    // monthTotal > 20000
    if (monthTotal > 20000) {
        return $('#goRed').addclass("monthChangeColor");
    }
}

console.log('YAYY Its loaded!!');