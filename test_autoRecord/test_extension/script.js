console.log('start test!')
try{
    $.get("http://127.0.0.1:5000/info",function(data,status){
        alert("Data: " + data + "nStatus: " + status);
        data = data.replace(/'/g,'"');
        return_data = $.parseJSON(data);
        console.log(return_data.name);
    });
}catch(e){
    console.log(e)
}