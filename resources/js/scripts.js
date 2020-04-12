$(document).ready(
    function(){
        /*Sticky nav */
        $('.dangky').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset:'100px'
            }
        )
        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
    }
)

const CORRECT_EMAIL = 'admin@gmail.com';
const CORRECT_PASSWORD = '123';

var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit',onFormSubmit);
}else{
    formLogin.addEventListener('submit',onFormSubmit);
}

function onFormSubmit(e){
    var email = inputEmail.value;
    var password = inputPassword.value;

    if(email == CORRECT_EMAIL && password == CORRECT_PASSWORD ){
        alert('Đăng nhập thành công');
    }else{
        alert('Tài khoản hoặc mật khẩu sai');
    }
}

