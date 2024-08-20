
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });

    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                this.querySelector('i').classList.replace('bi-heart-fill', 'bi-heart');
            } else {
                this.classList.add('liked');
                this.querySelector('i').classList.replace('bi-heart', 'bi-heart-fill');
            }
        });
    });

    

    // Abre el modal al hacer clic en la imagen
function openImage(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

// Cierra el modal al hacer clic en la "x"
document.querySelector(".close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}

    