//INDEX FROM VIEWS

// =========================This prevents unauthorized user access ========================
var mainApp = {};
(function() {
  //this imports everything from the firebase file. config and all
  var firebase = app_fireBase;

  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      // ==================================================NEW=====================================================
      var displayName = user.displayName;
      var uid = user.uid;

      document.querySelector(
        "#displayName"
      ).innerHTML = `Contacts for ${displayName}`;
      //For specific document access================================================================================================
      document.querySelector("#displayName").setAttribute("value", uid);

      var currentUid = document
        .querySelector("#displayName")
        .getAttribute("value");

      // ===============================================================
      const friendsCollection = db.collection("friends");

      let nowId = uid;
      friendsCollection.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          let idsSetByUser = doc.data().uid;
          if (idsSetByUser === nowId) {
            renderFriend(doc);
          }
        });
      });
      // ==================================================NEW======================================================
    } else {
      //this will redirect to the login page if the user is not logged in
      uid = null; //uid is null if not logged in
      window.location.replace("login");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})();
// ===================================== NEWEST STUFF =====================================

//the snapshot is recieved after the db collection (because js is asynchrnous)
const friendsList = document.querySelector("#friend-list");
const form = document.querySelector("#add-friend-form");
// Element is created and friends list is rendered
function renderFriend(doc) {
  let li = document.createElement("li");
  let image = document.createElement("i");
  let first_name = document.createElement("span");
  let last_name = document.createElement("span");
  let relation_to_client = document.createElement("span");
  let uid = document.createElement("span");

  li.setAttribute("title", doc.id); //doc.id is the friends document id
  li.setAttribute("class", "mdl-list__item");
  li.setAttribute("id", "contact_entry");
  li.setAttribute("onclick", "getFriendId(this.title)");

  let del = document.createElement("div");

  image.setAttribute("class", "material-icons mdl-list__item-icon");
  first_name.setAttribute("style", "font-weight: bold;");
  last_name.setAttribute("style", "padding-left:4px;font-weight: bold;");
  relation_to_client.setAttribute("style", "padding-left:4px;");
  uid.setAttribute("style", "display:none;");
  image.textContent = "person";
  first_name.textContent = doc.data().first_name;
  last_name.textContent = doc.data().last_name + ",";
  relation_to_client.textContent = doc.data().relation_to_client;

  li.appendChild(image);
  li.appendChild(first_name);
  li.appendChild(last_name);
  li.appendChild(relation_to_client);
  li.appendChild(del);
  li.appendChild(uid);
  friendsList.appendChild(li);
}

//sets data by default the page will get reloaded upon submitition, to stop that, e.preventDefault()
form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("submitted");
  db.collection("friends").add({
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    relation_to_client: form.relation_to_client.value,
    reminder_phrase: form.reminder_phrase.value,
    uid: form.uid.value
    // uid: form
  });
  form.name.value = "";
});
