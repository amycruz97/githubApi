// const app = document.querySelector('#root')

// const logo = document.createElement('img')
// logo.src = 'logo.png';

// const container = document.createElement('div')
// container.setAttribute('class', 'container')

// app.appendChild(logo)
// app.appendChild(container)

// const url = 'https://ghibliapi.herokuapp.com/films'

// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((movie) => {
//         movie.forEach((movies) => {
//             const card = document.createElement('div')
//             card.setAttribute('class', 'card')

//             const h1 = document.createElement('h1')
//             h1.textContent = movies.title

//             const p = document.createElement('p')
//             movies.description = movies.description.substring(0, 200)
//             p.textContent = `${movies.description}`

//             container.appendChild(card)
//             card.appendChild(h1)
//             card.appendChild(p)

//         })
//     })
//     .catch((err) => {
//         console.log('error')
//     })

const app = document.querySelector("#root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

const url = "https://api.github.com/users/amycruz97";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((repo) => {
    // console.log(repo)

    let cardOne = document.createElement("div");
    cardOne.setAttribute("class", "cardOne");
    cardOne.innerHTML = `
        <img src="${repo.avatar_url}" alt="avata" class="avatar">
        <h2>${repo.name}</h2>
        <h4>${repo.login}</h4>
        <p>${repo.bio}</p>

        <button class="edit" >Edit profile</button>

        <div>
        <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        <span>${repo.location}</span>
        </div>

        <div>
        <i class="fab fa-twitter"></i>
        <span><a href="https://twitter.com/AmarachiAmaechi">${repo.twitter_username}</a></span>
        </div>

        <hr>

        <div>

        <h3>Highlights</h3>
        <svg class="octicon octicon-north-star text-gray-light mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>
        <span>Arctic Code Vault Contributor</span>
        </div>

        <hr>

        <h3>Organisation</h3>
        <img src="https://avatars2.githubusercontent.com/u/8825476?s=60&v=4" alt="organisation">
        

        `;
    // console.log(cardOne)

    const cardTwo = document.createElement("div");
    cardTwo.setAttribute("class", "cardTwo");

    container.appendChild(cardOne);
    container.appendChild(cardTwo);

    const myRepo = "https://api.github.com/users/amycruz97/repos";

    return fetch(myRepo)
      .then((response) => {
        return response.json();
      })
      .then((newRepo) => {
        for (let i = 0; i < newRepo.length; i++) {
          console.log(newRepo[i].html_url);

          cardTwo.innerHTML = `
                    <div>
                    <a href="${newRepo[12].html_url}">
                    <h3>${newRepo[12].name}</h3>
                    </a>
                    <p>updated ${newRepo[12].updated_at}</p>
                    <hr>
                    </div>

                    
                    <div>
                    <a href="${newRepo[13].html_url}">
                    <h3>${newRepo[13].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/poteto/hiring-without-whiteboards">poteto/hiring-without-whiteboards</a>
                    </small>
                    <p>${newRepo[13].description}</p>
                    <div>
                    <span class="javascript"></span>
                    <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
                    <span>Javascript</span>
                    </div>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[19].html_url}">
                    <h3>${newRepo[19].name}</h3>
                    </a>
                    <p>updated ${newRepo[19].updated_at}</p>
                    <hr>
                    </div>

                    <a href="${newRepo[6].html_url}">
                    <h3>${newRepo[6].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/TheOdinProject/curriculum">TheOdinProject/curriculum</a>
                     </small>
                     <p>${newRepo[6].description}</p>
                    <hr>


                    <div>
                    <a href="${newRepo[16].html_url}">
                    <h3>${newRepo[16].name}</h3>
                    </a>
                    <p>updated ${newRepo[16].updated_at}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[0].html_url}">
                    <h3>${newRepo[0].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/amycruz97/awesome-learning-resources">lauragift21/awesome-learning-resources</a>
                     </small>
                     <p>${newRepo[0].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[4].html_url}">
                    <h3>${newRepo[4].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/creativecommons/cccatalog-frontend">creativecommons/cccatalog-frontend</a>
                     </small>
                     <p>${newRepo[4].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[7].html_url}">
                    <h3>${newRepo[7].name}</h3>
                    </a>
                    <p>updated ${newRepo[7].updated_at}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[21].html_url}">
                    <h3>${newRepo[21].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/unicodeveloper/tech-hubs">unicodeveloper/tech-hubs</a>
                     </small>
                
                     <p>🏠🏢${newRepo[21].description}</p>
                    <hr>
                    </div>

                    
                    <div>
                    <a href="${newRepo[14].html_url}">
                    <h3>${newRepo[14].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/DavidAnson/markdownlint">DavidAnson/markdownlint</a>
                     </small>
                     <p>${newRepo[14].description}</p>
                    <hr>
                    

                    <div>
                    <a href="${newRepo[17].html_url}">
                    <h3>${newRepo[17].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/github/personal-website">github/personal-website</a>
                    </small>
                    <p>${newRepo[17].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[18].html_url}">
                    <h3>${newRepo[18].name}</h3>
                    </a>
                    <p>${newRepo[18].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[2].html_url}">
                    <h3>${newRepo[2].name}</h3>
                    </a>
                    <p>updated ${newRepo[2].updated_at}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[23].html_url}">
                    <h3>${newRepo[23].name}</h3>
                    </a>
                    <small>Forked from
                    <a href="https://github.com/scotch-io/ultimate-guide-to-javascript-algorithms">scotch-io/ultimate-guide-to-javascript-algorithms</a>
                    </small>
                    <p>${newRepo[23].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[10].html_url}">
                    <h3>${newRepo[10].name}</h3>
                    </a>
                    <p>${newRepo[10].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[20].html_url}">
                    <h3>${newRepo[20].name}</h3>
                    </a>
                    <p>updated ${newRepo[20].updated_at}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[22].html_url}">
                    <h3>${newRepo[22].name}</h3>
                    </a>
                    <p>updated ${newRepo[22].updated_at}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[5].html_url}">
                    <h3>${newRepo[5].name}</h3>
                    </a>
                    <p>${newRepo[5].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[11].html_url}">
                    <h3>${newRepo[11].name}</h3>
                    </a>
                    <p>${newRepo[11].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[15].html_url}">
                    <h3>${newRepo[15].name}</h3>
                    </a>
                    <p>${newRepo[15].description}</p>
                    <hr>
                    </div>

                    <div>
                    <a href="${newRepo[1].html_url}">
                    <h3>${newRepo[1].name}</h3>
                    </a>
                    <p>${newRepo[1].description}</p>
                    <hr>
                    </div>


                    <div>
                    <a href="${newRepo[8].html_url}">
                    <h3>${newRepo[8].name}</h3>
                    </a>
                    <p>${newRepo[8].description}</p>
                    <hr>
                    </div>
                    

                    <div>
                    <a href="${newRepo[9].html_url}">
                    <h3>${newRepo[9].name}</h3>
                    </a>
                    <p>${newRepo[9].description}</p>
                    <hr>
                    </div>
                   



                    `;
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  })
  .catch((err) => {
    console.log("Error");
  });
