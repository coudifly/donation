document.addEventListener('DOMContentLoaded', () => {
    const phone = document.querySelector("#phone");
    window.intlTelInput(phone, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "br";
                success(countryCode);
            });
        },
    });

    const amount_buttons = document.querySelectorAll('.btn-amount');
    amount_buttons.forEach((item) => {
        item.addEventListener('click', () => {
            amount_buttons.forEach((el) => {
                el.classList.remove('btn-primary');
                el.classList.add('btn-outline-primary');
            });

            item.classList.add('btn-primary');
            item.classList.remove('btn-outline-primary');
        });
    });

    // Wizard elements
    const next_1 = document.querySelector('#next-1');
    const next_2 = document.querySelector('#next-2');
    const prev_1 = document.querySelector('#prev-1');
    const prev_2 = document.querySelector('#prev-2');
    const wizard_1 = document.querySelector('#wizard-1');
    const wizard_2 = document.querySelector('#wizard-2');
    const wizard_3 = document.querySelector('#wizard-3');

    // Wizard events
    next_1.addEventListener('click', () => {
        wizard_1.classList.add('d-none');
        wizard_2.classList.remove('d-none');
        wizard_3.classList.add('d-none');
    })

    next_2.addEventListener('click', () => {
        wizard_1.classList.add('d-none');
        wizard_2.classList.add('d-none');
        wizard_3.classList.remove('d-none');
    });

    prev_1.addEventListener('click', () => {
        wizard_1.classList.remove('d-none');
        wizard_2.classList.add('d-none');
    });

    prev_2.addEventListener('click', () => {
        wizard_1.classList.add('d-none');
        wizard_2.classList.remove('d-none');
        wizard_3.classList.add('d-none');
    });

    // Form fields
    const name = document.querySelector('#name');
    const name_label = document.querySelector('#name-label');
    const doc_label = document.querySelector('#document-label');
    const doc = document.querySelector('#document');
    const company_donation = document.querySelector('#company_donation');

    // Form events
    company_donation.addEventListener('change', (event) => {
        if (event.target.checked) {
            name_label.innerHTML = 'Nome da empresa';
            name.placeholder = 'Digite o nome da empresa doadora';
            doc_label.innerHTML = 'CNPJ';
            doc.placeholder = 'Digite o CNPJ da empresa';
        } else {
            name_label.innerHTML = 'Nome';
            doc_label.innerHTML = 'CPF';
            name.placeholder = 'Digite o seu nome'
            doc.placeholder = 'Digite o seu CPF';
        }
    });

    // Payment Method
    const payment_methods = document.querySelectorAll('input[name=payment_method]');
    const card_form = document.querySelector('#card-form');
    payment_methods.forEach((el) => {
        el.addEventListener('change', (event) => {
            if (event.target.value == 'card') {
                card_form.classList.remove('d-none');
            } else {
                card_form.classList.add('d-none');
            }
        });
    });
});
