//slider js file

const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const preBtn=document.querySelector(".prev-slide");
const nextBtn=document.querySelector(".next-slide");

let slideIndex=0;
slides[slideIndex].classList.add('active');

preBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);

function prevSlide()
{
    slides[slideIndex].classList.remove('active');
    slideIndex=(slideIndex===0) ? slides.length - 1 : slideIndex - 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform=`translateX(-${slideIndex * 100}%)`;
}
function nextSlide()
{
    slides[slideIndex].classList.remove('active');
    slideIndex=(slideIndex===slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform=`translateX(-${slideIndex * 100}%)`;
}

// form validation 

function myfun() {
    var name=document.getElementById('Name').value;
    var mail=document.getElementById('mail').value;
    var country=document.getElementById('country').value;
    var number=document.getElementById('number').value;
    var password=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;

    if(name== "")
    {
    document.getElementById('username').innerHTML= " **Please fill the Full Name";
    return false;
    }
    if((name.length<=2) || (name.length>20))
    {
        document.getElementById('username').innerHTML = "** Length should be between 2 and 20";
    return false;
    }
    if (!isNaN(name) ) {
                document.getElementById('username').innerHTML = "** only character allowed";
    return false;
    }

     if(mail=="")
    {
    document.getElementById('mailid').innerHTML = " ** Please fill the Email Address";
    return false;
    }
    if(mail.indexOf('@')<= 0)
    {
    document.getElementById('mailid').innerHTML = " ** @ invalid position.";
    return false;
    }

    if (!isNaN(mail)) {
                document.getElementById('mailid').innerHTML = " ** only valid format is allowed";
                return false;
            }
            if(country=="")
    {
    document.getElementById('countryname').innerHTML = " ** Please fill the Country Name";
    return false;
    }
    if (!isNaN(country)) {
                document.getElementById('countryname').innerHTML = " **Country Name";
                return false;
            }
            if(number=="")
    {
    document.getElementById('Number').innerHTML = "** Please fill the Number";
    return false;
    }
    if (isNaN(number)) {
    document.getElementById('Number').innerHTML = "only digits are allowed";
    return false;
    }
    if(number.length!=10)
     {
    document.getElementById('Number').innerHTML = "mobile number must be 10 digits only.";
    return false;
     }
    if(password=="")
    {
    document.getElementById('Password').innerHTML = " ** Please fill the Password";
    return false;
    }
    if (!isNaN(password)) {
                document.getElementById('Password').innerHTML = "** Password should strong and less than 20 character";
    return false;
            }
   if(password!=confirm)
   {
    document.getElementById('confirmpass').innerHTML = "** Password not matched.";
    return false;
   }

}
// for clear data

function clear()
{
    error=document.getElementsByClassName('formclear');
    for(let item of error)
    {
        item.innerHTML="";
    }
}


//slider

