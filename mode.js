function togglebtn(){
    const togglebtn=document.querySelector(".toggle_btn");
togglebtn.classList.toggle('right');
const icon=document.querySelector('i');
const title=document.querySelector('.title');

if(icon.classList.contains("fa-sun")){
    icon.classList.remove( "fa-sun" );
    icon.classList.add("fa-moon");
    document.body.style.backgroundColor="black";
    title.innerHTML="Dark Mode";
    title.style.color='white';
}
else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    document.body.style.backgroundColor="white";
    title.innerHTML = 'Light Mode';
    title.style.color='black';
}

}