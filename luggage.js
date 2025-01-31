
    

    <script>
        // Initialize Calendar for Date Picker
        flatpickr("#storageDate", {
            dateFormat: "Y-m-d",
        });

        // Pricing Calculation Logic
        document.getElementById("bookingForm").addEventListener("submit", function (e) {
            e.preventDefault();
            
            const bagSize = document.getElementById("bagSize").value;
            const duration = document.querySelector('input[name="duration"]:checked').value;
            const storageDate = document.getElementById("storageDate").value;

            let price = 0;

            if (duration === "hourly") {
                switch (bagSize) {
                    case "large": price = 35; break;
                    case "medium": price = 30; break;
                    case "small": price = 25; break;
                }
                price += " Ksh/hr";
            } else if (duration === "daily") {
                switch (bagSize) {
                    case "large": price = 200; break;
                    case "medium": price = 180; break;
                    case "small": price = 150; break;
                }
                price += " Ksh/day";
            } else if (duration === "monthly") {
                switch (bagSize) {
                    case "large": price = 4800; break;
                    case "medium": price = 4000; break;
                    case "small": price = 3000; break;
                }
                price += " Ksh/month";
            }

            document.getElementById("price").textContent = `Your estimated price for the selected storage is: ${price}.`;
        });
    </script>