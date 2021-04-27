const github = new Github();
const ui = new UI();
//Search Input

const searchUser = document.getElementById("searchUser");

//Search input event listmner
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //console.log(userText);
    //Make http call
    github.getUser(userText).then((data) => {
      //console.log(data);
      if (data.profile.message === "Not Found") {
        //Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show Profile
        ui.showUsers(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear Profile
    ui.clearProfile();
  }
});
