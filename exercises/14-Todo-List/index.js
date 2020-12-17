let input = document.querySelector("#addToDo");
input.addEventListener("keyup", addTodo);

let ul = document.querySelector("ul");

function deleteTodo(event) {
	var tasks = document.querySelectorAll(".fa-trash");
	tasks.forEach((item, index) => {
		item.addEventListener("click", function(event) {
			let deletedItem = event.target.parentNode.parentNode;
			deletedItem.parentNode.removeChild(deletedItem);
		});
	});
}
function addTodo(event) {
	if (event.keyCode == 13) {
		let task = event.target.value;
		ul.innerHTML += `<li><span><i class="fa fa-trash"></i></span> ${task}</li>`;
		deleteTodo();
		console.log(event);
	}
}
deleteTodo();
