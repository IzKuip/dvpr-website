import { conf } from "./config";
import { Navigation } from "./nav";

class UI {
    setInPageNavButtons() {
        console.log(`[UserInterface] Navigatieknoppen op iedere pagina functies toewijzen . . .`);
        const allButtons = document.getElementsByTagName("button");

        for (let i=0;i<allButtons.length;i++) {
            if (allButtons[i].id=="navButton") {
                const pageId = allButtons[i].name;

                if (Navigation.registeredPages.has(pageId)) {
                    allButtons[i].addEventListener("click", () => {
                        Navigation.navigate(Navigation.registeredPages.get(pageId)!);

                        Navigation.updateNavButtons();  
                    });

                    allButtons[i].title = Navigation.registeredPages.get(pageId)?.displayName!;
                }
            }
        }
    }

    createNav() {
        console.log(`[UserInterface] Navigatiebalk maken . . .`);

        if (!Navigation.navCreated) { // ga alleen door als de navigatiebalk nog niet gemaakt is
            const nav = document.createElement("div"); // de navigatiebalk

            nav.className = nav.id = "nav";

            for (let page of Navigation.registeredPages) { // Ga door alle geregistreerde pagina's
                const button = document.createElement("button"); // Knop voor de pagina

                const desktopText = document.createElement("span");
                const phoneText = document.createElement("span");

                desktopText.className = "desktop";
                desktopText.innerText = page[1].displayName;

                phoneText.className = "mobile material-icons";
                phoneText.innerText = page[1].materialIcon;

                button.id = `button-${page[1].id}`;
                
                button.addEventListener("click", () => { // De luisteraar die merkt als de gebruiker op de knop klikt
                    Navigation.navigate(page[1]);
                });

                button.append(desktopText,phoneText)

                if (page[1].onNav) {
                    nav.append(button); // Voeg de knop toe aan de navigatiebalk
                }
            }

            document.body.append(nav); // Voeg de navigatiebalk toe aan de pagina

            Navigation.navCreated = true; // de pagina is gemaakt
        }
    }

    createFooter() {
        console.log(`[UserInterface] Pagina "footer" maken . . .`);
        
        const footer = document.createElement("div");
        const content = document.createElement("h2");

        footer.className = "footer";

        content.innerText = conf.get("copyright")!;

        footer.append(content);

        document.body.append(footer);
    }
}

export const UserInterface = new UI();