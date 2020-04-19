console.log("插件已加载！");


function step_to_Exam(){
    //如果不是听课界面，直接返回
    if(document.URL.indexOf("course_ware") == -1){
        return;
    }
    var btn_exam = $("#jrks");
    if (btn_exam && btn_exam.attr("href")!="#")
    {
        var btn_next = $('input.nxest');
        if(btn_next) {
            btn_next = btn_next[0];
            btn_next.click();
        }
        console.log("进行下一步答题！")
    }
}

function getWrangList(){
    let str = localStorage.getItem("wrang_list");
    if(!str || str==""){
        return [];
    }
    else{
        return str.split("|");
    }
}
function setWrangList(list){
    localStorage.setItem("wrang_list",list.join("|"));
}

function getAnswerList(){
    return JSON.parse(localStorage.getItem("answer_list"))
}

function setAnswerList(obj){
    localStorage.setItem("answer_list",JSON.stringify(obj))
}

function setCount(){
    count = number(localStorage.getItem("had_watch"));
    localStorage.setItem('had_watch',count + 1);
}

function answer_question(){
    //如果不是考试界面，直接返回
    if(document.URL.indexOf("exam.aspx") == -1){
        return;
    }
    var exam_content = $("#gvQuestion");
    if(exam_content)
    {
        let wrang_list = getWrangList();
        let answer_list = {};
        exam_content = exam_content[0];
        exam_title_list = exam_content.getElementsByClassName("tablestyle");
        exam_answer_list = exam_content.getElementsByClassName("tablestyle2");
        //假如错误答案列表为空，则全选A
        if(wrang_list.length == 0){
            for(let i = 0; i < exam_answer_list.length; i++){
                input_list = exam_answer_list[i].getElementsByTagName("input");
                title_text = exam_title_list[i].innerText.slice(2);
                answer_list[title_text] = 0;
                input_list[0].click();
            }
        }
        else
        {
            answer_list = getAnswerList();
            wrang_list.forEach(element => {
                for(let i = 0; i < exam_answer_list.length; i++){
                    input_list = exam_answer_list[i].getElementsByTagName("input");
                    title_text = exam_title_list[i].innerText.slice(2);
                    if(title_text == element){
                        answer_list[title_text] += 1;
                    }
                    btn_answer = input_list[answer_list[title_text]];
                    if(btn_answer){
                        btn_answer.click();
                    }
                    else{
                        answer_list[title_text]= 0;
                        input_list[answer_list[title_text]].click();
                    }
                }
            });
        }
        setAnswerList(answer_list);
        //交卷
        $("#btn_submit")[0].click();
    }
}

function pass_process(){
    wrang_list=[];
    answer_list={};
    setWrangList(wrang_list);
    setAnswerList(answer_list);
    var div_course_list = $(".case3");
    if(div_course_list){
        div_course_list = div_course_list[0];
        div_course_list = div_course_list.getElementsByTagName("dd");
        div_course_list = Array.from(div_course_list);
        div_course_list.forEach(element => {
            let input_state = element.getElementsByTagName("input")[0];
            if(input_state.value == '立即学习'){
               input_state.click();
               return;
            }
        });
    }
}

//设置错误列表
function fail_process(){
    //每次清空
    wrang_list=[];
    var div_wrang_list = $(".case3")[0];
    if(div_wrang_list){
        div_wrang_list = div_wrang_list.getElementsByTagName("dd");
        div_wrang_list = Array.from(div_wrang_list);
        div_wrang_list.forEach(element =>{
            wrang_list.push(element.getAttribute("title"));
        });
        setWrangList(wrang_list);
        $("input.bule")[0].click();
    }
}

function start_next_course(){
    //如果不是考试结果界面，直接返回
    
    if(document.URL.indexOf("exam_result.aspx") == -1){
        return;
    }
    var exam_result = $(".case4")[0].innerText;
    if(exam_result.indexOf("考试没过")==-1){
        pass_process();
    }
    else{
        fail_process();
    }
}


//进入答题
setInterval(step_to_Exam,6000);
//答题
setInterval(answer_question,6000);

//开始下一课
setInterval(start_next_course,6000);


