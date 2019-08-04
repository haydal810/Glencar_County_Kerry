function sendMail(contactForm) {
    emailjs.send("gmail", "david_hayden_cv", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                setTimeout("location.href = 'contact_aftersendmessage.html';",250); // I added this line of code in myself, so the user will know that their message was sent successfully. 
                
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page, this was originally in the tutorial notes. 
}
