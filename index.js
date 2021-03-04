// text = document.getElementById('hello').textContent;
// function speak_hello(){
//     var su;
//     let msg=document.getElementById('hello').textContent;
//     su = new SpeechSynthesisUtterance();
    
//     su.text = msg + "LONG LONG LONG LONG SENTENCE";
    
//     speechSynthesis.speak(su);
// }
// function pause_me(){
    
//     speechSynthesis.pause(su);
// }
// answers = ['var', 'Tesla'];
// function check_for_correct(num){
//     ca='input_'+num;
//     array=document.getElementsByClassName('input_'+num);
//     let para=document.getElementById('r'+num);
//     console.log(num);
//     console.log(para);
//     console.log(array);
//     for(i=0;i<array.length;i++){
//         console.log(array[i].checked);
//         if(array[i].checked==true){
//             para.innerHTML+=" Your answer is false answer";
//             para.style.visibility='visible';
//             return; 
//         }
       
//     }
//     para.innerHTML+=" Your answer is correct answer";
//     para.style.visibility='visible';
// }
// function Show(id_elem){
//     // console.log(id_elem);
//     let para = document.getElementById(id_elem);
//     // console.log(para);
//     para.style.visibility="visible";
//     // console.log("HELLO working test");
//     speak_this(para.innerText);

// }
function speak_this(content){
let m = new SpeechSynthesisUtterance();
m.text=content;
speechSynthesis.speak(m);
}
let answers=[4,1,3,2,4,2,2,3,2,4];
let final_score=0;
function submit(){
    let array=document.getElementsByTagName('input');
    let i=0;
    let j=0;
    let permission=confirm("Do you really want to submit");
    if(permission==true){
    for(i=0;i<array.length;i++){
        if(array[i].checked==true){
          
            if(answers[j]==array[i].value){
                final_score++;
            }
        }
        if(i%4==3){
            j++;
          
        }
    }
    let display_result=document.getElementById('result');
    display_result.innerHTML="Your score is ";
    // display_result.innerText="Your final score is";
    console.log(final_score);
    console.log(display_result.innerHTML);
    display_result.innerHTML+=`${final_score}`;
    display_result.innerHTML+="/"+(array.length/4);
    display_result.style.visibility='visible';
    let hidden_text=document.getElementsByClassName('know');
    console.log(hidden_text);
    for(let index=0;index<hidden_text.length;index++){
    hidden_text[index].style.visibility='visible';
    }
}
}
function speak_para(num){
    let para=document.getElementById('p'+`${num}`);
    para.style.visibility='visible';
    // console.log(para);
    speak_this(para.innerHTML);
}
