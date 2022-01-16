class OM {
    populateOffersPage() {
        console.log(`[OfferManagement] Aanbiedingen neerzetten op de aanbiedingen pagina . . .`);

        const target = document.getElementById("offers")!;

        target.innerText = "";

        for (let offer of offers) {
            const frame = document.createElement("div");
            const image = document.createElement("img");
            const dbody = document.createElement("div");
            const headr = document.createElement("h1");
            const descr = document.createElement("p");
            const price = document.createElement("p");
            const buttn = document.createElement("button");

            frame.className = "aanbieding";
            image.src = offer[1].imph;
            dbody.className = "body";
            headr.className = "header";
            headr.innerText = offer[1].name;
            descr.className = "description";
            descr.innerText = offer[1].desc;
            price.className = "price";
            price.innerText = offer[1].prce;
            buttn.className = `buy ${offer[1].sout ? "" : "suggested"}`;
            buttn.innerText = offer[1].sout ? "Uitverkocht!" : "Koop >";

            dbody.append(headr, descr, price, buttn);
            frame.append(image, dbody);
            target.append(frame);
        }
    }
}

export const offers = new Map<string, Offer>([
    ["p1", {
        name: "Plant 1",
        desc: "Beste voor binnen",
        prce: "€10,-",
        sout: true,
        imph: "https://www.ikea.com/nl/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=xl"
    }],
    ["p2", {
        name: "Plant 2",
        desc: "Beste voor buiten",
        prce: "€7,-",
        sout: false,
        imph: "https://cdn.webshopapp.com/shops/29478/files/328091686/330x330x2/terracotta-laurus-nobilis.jpg"
    }], ["p3", {
        name: "Plant 3",
        desc: "Gaat lang mee",
        prce: "€20,-",
        sout: false,
        imph: "https://www.tuincentrumdeoudetol.nl/files/images/product-range/tuinplanten-kopen-in-wageningen_n.jpg"
    }]
]); // Het register van alle aanbiedingen

export interface Offer {
    name: string; // Naam van aanbieding
    desc: string; // Beschrijving
    prce: string; // Prijs
    sout: boolean; // Uitverkocht?
    imph: string; // Pad naar afbeelding
}

export const OfferManagement = new OM();