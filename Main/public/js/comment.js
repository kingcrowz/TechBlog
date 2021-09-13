const addComBtn = document.querySelector('#addComBtn');

async function addComment(event) {
    event.preventDefault();
    const newCom = document.querySelector('#addCom');
    const postId = addComBtn.getAttribute('data-id');
    const userId = addComBtn.getAttribute('user-id');
    console.log("*************AAAAAAAAAAAAAAAA")
    console.log(newCom);
    console.log(postId);
    console.log(userId);
    if(newCom && postId && userId) {
        const response = await fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({
                response: newCom,
                user_id: userId,
                post_id: postId
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment');
        }
    } else {
        alert("something went wrong");
    }
}




addComBtn.addEventListener('click', addComment);