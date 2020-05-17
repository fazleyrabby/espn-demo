const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const close = document.getElementById('close');

hamburger.addEventListener('click', e=>{
    navigation.classList.add('active');
})

close.addEventListener('click', e=>{
    navigation.classList.remove('active');
})