function getinfo(){
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
}
function insertNode(){
    s_btn_wr = $(".s_btn_wr")[0];
    input = s_btn_wr.firstElementChild.cloneNode();
    input.value ='看一下';
    s_btn_wr.appendChild(input);
}

$( document ).ready(function() {
    insertNode();
    getinfo();
});