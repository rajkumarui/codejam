 $(document).ready(function() {  
  		$("#Action").click(function(e) {  			
   		var x = getInput();
   		CountingSheep();
  		});

  		//get input value then slipt it and stored in an array
  		function getInput(){
  			var InputVal = $("#Input").val();
  			var inputarray = InputVal.split("\n");  			
   			$("#inputLength span").text(inputarray.length);
   			$("#IterationCount span").text(inputarray[0]);
   			return inputarray;
  		}
  		
  		function CountingSheep() {
  			var temp = getInput();
  			var parentloop = temp[0];
  			var x = temp.slice(1, temp.length-1);  
  			var OutputResult =[];
  			x.forEach( function(element, index) {
  				var sheepasleepcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  				var sheepasleep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  				var temparray = [];
  				var calulatedArray = [];
  				var p = 0; 
  				var caseresult;
  				var IterateFinalValue;
  				if(element>0){				
	  				while(sheepasleepcount.length>0){
	  						p++;
	  						var Sheepcounting = element * p; 
	  						calulatedArray.push(Sheepcounting);
		  					temparray.push(Sheepcounting); 
		  				for(var i=0; i<sheepasleep.length ; i++){

		  					for(var j=0; j<temparray.length; j++){
		  						var xm = sheepasleep[i];
		  						var ym = temparray[j];
		  						var kk = xm.toString();
		  						var ss = ym.toString(); 
		  						if(ss.includes(kk)){
		  							var ind = sheepasleepcount.indexOf(xm);    // <-- Not supported in <IE9
									if (ind !== -1) {
									    sheepasleepcount.splice(ind, 1);
									}
		  						}
		  					} 	
		  				}		  				
		  				if(caseresult > 8007199204740992){
		  					console.log("infinite");
		  					break;
		  				}		  				
	  				}//while ends
	  				caseresult = calulatedArray[calulatedArray.length-1];
  				}else {
  					caseresult = "INSOMNIA";
  				}
  				
	  			//console.log("Case #"+(index+1)+": " + caseresult);
	  			IterateFinalValue = "Case #"+(index+1)+": " + caseresult;
	  			OutputResult.push(IterateFinalValue);

  			});
  			// console.log(OutputResult);
  			var OutputStr = OutputResult.toString();
  			var res = OutputStr.replace(/,/g, '\n');
  			console.log(res);
  			$("#Output").val(res);
  			
  		}
    

  });


 