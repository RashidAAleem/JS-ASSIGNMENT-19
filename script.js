// Function to add a post
function addPost() {
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    
    if (title === "" || content === "") {
        alert("Please enter both title and content!");
        return;
    }

    // Create a new post element
    var postContainer = document.createElement('div');
    postContainer.classList.add('post');
    
    var postTitle = document.createElement('h2');
    postTitle.innerText = title;
    
    var postContent = document.createElement('p');
    postContent.innerText = content;
    
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);
    
    document.getElementById('posts-container').appendChild(postContainer);

    // Clear the input fields after adding the post
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}

// Function to change themes
function changeTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
