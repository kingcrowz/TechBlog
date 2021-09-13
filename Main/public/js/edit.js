console.log("connected");
const editBtn = document.querySelector('#editBtn');

async function editInfo(event) {
    event.preventDefault();
    console.log("inside");
    const newTitle = document.querySelector('#editTitle');
    const newDesc = document.querySelector('#editDesc');
    // const id = editBtn.getAttribute("data-id");
    if(newTitle && newDesc){
        const res = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title: newTitle, description: newDesc}),
            headers: { 'Content-Type': 'application/json' },
        });
        if(res.ok){
            document.location.replace('/profile');
        } else {
            alert("edit unsuccessful");
        }
    } else {
        alert("invalid inputs");
    }
    
}

editBtn.addEventListener('click', editInfo);