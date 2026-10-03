/* =====================================================
   RAUTAHAT IT PVT. LTD.
   DIGITAL MARKETING PORTFOLIO
===================================================== */


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   BACK TO TOP
===================================================== */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.style.display = "grid";

    } else {

        topButton.style.display = "none";

    }

});


function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   GOOGLE ADS BUTTON
===================================================== */

function showAdMessage() {

    alert(

        "Google Ads Campaign Concept\n\n" +

        "Goal: Lead Generation\n" +

        "Target: Businesses looking for IT solutions\n\n" +

        "This is a sample advertising campaign created " +
        "for portfolio demonstration."

    );

}


/* =====================================================
   CONTACT BUTTON
===================================================== */

function showMessage() {

    alert(

        "Thank you for viewing my portfolio!\n\n" +

        "This project demonstrates:\n" +

        "• Social Media Marketing\n" +

        "• SEO Strategy\n" +

        "• Google Ads\n" +

        "• Marketing Analytics\n" +

        "• Lead Generation\n" +

        "• Content Strategy"

    );

}


/* =====================================================
   ANALYTICS CHART
===================================================== */

const chartData = {

    reach: [
        35,
        50,
        45,
        70,
        65,
        85,
        100
    ],

    engagement: [
        30,
        45,
        60,
        55,
        75,
        70,
        90
    ],

    leads: [
        20,
        35,
        30,
        50,
        45,
        65,
        80
    ]

};


function drawChart(type = "reach") {

    const chart =
        document.getElementById("barChart");


    if (!chart) {
        return;
    }


    chart.innerHTML = "";


    chartData[type].forEach(function (value) {

        const bar =
            document.createElement("div");


        bar.className =
            "chart-bar";


        bar.style.height =
            value + "%";


        chart.appendChild(bar);

    });

}


function changeChart() {

    const selector =
        document.getElementById("chartSelector");


    drawChart(selector.value);

}


/* Load initial chart */

drawChart("reach");


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "Rautahat IT Pvt. Ltd. Marketing Portfolio Loaded."
);

console.log(
    "Created by Rajan Gupta."
);