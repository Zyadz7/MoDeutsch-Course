const sprachcafeConfig = {
    status: "closed",

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

        googleScriptUrl: "https://script.google.com/macros/s/AKfycbxYdTmjXh7uFUMB-DSH14Ph-2nSDyGKS7o-PN3_yE1OiBetwqQfbOd6Tq-1zwSND4QyVA/exec"
    }
};
