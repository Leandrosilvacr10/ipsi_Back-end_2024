//Implementação
function nota(notapratica,notateorica){
    var mean = notapratica * 0.4 + notateorica * 0.6;
    console.log("Your avegare is: " +mean);
    if(mean < 9.5)
        console.log("You failed");
    else
        console.log("You passed")
}
//Invocação
nota(12,14)

function getMonthName(monthNumber){
    switch(monthNumber){
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
            case 3:
                console.log("Fevereiro");
                break;
            case 4:
                console.log("Fevereiro");
                break;
            case 5:
                console.log("Fevereiro");
                break;
            case 6:
                console.log("Fevereiro");
                break;
            case 7:
                console.log("Fevereiro");
                break;
            case 8:
                console.log("Fevereiro");
                break;
            case 9:
                console.log("Fevereiro");
                break;
            case 10:
                console.log("Fevereiro");
                break;
            case 11:
                console.log("Fevereiro");
                break;
            case 12:
                console.log("Fevereiro");
                break;
        default:
            console.log("Valor inválido");
            break;
    }
}


