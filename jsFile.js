
// set an event for Nav Bar - if a tab was chosen and currently the mode is on hamburger, then it will shrink the hamburger back to its origianl pose
const lis = document.querySelectorAll('.menu li');
console.log(lis)
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', () => {
        let checkbox = document.getElementById("checkbox_toggle");
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    })
}

//Contact Me Form handler
let submitBtn = document.getElementById('submit');
//event for clicking the submit btn
submitBtn.addEventListener('click', () => {
    let Fullname = form.fullName.value;
    let company = form.company.value;
    let email = form.email.value;
    let message = form.message.value;
    //check the conditions for submition - check if email valid.
    if (/^[a-zA-Z]{2,} [a-zA-Z]{2,}$/.test(Fullname) && company && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        //construct a url for opening the mail app with the following subject and body
        let body = `Hi Moris:)%0D%0A%0D%0AMy name is ${Fullname} from ${company}.%0D%0A%0D%0A${message}%0D%0A%0D%0AI saw your CV online and I will be happy to connect.%0D%0AI am available at: ${email}.%0D%0A%0D%0AThanks,%0D%0A${Fullname}.`;
        console.log(body);
        let subject = `I saw your CV online and I will be happy to connect.`;
        let str = `mailto:moris.gateno@gmail.com?subject=${subject}&body=${body}`;
        //opens a window on the app mail populated with the information from the client
        window = window.open(str, 'emailWindow')
        // if (window && window.open && !window.closed)
        //     window.close()
    }
})

//smooth transition between the sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});