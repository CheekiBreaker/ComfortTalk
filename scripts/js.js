document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const modal = document.getElementById('testimonial-modal');
    const modalClose = document.getElementById('modal-close');

    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const role = this.getAttribute('data-role');
            const image = this.getAttribute('data-image');
            const rating = parseInt(this.getAttribute('data-rating'));
            const text = this.getAttribute('data-text');

            document.getElementById('modal-image').src = image;
            document.getElementById('modal-image').alt = name;
            document.getElementById('modal-name').textContent = name;
            document.getElementById('modal-role').textContent = role;
            document.getElementById('modal-text').textContent = text;

            const modalRating = document.getElementById('modal-rating');
            modalRating.innerHTML = '';
            for (let i = 0; i < rating; i++) {
                const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                star.setAttribute('width', '24');
                star.setAttribute('height', '24');
                star.setAttribute('viewBox', '0 0 24 24');
                star.setAttribute('fill', 'currentColor');
                star.setAttribute('stroke', 'currentColor');
                star.setAttribute('stroke-width', '2');
                star.setAttribute('stroke-linecap', 'round');
                star.setAttribute('stroke-linejoin', 'round');

                const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                polygon.setAttribute('points', '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2');

                star.appendChild(polygon);
                modalRating.appendChild(star);
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            faqItems.forEach(i => {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
