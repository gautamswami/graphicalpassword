function showLogin(){
        document.getElementById('login-container').classList.toggle('showLogin')
//         let x = document.getElementById('signup-container');
//    if(x.className='showSignup'){
//         console.log('hello')
//    }
        
   
}
function closL(){
    document.getElementById('login-container').classList.toggle('showLogin')

}
function showSignup(){
    document.getElementById('signup-container').classList.toggle('showSignup')
    // document.getElementById('login-container').classList.toggle('showLogin')
    document.getElementById('login-container').classList.toggle('hideLogin')
 
}
function closS(){
document.getElementById('signup-container').classList.toggle('showSignup')

}
function displayRadioValue() {
        var ele = document.getElementsByName('fruit');
         var ele1 =  document.getElementsByName('fruit1');
         var ele2 =  document.getElementsByName('fruit2');
         
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked  )
            document.getElementById("result").innerHTML
                    = "SELECTED FROM BOX 1: "+ele[i].value ;
        }
        for(i = 0; i < ele1.length; i++) {
            if(ele1[i].checked  )
            document.getElementById("result1").innerHTML
                    = "SELECTED FROM BOX 2: "+ele1[i].value ;
        }
        for(i = 0; i < ele2.length; i++) {
            if(ele2[i].checked  )
            document.getElementById("result2").innerHTML
                    = "SELECTED FROM BOX 3: "+ele2[i].value ;
        }
       
    }

