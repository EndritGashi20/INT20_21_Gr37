    const name1 = document.getElementById('in1');
    const surname = document.getElementById('in2');
    const email = document.getElementById('in3');
    const password = document.getElementById('in4');
    const password1 = document.getElementById('in5');
    const form1 = document.getElementById('ii');
    const errorElement = document.getElementById('error1');


    form1.addEventListener('submit',(e) => {
    let messages = []

    if(name1.value === '' || name1.value == null){
        alert('Plotesoni emrin!')
    }
    if(surname.value.length <=3){
        alert('Plotesoni mbiemrin!')
    }
    if(email.value.length <= 3){
        alert('Plotesoni email!')
    }
    if(password.value.length <=3){
        alert('Plotesoni passwordin!')
    }
    if(messages.length > 0){
            e.preventDefault()
            errorElement.innerText = messages.join(',')
    }
    if(password.value !== password1.value){
        alert('Shkruani passwordin njejte')
    }else{
        alert('Ju keni kaluar formen!')
    }
})