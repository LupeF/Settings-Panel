let syncButton = document.getElementById("sync-preferences");
let onlineButton = document.getElementById("online-visibility");
let privacyButton = document.getElementById("privacy-control");
let darkButton = document.getElementById("dark-control");
let deleteBtn = document.getElementById("delete-btn");
let main = document.querySelector('main');
let deleteButton = document.getElementById("sync-preferences");
let modalWindow = document.getElementById('modal-window');

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


deleteBtn.addEventListener('click', (e)=>{
    if(modalWindow.style.display= "none"){
        modalWindow.style.display = "block";
        modalWindow.innerHTML =`
        <div class="modal-cont">
            <h2>Are You Sure you want to Delete Account?</h2>
            <input type="text" id="quit-input" placeholder="Type Delete" name="Delete input">
            <div class="cancel-btn-cont">
                <button id="ok-btn" type"button">OK</button>
                <button id="cancel-btn" type="button">Cancel</button>
            </div>
        </div>
    `;
    }
   
    let quitInput = document.getElementById('quit-input');
    let oKBtn = document.getElementById('ok-btn');
    let cancelBtn = document.getElementById('cancel-btn');
    oKBtn.addEventListener('click',(e)=>{
        let typedAnswer = quitInput.value.toLowerCase();
        if(typedAnswer === "delete"){
            modalWindow.innerHTML=`
            <div class="modal-two">
                <header>
                    <div class="closing-container">
                        <button class="close-btn">
                        <div class="close">Close</div>
                        </button>    
                    </div>
                </header>
                <div class="body-container">
                    <div>
                        <h2>Success!</h2>
                    </div>
                    <div>
                        <p>Create an account?</p>
                    </div>
                </div>   
            </div>
        `;
        //* calls the function.
        StorageSettings();
        } else if(typedAnswer === ""){
            alert("Type Delete");
        }
    })
    cancelBtn.addEventListener('click',(e)=>{
        quitInput.textContent = "";
        modalWindow.style.display="none";
    })
})


