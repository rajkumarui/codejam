 $(document).ready(function() {  
  		$("#Action").click(function(e) {  			
   		var x = getInput();
   		Pancake();
  		});

  		//get input value then slipt it and stored in an array
  		function getInput(){
  			var InputVal = $("#Input").val();
  			var inputarray = InputVal.split("\n");  			
   			$("#inputLength span").text(inputarray.length);
   			$("#IterationCount span").text(inputarray[0]);
   			return inputarray;
  		}
  		
  		function Pancake() {  			
  			var sarray = getInput();
  			var IterationArray = sarray.splice(1,sarray.length-1);
  			var caseresult;
  			var OutputResult = [];
  			// console.log(IterationArray.length-1);
  			for(var k=0; k<IterationArray.length-1; k++){//number of iteration
  				var m = IterationArray[k];
  				var s = m.split('');
  				// console.log(s);
			    var n = s.length;
			    var count = 0;
			    for (var i = 1; i < n; i++) {
			      if (s[i] != s[i-1]) count++;
			    }
			    if (s[n-1] == '-') count++;
			    caseresult = count;
			    //console.log("Case #"+(k+1)+": " + caseresult);
	  			IterateFinalValue = "Case #"+(k+1)+": " + caseresult;
	  			OutputResult.push(IterateFinalValue);
			}
  			console.log(OutputResult);
  			var OutputStr = OutputResult.toString();
  			var res = OutputStr.replace(/,/g, '\n');
  			console.log(res);
  			$("#Output").val(res);
  			
  		}
    

  });


 