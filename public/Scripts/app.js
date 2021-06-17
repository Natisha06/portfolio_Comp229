/* File Name: app.css
Name: Natisha Singla
Id: 301145778
Date: 06/04/2021 */

// IIFE -- immediately invoked functions
(function(){

    function Start()
    {
        console.log("App Started..");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }

            });
        }
    }

    window.addEventListener("load", Start);
})();