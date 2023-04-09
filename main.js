let menu=document.getElementById('menu-icon');
let navbar=document.getElementById('navbar');


menu.onclick = () => {
    navbar.classList.toggle('open');
    };

// Email JS
function validate(){
    let name=document.querySelector('.name');
    let email=document.querySelector('.email');
    let msg=document.querySelector('.message');
    let sendBtn=document.querySelector('.send-btn'); 


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value=="" || email.value=="" || msg.value==""){
            emptyerror();
            
        }else{
            sendemail(name.value, email.value, msg.value);
            success();
        }
    })
}

validate();

function sendemail(name, email, msg){
    
    emailjs.send("service_b12bu9t","template_j5vf8vq",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh No...",
        text: "Fields Can't Be Empty!",
        icon: "error",
      });     
}

function success(){
    swal({
        title: "Email Sent Successfully...",
        text: "You will be replied in 24 Hours!",
        icon: "success",
      });     
}

// Scroll Top
let scrollTop=document.querySelector('.scroll-top');
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active",window.scrollY >0);
})