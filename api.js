const url = 'https://api.bluelytics.com.ar/v2/latest';

fetch(url)
.then(response => response.json())
.then(data => {
  let element = document.getElementById("resultadodolar")

  element.innerHTML = `
    <p> El precio del dolar oficial: $${data.oficial.value_sell} </p>
    <p> El precio del dolar blue: $${data.blue.value_sell} </p>
    <p> Ultima actualizacion: ${data.last_update} </p>
    
  `
})
.catch(err =>console.log(err))
