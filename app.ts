const sayHello = (name : string) => `${name}님 안녕하세요?`
let sayMyName : any = document.querySelector('#title')
sayMyName.textContent = sayHello('김태수');

