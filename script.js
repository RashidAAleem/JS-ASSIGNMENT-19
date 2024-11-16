var commentForm = document.getElementById('commentForm');
var commentsContainer = document.getElementById('commentsContainer');
var themeToggle = document.getElementById('themeToggle');
var isDarkMode = false;
var comments = [];

// Event listener for form submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addComment();
});

// Function to add a new comment
function addComment() {
    var name = document.getElementById('name').value.trim();
    var commentText = document.getElementById('comment').value.trim();
    var timestamp = new Date();

    if (name && commentText) {
        var comment = {
            id: Date.now(),
            name: name,
            text: commentText,
            time: timestamp
        };
        comments.unshift(comment);
        renderComments();
        clearForm();
    }
}

// Function to render comments
function renderComments() {
    commentsContainer.innerHTML = '';
    comments.forEach(function(comment) {
        var commentCard = document.createElement('div');
        commentCard.className = 'comment-card';
        
        var timeAgo = formatTimeAgo(comment.time);

        commentCard.innerHTML = `
            <p><strong>${comment.name}:</strong> <span class="comment-text">${comment.text}</span></p>
            <p class="comment-time">${timeAgo}</p>
            <div class="comment-actions">
                <button class="edit-btn" onclick="editComment(${comment.id})">Edit</button>
                <button class="delete-btn" onclick="deleteComment(${comment.id})">Delete</button>
            </div>
        `;
        commentsContainer.appendChild(commentCard);
    });
}

// Function to clear the form
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}

// Function to edit a comment
function editComment(id) {
    var comment = comments.find(c => c.id === id);
    document.getElementById('name').value = comment.name;
    document.getElementById('comment').value = comment.text;
    deleteComment(id);
}

// Function to delete a comment
function deleteComment(id) {
    comments = comments.filter(c => c.id !== id);
    renderComments();
}

// Function to format time ago
function formatTimeAgo(timestamp) {
    var now = new Date();
    var diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
}

// Theme toggle function
themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
});
