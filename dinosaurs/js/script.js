function Start(){
	Clock();
	Block();
	Remove();
}


//Блок - 1
//різний розмір шрифта

//рандомна позиція картинки
function moveIt(){
  picture.style.top = Math.round(Math.random() * spaceW) + "px";
  picture.style.left = Math.round(Math.random() * spaceH) + "px";
}

function Init(){
  picture = document.getElementById("image");
  spaceW = screen.height - picture.height;
  spaceH = screen.width - picture.width;
  setInterval(moveIt, 100);
}


//текстовий годинник
function Clock(){
	window.setInterval(function(){
		var date = new Date;

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		var clock = hours + ':' + minutes + ':' + seconds;
		document.getElementById("clock").innerHTML = clock;
	}
	);
}

//зміна тегів p
var pars = document.getElementsByTagName("p");

function pSize(element){
	element.setAttribute('style','font-size:15px !important;');
}

function changeCollection(elements){
	for(var i = 0; i<= elements.length; i++){
		pSize(elements[i]);
	}
}

//Блок - 2

//зміна розміру шрифта
let fontSize = 16;
let selector = '.font-zoom__item';

function Size(fontSize, selector){
	if(localStorage.getItem('font-size')){
	fontSize = localStorage.getItem('font-size');
}
document.querySelector(selector).textContent = fontSize;
document.body.style.fontSize = fontSize + 'px';
document.getElementById('str_size_1').onclick = () => {
	fontSize++;
	localStorage.setItem('font-size', fontSize);
	document.querySelector(selector).textContent = fontSize;
	document.body.style.fontSize = fontSize + 'px';
}

document.getElementById('str_size_2').onclick = () => {
	fontSize--;
	localStorage.setItem('font-size', fontSize);
	document.querySelector('.font-zoom__item').textContent = fontSize;
	document.body.style.fontSize = fontSize + 'px';
}
}

Size(fontSize, selector);


function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//видалення елементів

function Delete() {
    var node = document.getElementById("parent");
    let i = 1;
    
    if(node.firstChild){
        let interval =setInterval(function() {
          if(node.lastChild)
              node.removeChild(node.lastChild);
          else
              clearInterval(interval);
        }, 500);
    }

}


//заборона на перегляд коду
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            alert('not allowed');
            return false;
        } 
        if(e.keyCode === 123){
        	alert('not allowed');
            return false;
        }
        else {
            return true;
        }
};

document.oncontextmenu = cmenu; 
function cmenu() { 
	return false; 
}

//курсор і клавіша

window.addEventListener('mousemove', function(e){
	document.getElementById('x-value').textContent = e.x;
	document.getElementById('y-value').textContent = e.y;
})

window.addEventListener('keydown', (event) => {
	document.getElementById('key-value').textContent = event.keyCode + "(" + event.key + ")" ;
})

//зміна кольору елемента
	var div = document.getElementById('color');
	div.className = "def_bg";
	var bt_1 =  document.getElementById('bg_col_1');

	bt_1.onclick = function(){
		div.className = "bg_1";
	};

	var bt_2 =  document.getElementById('bg_col_2');
	bt_2.onclick = function(){
		div.className = "bg_2";
	};

	var bt_3 =  document.getElementById('bg_col_3');
	bt_3.onclick = function(){
		div.className = "bg_3";
	};

	var bt_4 =  document.getElementById('bg_col_4');
	bt_4.onclick = function(){
		div.className = "bg_4";
	};

	var bt_5 =  document.getElementById('bg_col_5');
	bt_5.onclick = function(){
		div.className = "bg_5";
	};

	//підказка
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



//Блок - 3
//заборона виділяти/копіювати текст
function killCopy(e){
	return false;
}
function reEnable(){
	return true;
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}
	
//зміна теми
if(!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme;
var  chk = document.getElementById('chk');
chk.innerText = document.body.classList.contains('dark') ? "Світла" : "Темна"

chk.onclick = () =>{
	document.body.classList.toggle('dark');
	chk.innerText = document.body.classList.contains('dark') ? "Світла" : "Темна"
	localStorage.theme = document.body.className || "light";
}





