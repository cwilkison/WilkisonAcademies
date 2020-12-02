console.log('It Works!')

$(document).ready(function () {
    $('.submit').click(function (event) {
        // event.preventDefault()
        console.log('Clicked button')

        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes("@") && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        } else {
            statusElm.append('<div>email not valid</div>')
            }

        if(name.length > 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length > 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            statusElm.append('<div>Message is not valid</div>')

        }
    }) 
})