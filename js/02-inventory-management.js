window.console.log("Script is runninng");


// FUNCTION VIEW INVENTORY IN CONSOLE LOG
function view(inventory) {
    "use strict";
    let i;
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + "\t" + 
        inventory[i][1] + "\t" + "(" +
        inventory[i][2] + ")" + "\t" + "$" +
        inventory[i][3]
        
        
        );
    }

}


// FUNCTION STORE INVENTORY
function getInventory() {
    
    let inventory = [];

   
    inventory[0] = [101, "Tshirt", 17, 24.99];
    inventory[1] = [102, "jeans", 25, 44.99];
    inventory[2] = [103, "jackets", 11, 49.99];
    inventory[3] = [104, "hat", 22, 19.99];
    inventory[4] = [105, "socks", 17, 14.99];
        

    let storage = localStorage.getItem("inventory") || "";
    let item;
    let dataStorage;
    let store;


    if (storage.length > 0) {
        
        
        dataStorage = storage.split("|");       
            for (item in dataStorage) {
                store = dataStorage[item].split(",");
                inventory[item][0] = Number(store[0]);
                inventory[item][1] = store[1];
                inventory[item][2]= Number(store[2]);
                inventory[item][3] = Number(store[3]);

            }

        } 
       
       

    return inventory;
}
// FUNCTION MENU
function displayMenu() {
    window.console.log("");
    window.console.log("INVENTORY MANAGEMENT MENU");
    window.console.log("SHOW - SHOW INVENTORY");
    window.console.log("UPDATE - UPDATE INVENTORY");
    window.console.log("EXIT");
    window.console.log("");
}

window.addEventListener("load", () => {
    let inventory, command;
    displayMenu();
    inventory = getInventory();
    

    while(true) {
        command = window.prompt("Enter command: ");
        if (command !== null) {
            if (command === "show") {
                view(inventory);
            } 
            else if  (command === "update") {                
                update(inventory);
            } else if  (command === "exit") {
                window.alert("Application aborted. ");
                break;
            }          
            else {
                window.alert("Not a valid command");
            }
        } else {
            break;
        }
    }


});

// FUNCTION UPDATE COMMAND

function update(inventory) {
    "use strict"
    let skunm;
    let nwqty;
    let i;
    let storage;
    skunm = Number(window.prompt("Please enter SKU# for an item you want to update qty: "));
    nwqty = Number(window.prompt("Please enter new qty: "));

    for (i = 0; i < inventory.length; i += 1) {
        
        if (skunm !== null) {


            if (skunm === inventory[i][0]) {
                if (nwqty == isNaN) {
                    window.alert("Cheak again, please enter a numeric qty number. ");
                    break;
                } else {
                    inventory[i][2] = nwqty;
                    //window.console.log(inventory.join("|"));
                    localStorage.inventory = inventory.join("|");
                     view(inventory);
                    break;
                }                

            }  

        }   else {
            window.alert("Put a valid sku#. ");
            break;
            }

        
          
    }
    
};


