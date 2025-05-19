$(document).ready(function () {
  
  $.ajax({
    url: 'data/quotes.json',
    method: 'GET',
    dataType: 'json',
    success: function (quotes) {
      quotes.forEach(function (quote) {
        $('#quote-feed').append(`
          <div class="quote-card">
            <p class="quote-text">"${quote.quote}"</p>
            <p class="quote-author">- ${quote.author}</p>
            <button class="like-btn">❤️ Like</button>
          </div>
        `);
      });

 
      $('.like-btn').click(function () {
        $(this).text('💖 Liked!').css('background', '#ffc0cb');
      });
    },
    error: function () {
      $('#quote-feed').html('<p>Unable to load quotes at the moment. 😢</p>');
    }
  });


  if (window.location.pathname.includes('explore.html')) {
    const exploreData = [
      {
        title: "Watch: How to Stay Positive",
        content: "A quick 3-minute video with powerful tips on keeping a growth mindset. 🌱"
      },
      {
        title: "Read: Uplifting Story of the Week",
        content: "A girl from a small town built her dream app and now inspires others. 📱"
      },
      {
        title: "Discover: Nature's Hidden Messages",
        content: "What trees and flowers can teach us about resilience. 🌳🌸"
      }
    ];

    exploreData.forEach(item => {
      $('#explore-section').append(`
        <div class="explore-card">
          <h3 class="explore-title">${item.title}</h3>
          <p class="explore-content">${item.content}</p>
        </div>
      `);
    });
  }
});
