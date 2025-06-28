// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.add('bg-light');
        navbar.classList.remove('bg-white');
    }
});

// Initialize Swiper sliders
document.addEventListener('DOMContentLoaded', function() {
    // Gallery slider
    const gallerySlider = new Swiper('.gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Testimonials slider
    const testimonialSlider = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            
            if (form.checkValidity()) {
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // Here you would typically send the data to your server
                console.log('Form submitted:', data);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.textContent = 'Thank you! We will contact you shortly.';
                form.appendChild(successMessage);
                
                // Reset form
                form.reset();
                form.classList.remove('was-validated');
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
            
            form.classList.add('was-validated');
        }, false);
    });
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// WhatsApp click handler
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // You can add tracking or additional functionality here
        console.log('WhatsApp button clicked');
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (this.checkValidity()) {
                const formData = new FormData(this);
                const data = Object.fromEntries(formData.entries());

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;

                // Simulate API call (replace with actual API endpoint)
                setTimeout(() => {
                    // Show success message
                    const successAlert = document.createElement('div');
                    successAlert.className = 'alert alert-success mt-3 alert-dismissible fade show';
                    successAlert.innerHTML = `
                        <i class="fas fa-check-circle me-2"></i>
                        Thank you for your message! We'll get back to you soon.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
                    this.appendChild(successAlert);

                    // Reset form
                    this.reset();
                    this.classList.remove('was-validated');

                    // Restore button state
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successAlert.remove();
                    }, 5000);
                }, 1500);
            }

            this.classList.add('was-validated');
        });
    }
});

// Phone number formatting
const phoneInput = document.getElementById('contactPhone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : !x[3] ? `${x[1]}-${x[2]}` : `${x[1]}-${x[2]}-${x[3]}`;
    });
}

// Copy contact information to clipboard
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.classList.contains('whatsapp-link')) return; // Don't prevent WhatsApp links

        const textToCopy = this.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Show tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'copy-tooltip';
            tooltip.textContent = 'Copied!';
            this.appendChild(tooltip);

            // Remove tooltip after animation
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
});

// Add hover effect to map
const mapCard = document.querySelector('.map-card');
if (mapCard) {
    const mapOverlay = mapCard.querySelector('.map-overlay');
    
    mapCard.addEventListener('mouseenter', () => {
        mapOverlay.style.opacity = '0';
    });
    
    mapCard.addEventListener('mouseleave', () => {
        mapOverlay.style.opacity = '1';
    });
}

// Google Reviews Integration
function initGoogleReviews() {
    // Replace with your Google Places API key and Place ID
    const GOOGLE_API_KEY = 'YOUR_API_KEY';
    const PLACE_ID = 'YOUR_PLACE_ID';
    
    // Fetch reviews from Google Places API
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                // Update summary
                updateReviewsSummary(data.result.rating, data.result.user_ratings_total);
                // Display reviews
                displayReviews(data.result.reviews);
            }
        })
        .catch(error => {
            console.error('Error fetching Google Reviews:', error);
            displayFallbackReviews();
        });
}

function updateReviewsSummary(rating, totalReviews) {
    const ratingScore = document.querySelector('.rating-score');
    const ratingCount = document.querySelector('.rating-count');
    
    if (ratingScore && ratingCount) {
        ratingScore.textContent = rating.toFixed(1);
        ratingCount.textContent = `(${totalReviews}+ Reviews)`;
    }
}

function displayReviews(reviews) {
    const container = document.getElementById('googleReviews');
    if (!container) return;

    container.innerHTML = reviews.map(review => `
        <div class="col-md-6 col-lg-4">
            <div class="google-review-card">
                <div class="review-header">
                    <img src="${review.profile_photo_url || 'images/default-avatar.png'}" 
                         alt="${review.author_name}" 
                         class="reviewer-image">
                    <div class="reviewer-info">
                        <div class="reviewer-name">${review.author_name}</div>
                        <div class="review-date">${formatReviewDate(review.time)}</div>
                    </div>
                </div>
                <div class="review-stars">
                    ${getStarRating(review.rating)}
                </div>
                <div class="review-text">
                    ${formatReviewText(review.text)}
                </div>
                <div class="google-attribution">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                         alt="Google Review" 
                         height="20">
                </div>
            </div>
        </div>
    `).join('');

    // Initialize read more functionality
    initReadMore();
}

function getStarRating(rating) {
    return Array(5).fill('').map((_, index) => 
        `<i class="fas fa-star${index < rating ? '' : ' text-muted'}"></i>`
    ).join('');
}

function formatReviewDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatReviewText(text) {
    if (!text) return '';
    
    const maxLength = 150;
    if (text.length <= maxLength) return text;

    const truncated = text.substr(0, maxLength);
    return `
        <span class="review-preview">${truncated}...</span>
        <span class="review-full" style="display: none;">${text}</span>
        <span class="read-more">Read more</span>
    `;
}

function initReadMore() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const reviewText = this.parentElement;
            const preview = reviewText.querySelector('.review-preview');
            const full = reviewText.querySelector('.review-full');
            
            if (preview.style.display !== 'none') {
                preview.style.display = 'none';
                full.style.display = 'inline';
                this.textContent = 'Read less';
            } else {
                preview.style.display = 'inline';
                full.style.display = 'none';
                this.textContent = 'Read more';
            }
        });
    });
}

function displayFallbackReviews() {
    // Display some static reviews as fallback
    const fallbackReviews = [
        {
            author_name: "Sarah Johnson",
            rating: 5,
            text: "Amazing experience at HD Skin & Hair Clinic! Dr. Hemangi's expertise in treating my skin concerns was exceptional. The staff is professional and caring.",
            time: Date.now() / 1000,
            profile_photo_url: "images/default-avatar.png"
        },
        {
            author_name: "Rahul Mehta",
            rating: 5,
            text: "Best hair treatment center in Mira Road! The PRP therapy showed remarkable results. Highly recommend Dr. Hemangi and her team.",
            time: (Date.now() - 86400000) / 1000,
            profile_photo_url: "images/default-avatar.png"
        },
        {
            author_name: "Priya Sharma",
            rating: 5,
            text: "Very satisfied with my laser treatment results. The clinic is clean, modern, and the staff is very professional. Worth every penny!",
            time: (Date.now() - 172800000) / 1000,
            profile_photo_url: "images/default-avatar.png"
        }
    ];

    displayReviews(fallbackReviews);
    updateReviewsSummary(5.0, 120);
}

// Initialize Google Reviews when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initGoogleReviews();
});

// Instagram Feed
async function fetchInstagramFeed() {
    try {
        // Static Instagram feed data
        const mockPosts = [
            {
                id: '1',
                media_url: 'https://picsum.photos/400/400?random=1',
                caption: '✨ Introducing our latest addition to HD Skin & Hair - The Hydrafacial Treatment! 💫\n\nExperience the ultimate in skin rejuvenation with our state-of-the-art Hydrafacial. This revolutionary treatment combines cleansing, exfoliation, extraction, and hydration all in one session! 🌟\n\n#HDSkinAndHair #Hydrafacial #SkinCare #GlowingSkin #BeautyTreatment #SkinClinic #MiraRoad #Mumbai',
                timestamp: '2024-03-19T10:30:00+0000',
                permalink: 'https://www.instagram.com/hdskin_hair',
                likes: 156,
                comments: 12
            },
            {
                id: '2',
                media_url: 'https://picsum.photos/400/400?random=2',
                caption: '🌟 Transform your look with our expert hair treatments! 💇‍♀️\n\nSwipe to see this amazing transformation by our team. From dull and damaged to vibrant and healthy hair!\n\n#HDSkinAndHair #HairTransformation #HairCare #Salon #BeautyClinic #MiraRoad',
                timestamp: '2024-03-18T14:15:00+0000',
                permalink: 'https://www.instagram.com/hdskin_hair',
                likes: 203,
                comments: 18
            },
            {
                id: '3',
                media_url: 'https://picsum.photos/400/400?random=3',
                caption: '✨ Your skin deserves the best care! 🌟\n\nBook your consultation today and let us help you achieve that perfect, glowing skin you\'ve always dreamed of!\n\n#HDSkinAndHair #SkinCare #GlowingSkin #BeautyClinic #SkinTreatment #MiraRoad',
                timestamp: '2024-03-17T09:45:00+0000',
                permalink: 'https://www.instagram.com/hdskin_hair',
                likes: 178,
                comments: 15
            },
            {
                id: '4',
                media_url: 'https://picsum.photos/400/400?random=4',
                caption: '💆‍♀️ Pamper yourself with our signature facial treatments! ✨\n\nGet that radiant glow and youthful skin with our expert skincare services.\n\n#HDSkinAndHair #FacialTreatment #SkinCare #GlowingSkin #BeautyClinic #MiraRoad',
                timestamp: '2024-03-16T11:30:00+0000',
                permalink: 'https://www.instagram.com/hdskin_hair',
                likes: 165,
                comments: 14
            }
        ];

        displayInstagramFeed(mockPosts);
    } catch (error) {
        console.error('Error fetching Instagram feed:', error);
        document.getElementById('instagramFeed').innerHTML = `
            <div class="col-12 text-center">
                <p>Unable to load Instagram feed. Please check back later.</p>
            </div>
        `;
    }
}

function displayInstagramFeed(posts) {
    const feedContainer = document.getElementById('instagramFeed');
    feedContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-6 col-md-4 col-lg-3';
        postElement.innerHTML = `
            <div class="instagram-post" data-post-id="${post.id}">
                <img src="${post.media_url}" alt="Instagram Post" loading="lazy">
                <div class="overlay">
                    <div class="engagement">
                        <span class="me-3"><i class="far fa-heart"></i> ${post.likes}</span>
                        <span><i class="far fa-comment"></i> ${post.comments}</span>
                    </div>
                </div>
            </div>
        `;

        postElement.querySelector('.instagram-post').addEventListener('click', () => {
            openInstagramModal(post);
        });

        feedContainer.appendChild(postElement);
    });
}

function openInstagramModal(post) {
    const modal = document.getElementById('instagramModal');
    const modalInstance = new bootstrap.Modal(modal);

    // Update modal content
    modal.querySelector('.modal-image img').src = post.media_url;
    modal.querySelector('.username').textContent = '@hdskin_hair';
    modal.querySelector('.timestamp').textContent = formatDate(post.timestamp);
    modal.querySelector('.post-caption').textContent = post.caption;
    modal.querySelector('.likes-count').textContent = post.likes;
    modal.querySelector('.comments-count').textContent = post.comments;
    modal.querySelector('.view-on-instagram').href = post.permalink;

    modalInstance.show();
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Sticky Header
function handleStickyHeader() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Gallery Functionality
function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const modal = document.getElementById('galleryModal');
    const modalInstance = new bootstrap.Modal(modal);

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Before/After slider functionality
    const sliders = document.querySelectorAll('.comparison-slider');
    
    function initSlider(slider) {
        let isResizing = false;
        const handle = slider.querySelector('.handle');
        
        function resizeElement(e) {
            if (!isResizing) return;
            
            let newPosition;
            const container = slider.closest('.before-after-container');
            
            if (e.type === 'mousemove') {
                newPosition = (e.clientX - container.getBoundingClientRect().left) / container.offsetWidth * 100;
            } else if (e.type === 'touchmove') {
                newPosition = (e.touches[0].clientX - container.getBoundingClientRect().left) / container.offsetWidth * 100;
            }
            
            // Constrain position between 0% and 100%
            newPosition = Math.max(0, Math.min(100, newPosition));
            
            slider.style.width = `${newPosition}%`;
        }
        
        // Mouse events
        handle.addEventListener('mousedown', () => isResizing = true);
        window.addEventListener('mousemove', resizeElement);
        window.addEventListener('mouseup', () => isResizing = false);
        
        // Touch events
        handle.addEventListener('touchstart', () => isResizing = true);
        window.addEventListener('touchmove', resizeElement);
        window.addEventListener('touchend', () => isResizing = false);
    }
    
    sliders.forEach(initSlider);

    // Modal functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const beforeImg = item.querySelector('.before-img').src;
            const afterImg = item.querySelector('.comparison-slider img').src;
            const title = item.querySelector('.treatment-info h4').textContent;
            const description = item.querySelector('.treatment-info p').textContent;

            // Update modal content
            modal.querySelector('.modal-title').textContent = title;
            modal.querySelector('.before-img').src = beforeImg;
            modal.querySelector('.comparison-slider img').src = afterImg;
            modal.querySelector('.treatment-title').textContent = title;
            modal.querySelector('.treatment-description').textContent = description;
            modal.querySelector('.treatment-date').textContent = '2 months ago'; // Example date
            modal.querySelector('.treatment-duration').textContent = '45 minutes'; // Example duration

            modalInstance.show();

            // Initialize slider in modal
            initSlider(modal.querySelector('.comparison-slider'));
        });
    });

    // View More functionality
    let isExpanded = false;
    const initialItems = 6;

    function toggleGalleryItems() {
        const items = Array.from(galleryItems);
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

        items.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            if (activeFilter === 'all' || category === activeFilter) {
                if (index >= initialItems) {
                    item.style.display = isExpanded ? 'block' : 'none';
                    if (isExpanded) {
                        item.style.animation = 'fadeIn 0.5s ease forwards';
                    }
                }
            }
        });

        // Update button text and icon
        const btnText = viewMoreBtn.querySelector('span');
        const btnIcon = viewMoreBtn.querySelector('i');
        
        if (isExpanded) {
            btnText.textContent = 'View Less';
            btnIcon.classList.remove('fa-chevron-down');
            btnIcon.classList.add('fa-chevron-up');
        } else {
            btnText.textContent = 'View More Results';
            btnIcon.classList.remove('fa-chevron-up');
            btnIcon.classList.add('fa-chevron-down');
        }

        isExpanded = !isExpanded;
    }

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', toggleGalleryItems);
        // Initial hide of extra items
        toggleGalleryItems();
    }
}

// Add gallery initialization to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize testimonial slider
    new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Initialize Instagram feed
    fetchInstagramFeed();

    // Initialize sticky header
    window.addEventListener('scroll', handleStickyHeader);
    handleStickyHeader();

    // Initialize gallery
    initGallery();
});

// Appointment form handling
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.querySelector('.appointment-form');
    if (!appointmentForm) return;

    // Time slot selection
    const timeSlots = appointmentForm.querySelectorAll('.time-slot');
    const selectedTimeInput = appointmentForm.querySelector('#selectedTime');

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            selectedTimeInput.value = slot.dataset.time;
            selectedTimeInput.setCustomValidity('');
        });
    });

    // Date input validation
    const dateInput = appointmentForm.querySelector('#appointmentDate');
    dateInput.addEventListener('input', () => {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            dateInput.setCustomValidity('Please select a future date');
        } else {
            dateInput.setCustomValidity('');
        }
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Phone number validation
    const phoneInput = appointmentForm.querySelector('#phone');
    phoneInput.addEventListener('input', (e) => {
        // Remove any non-digit characters
        let value = e.target.value.replace(/\D/g, '');
        
        // Ensure max length of 10 digits
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        
        e.target.value = value;
        
        // Validate phone number
        if (value.length === 10) {
            phoneInput.setCustomValidity('');
        } else {
            phoneInput.setCustomValidity('Please enter a valid 10-digit phone number');
        }
    });

    // Service selection enhancement
    const serviceSelect = appointmentForm.querySelector('#serviceSelect');
    serviceSelect.addEventListener('change', () => {
        if (serviceSelect.value) {
            serviceSelect.classList.add('is-valid');
        } else {
            serviceSelect.classList.remove('is-valid');
        }
    });

    // Form submission
    appointmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Additional validation for time slot
        if (!selectedTimeInput.value) {
            selectedTimeInput.setCustomValidity('Please select a time slot');
        }

        if (appointmentForm.checkValidity()) {
            const submitBtn = appointmentForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simulate API call (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'appointment-success';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>Appointment Scheduled!</strong><br>
                        We'll confirm your appointment shortly via WhatsApp/call.
                    </div>
                `;
                appointmentForm.appendChild(successMessage);

                // Reset form
                appointmentForm.reset();
                timeSlots.forEach(slot => slot.classList.remove('selected'));
                appointmentForm.classList.remove('was-validated');

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            } catch (error) {
                console.error('Error:', error);
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'alert alert-danger mt-3';
                errorMessage.innerHTML = `
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Something went wrong. Please try again or contact us directly.
                `;
                appointmentForm.appendChild(errorMessage);

                setTimeout(() => {
                    errorMessage.remove();
                }, 5000);
            } finally {
                // Restore button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }

        appointmentForm.classList.add('was-validated');
    });
}); 