function submitForm() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const bio = document.getElementById('bio').value;
    const quote = document.getElementById('quote').value;
    const output = document.getElementById('output');
    output.innerHTML = `
         <div class="container">
            <div class="row">
                <div class="col"><b>Profile Information</b></div>
            </div>
            <div class="row">
                <div class="col">
                    <p><strong>Name:</strong> ${name}</p>
                </div>
                <div class="col">
                    <p><strong>Birthday:</strong> ${birthday}</p>
                </div>
                <div class="col">
                    <p><strong>Bio:</strong> ${bio}</p>
                </div> 
                <div class="col">
                    <p><strong>Favorite Quote:</strong> ${quote}</p>
                </div>
            </div>
        </div>
        
        <div class="mt-4">
            <div class="input-group mb-3">
                <input type="text" id="tweetInput" class="form-control" placeholder="What's on your mind?">
                <button class="btn btn-primary" onclick="postTweet()">Post</button>
            </div>
            <div id="tweetsContainer" style="max-height: 300px; overflow-y: auto;">
                <div class="tweet p-2 border mb-2">
                    <p>bisan ang Atheist mapapa "Oh my God" jud sa mga happenings aris Pinas</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="likeTweet(this)">❤️ 0</button>
                </div>
                <div class="tweet p-2 border mb-2">
                    <p>Mao diay wala nay "Honesty is the best policy" sa mga rooms sa college kay 'di na naman madutlan ug konsensya</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="likeTweet(this)">❤️ 0</button>
                </div>
                <div class="tweet p-2 border mb-2">
                    <p>WELCOME TO YLIGANDA, SUB-SAHARA, MINDANAO!</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="likeTweet(this)">❤️ 0</button>
                </div>
            </div>
        </div>
    `;
    window.postTweet = function() {
        const tweetInput = document.getElementById('tweetInput');
        const tweetsContainer = document.getElementById('tweetsContainer');
        if (tweetInput.value.trim() !== '') {
            const tweetDiv = document.createElement('div');
            tweetDiv.className = 'tweet p-2 border mb-2';
            tweetDiv.innerHTML = `
                <p>${tweetInput.value}</p>
                <button class="btn btn-sm btn-outline-danger" onclick="likeTweet(this)">❤️ 0</button>
            `;
            tweetsContainer.insertBefore(tweetDiv, tweetsContainer.firstChild);
            tweetInput.value = '';
        }
    }

    window.likeTweet = function(button) {
        const currentLikes = parseInt(button.textContent.split(' ')[1]);
        button.textContent = `❤️ ${currentLikes + 1}`;
    }
}

document.getElementById('imageInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});