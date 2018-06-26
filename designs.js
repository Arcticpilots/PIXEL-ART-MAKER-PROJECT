// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function (){
		var color;
		color = $("#colorPicker").val();
		$("#colorPicker").change(function(){
				color = $(this).val() ;
		});

$("#sizePicker").submit(makeGrid);
//prevent the form from reloading 	after submit
$("#sizePicker").submit(function(e) {
    e.preventDefault();
});

function makeGrid() {

	if($('tbody').length > 0){
			$("tbody").remove();
	}
	
	var N = $("#inputHeight").val();   //Height of Grid
	var M= $("#inputWeight").val();  //Weight of Grid
	var table =  $('table');
	table.append('<tbody></tbody>');
	$("tbody").append(createTable(N,M));
	
	function createTable(line,col) { 
			T="";
			for(i=0;i<line;i++){
					var T =T+"<tr>";
					for(j=0;j<col;j++){
							T +="<td></td>";
					}
					T +="</tr>";
			}
			return T;
	}

}
 $('table').on('click', 'td', function(event) {
        $( this ).css('backgroundColor', color);
});
	
});