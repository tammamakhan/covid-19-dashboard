var graphTypeInput= document.getElementById("graph-choice")

document.getElementById("submitbtn").addEventListener("click", function(e){ 
    getSelectedOption(graphTypeInput);
});

function getSelectedOption(graphTypeInput) {
    if (graphTypeInput.value=="total-line"){
        document.getElementById("graph-frame").src = "https://public.domo.com/cards/dwoBJ"
    }
    else if (graphTypeInput.value=="total-map"){
        document.getElementById("graph-frame").src = "https://public.domo.com/cards/dG1jy"
    }
    else if (graphTypeInput.value=="new-cases"){
        document.getElementById("graph-frame").src = "https://public.domo.com/cards/aKg4r"
    }
    else if (graphTypeInput.value=="two-week-trend"){
        document.getElementById("graph-frame").src = "https://public.domo.com/cards/aOm4g"
    }
}