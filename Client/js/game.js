$(function() {
    $("#gameboard").append('<tr class="facitrow"><td></td><td></td><td></td><td></td><td></td></tr>');
    var i, j;
    for(i = 0; i<12; i++) {
        var row = $('<tr class="row"/>');
        for (j = 0; j<4; j++)
            row.append($('<td class="pinhole"/>'));
        row.append($('<td class="check">check</td>'));
        $("#gameboard").append(row);
    }
    
    $("#gameboard_opponent").append('<tr class="facitrow"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');
    for(i = 0; i<12; i++)
        $("#gameboard_opponent").append('<tr class="row'+i+'"><td class="col0"></td><td class="col1"></td><td class="col2"></td><td class="col3"></td><td class="col4">check</td></tr>');

    $( "#palette div" ).draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone"
    });     


    $( "td" ).disableSelection();

    $( "#gameboard td.pinhole" ).droppable({
        accept: "#palette div, #gameboard div",
        drop: function( event, ui ) {
            if (ui.helper.parent()[0] != $(this)[0])
                $(this).empty();

            var c;
            if(ui.draggable[0] == ui.helper[0])
            {
                c = ui.helper;
            }
            else
            {
                c = ui.draggable.clone();

                c.draggable({
                    revert: "invalid",
                    containment: $(this).parent(),
                    helper: function() {
                        // hack for jquery ui draggable to behave
                        var pos = $(this).offset();
                        pos.top -= 1; // cell margin?
                        pos.left -= 1;
                        pos.position = 'absolute';
                        $(this).css(pos);
                        return this;
                    }
                });
            }

            // Reset position
            c.removeAttr("style");
            c.appendTo(this);
        }
    });
});


