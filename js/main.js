// Get All Html Element

// Get All Html Users Element
let elUsersCount = document.querySelector("#users-count");
let elUsersList = document.querySelector("#users-list");
let elUsersTemplate = document.querySelector("#users-template").content;
let elUsersHeading = document.querySelector("#users-heading");
let elUsersEmail = document.querySelector("#users-email");
let elUsersCountry = document.querySelector("#users-country");
let elUsersCompany = document.querySelector("#users-company");
let elUsersWebsite = document.querySelector("#users-website");

// Get All Html Posts Element
let elPostsCount = document.querySelector("#users-count");
let elPostsList = document.querySelector("#posts-list");
let elPostsTemplate = document.querySelector("#posts-template").content;
let elPostsHeading = document.querySelector("#posts-heading");
let elPostsPost = document.querySelector("#posts-post");
let elPostsUserId = document.querySelector("#posts-userid")

// Get All Html Comments Element
let elCommentsCount = document.querySelector("#comments-count");
let elCommentsList = document.querySelector("#comments-list");
let elCommentsTemplate = document.querySelector("#comments-template").content;
let elCommentsTitle = document.querySelector("#comments-title");
let elCommentsEmail = document.querySelector("#comments-email");
let elCommentsComment = document.querySelector("#comments-comment");


// Fetch Users Data
(async function() {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let data = await responce.json()
    
    renderUsers(data, elUsersList)
})();




// Render Users...
function renderUsers(array, node) {
    node.innerHTML = null 
    
    if (array.length > 0) {        
        let userFragment = document.createDocumentFragment()
        
        array.forEach(item => {
            let userTemplate = elUsersTemplate.cloneNode(true) 
            
            userTemplate.querySelector(".users-heading").textContent = item.name
            userTemplate.querySelector("#users-email").textContent = item.email
            userTemplate.querySelector("#users-country").textContent = item.address.city
            userTemplate.querySelector("#users-company").textContent = item.company.name
            userTemplate.querySelector("#users-website").href = item.website
            userTemplate.querySelector("#users-website").textContent = item.website
            
            userFragment.appendChild(userTemplate)
        });
        
        node.appendChild(userFragment)
        elUsersCount.textContent = array.length    
    }
}

(async function() {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/user/1/posts`)
    let data = await responce.json()
    
    renderPosts(data, elPostsList)
    console.log(data)
})();

/*
// Render Posts by User Heading Id
elUsersList.addEventListener("click", function (evt) {
    let foundUserId = evt.target.dataset.userId
    
    if (foundUserId) {
        // Fetch Posts Data
        
    }
    
    console.log(foundUserId);    
}) */



// Render Posts...
function renderPosts(array, node) {
    node.innerHTML = null 
    
    if (array.length > 0) {        
        let postFragment = document.createDocumentFragment()
        
        array.forEach(item => {
            let postTemplate = elPostsTemplate.cloneNode(true) 
            
            postTemplate.querySelector("#posts-heading").textContent = item.title
            postTemplate.querySelector("#posts-heading").href = item.title
            postTemplate.querySelector("#posts-post").textContent = item.body
            
            postFragment.appendChild(postTemplate)
        });
        
        node.appendChild(postFragment)
        elPostsCount.textContent = array.length    
    }
}


// Render Comments...
function renderComments(array, node) {
    node.innerHTML = null 
    
    if (array.length > 0) {        
        let commentFragment = document.createDocumentFragment()
        
        array.forEach(item => {
            let commentTemplate = elCommentsTemplate.cloneNode(true) 
            
            commentTemplate.querySelector("#comments-title").textContent = item.name
            commentTemplate.querySelector("#comments-email").textContent = item.email
            commentTemplate.querySelector("#comments-comment").textContent = item.body
            
            commentFragment.appendChild(commentTemplate)
        });
        
        node.appendChild(commentFragment)
        elCommentsCount.textContent = array.length    
    }
}

(async function() {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    let data = await responce.json()
    
    renderComments(data, elCommentsList)
    console.log(data)
})();
/*
// Render Comments by Posts Heading Id
elPostsHeading.addEventListener("click", function (evt) {
    let foundPostId = evt.target.dataset.userId
    
    if (foundPostId) {
        
    }
    
    console.log(foundPostId);    
})
*/








