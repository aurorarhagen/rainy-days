import { jacketPage } from "./pages/jacket.js";
import { listJacketsPage } from "./pages/listJackets.js";

console.log(location.pathname)


if (location.pathname === "/jacket.html") {
    jacketPage()
}

if (location.pathname === "/listjackets.html") {
    listJacketsPage()
}

