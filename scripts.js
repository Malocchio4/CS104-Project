
const samplePosts = [
    { username: 'Amanda183', content: 'Listening to a great song! 🎵', timestamp: '2 hours ago' },
    { username: 'AVAAAA#<3', content: 'Just discovered an awesome artist! 🎶', timestamp: '5 hours ago' },
];

const postList = document.getElementById('post-list');


function displayPosts() {
    postList.innerHTML = '';
    samplePosts.forEach((post) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `
            <strong>${post.username}</strong> - ${post.content} - <small>${post.timestamp}</small>
        `;
        postList.appendChild(postItem);
    });
}


displayPosts();


const postInput = document.getElementById('post-input');
const postButton = document.getElementById('post-button');
postButton.addEventListener('click', () => {
    const content = postInput.value;
    if (content) {
        samplePosts.push({ username: 'Current User', content, timestamp: 'Just now' });
        postInput.value = '';
        displayPosts();
    }
});

