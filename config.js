const sprachcafeConfig = {
    status: "open",

    bookingUrl: "https://appt.apptrainings.com/r/eFwkYmzxW6cBrvUi",

    closedImage: "images/booking-closed.png",

    fullImage: "images/booking-full.png",

    booking: {
        price:50,

        paymentMethods: {
            instapay: {
                enabled: true,
                name: "InstaPay",
                account: "01221480744"
            },

            orangeCash: {
                enabled: true,
                name: "Orange Cash",
                phone: "01221480744"
            }
        },

        googleScriptUrl: "https://script.google.com/macros/s/AKfycbxc5q8OkssvrlXjV8e008TxhrQuiYm4JK7lPzFFNX8_TS8LsB5w0FrT80GrPix0nSQoeA/exec"
    }
};
