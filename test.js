//Building a simple website
 //Fake rest api=> means it gives some fake data for a user to use
 //Defer attribute is used to tell the script that once the whole html and css file is done it will run
 const h3=document.querySelector(".post-title");
 h3.addEventListener('click',()=>{
   alert("You have clicked the button");
 });


// Button to fetch post
const button = document.querySelector('button');
console.log(button); // This will log the button element to the console
const postSection = document.querySelector('.posts-section');

const fetchdata = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json); // This will log the fetched JSON data

        json.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-card');

            const title = document.createElement('p');
            title.classList.add('post-title');
            title.innerText = post.title; // Set the title text

            const body = document.createElement('p');
            body.classList.add('post-body');
            // body.id = post.body; // Removed: IDs should be unique and usually not the full content of a post body.
                                  // If you need a unique ID related to the post, use post.id.
            body.innerText = post.body; // Set the body text

            // First, append the title and body to the postDiv
            postDiv.appendChild(title);
            postDiv.appendChild(body);

            // Now, append the complete postDiv (which contains title and body) to the postSection
            postSection.appendChild(postDiv);
        });
    } catch (error) {
        console.error("Error fetching data:", error.message); // Use console.error for errors
    }
}

button.addEventListener('click', fetchdata);