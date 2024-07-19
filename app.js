document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postsContainer = document.getElementById('posts');
        
        data.forEach(post => {
          // Create the card column
          const cardColumn = document.createElement('div');
          cardColumn.className = 'col-md-6 col-lg-4 mb-4';
  
          // Create the card element
          const card = document.createElement('div');
          card.className = 'card h-100';
  
          // Create the card header
          const cardHeader = document.createElement('div');
          cardHeader.className = 'card-header';
          cardHeader.textContent = `Post ID: ${post.id}`;
  
          // Create the card body
          const cardBody = document.createElement('div');
          cardBody.className = 'card-body';
  
          // Create the card title
          const cardTitle = document.createElement('h5');
          cardTitle.className = 'card-title';
          cardTitle.textContent = post.title;
  
          // Create the card text
          const cardText = document.createElement('p');
          cardText.className = 'card-text';
          cardText.textContent = post.body;
  
          // Create the card footer
          const cardFooter = document.createElement('div');
          cardFooter.className = 'card-footer';
          cardFooter.textContent = `User ID: ${post.userId}`;
  
          // Append elements to the card body
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
  
          // Append header, body, and footer to the card
          card.appendChild(cardHeader);
          card.appendChild(cardBody);
          card.appendChild(cardFooter);
  
          // Append the card to the card column
          cardColumn.appendChild(card);
  
          // Append the card column to the posts container
          postsContainer.appendChild(cardColumn);
        });
      })
      .catch(error => console.error('Error fetching posts:', error));
  });
  