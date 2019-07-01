console.log("开始执行");

function close_alert(){
    a_link=$("a.l-btn.l-btn-small");
    for(i=0;i<a_link.length;i++){
        a_link[i].click();
    }
    console.log("close_alert");
}

function auto_click(){
    radiolist = document.getElementsByName("panduan");
    sumit= document.getElementsByClassName("reply-sub")
    panel = document.getElementsByClassName("panel window");
    v = document.getElementsByTagName("video");
    player= v[0];
    if(panel.length > 0){
        panel_style=panel[0].style.display;
    }
    if(radiolist[0] && player.paused  && panel_style != 'none'){
        radiolist[0].checked=true;
        sumit[0].click();
        setTimeout(close_alert,3000);
    }
    console.log("auto_click");
}

setInterval(auto_click,60000);

function auto_play(){
    v = document.getElementsByTagName("video");
    player= v[0];
    progress = document.getElementsByClassName("learnpercent");
    blprogress = progress[0].innerText.includes("已完成");
    if(!blprogress && player.paused){
       document.getElementsByClassName("prism-big-play-btn")[0].click();
       document.getElementsByClassName("prism-big-play-btn")[0].click();
       document.getElementsByClassName("prism-big-play-btn")[0].click();
    }
    console.log("auto_play");
}

function auto_start(){
    v = document.getElementsByTagName("video");
    player= v[0];
    playlist = $("li.level1");
    for(i=0;i<playlist.length;i++){
        if(playlist[i].innerText.includes("未开始点击学习") || playlist[i].innerText.includes("未完成点击学习")){
            if(!player || player.paused){
                console.log(i+playlist[i].innerText);
                playlist[i].getElementsByTagName('a')[0].click();
                //setTimeout(auto_play,5000);
            }
            break;
        }
    }
    console.log("auto_start");
}

setInterval(auto_play,120000);
setInterval(auto_start,240000);