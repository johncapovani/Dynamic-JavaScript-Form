//FUNCTION DECLARATION//

//Create Headers Function
function createHeaders(headerName) {
    let header = document.createElement('h1')

    let headerText = document.createTextNode(headerName)

    //Append headerText to the header

    header.appendChild(headerText)

    //Append the header to the DOM

    document.body.appendChild(header)

}

//Create Form Function

function createForm(formName) {
    let form = document.createElement('form')

    //Append a id name to the form
    form.setAttribute('id', formName)

    //Append the form to the DOM
    document.body.appendChild(form)

}




//Create Text Input Function

function createTextInput(inputLabel, formID) {

    let formLocation = document.getElementById(formID)

    let createLabel = document.createElement('label')

    let labelText = document.createTextNode(inputLabel)

    createLabel.appendChild(labelText)

    let inputField = document.createElement('input')

    //set styles

    inputField.style.cssText = "display: flex; width: auto; margin: 10px"

    inputField.setAttribute("type", "text")

    inputField.setAttribute("name", inputLabel)


    //Append the new formInput to the DOM
    formLocation.appendChild(createLabel)

    formLocation.appendChild(inputField)

}



//FUNCTION DECLARATION END//

createHeaders('Warranty Information')

//Create Form
createForm('Form1')

//Add Form Inputs

createTextInput('First Name', 'Form1')
createTextInput('Last Name', 'Form1')
createTextInput('Company Name', 'Form1')
createTextInput('Phone Number', 'Form1')
createTextInput('Fax Number', 'Form1')
createTextInput('Address', 'Form1')
createTextInput('City', 'Form1')
createTextInput('State', 'Form1')
createTextInput('ZipCode', 'Form1')
createTextInput('Country', 'Form1')

