
//an example of a json data source
function getJsonData(){
	var data = [{"prog_lang":"javascript"},{"prog_lang":"jquery"},{"prog_lang":"actionscript"},{"prog_lang":"angularjs"},{"prog_lang":"reactjs"},{"prog_lang":"typescript"},{"prog_lang":"nodejs"}]
	var result = data.map(function(val) {
	  return val.prog_lang;
	}).join(',');
	return result;
}


//Function clears div then prints all that matches in a loop
function printList(array_list, search_val) {
$('#auto-list').empty();

   var total_results = 0;
  for (var i = 0; i < array_list.length; i++) {
		$("#auto-list").show();
  
		if (array_list[i].toLowerCase().indexOf(search_val.toLowerCase().trim()) >= 0){
			$('#auto-list').append("<a href='#'><div class='card-body' id='"+array_list[i]+"'>"+array_list[i]+"</div></a>");
			total_results = parseInt(total_results) + 1;
		}
	}
	
	//If nothing found
	if(total_results == 0){
		$('#auto-list').append("<div class='card-body'>No results found.</div>");
	}
}


//Clears and hide result div
function resetAll(){
	$('#auto-list').empty();
	$("#auto-list").hide();
}


//Comma separated data source
var dataSource = "c++, c#, python, swift, kotlin, java, coldfusion, asp, ruby, rust, php, perl, pascal, pearl, scala"; 
//var dataSource = getJsonData(); //Data from json. See: /auto-complete/js/auto-complete.js

//convert data to array
var dataArray = dataSource.trim().split(","); 


$(document).ready(function () {
	$("#auto-list").hide();
	
	//Called when input is the the field. 0.5 sec delay
	$("#prog-name").keyup(function() {
		var searchVal = $("#prog-name").val();
		
		setTimeout(function(){
			if(searchVal.trim() != ""){
				printList(dataArray, searchVal);
			}
			else{
				resetAll();
			}
		}, 500);
		
	});
});

//Close results when you click outside
$(document).on('click', function (e) {
    if ($(e.target).closest("#auto-list").length === 0) {
        resetAll();
    }
});
