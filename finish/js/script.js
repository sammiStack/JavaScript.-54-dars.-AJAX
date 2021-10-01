'use strict';
const inputUzs = document.querySelector('#uzs'),
  inputUsd = document.querySelector('#usd');

inputUzs.addEventListener('input', () => {
  const request = new XMLHttpRequest()
  request.open('GET', 'js/current.json')
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.send()
  request.addEventListener('load', () => {
    if(request.status === 200) {
      console.log(request.response)
      const data = JSON.parse(request.response)
      inputUsd.value = (+inputUzs.value / data.current.usd).toFixed(2)
    }else{
      inputUsd.value = 'Error'
    }
  })
})