(async () => {
    const { value: nombre } = await Swal.fire({
        title: 'Bienvenida',
        icon: 'success',
        confirmButtonText: 'Continuar',
        footer: '<b>¡Tú eres el centro de esta familia!</b>',
        width: '70%',
        background: '#dfab9f',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        input: 'text',
        inputPlaceholder: 'Ingresa tu nombre',
        inputValue: '',
        customClass: {
            popup: 'popup-class',
            input: 'input-class',
            confirmButton: 'confirmButton'
        },
        buttonsStyling: false
    });




    if (nombre) {
        Swal.fire({
            title: 'Ilda es el nombre de la madre más bonita y regañona :)',
            confirmButtonText: 'Continuar',
            width: '70%',
            background: '#dfab9f',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            customClass: {
                popup: 'popup-class',
                input: 'input-class',
                confirmButton: 'confirmButton'
            },
            buttonsStyling: false

        })
    }
})()