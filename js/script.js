let syncButton = document.getElementById("sync-preferences");
let onlineButton = document.getElementById("online-visibility");
let privacyButton = document.getElementById("privacy-control");
let darkButton = document.getElementById("dark-control");
let main = document.querySelector('main');
let deleteButton = document.getElementById("sync-preferences");


//* adds or removes local storage on click
syncButton.onclick = (e)=>{
    if(syncButton.checked){
        localStorage.setItem('syncSettings', syncButton.value);
    } else{
        localStorage.removeItem('syncSettings');
    }
}
onlineButton.onclick = (e)=>{
    if(onlineButton.checked){
        localStorage.setItem('onlineSettings', onlineButton.value);
    } else{
        localStorage.removeItem('onlineSettings');
    }
}

privacyButton.onclick = (e)=>{
    if(privacyButton.checked){
        localStorage.setItem('privacySettings', privacyButton.value);
    } else{
        localStorage.removeItem('privacySettings');
    }
}
darkButton.onclick = (e)=>{
    if(darkButton.checked){
        localStorage.setItem('darkSettings', darkButton.value);
        main.style.backgroundColor= 'black';
    } else{
        localStorage.removeItem('darkSettings');
        main.style.backgroundColor= '#FFFFFF';
    }
}

//* Function will save the information using local Storage when re-freshing the browser.
let StorageSettings = (e)=>{
    //! using getItem method
    if(localStorage.getItem('syncSettings') === 'on'){
        syncButton.checked = true;
    }
    //! using Dot notation using the key value stored
    if(localStorage.onlineSettings === 'on'){
        onlineButton.checked = true;
    }
    if(localStorage.privacySettings === 'on'){
        privacyButton.checked = true;
    }
    if(localStorage.darkSettings === 'on'){
        darkButton.checked = true;
    }
}


//* calls the function.
StorageSettings();