import { jacketPage } from "./pages/jacket.js";
import { listJacketsPage } from "./pages/listJackets.js";



if (location.pathname === "/jacket.html") {
    jacketPage()
}

if (location.pathname === "/listjackets.html") {
    listJacketsPage()
}

