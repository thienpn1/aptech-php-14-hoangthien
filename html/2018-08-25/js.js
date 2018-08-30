
function load() {
    var x = new XMLHttpRequest();
    var btn = document.getElementById('btn1')
    x.onreadystatechange =function () {
        if (this.readyState ==4) {
           
            var data=JSON.parse(x.response);
            render(data);
            
        }
      }
      x.open("GET", "data.json", true);
      x.send(); 

}
function render(params) {
    //console.log(params);
    
    // $('#tbl').append('<thead class="thead-dark" id="cottieude">');
    // $('#cottieude').append('<tr id="tieude">');
    // $('#tieude').append('  <th class="text-center">Id</th>');
    // $('#tieude').append('  <th class="text-center">Name</th>');
    // $('#tieude').append('  <th class="text-center">Email</th>');
    params.users.forEach(element => {
        // $('#tbl').append('<tr id=hang_'+element.id+'>');
        // $('#hang_'+element.id).append('<td class="text-center">'+element.id+'</td>');
        // $('#hang_'+element.id).append('<td class="text-center">'+element.name+'</td>');
        // $('#hang_'+element.id).append('<td class="text-center">'+element.email+'</td>');
        var temp = '<tr id=hang_'+element.id+'>'+'<td class="text-center">'+element.id+'</td>'+'<td class="text-center">'+element.name+'</td>'+'<td class="text-center">'+element.email+'</td>'+'</tr>'
        $(temp).appendTo('#tbl_body');
       
     });
//   document.write('</table>');
    
}