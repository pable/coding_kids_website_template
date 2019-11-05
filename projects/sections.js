function openSection(id){
    const element = document.getElementById(id);
    const selected = element.classList.contains('selected');
    if(selected){
        return;
    }
    const sections = document.getElementsByClassName('section');
    for(let i=0; i<sections.length; i++){
        sections[i].classList.remove('selected');
    }
    element.classList.add('selected');
}

const notLinks = document.getElementsByClassName('not-link');
for(let i = 0; i<notLinks.length; i++){
    notLinks[i].addEventListener('click', function(evt){
        evt.preventDefault();
    });
}
