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
let SavedSettings = (e)=>{
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
// Function will reset and erase local storage
let deleteSettings = (e)=>{
    //! using getItem method
    if(localStorage.getItem('syncSettings') === 'on'){
        syncButton.checked = false;
        localStorage.removeItem('syncSettings');
    }
    //! using Dot notation using the key value stored
    if(localStorage.onlineSettings === 'on'){
        onlineButton.checked = false;
        localStorage.removeItem('onlineSettings');
    } 
    if(localStorage.privacySettings === 'on'){
        privacyButton.checked = false;
        localStorage.removeItem('privacySettings')
    } 
    if(localStorage.darkSettings === 'on'){
        darkButton.checked = false;
        localStorage.removeItem('darkSettings')
    } 
}

SavedSettings();
// inserts html dynamically when clicked on delete button
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
    // if the user types delete, another modal will insert in the browser
    oKBtn.addEventListener('click',(e)=>{
        let typedAnswer = quitInput.value.toLowerCase();
        if(typedAnswer === "delete"){
            modalWindow.innerHTML=`
            <div class="modal-two">
                    <div class="close-btn-container">
                        <button class="close-btn">
                        <div class="close">Close</div>
                        </button>    
                    </div>
                <div class="body-container">
                    <div class="content-cont">
                        <h1 class="protest-riot-regular"> Success! </h1>
                    </div>
                </div>   
            </div>
        `;
        deleteSettings();
        } else if(typedAnswer === ""){
            alert("Type Delete"); //! alert if user leaves input blank
        };
        let modalTwo = document.querySelector('.modal-two');
        let closeModalBtn = document.querySelector('.close-btn-container');
        // hides modal window
        closeModalBtn.addEventListener('click', (e)=>{
            modalTwo.style.display="none";
        })  
    })
    
    cancelBtn.addEventListener('click',(e)=>{
        quitInput.textContent = "";
        modalWindow.style.display="none";
    })
})


