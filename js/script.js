
$(document).ready(function() {{
var table = $('table');
var turn = $('.turn');
var count = 0; 
$('td').click(function(e){
    e.preventDefault();
    console.log()
    td = $(this);
    console.log(td.html());
if(td.html() ==='o'|| td.html() ==='x') {
       
    }
    else if(count%2) {td.append('x');
count++}
    else{td.append('o')
count++}
    
})
  }
});
