try{
    url = 'http://127.0.0.1:5000/info'
    $.get(url,function(data,status){
        console.log("Data: " + data + "  Status: " + status);
        data = data.replace(/'/g,'"');
        return_data = $.parseJSON(data);
        console.log(return_data.name);
    });
    url = 'http://127.0.0.1:5000/setValue'
    $.ajax({
        type: 'POST',
        url: url,
        data: 'this is chrome extension post data!',
        success: postCallback
    });
    function postCallback(data,status){
        console.log("this is post back Data: " + data + "Status: " + status);
    }
}catch(e){
    console.log(e)
}