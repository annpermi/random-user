const button = document.querySelector('.random');
const p = document.querySelector('.info-title');
const header = document.querySelector('.info-content');
const iconsList = document.querySelector('.icons');
const image = document.querySelector('.profile-image');
let userData;
let prevActive = iconsList.children[0];


button.addEventListener('click', function(){
    getData()
    setTimeout(function(){
        image.src = userData.picture.large;
        p.innerText = 'My name is';
        header.innerText = `${userData.name.first} ${userData.name.last}`;
    }, 500)
})

function getData(){
    fetch('https://randomuser.me/api/?gender=female')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return userData = data.results[0];
    })
    console.log(userData)
}

iconsList.addEventListener('click', function(event){
    let element = event.target.parentNode;
    
    changeClass(element)
    displayInfo(element.className)
})

function changeClass(currentEl){
    let newClass = prevActive.className.split(' ')[0];
    prevActive.className = newClass;
    currentEl.className += ' active';
    prevActive = currentEl;
}


function displayInfo(string){
    let className = string.includes('');
    switch(className)
    {
        case string.includes('name'):
            p.innerText = 'My name is';
            header.innerText = `${userData.name.first} ${userData.name.last}`;
            break;
        case string.includes('email'):
            p.innerText = 'My email is';
            header.innerText = `${userData.email}`;
            break;
        case string.includes('date'):
            p.innerText = 'My age is';
            header.innerText = `${userData.dob.age}`;
            break;
        case string.includes('address'):
            p.innerText = 'My address is';
            header.innerText = `${userData.location.street.name}`;
            break;
        case string.includes('phone'):
            p.innerText = 'My phone is';
            header.innerText = `${userData.phone}`;
            break;
        case string.includes('password'):
            p.innerText = 'My password is';
            header.innerText = `${userData.login.password}`;
            break;
        default:
        console.log('Wrong data')
    }
    // if(string.includes('name')){
    //     p.innerText = 'My name is';
    //     header.innerText = `${userData.name.first} ${userData.name.last}`
    // }else if(string.includes('email')){
    //     p.innerText = 'My email is';
    //     header.innerText = `${userData.email}`
    // } else if(string.includes('date')){
    //     p.innerText = 'My age is';
    //     header.innerText = `${userData.dob.age}`
    // } else if(string.includes('address')){
    //     p.innerText = 'My address is';
    //     header.innerText = `${userData.location.street.name}`
    // } else if(string.includes('phone')){
    //     p.innerText = 'My phone is';
    //     header.innerText = `${userData.phone}`
    // } else if(string.includes('password')){
    //     p.innerText = 'My password is';
    //     header.innerText = `${userData.login.password}`
    // }
}

