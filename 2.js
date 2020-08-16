function submitHere() {
    let usern = document.querySelector("#usernameid").value;
    let pass = document.querySelector("#pw").value;
    let gmn = document.querySelector("#gmailid").value;

    let newE1 = document.querySelector("#referances");
    let newE2 = document.querySelector("#referances");
    let newE3 = document.querySelector("#referances");
    newE1.children[0].innerHTML = usern;
    newE2.children[0].innerHTML = pass;
    newE3.children[0].innerHTML = gmn;

    const com1 = document.querySelector("#commentbox");
    const com2 = document.querySelector("#commentbox");
    const com2 = document.querySelector("#commentbox");
    com1.appendChild(new1);
    com2.appendChild(new2);
    com3.appendChild(new3);

    document.querySelector("#usernameid").value = "";
    document.querySelector("#pw").value = "";
    document.querySelector("#gmailid").value = "";
}