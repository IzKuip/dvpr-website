import { Navigation } from './lib/nav';
import { OfferManagement} from './lib/offers';
import { UserInterface } from './lib/ui';
import './style/main.css';

console.warn("PAGINA GELADEN");

Navigation.register({
  displayName: "Home",
  id: "home",
  onNav: true,
  materialIcon:"home"
}, {
  displayName: "Aanbiedingen",
  id: "aanbied",
  onNav: true,
  materialIcon:"local_offer"
}, {
  displayName: "Opruiming",
  id: "opruim",
  onNav: false,
  materialIcon:"cleaning_services"
}, {
  displayName:"Openingstijden",
  id: "opentijden",
  materialIcon:"schedule",
  onNav:true
});

UserInterface.createNav();
UserInterface.createFooter();
UserInterface.setInPageNavButtons();

OfferManagement.populateOffersPage();

Navigation.navigate(Navigation.registeredPages.get("home")!);