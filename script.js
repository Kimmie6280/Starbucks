function findCoffee(){
    let find_id = document.getElementById("search_drinks").value
    find_id = find_id.toLowerCase();
    let coffees = document.getElementsByClassName('drinks');

    for (i = 0; i < coffees.length; i++){
        if (!coffees[i].innerHTML.toLowerCase().includes(find_id)){
            coffees[i].style.display = "none";
            
        }
        else{
            coffees[i].style.display = "list-item";
            
        }
    }


}
