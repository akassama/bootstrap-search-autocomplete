
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
