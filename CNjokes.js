document.querySelector('.Button').addEventListener('click',getjokes);

function getjokes(e){
    console.log(getjokes);

    const jok=document.querySelector('input[type="number"]').value;

    const xhr=new XMLHttpRequest();
    
    xhr.open('GET',`http://api.icndb.com/jokes/random/${jok}`,true);
    
    xhr.onload=function(){
        
        if(this.status===200){
        //console.log(this.responseText);
    
        const joke2=JSON.parse(this.responseText);
        console.log(joke2);
       
       let outpt='';

       if(joke2.type==='success'){
           joke2.value.forEach(function(jokee){
               outpt +=`<li>${jokee.joke}</li>`;
               });
            }
               else
               {
                outpt += '<li>something went wrong </li>';
              }
              document.querySelector(".jokes").innerHTML=outpt;
       }
      
    } 
    xhr.send(); 

    e.preventDefault();
    
}
    
   
    


  
