const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach( function (button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target.id);
        
        const color = e.target.id;
        body.style.backgroundColor = color;
        if(color == "white"){
            body.style.color = 'black';
        }
        else{
            body.style.color = 'white';
        }

         /*   
        // using switch case    
        switch (e.target.id){
            case "white":
                body.style.backgroundColor = e.target.id
                body.style.color = 'black';
                break;
            case "green":
                body.style.backgroundColor = e.target.id
                break;
            case "red":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "black":
                body.style.backgroundColor = e.target.id
                body.style.color = 'white';
                break;
        }
        */
    })
});

