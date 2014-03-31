$(document).ready(function() {
	$("#gameboard").append('<tr class="facitrow"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');
	var i;
	for(i = 0; i<12; i++)
		$("#gameboard").append('<tr class="row row'+i+'"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');
	
	$("#gameboard_opponent").append('<tr class="facitrow"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');
	for(i = 0; i<12; i++)
		$("#gameboard_opponent").append('<tr class="row'+i+'"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');

 	$( "#palette div" ).draggable({
	  cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone"
    }); 	


 	$( "td" ).disableSelection();

 	$( "#gameboard td" ).droppable({
    	accept: "#palette div, #gameboard div",
    	drop: function( event, ui ) {
    		$(this).empty();
    		var c ;
    		if(ui.draggable == ui.helper)
    			c = ui.helper;
    		else{
    			c = ui.helper.clone();
        		c.draggable({
		  			//cancel: "a.ui-icon", // clicking an icon won't initiate dragging
	      			revert: "invalid", // when not dropped, the item will revert back to its initial position
	      			containment: "document"
      			});
    		}		
        	c.removeAttr("style");
        	// c.removeClass("ui-draggable-dragging");
        	c.appendTo(this);

      	}
    });

});


