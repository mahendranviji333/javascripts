var faqs = document.querySelectorAll('.faq');

var removeAllActiveClasses = function () {
    faqs.forEach(function (faq) {
        faq.classList.remove('active');
    });
};

faqs.forEach(function (faq) {
    faq.addEventListener('click', function () {
        if (faq.classList.contains('active'))
            faq.classList.remove('active');
        else{
            removeAllActiveClasses();
            faq.classList.add('active');
        }
    });
});