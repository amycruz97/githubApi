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

        <div class="follows">
        <span>
        <a href="https://github.com/amycruz97?tab=followers">
        <svg text="gray-light" height="16" class="octicon octicon-people text-gray-light" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
        <span>${repo.followers} followers .</span>
        </a>
        </span>

        <span>
        <a href="https://github.com/amycruz97?tab=following">
        <span>${repo.following} following .</span>
        </a>
        </span>

        <span>
        <a href="https://github.com/amycruz97?tab=stars">
        <svg text="gray-light" height="16" class="octicon octicon-star text-gray-light" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
        <span>64</span>
        </a>
        </span>
        
        </div>

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

        <h4>Highlights</h4>
        <svg class="octicon octicon-north-star text-gray-light mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>
        <span>Arctic Code Vault Contributor</span>
        </div>

        <hr>

        <h4>Organisation</h4>
        <img src="https://avatars2.githubusercontent.com/u/8825476?s=60&v=4" alt="organisation">
        

        `;
    // console.log(cardOne)

    const cardTwo = document.createElement("div");
    cardTwo.setAttribute("class", "cardTwo");

    container.appendChild(cardOne);
    container.appendChild(cardTwo);

    // console.log(cardTwo)

    const myRepo = "https://api.github.com/users/amycruz97/repos";

    return fetch(myRepo)
      .then((response) => {
        return response.json();
      })
      .then((newRepo) => {
        for (let i = 0; i < newRepo.length; i++) {
          const repository = document.querySelector(".repoNum");
          repository.innerHTML = `${newRepo.length}`;

          const myDate = `${newRepo[i].updated_at}`;
          // console.log(myDate)

          const formatDate = (myDate) => {
            const options = { month: "long", day: "numeric" };
            return new Date(myDate).toLocaleDateString(undefined, options);
          };

   



          cardTwo.innerHTML = `

         
             
            <div class="find">

              <input class="text" placeholder="find a repository">
              <span>
              <select id="select" name="select">
                <option value="all" disabled>All</option>
                <option value="all" >All</option>
                <option value="private">Private</option>
              <option value="public">Public</option>
                <option value="sources">Sources</option>
                <option value="forked">Forked</option>
                <option value="archived">Archived</option>
                <option value="mirrors">Mirrors</option>
                </select>
              </span>

              <span>
              <select id="select" name="select">
                <option value="all">Alll</option>
                <option value="javascript">Javascript/option>
              <option value="css">CSS</option>
                <option value="html">HTML</option>
                </select>
              </span>
           
              <button class="new"> <a href="https://github.com/new" class="new">
                    <svg class="octicon octicon-repo" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                      New
                </a></button>

              </div>

              <hr>

              
          <di class="cards">

            <div class="card1">
            
              <div class="theRepo">

                <a href="${newRepo[12].html_url}">
                <h3>${newRepo[12].name}</h3>
                </a>

                <span class="javascript"></span>
                <small>Javascript</small>
                <small>updated ${formatDate(myDate)}</small>
           

              </div>

              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 

            </div>

              <hr>

            
            

            <div class="card1">

            <div class="theRepo">
            <a href="${newRepo[13].html_url}">
            <h3>${newRepo[13].name}</h3>
            </a>
            <small>Forked from
            <a href="https://github.com/poteto/hiring-without-whiteboards">poteto/hiring-without-whiteboards</a>
            </small>
            <p>${newRepo[13].description}</p>
            <div>
            <span class="javascript"></span>
            <small>Javascript</small>
            <a href ="https://github.com/amycruz97/hiring-without-whiteboards/network/members">
            <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
            <small>1635</small>
            </a>
            <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
            <small>${newRepo[13]['license']['name']}</small>
            <small>updated ${formatDate(myDate)}</small>
            </div>
          </div>

          
          <div class="star">
          <button class="starIcon" >
          <i class="far fa-star" >star<span class="stars"></span></i>
          </button>
          <button class="unstarIcon">
          <i class="fas fa-star" >unstar<span class="unstar"></span></i>
          </button>

        </div> 
            

          </div>
              <hr>
              


          <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[19].html_url}">
              <h3>${newRepo[19].name}</h3>
              </a>
              <span class="css"></span>
              <small>CSS</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>


              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 

          </div>

          <hr>

          <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[6].html_url}">
              <h3>${newRepo[6].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/TheOdinProject/curriculum">TheOdinProject/curriculum</a>
              </small>
              <p>${newRepo[6].description}</p>
              <div>
              <a href ="https://github.com/amycruz97/curriculum/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>6253</small>
              </a>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[6]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
              
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

            </div>

              <hr>



            <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[16].html_url}">
              <h3>${newRepo[16].name}</h3>
              </a>
              <span class="javascript"></span>
              <small>Javascript</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

            </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[0].html_url}">
              <h3>${newRepo[0].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/amycruz97/awesome-learning-resources">lauragift21/awesome-learning-resources</a>
              </small>
              <p>${newRepo[0].description}</p>
              <div>
              <a href ="https://github.com/amycruz97/awesome-learning-resources/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>460</small>
              </a>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[0]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
              
              </div>

              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>


            <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[4].html_url}">
              <h3>${newRepo[4].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/creativecommons/cccatalog-frontend">creativecommons/cccatalog-frontend</a>
              </small>
              <p>${newRepo[4].description}</p>
              <div>
              <span class="javascript"></span>
              <small>Javascript</small>
              <a href ="https://github.com/amycruz97/cccatalog-frontend/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>221</small>
              </a>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[4]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
             
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[7].html_url}">
              <h3>${newRepo[7].name}</h3>
              </a>
              <span class="javascript"></span>
              <small>Javascript</small>
              <small>updated ${formatDate(myDate)}</small>

              
              </div>
             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[21].html_url}">
              <h3>${newRepo[21].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/unicodeveloper/tech-hubs">unicodeveloper/tech-hubs</a>
              </small>
              <p>🏠🏢${newRepo[21].description}</p>
              <a href ="https://github.com/amycruz97/tech-hubs/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>91</small>
              </a>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[14].html_url}">
              <h3>${newRepo[14].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/DavidAnson/markdownlint">DavidAnson/markdownlint</a>
              </small>
              <p>${newRepo[14].description}</p>
              <div>
              <a href ="https://github.com/amycruz97/markdownlint/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>291</small>
              </a>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[14]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 
              </div>
              <hr>

              



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[17].html_url}">
              <h3>${newRepo[17].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/github/personal-website">github/personal-website</a>
              </small>
              <p>${newRepo[17].description}</p>
              <div>
              <span class="html"></span>
              <small>HTML</small>
              <a href ="https://github.com/amycruz97/personal-website/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>5698</small>
              </a>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[17]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
              
              </div>

              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[18].html_url}">
              <h3>${newRepo[18].name}</h3>
              </a>
              <p>${newRepo[18].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
              
              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[2].html_url}">
              <h3>${newRepo[2].name}</h3>
              </a>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[23].html_url}">
              <h3>${newRepo[23].name}</h3>
              </a>
              <small>Forked from
              <a href="https://github.com/scotch-io/ultimate-guide-to-javascript-algorithms">scotch-io/ultimate-guide-to-javascript-algorithms</a>
              </small>
              <p>${newRepo[23].description}</p>
              <span class="javascript"></span>
              <small>Javascript</small>
              <a href ="https://github.com/amycruz97/ultimate-guide-to-javascript-algorithms/network/members">
              <span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg></span>
              <small>72</small>
              </a>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[10].html_url}">
              <h3>${newRepo[10].name}</h3>
              </a>
              <p>${newRepo[10].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[20].html_url}">
              <h3>${newRepo[20].name}</h3>
              </a>
              <span class="javascript"></span>
              <small>Javascript</small>
              <small>updated ${formatDate(myDate)}</small>
             
              </div>

              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 
             

              </div>

              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[22].html_url}">
              <h3>${newRepo[22].name}</h3>
              </a>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
             
              </div>

              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[5].html_url}">
              <h3>${newRepo[5].name}</h3>
              </a>
              <p>${newRepo[5].description}</p>
              <span class="javascript"></span>
              <small>Javascript</small>
              <span><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg></span>
              <small>${newRepo[5]['license']['name']}</small>
              <small>updated ${formatDate(myDate)}</small>

              
              </div>

              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>
              <hr>
              



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[11].html_url}">
              <h3>${newRepo[11].name}</h3>
              </a>
              <p>${newRepo[11].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>
              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[15].html_url}">
              <h3>${newRepo[15].name}</h3>
              </a>
              <p>${newRepo[15].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>
              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[1].html_url}">
              <h3>${newRepo[1].name}</h3>
              </a>
              <p>${newRepo[1].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>

            
              <div class="star">
              <button class="starIcon" >
              <i class="far fa-star" >star<span class="stars"></span></i>
              </button>
              <button class="unstarIcon">
              <i class="fas fa-star" >unstar<span class="unstar"></span></i>
              </button>
    
            </div> 

              </div>

              <hr>



              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[3].html_url}">
              <h3>${newRepo[3].name}</h3>
              </a>
              <p>${newRepo[3].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              </div>
             
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>
              <hr>


              <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[8].html_url}">
              <h3>${newRepo[8].name}</h3>
              </a>
              <p>${newRepo[8].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
              
              </div>


              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

              </div>
              <hr>

            <div class="card1">
              <div class="theRepo">
              <a href="${newRepo[9].html_url}">
              <h3>${newRepo[9].name}</h3>
              </a>
              <p>${newRepo[9].description}</p>
              <span class="html"></span>
              <small>HTML</small>
              <small>updated ${formatDate(myDate)}</small>
            
              </div>

              
              
            <div class="star">
            <button class="starIcon" >
            <i class="far fa-star" >star<span class="stars"></span></i>
            </button>
            <button class="unstarIcon">
            <i class="fas fa-star" >unstar<span class="unstar"></span></i>
            </button>
  
          </div> 

          

              

            </div>

            <hr>


              </div>
              </div>



              </div>
              
    




                    `;




const star = document.querySelectorAll('.star')
star.forEach((stars)=>{
  stars.addEventListener('click', myStar)
 
})
  




     

function myStar(){

   const starIcon = document.querySelectorAll('.starIcon').forEach((starIcons)=>{

  starIcons.style.display = (
       starIcons.style.display == "block" ? "none" : "block"); 

     
   });


   const unstarIcon = document.querySelectorAll('.unstarIcon').forEach((unstarIcons)=>{

    unstarIcons.style.display = (
         unstarIcons.style.display ==  "none" ? "block" : "none"); 
  
       
     })
    
  


  console.log('ok')

}

        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  })
  .catch((err) => {
    console.log("Error");
  });
