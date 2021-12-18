const formElement = document.querySelector('.contact-form')
const alertMessage = document.querySelector('.alert-info')
const nameElement = document.querySelector('.name')
const emailElement = document.querySelector('.email')
const subjectElement = document.querySelector('.subject')
const telegramElement = document.querySelector('.telegram')
const messageElement = document.querySelector('.message')
formElement.addEventListener('submit', async (e) => {
  e.preventDefault();

  let response = await fetch('/sendmessage', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          "name": nameElement.value,
          "email": emailElement.value,
          "subject": subjectElement.value,
          "telegram": telegramElement.value,
          "message": messageElement.value
      })
  })
  response = await response.json()
  if(response.ok){
      alertMessage.classList.add('show')
      nameElement.value = "",
      emailElement.value = "",
      subjectElement.value = "",
      telegramElement.value = "",
      messageElement.value = ""
  }
})

setTimeout(function(){
  alertMessage.classList.removed('show')
}, 3000)