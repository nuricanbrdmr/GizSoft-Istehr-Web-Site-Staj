$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".main-header").addClass("setActive");
    } else {
        $(".main-header").removeClass("setActive");
    }
});

if ($('.bannercar').length > 0) {
    var owl = $('.bannercar');
    owl.owlCarousel({
        margin: 30,
        dots: true,
        nav: true,
        navText: ['<i class="bx bx-left-arrow-alt"></i>', '<i class="bx bx-right-arrow-alt"></i>'],
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
}

if ($('.pricing-slider').length > 0) {
    var owl = $('.pricing-slider');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="bx bx-left-arrow-alt"></i>', '<i class="bx bx-right-arrow-alt"></i>'],
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
}

if ($('.cr-slider').length > 0) {
    var owl = $('.cr-slider');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="bx bx-left-arrow-alt"></i>', '<i class="bx bx-right-arrow-alt"></i>'],
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
}

AOS.init();


var app = angular.module('App', []);

app.controller('myController', function($scope) {
    $scope.reference = ["matmazel","puma","banco","fast"];

    $scope.items = [
        {
            title: "İzin Takibi",
            description: "İzinlerinizi kolayca düzenleyin, takip edin ve kontrol altında tutun.",
            originalImageSrc: "assets/css/img/icon/calendar.png",
            newImageSrc: "assets/css/img/icon/calendar.gif",
            currentImageSrc: "assets/css/img/icon/calendar.png"
        },
        {
            title: "Bodro Sistemi",
            description: "Maaşlarınızı güvenle yönetin, işinizi büyütme fırsatlarını kaçırmayın.",
            originalImageSrc: "assets/css/img/icon/calculator.png",
            newImageSrc: "assets/css/img/icon/calculator.gif",
            currentImageSrc: "assets/css/img/icon/calculator.png"
        },
        {
            title: "Erişim",
            description: "İhtiyacınız olan her an, her yerde yanınızdayız.",
            originalImageSrc: "assets/css/img/icon/around-the-world.png",
            newImageSrc: "assets/css/img/icon/around-the-world.gif",
            currentImageSrc: "assets/css/img/icon/around-the-world.png"
        },

        {
            title: "Mobil Uygulama",
            description: "Mobil uygulama ile istediğiniz zaman, her yerden ulaşın.",
            originalImageSrc: "assets/css/img/icon/shopping.png",
            newImageSrc: "assets/css/img/icon/shopping.gif",
            currentImageSrc: "assets/css/img/icon/shopping.png"
        },
        {
            title: "Günlük Yedekleme",
            description: "Verilerinizi her gün koruma altına alıyoruz.",
            originalImageSrc: "assets/css/img/icon/folder.png",
            newImageSrc: "assets/css/img/icon/folder.gif",
            currentImageSrc: "assets/css/img/icon/folder.png"
        },
        {
            title: "Bulut Tabanlı Sistem",
            description: "İşlerinizi her an her yerden yönetebilmeniz için güvenilir ve esnek bir çözüm sunuyoruz.",
            originalImageSrc: "assets/css/img/icon/cloud-network.png",
            newImageSrc: "assets/css/img/icon/cloud-network.gif",
            currentImageSrc: "assets/css/img/icon/cloud-network.png"
        },

        {
            title: "Personele Anlık Bildirim",
            description: "Ekip içi iletişimi anında sağlayın, işbirliğini güçlendirin.",
            originalImageSrc: "assets/css/img/icon/notification.png",
            newImageSrc: "assets/css/img/icon/notification.gif",
            currentImageSrc: "assets/css/img/icon/notification.png"
        },
        {
            title: "Raporlama",
            description: "Verilerinizi detaylı analizlerle şeffaf bir şekilde yönetin.",
            originalImageSrc: "assets/css/img/icon/paper.png",
            newImageSrc: "assets/css/img/icon/paper.gif",
            currentImageSrc: "assets/css/img/icon/paper.png"
        },
        {
            title: "Kolay Kurulum",
            description: "Mobil PDKS sistemi ile büyük donanım yatırımları gerekmeden, sadece tabletle giriş-çıkış takibini kolaylıkla sağlayın.",
            originalImageSrc: "assets/css/img/icon/settings.png",
            newImageSrc: "assets/css/img/icon/settings.gif",
            currentImageSrc: "assets/css/img/icon/settings.png"
        },
    ];
    
    $scope.imageChange = function (item, isHovered) {
        item.currentImageSrc = isHovered ? item.newImageSrc : item.originalImageSrc;
    };
    
    
    var scrollToTopButton = document.getElementById("scroll-top");
    window.onscroll = function() {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
    }

    scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

});