let syncButton = document.getElementById("sync-preferences");
let onlineButton = document.getElementById("online-visibility");
let privacyButton = document.getElementById("privacy-control");
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

//* saves the information when re-freshing the browseer.
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
}

//* calls the function.
StorageSettings();