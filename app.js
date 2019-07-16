const data = [
  {
    name: 'John Doe',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/42.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  }
];

const profiles = profileIterator(data);

nextProfiles();

//add evete listenner 
document.getElementById('next').addEventListener('click',nextProfiles);

//function next profiles 
function nextProfiles(){
const profilDisplay = document.getElementById('profileDisplay'),
      imageDisplay = document.getElementById('imageDisplay'),  
      nextProfil = profiles.next().value;

      if(nextProfil !== undefined){
          profilDisplay.innerHTML =`
            <ul class='list-group'>
              <li class='list-group-item'> Name : ${nextProfil.name} </li>
              <li class='list-group-item'> Age :  ${nextProfil.age}</li>
              <li class='list-group-item'> Gender :  ${nextProfil.gender}</li>
              <li class='list-group-item'> Looking for :  ${nextProfil.gender}</li>
              <li class='list-group-item'> Location :  ${nextProfil.gender}</li>
            </ul>`;
            imageDisplay.innerHTML = `<img src="${nextProfil.image}" class='img-fluid' >`;
      }else{
        window.location.reload();
      }


}
//profile iterator 
function profileIterator(profiles){
  let nextIndex = 0;
  
  return {
    next : function(){
      return (nextIndex < profiles.length) ?
      { value : profiles[nextIndex++], done:false} :
      { done: true}
    }
  }
  
}
