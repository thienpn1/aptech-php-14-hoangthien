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
    console.log(params);
    
    document.write('<table class="table">');
    document.write('<thead class="thead-dark">');
    document.write('<tr>');
    document.write('  <th>Id</th>');
    document.write('  <th>Name</th>');
    document.write('  <th>Email</th>');
    document.write('</tr>');
    document.write('</thead>');
    params.users.forEach(element => {
        
        document.write('<tr>');
        document.write('<td>'+element.id+'</td>');
        document.write('<td>'+element.name+'</td>');
        document.write('<td>'+element.email+'</td>');
        document.write('</tr>');
    });
  document.write('</table>');
    
}