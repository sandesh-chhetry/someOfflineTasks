// // for display the pressed key in  the outout section
// const display = document.querySelector('.calculator_display')
// keys.addEventListener('click', e =>{
// 	if(e.target.matches('button')){
// 		const key = e.target
// 		const action = key.dataset.action
// 		const keyContent = key.textContent
// 		const displayedNum = display.textContent
// if(!action){
// 	if(displayedNum === '0'){
// 		display.textContent = keyContent
// 	}
// }
// 	}
// })

$(document).ready(function(){
	$(".btn1").click(function(){
		$(".sandesh").Tougle(2000);
	});
