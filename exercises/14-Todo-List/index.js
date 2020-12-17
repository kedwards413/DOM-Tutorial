let taskList = document.querySelector("#addToDo");
taskList.addEventListener("keyup", addToDo);

let ul = document.querySelector("ul");

function addToDo(event) {
	if (event.keyCode == 13) {
		let task = event.target.value;
		ul.innerHTML += `<li>
					<span><i class="fa fa-trash"></i></span> ${task}
				</li>`;
		console.log(event);
	}
}
