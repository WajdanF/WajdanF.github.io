const color = (e)=>{
    let colors;
    if (e === "1") {
        colors = "#D7CCC8";
    } else if (e === "2") {
        colors = "#BCAAA4";
    } else if (e === "3") {
        colors = "#A1887F";
    } else if (e === "4") {
        colors = "#8D6E63";
    } else if (e === "5") {
        colors = "#795548";
    } else if (e === "6") {
        colors = "#6D4C41";
    } else if (e === "7") {
        colors = "#5D4037";
    } else if (e === "8") {
        colors = "#4E342E";
    } else if (e === "9") {
        colors = "#3E2723";
    }
    return colors;
};

const list = document.querySelector(".drink_list");

auth.onAuthStateChanged((user) => {
    if (user===null){
        window.location = "../index.html"
}});

db.collection("Restrictions").onSnapshot((snapshot) => {
    //everytime there is a change in the database
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        console.log(change);
            if (change.type === "added" || change.type === "modified") {
                circle = color((doc.data().strength / 100).toString());
                list.innerHTML += `
            <li>
            <span class = "dot" style="background-color: ${circle}"></span>
            <div class="container-2">
                <p class = "name">${doc.data().name}</p>
                <span class = "sugar">Takes ${doc.data().sugar} sugar(s)</span>
            </div>
        </li> 
        <br>
            `;
            }
    });
});

const setting =  document.querySelector('.setting');
setting.addEventListener('click',e=>{
    window.location="../data_enter/data.html"

})

document.querySelectorAll(".logs").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        auth.signOut();
    });
});