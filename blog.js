const query = `{
  blogPostCollection {
    items {
      sys {
        firstPublishedAt
      }
      postTitle
      date
      text
    }
  }
}`

// YES I KNOW ABT THE SEC VULNERABILITY JUST DONT BE AN ASSHOLE OKAY
const fetchOptions = {
    spaceID: "yk9jwetmluj3",
    accessToken: "diAT9whNY66pniMOdb6WP4YCeAATkTswKgmCzIC64qo",
    endpoint: "https://graphql.contentful.com/content/v1/spaces/yk9jwetmluj3",
    method: "POST",
    headers: {
        Authorization: "Bearer diAT9whNY66pniMOdb6WP4YCeAATkTswKgmCzIC64qo",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
}

var endpoint = "https://graphql.contentful.com/content/v1/spaces/yk9jwetmluj3";
// Let's fetch the data - check out the browser console!
fetch(endpoint, fetchOptions)
    .then(response => response.json())
    .then(data => console.log(data));

const addContentToDom = (items) => {
    items.forEach(item => {
        // Create the article element to hold all post data elements
        const newItemEl = document.createElement("article");

        if (item.date) {
            // Create an h2 element
            const newDateEl= document.createElement("p");
            // Populate with data
            const date1 = new Date(item.date).toDateString().toLowerCase();
            newDateEl.innerText = date1;
            newDateEl.id = "postDate";

            // Add the text element to the article element
            newItemEl.appendChild(newDateEl);
        }

        if (item.postTitle) {
            const newTitleEl = document.createElement("h1");

            newTitleEl.innerText = item.postTitle;
            newTitleEl.id = "postTitle";

            newItemEl.appendChild(newTitleEl);
        }        

        // Let's check if we have some text
        if (item.text) {
            // Create an h2 element
            const newTextEl = document.createElement("p");
            // Populate with data
            newTextEl.innerText = item.text;
            newTextEl.id = "postText";

            // Add the text element to the article element
            newItemEl.appendChild(newTextEl);
        }

        if (item.image) {
            // Create an image element
            const newImgEl = document.createElement("img");
            // Populate with data
            newImgEl.src = `${item.image.url}?w=500`;
            newImgEl.alt = item.image.description;

            // Add the image element to the article element
            newItemEl.appendChild(newImgEl);
        }

        // Let's append the new article element to the DOM!
        document.body.appendChild(newItemEl);
    })
}

// Don’t forget to pass the data from the fetch response correctly
// to your function!
fetch(endpoint, fetchOptions)
    .then(response => response.json())
    .then(data => addContentToDom(data.data.blogPostCollection.items));