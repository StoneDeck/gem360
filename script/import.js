import posts from 'https://jsonplaceholder.typicode.com/posts' assert { type: 'json' };
import comments from 'https://jsonplaceholder.typicode.com/comments' assert { type: 'json' };

const newElement = document.createElement('div');

const container = document.getElementById('post');
var text =``
for (var i = 0; i < posts.length; ++i) {//o
    text = `
    <div class="container">
        <div class="posts">
            <ul class="post">
                <li class="posts__id">Номер поста: ${posts[i].id}</li>
                <li class="posts__title">${posts[i].title}</li>
                <li class="posts__body">${posts[i].body}</li>
            </ul>
        </div>
        <p class="comments__border">КОМЕНТАРИИ
            <button class="btn" id="${posts[i].id}" onClick="reply_click(this.id)">Показать</button>
        </p>
        <div class="comments hidden" id="${`comment-` + posts[i].id}">
    `;
    for (var j = 0; j < comments.length; j++) {
        if (comments[j].postId == posts[i].id) {
            text += `
                    <ul class="comment">
                        <li class="comments__id">id: ${comments[j].id}</li>
                        <li class="comments__name">Имя: ${comments[j].name}</li>
                        <li class="comments__email">Em@il: ${comments[j].email}</li>
                        <li class="comments__body">${comments[j].body}</li>
                    </ul>
            `;
        }
    }
    newElement.innerHTML = text + `                
        </div>
    </div>
    `;
    var box = newElement
    box.classList.add("box");
    box.dataset.id = i;
    container.appendChild(box.cloneNode(true));
}