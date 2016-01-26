 function fun(){
 	var a = 1;
 	console.log(a);
 	function fun1(){
 		var b = 2;
 		console.log(a,b);
 		function fun3(){
 			var c = 3;
 			console.log(a,b,c);
 		}
 		fun3();
 	}
 	fun1();
 }

 fun();