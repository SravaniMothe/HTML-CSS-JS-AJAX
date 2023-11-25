'use script'

function submitLoginForm() {
    let a = confirm('Are you sure?')
    if (a){
        alert('Thank you for submitting!');
        // document.body.children[2].children[0].lastElementChild.style.backgroundColor="green"
        // document.body.children[2].children[0].lastElementChild.innerHTML="SUCCESS"
        // document.body.children[2].children[0].lastElementChild.style.color="white"
        // document.body.children[2].children[0].firstElementChild.nextElementSibling.style.display="none"
    }
    else {
        alert('Something went wrong :(')
        // document.body.children[2].children[0].lastElementChild.style.backgroundColor="red"
        // document.body.children[2].children[0].lastElementChild.style.color="white"
       //let user= prompt('Enter username :')
        //let pws = prompt('Enter password :')
        // let a =Number(prompt("enter two values for addition\n value 1"))
        // let b = Number(prompt("enter two values for addition\n value 2"))
        // let c = a+b;
        // alert(`sum is ${c}`)
    }


    // document.getElementById("username").style.display="";
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.querySelectorAll()
    document.getElementsByClassName("link")[0].style.backgroundColor="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="lightblue";
    document.getElementById("username").style.display="none";
    document.querySelectorAll(".link")[0].style.fontSize="30px";
   // document.getElementById("image").src="tea.png"
    document.getElementById("container").innerHTML='<img src="tea.jpg" width="30" height="25px">'
}
