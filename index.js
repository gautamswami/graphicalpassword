function displayRadioValue() {
        var ele = document.getElementsByName('fruit');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            document.getElementById("result").innerHTML
                    = "SELECTED : "+ele[i].value;
        }
    }
