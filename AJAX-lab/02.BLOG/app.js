function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const postUl = document.querySelector('#posts');

    const loadUrl = `https://blog-apps-c12bf.firebaseio.com/posts.json`;
    const viewUrl = `https://blog-apps-c12bf.firebaseio.com/comments.json`;
    
    loadBtn.addEventListener('click', load);
    viewBtn.addEventListener('click', view);

    function load(e) {
        fetch(loadUrl)
            .then(response => response.json())
            .then(postData => {
                postUl.innerHTML = Object.keys(postData).map(key => {
                    console.log(postData[key]);
                    return `<option value='${key}'>${postData[key].title}</option>`;
                }).join('');
            })
    }

    function view(e) {
        fetch(viewUrl)
        .then(response => response.json())
        
    }
    
}

attachEvents();