$(document).ready(onReady);

console.log('YAYY Its loaded');

function onReady() {
        console.log('Ready to run');


    $('#submitBtn').on('click', handleSubmit)

}


function handleSubmit() {
    
    let firstNameInput = $('#firstNInput').val();
    let lastNameInput = $('#lastNInput').val();
    let eEIdInput = $('#eeIDInput').val();
    let titleInput = $('#titleInput').val();
    let anuSalInput = $('#annualSalInput').val();

event.preventDefault();

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
            <button class = 'delete-Btn'>❌</button>
        </td>
    </tr>
`)


    // Emptying input values when click submit
    $('#firstNInput').val('');
    $('#lastNInput').val('');
    $('#eeIDInput').val('');
    $('#titleInput').val('');
    $('#annualSalInput').val('');
}