   var form = document.getElementById("infoForm");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            fetch('/Admin/Kultur/Add', {
                method: 'post',
                body: new FormData(form)
            }).then(function () {
                form.reset();
            });
        });
