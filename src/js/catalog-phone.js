const catalogPhone = document.querySelector('.catalog-phone');

if (catalogPhone) {
    const phone = localStorage.getItem('catalogPhone');
    if (!phone) {
        const modal = document.querySelector('.modal');
        modal.classList.add('active');
        document.body.classList.add("modal-bg");

        setTimeout(() => {
            console.log($("#phone"));
            $("#phone").mask("+7 (ddd) ddd-dd-dd", {
                autoclear: true
            });
        }, 0);

        const form = modal.querySelector('form');
        const closeModal = modal.querySelector('.hide-modal');
        const nameFld = modal.querySelector('#name');
        const phoneFld = modal.querySelector('#phone');
        let isValid = true;

        nameFld.addEventListener('blur', e => {
            if (!nameFld || !nameFld.value) {
                isValid = false;
                nameFld.classList.add('field-err');
            } else {
                isValid = true;
                nameFld.classList.remove('field-err');
            }
        });

        phoneFld.addEventListener('blur', e => {
            if (!phoneFld || !phoneFld.value) {
                isValid = false;
                phoneFld.classList.add('field-err');
            } else {
                isValid = true;
                phoneFld.classList.remove('field-err');
                localStorage.setItem('catalogPhone', phoneFld.value);
            }
        });

        closeModal.addEventListener('click', e => {
            if (!nameFld || !nameFld.value) {
                isValid = false;
                nameFld.classList.add('field-err');
            }
            if (!phoneFld || !phoneFld.value) {
                isValid = false;
                phoneFld.classList.add('field-err');
            }

            if (isValid && localStorage.catalogPhone) {
                form.classList.remove('form-err');
                modal.classList.remove('active');
                document.body.classList.remove("modal-bg");
            } else {
                form.classList.add('form-err');
            }
        });
    }
};
