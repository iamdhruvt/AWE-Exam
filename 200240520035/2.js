function validate(UserIn) {
    let userId = UserIn.parentNode.children[0].value;
    if (userId == "") {
        alert("User ID can not be null!!");
    }
    else {
        readValue(this);
        userId = "";
    }
    let userEm = UserIn.parentNode.children[1].value;
    if (userEm == "") {
        alert("Email can not be null.");
    }
    else {
        readValue(this);
        userEm = "";
    }
    let userPd = UserIn.parentNode.children[2].value;
    if (userPd == "") {
        alert("Pwd can not be null.");
    }
    else {
        readValue(this);
        userPd = "";
    }
}
function readValue(inp) {

}