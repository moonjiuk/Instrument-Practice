/*eslint no-undef: "off"*/

function doOpenCheck_root(chk){
    var obj = document.getElementsByName("root");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}

function doOpenCheck_codename(chk){
    var obj = document.getElementsByName("code_name");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}

function doOpenCheck_dominant(chk){
    var obj = document.getElementsByName("dominant");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}

function doOpenCheck_tension(chk){
    var obj = document.getElementsByName("tension");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}