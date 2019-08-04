function sendMail(contactForm) {
    emailjs.send("gmail", "glencar_website", {
        "from_email": contactForm.email.value,
        "from_name": contactForm.fullname.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                setTimeout("location.href = 'contact_aftersendmessage.html';", 250); // I added this line of code in myself, so the user will know that their message was sent successfully. 

            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page, this was originally in the tutorial notes. 
}
