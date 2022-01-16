class N {

    // Navigeer naar de gegeven pagina
    navigate(page: page) {
        if (this.registered(page)) {
            console.log(`[Navigation] Bezig met navigeren naar ${page.id} . . .`);
            this.currentPageId = page.id;

            this.updatePageVisibility();
            this.updateNavButtons();

            document.title = page.displayName;
        }
    }

    // Registreer de gegeven pagina
    register(...pages: page[]) {
        for (let i=0;i<pages.length;i++) {
            const page = pages[i];

            if (!this.registered(page)) { // Ga alleen door als de pagina niet is geregistreerd
                console.log(`[Navigation] Bezig met registreren van ${page.id} . . .`);
                const node = document.getElementById(`page-${page.id}`);
    
                if (node) { // Bestaat de pagina? ga door
                    this.registeredPages.set(page.id, page);
                }
            }
        }
        
    }

    // Zegt of de gegeven pagina is geregistreerd.
    registered(page: page) {
        return !!this.registeredPages.has(page.id); // zegt altijd "true" of "false"
    }

    // Maak de navigatiebalk


    updatePageVisibility() {
        for (let page of this.registeredPages) {
            const node = document.getElementById(`page-${page[0]}`);

            if (page[0] == this.currentPageId) {
                node?.classList.remove("hidden");
            } else {
                node?.classList.add("hidden");
            }
        }
    }

    updateNavButtons() {
        for (let page of this.registeredPages) {
            const button = document.getElementById(`button-${page[0]}`);

            if (this.currentPageId == page[0]) {
                button?.classList.add("selected");
            } else {
                button?.classList.remove("selected");
            }
        }
    }

    // De publieke lijst met geregistreerde pagina's
    registeredPages = new Map<string, page>();
    navCreated = false;
    currentPageId = "";
}

/**
 * Izaak Kuipers <TechWorldInc> Zondag 16 Januari 2022, 10:42
 * 
 * Elke pagina heeft 3 eigenschappen die de Navigator zal gebruiken:
 * 
 * displayName:     de weergegeven naam op de website
 * id:              de naam die alleen in de code zelf wordt gebruikt,
 *                  deze zal de gebruiker nooit zien.
 * onNav:           voor pagina's die niet op de navigatiebalk moeten staan,
 *                  bijv. instellingen pagina's of dergelijke, die verbergen
 *                  we op de navigatiebalk.
 * 
 * INFROMATIE: een "interface" in TS bevat optionele
 *             en benodigde gegevens voor een variabele.
 */
export interface page {
    displayName: string;
    id: string;
    onNav?: boolean;
    materialIcon:string;
}

export const Navigation = new N();