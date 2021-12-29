const express = require('express');
const server = express();

server.listen(2838);

var arr = [1,1,1,1,1]

server.use('/getRotate',(req,res)=>{
	//一等奖 10元红包    		1% 210 ～ 270
	//二等奖 500m流量         1.5% -30 ～ 30
	//三等奖 30元酒店红包      2% 30 ～ 90
	//四等奖 5元的流量卷		2.5% 90 ～ 150
	//五等奖 5m话费红包       3%	 270 ～ 330
	//没中奖 谢谢参与         150 ～ 210

	// 150 ～ 210 + （360*3）
res.setHeader('Access-Control-Allow-Origin','*');
goMove();
function goMove(){    
	console.log(arr);
	let rdm = Math.random() * 100;
//第一种算法：
	if(rdm>=0 && rdm <= 50){
		let rdm2 = Math.random() * 50;
		if(rdm2 >=0 && rdm2 <10){
			if(arr[0] == 0){
				goMove();      //使用递归的方法！！！！！
				return;
			}
			arr[0] = arr[0] - 1;
			let num = (210 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'恭喜您，中一等奖了',num:num})
		}
		else if(rdm2 >=10 && rdm2 <20){
			if(arr[1] == 0){
				goMove();
				return;
			}
			arr[1] = arr[1] - 1;
			let num = (-30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'恭喜您，中二等奖了',num:num})
		}
		else if(rdm2>=20 && rdm2 <30){
			if(arr[2] == 0){
				goMove();
				return;
			}
			arr[2] = arr[2] - 1;
			let num = (30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'恭喜您，中三等奖了',num:num})
		}
		else if(rdm2>=30 && rdm2 <40){
			if(arr[3] == 0){
				goMove();
				return;
			}
			arr[3] = arr[3] - 1;
			let num = (90 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'恭喜您，中四等奖了',num:num})
		}
		else if(rdm2>=40 && rdm2 <50){
			if(arr[4] == 0){
				goMove();
				return;
			}
			arr[4] = arr[4] - 1;
			let num = (270 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'恭喜您，中五等奖了',num:num})
		}
		//res.send({ok:1,msg:'中奖了'})
	}
	else{
		let num = (150 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'别气馁，谢谢参与',num:num})
	}
}


//第二种算法：
/*
	if(rdm>=0 && rdm <= 1){
		let num = (210 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'恭喜您，中一等奖了',num:num})
	}
	else if(rdm>1 && rdm <=2.5){
		let num = (-30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'恭喜您，中二等奖了',num:num})
	}
	else if(rdm>2.5 && rdm <=4.5){
		let num = (30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'恭喜您，中三等奖了',num:num})
	}
	else if(rdm>4.5 && rdm <=7){
		let num = (90 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'恭喜您，中四等奖了',num:num})
	}
	else if(rdm>7 && rdm <=10){
		let num = (270 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'恭喜您，中五等奖了',num:num})
	}
	else{
		let num = (150 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'别气馁，谢谢参与',num:num})
	}
*/
});

server.use('',express.static('./'))