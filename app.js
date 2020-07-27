// instantiate github and ui class
const github = new Github;
const ui = new UI;
// search input

const inputField = document.querySelector('#searchUser');

// search input event listener

inputField.addEventListener('keyup', (e) => {
    
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // below we call getUser fun from anther js file
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show Alert
                    ui.showAlert('User Not Found..','alert alert-danger font-weight-bold');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
        .catch(() => {
            ui.showAlert("Internet Connection Problem...",
						 "alert alert-danger font-weight-bold");
        })

    } else {
        // clear profile
        ui.clearProfile();
    }

})
