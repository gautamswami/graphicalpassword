function displayRadioValue() {
        var ele = document.getElementsByName('fruit');
         var ele1 =  document.getElementsByName('fruit1');
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
    }
