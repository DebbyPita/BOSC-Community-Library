// BOSC Community Library - JavaScript Functions

// Sample resources database
const resources = [
    {
        id: 1,
        title: "Introduction to Python Programming",
        author: "Sarah Johnson",
        description: "Comprehensive guide to Python programming for beginners and intermediate developers",
        category: "Programming",
        language: "English"
    },
    {
        id: 2,
        title: "Digital Library Management Systems",
        author: "Michael Chen",
        description: "Exploration of modern library systems and best practices for digital resource management",
        category: "Library Science",
        language: "English"
    },
    {
        id: 3,
        title: "Open Source Software Development",
        author: "Emma Rodriguez",
        description: "Guide to contributing to open-source projects and community governance",
        category: "Open Source",
        language: "English"
    },
    {
        id: 4,
        title: "Machine Learning Fundamentals",
        author: "David Kim",
        description: "Introduction to machine learning concepts and practical implementation techniques",
        category: "AI/ML",
        language: "English"
    },
    {
        id: 5,
        title: "Web Development Best Practices",
        author: "Jessica Brown",
        description: "Modern approaches to building responsive and accessible web applications",
        category: "Web Development",
        language: "English"
    },
    {
        id: 6,
        title: "Data Science with Python",
        author: "Thomas Wilson",
        description: "Advanced data analysis and visualization techniques using Python libraries",
        category: "Data Science",
        language: "English"
    }
];

// Bookmarks storage in localStorage
function getBookmarks() {
    const bookmarks = localStorage.getItem('bosc_bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('bosc_bookmarks', JSON.stringify(bookmarks));
}

function addBookmark(button) {
    const card = button.closest('.resource-card');
    const title = card.querySelector('h4').textContent;
    const bookmarks = getBookmarks();

function borrowBook(button, resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    
    if (resource.copies > 0) {
        resource.copies--;
        button.textContent = '✓ Borrowed';
        button.disabled = true;
        alert(`"${resource.title}" borrowed successfully!`);
        trackEvent('book_borrowed', { title: resource.title });
    } else {
        alert('Sorry, this resource is currently unavailable.');
    }
}
    
// Password validation function
function validatePassword(password) {
    if(password.length >= 8) {
        return true; // Password is valid
    } else {
        alert('Password must be at least 8 characters');
        return false;
    }
}
    // Email validation function
function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(emailPattern.test(email)) {
        return true; // Email is valid
    } else {
        alert('Please enter a valid email address');
        return false;
    }
} 
    // Check if already bookmarked
    if (!bookmarks.find(b => b.title === title)) {
        bookmarks.push({
            title: title,
            author: card.querySelector('.author').textContent,
            dateAdded: new Date().toLocaleDateString()
        });
        saveBookmarks(bookmarks);
        button.textContent = '✓ Bookmarked';
        button.style.backgroundColor = '#16a34a';
        alert(`"${title}" added to bookmarks!`);
    } else {
        alert('This resource is already in your bookmarks!');
    }
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase().trim();
    const resultsDiv = document.getElementById('search-results');
    <button class="btn btn-small" onclick="borrowBook(this, ${resource.id})"> Borrow</button>
    
    if (!query) {
        resultsDiv.innerHTML = '<p>Please enter a search term</p>';
        return;
    }
    
    const totalBooks = books.length
const activeUsers = users.length
const overdueBooks = borrowed.filter(book => book.overdue)
    
    const results = resources.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.author.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query)
    );
function filterBooks(query) {
    return resources.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `<p>No resources found matching "${query}"</p>`;
        return;
    }
    
    let html = `<div style="color: var(--text-light); margin-bottom: 1rem;">Found ${results.length} result(s)</div>`;
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">';
    
    results.forEach(resource => {
        html += `
            <div style="background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: var(--shadow);">
                <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">${resource.title}</h4>
                <p style="color: var(--primary-color); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">${resource.author}</p>
                <p style="color: var(--text-light); margin-bottom: 0.75rem; font-size: 0.95rem;">${resource.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span style="background-color: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">${resource.category}</span>
                    <button class="btn btn-small" onclick="addBookmark(this)">📌 Bookmark</button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsDiv.innerHTML = html;
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Display bookmark count on load
    displayBookmarkCount();
});

function displayBookmarkCount() {
    const bookmarks = getBookmarks();
    if (bookmarks.length > 0) {
        console.log(`You have ${bookmarks.length} bookmarked items`);
    }
}

// Analytics tracking
function trackEvent(eventName, eventData) {
    const timestamp = new Date().toISOString();
    const event = {
        name: eventName,
        timestamp: timestamp,
        data: eventData
    };
    
    let events = localStorage.getItem('bosc_events');
    events = events ? JSON.parse(events) : [];
    events.push(event);
    localStorage.setItem('bosc_events', JSON.stringify(events));
    
    console.log(`Event tracked: ${eventName}`, event);
}

// Track search events
const originalPerformSearch = performSearch;
window.performSearch = function() {
    const query = document.getElementById('search-input').value;
    trackEvent('search', { query: query });
    originalPerformSearch();
};

// Track bookmark events
const originalAddBookmark = addBookmark;
window.addBookmark = function(button) {
    const title = button.closest('.resource-card').querySelector('h4').textContent;
    trackEvent('bookmark_added', { title: title });
    originalAddBookmark(button);
};
