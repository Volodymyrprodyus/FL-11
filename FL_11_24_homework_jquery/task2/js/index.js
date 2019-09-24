

$(document).ready(function()  {
  
  $.fn.todolist = function () { 

    'use strict'

    const $list = $(".list");
    const $input = $("#add-input");
    const $add = $("#add-submit");
 
    $list.html(localStorage.getItem('listItems'));

    $add.click(function(){
      const toAdd = $input.val();
        $('ol').append('<li>' + '<span>' + toAdd + '</span>' + '<div>' + '<button>Mark as done</button>' +'<button>Remove</button>' + '</div>' + '</li>');
        $('span').addClass( "item-text" );
        $("button:contains('Mark as done')").addClass( "item-done" );
        $("button:contains('Remove')").addClass( "item-remove" );
        $('li').addClass( "item" );
        $('.item-remove').closest("div").addClass( "item-buttons" );
        localStorage.setItem('listItems', $list.html());
    });
    
     
    $input.keyup(function(event){
      if(event.keyCode === 13){
        $add.click();
      }         
    });
    
    
    $(document).on('dblclick','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');  
      localStorage.setItem('listItems', $list.html());
    });
    

    $(document).on('click', '.item-done', function(){
      $(this).closest('li').find('.item-text').addClass( "done" ).show('slow');  
      localStorage.setItem('listItems', $list.html());  
    });
    

    $(document).on('click', '.item-remove',
      function(){
        $(this.closest('li')).toggleClass('strike').fadeOut('slow'); 
        localStorage.setItem('listItems', $list.html());  
    });
    

    $input.focus(function() {
      $(this).val('');
    }); 
  }

  $('body').todolist();

});

