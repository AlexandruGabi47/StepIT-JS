// Getting the refferences to the respective elements
// Text input:
var word = document.getElementById("word");
//
var button = document.getElementById("b1");
var ul = document.getElementById("shoppingList");
// Storing the amount of elements
var elements = 0;
// Assigning the 'addItem' to the 'click' event
addButton.addEventListener("click", addItem);
function addItem()
{
    if(word.value !== "")
    {
        // Creates and modifies the element
        var li = document.createElement("li");
        li.textContent = word.value + "\xa0\xa0";
        li.setAttribute("id", "li" + elements);
        // Creates the edit button
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editItem);
        // Creates the delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteItem);
        // Adds the element and buttons to the list
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        // Clears the input box & increases the element size
        word.value = "";
        elements++;
    }
}
function editItem()
{
    var li = this.parentNode;
    var temp = li.textContent;
    li.textContent = "";
    

}
function deleteItem()
{
    ul.removeChild(this.parentNode);
}