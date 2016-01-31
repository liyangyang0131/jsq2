window.onload=function(){
	var sc = document.getElementById('screen'),
		num = document.getElementsByClassName('num'),
		oprator = document.getElementsByClassName('oprator'),
		rs = document.getElementById('result'),
		ac = document.getElementById('ac'),
		oprator2 = document.getElementsByClassName('oprator2'),
		pai = document.getElementById('pai'),
		two = document.getElementById('two');
	var firstNumber='',secondNumber='',fuhao='',ab='';
	var time = document.getElementById('time'),
		isSame = document.getElementById('isSame'),
		nd = document.getElementById('nd');
	var mc = document.getElementById('mc'),
		mjia = document.getElementById('m+'),
		mjian = document.getElementById('m-'),
		mr = document.getElementById('mr'),
		change = document.getElementById('change'),
		left = document.getElementById('left'),
		right = document.getElementById('right');
	var storNum = '',storResult;

	var setOff = true;
	var setOff2 = true;
	mr.onclick = function(){
		this.style.color = '#ff6700';
		storNum = sc.innerHTML;
	};
	mjia.onclick = function(){
		if(setOff){
			if(!storResult&&storResult!=0){
				storResult = Number(storNum);
			}
			setOff = false;
		}
		storResult += Number(storNum);
		sc.innerHTML = storResult;
	};
	mjian.onclick = function(){
		if(setOff2){
			if(!storResult&&storResult!=0){
				storResult = Number(storNum);
			}
			setOff2 = false;
		}
		storResult -= Number(storNum);
		sc.innerHTML = storResult;
	};
	mc.onclick = function(){
		storNum = '';
		firstNumber = sc.innerHTML;
		mr.style.color = '#fff';
	};
	
	var timeFn = function(){
		var day = new Date();
		if( day.getMinutes()<10 ){
			time.innerHTML = day.getHours()+':0'+day.getMinutes();
		}
		else{
			time.innerHTML = day.getHours()+':'+day.getMinutes();
		}
	};
	timeFn();
	setInterval(timeFn,1000);

	var fn = function(){
		if(fuhao == '+'){
			firstNumber = Number(firstNumber) + Number(secondNumber);
			sc.innerHTML = firstNumber;
		}
		if(fuhao == '-'){
			firstNumber = Number(firstNumber) - Number(secondNumber);
			sc.innerHTML = firstNumber;
		}
		if(fuhao == '×'){
			firstNumber = Number(firstNumber) * Number(secondNumber);
			sc.innerHTML = firstNumber;
		}
		if(fuhao == '÷'){
			firstNumber = Number(firstNumber) / Number(secondNumber);
			sc.innerHTML = firstNumber;
		}
		if(fuhao == 'x^y'){
			firstNumber = Math.pow( Number(firstNumber),Number(secondNumber) );
			sc.innerHTML = firstNumber;
		}
		if(fuhao == 'y√x'){
			firstNumber = Math.sqrt( Number(firstNumber),Number(secondNumber) );
			sc.innerHTML = firstNumber;
		}
		if(fuhao == 'EE'){
			firstNumber = Number(firstNumber)*Math.pow(10,Number(secondNumber));
			sc.innerHTML = firstNumber;
		}
	}

	for(var i = 0;i<oprator.length;i++){
		oprator[i].index=i;
		oprator[i].onmousedown=function(e){
			e.preventDefault();
			this.style.webkitTransform = 'scale(0.9,0.9)';
			if(firstNumber != '' && fuhao == ''){
				fuhao = this.innerHTML.trim();
			}
			else{
				fn();
				fuhao = this.innerHTML.trim();
				secondNumber='';
			}	
		}
		oprator[i].onmouseup = function(){
			this.style.webkitTransform = 'scale(1,1)';
		};
	}

	for(var i = 0;i<num.length;i++){
		num[i].onclick=function(){
			if(fuhao == ''){
				if( this.innerHTML == '.' && firstNumber.indexOf('.') != -1 || this.innerHTML=='.' && firstNumber == ''){
					return null;
				}
				firstNumber += this.innerHTML;
				sc.innerHTML = firstNumber;
				if(firstNumber == '00'){
					firstNumber = this.innerHTML;
					sc.innerHTML = firstNumber;
				}
				if(firstNumber == '01'||firstNumber == '02'||firstNumber == '03'||firstNumber == '04'||firstNumber == '05'||firstNumber == '06'||firstNumber == '07'||firstNumber == '08'||firstNumber == '09') {
					firstNumber = this.innerHTML;
					sc.innerHTML = firstNumber;
				}
			}
			else{
				if( this.innerHTML == '.' && secondNumber.indexOf('.') != -1 || this.innerHTML=='.' && secondNumber == ''){
					return null;
				}
				secondNumber += this.innerHTML;
				sc.innerHTML = secondNumber;
				if(secondNumber == '00'){
					secondNumber = this.innerHTML;
					sc.innerHTML = secondNumber;
				}
				if(secondNumber == '01'||secondNumber == '02'||secondNumber == '03'||secondNumber == '04'||secondNumber == '05'||secondNumber == '06'||secondNumber == '07'||secondNumber == '08'||secondNumber == '09') {
					secondNumber = this.innerHTML;
					sc.innerHTML = secondNumber;
				}
			}
		}
		num[i].onmousedown = function(e){
			e.preventDefault();
		};
	}
	ac.onmousedown=function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		sc.innerHTML = 0;
		firstNumber = '';
		secondNumber= '';
		fuhao = '';
	};
	ac.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};
	rs.onmousedown = function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		fn();
		fuhao = '';
		secondNumber = '';
	}
	rs.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};
	var fuhao2;
	for(var i = 0;i<oprator2.length;i++){
		oprator2[i].onclick=function(){
			if(fuhao == ''){
				fuhao2 = this.innerHTML.trim();
				if(fuhao2 == '%'){
					firstNumber =  Number(firstNumber) /100;
					sc.innerHTML = firstNumber;
				}
				if(fuhao2 == 'x^-1'){
					if(firstNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						firstNumber = 1 / Number(firstNumber);
						sc.innerHTML = firstNumber;
					} 
				}
				if(fuhao2 == 'x^2'){
					firstNumber = Math.pow( Number(firstNumber),2 );
					sc.innerHTML = firstNumber;
				}
				if(fuhao2 == 'x^3'){
					firstNumber = Math.pow( Number(firstNumber),3 );
					sc.innerHTML = firstNumber;
				}
				if(fuhao2 == 'x!'){
					var result = 1;
					for(var j = 1;j<=firstNumber;j++){
						result *= j;
					}
					firstNumber = result;
					sc.innerHTML = firstNumber;
				}
				if(fuhao2 == '√'){
					firstNumber = Math.sqrt( Number(firstNumber) );
					sc.innerHTML = firstNumber;
				}
				if(fuhao2 == 'log'){
					if(firstNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						firstNumber = Math.log10( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'sin'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.sin( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.sin( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'cos'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.cos( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.cos( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'tan'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.tan( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.tan( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'ln'){
					if(firstNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						firstNumber = Math.log( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'sinh'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.sinh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.sinh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'cosh'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.cosh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.cosh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'tanh'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.tanh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.tanh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'e^x'){
					firstNumber = Math.pow( Math.E,Number(firstNumber) );
					sc.innerHTML = firstNumber;	
				}


				if(fuhao2 == 'sin^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.sin( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.sin( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'cos^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.cos( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.cos( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'tan^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.tan( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.tan( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'log^2'){
					if(firstNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						firstNumber = Math.log2( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'sinh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.sinh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.sinh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'cosh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.cosh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.cosh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'tanh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.tanh( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.tanh( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == '2^x'){
					firstNumber = Math.pow( 2,Number(firstNumber) );
					sc.innerHTML = firstNumber;	
				}	
				if(fuhao2 == 'Rand'){
					firstNumber = Math.random();
					sc.innerHTML = firstNumber;
				}
			}
			else{
				fuhao2 = this.innerHTML.trim();
				if(fuhao2 == '%'){
					secondNumber =  Number(secondNumber) /100;
					sc.innerHTML = secondNumber;
				}
				if(fuhao2 == 'x^-1'){
					if(secondNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						secondNumber = 1 / Number(secondNumber);
						sc.innerHTML = secondNumber;
					}
					 
				}
				if(fuhao2 == 'x^2'){
					secondNumber = Math.pow( Number(secondNumber),2 );
					sc.innerHTML = secondNumber;
				}
				if(fuhao2 == 'x^3'){
					secondNumber = Math.pow( Number(secondNumber),3 );
					sc.innerHTML = secondNumber;
				}
				if(fuhao2 == 'x!'){
					var result = 1;
					for(var j = 1;j<=secondNumber;j++){
						result *= j;
					}
					secondNumber = result;
					sc.innerHTML = secondNumber;
				}
				if(fuhao2 == '√'){
					secondNumber = Math.sqrt( Number(secondNumber) );
					sc.innerHTML = secondNumber;
				}
				if(fuhao2 == 'log'){
					if(secondNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						secondNumber = Math.log10( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'sin'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = Math.sin( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = Math.sin( Number(secondNumber)*Math.PI/180);
						sc.innerHTML = secondNumber;
					}
				}
				if(fuhao2 == 'cos'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = Math.cos( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = Math.cos( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
					
				}
				if(fuhao2 == 'tan'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = Math.tan( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = Math.tan( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'ln'){
					if(secondNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						secondNumber = Math.log( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'sinh'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = Math.sinh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = Math.sinh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'cosh'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = Math.cosh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = Math.cosh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'tanh'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = Math.tanh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = Math.tanh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'e^x'){
					secondNumber = Math.pow( Math.E,Number(secondNumber) );
					sc.innerHTML = secondNumber;	
				}


				if(fuhao2 == 'sin^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = 1/Math.sin( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = 1/Math.sin( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
				}
				if(fuhao2 == 'cos^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						firstNumber = 1/Math.cos( Number(firstNumber) );
						sc.innerHTML = firstNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						firstNumber = 1/Math.cos( Number(firstNumber)*Math.PI/180 );
						sc.innerHTML = firstNumber;
					}
				}
				if(fuhao2 == 'tan^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = 1/Math.tan( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = 1/Math.tan( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'log^2'){
					if(secondNumber == ''){
						sc.innerHTML = '出错';
					}
					else{
						secondNumber = Math.log2( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'sinh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber =1/ Math.sinh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber =1/ Math.sinh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'cosh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = 1/Math.cosh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = 1/Math.cosh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == 'tanh^-1'){
					if(jiaodu.innerHTML == 'Rad'){
						secondNumber = 1/Math.tanh( Number(secondNumber) );
						sc.innerHTML = secondNumber;
					}
					if(jiaodu.innerHTML == 'Deg'){
						secondNumber = 1/Math.tanh( Number(secondNumber)*Math.PI/180 );
						sc.innerHTML = secondNumber;
					}
					
				}
				if(fuhao2 == '2^x'){
					secondNumber = Math.pow( 2,Number(secondNumber) );
					sc.innerHTML = secondNumber;	
				}		
				if(fuhao2 == 'Rand'){
					secondNumber = Math.random();
					sc.innerHTML = secondNumber;
				}
				// console.log(secondNumber);
			}
		}
		oprator2[i].onmousedown = function(e){
			e.preventDefault();
		}
	}
	var nd_offSet = true; 
	nd.onclick = function(){
		if(nd_offSet){
			this.style.color = '#ff6700';
			change.style.display = 'block';
			nd_offSet = false;
		}
		else{
			this.style.color = '#333';
			change.style.display = 'none';
			nd_offSet = true;
		}
		
	};
	pai.onclick = function(){
		if(firstNumber == ''){
			firstNumber = Math.PI;
			sc.innerHTML = firstNumber;
		}
		else{
			secondNumber = Math.PI;
			sc.innerHTML = secondNumber;
		}
	}
	pai.onmousedown = function(e){
		e.preventDefault();
	};
	// two.onclick = function(){
	// 	// if(firstNumber == ''){
	// 		if(fuhao == 'EE'){
	// 			firstNumber = Number(firstNumber)*Math.pow(10,Number(secondNumber));
	// 			sc.innerHTML = firstNumber;
	// 		// }
	// 	}else{
	// 		secondNumber = Number(firstNumber)*Math.pow(10,Number(secondNumber));
	// 		sc.innerHTML = secondNumber;
	// 	}
	// }


	//角度转换
	var jiaodu_offSet = true;
	jiaodu.onclick = function(){
		if(jiaodu_offSet){
			this.innerHTML = 'Deg';
			jiaodu_offSet = false;
		}
		else{
			this.innerHTML = 'Rad';
			jiaodu_offSet = true;
		}
	};
	//正负号
	var kaiguan = true;
	isSame.onmousedown= function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		if( kaiguan ){
			if(fuhao == ''){
				firstNumber = firstNumber*(-1);
				sc.innerHTML = firstNumber;
			}else{
				secondNumber = secondNumber*(-1);
				sc.innerHTML = secondNumber;
			}
			kaiguan = false;
		}
		else{
			if(fuhao == ''){
				firstNumber = firstNumber*(-1);
				sc.innerHTML = firstNumber;
			}else{
				secondNumber = secondNumber*(-1); 
				sc.innerHTML = secondNumber;
			}
		}
	};
	isSame.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};
	//括号
	left.onclick = function(){

	}












	
	//滑动转换页面
	document.onmousedown = function(e){
		var xx1 = e.clientX;
		document.onmousemove = function(e){
			var xx2 = e.clientX;
			if( (xx2-xx1) > 100){
				location.assign('../计算器/index.html');
			}
		}
	};
	document.onmouseup = function(){
		document.onmousemove = null;
	}

};