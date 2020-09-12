# Tarsashaz

Feladat:

A feladatom egy olyan weboldal készítése, ami társasházak kezelését támogatja. A közös képviselőknek általában elég nehéz elérni a lakókat, kiküldeni a hirdetményeket, illetve elég kevés olyan eszköz van, ami ezt támogatná. A lakóknak szintén nehéz lehet átlátni a befizetendő számlákat, közös költségeket. A feladatomban ezeket a problémákat szeretném megoldani egy olyan webes felület segítségével, amivel mind a lakók, mind a közös képviselők hatékonyan tudják a társasházzal kapcsolatos ügyeiket rendezni. Az aktuális híreket a lakók a felület faliújságán tudják megtekinteni. A lakók látják a lakásukat, illetve ahhoz tartozó számlákat, befizetési kötelezettségeiket. Megtekinthetik a lakás egyenlegét is, vagyis, hogy van-e elmaradásuk, vagy túlfizetésben vannak. A befizetett összegekből a közös képviselők egy beszámolót készíthetnek, ahol áttekinthetik a társasház bevételeit/kiadásait. A lakók tudnak feltölteni adatokat, például vízóra állást, ami alapján a közös költséget lehet számolni. Bármilyen probléma akadna a lakással/házzal kapcsolatban, azt be tudják jelenteni, így a lakás fenntartója is értesül róla.


Funkciók:

- belépés: third party alkalmazás segítségével (Google, Facebook)
- faliújság: a közös képviselő tud hirdetményeket közzétenni, a lakók belépés után láthatják
- lakás adatainak megjelenítése: alapvető adatok(cím, tulajdonos, telefon), számlák, lakás egyenleg
- lakók adatokat tudnak felölteni: pl.: vízóra adatok, rövid leírással, képekkel
- probléma bejelentés: probléma kategóriák (oldal működéssel kapcsolatos, lakással kapcsolatos), rövid leírással, képekkel
- közös képviselő beszámolót tud készíteni a bevételekből/kiadásokból, ezen adatok táblázatos, grafikonos megjelenítése
- a működés tesztelése tesztek készítésével

Technológiák:

Frontend:
- A weboldal Typescript nyelvre épülő Angular keretrendszerrel fog készülni
- A kinézethez Bootstrap és Angular Material elemeket fogok használni
- A komponensek állapotait egy State Management rendszer, RxJS segítségével fogom tárolni
- A felület reszponzív és adaptív lesz, ehhez Bootstrapet és Flexboxot fogok használni
- Az alkalmazás egy Progressive Web Application lesz

Backend:
- Az oldalhoz Backend is fog készülni .NET keretrendszerben C# nyelven
- A backendben Repository mintát használok a Controllerek és a DAL elkülönítésére
- A backend model alapján Entity Framework Core Code first segítségével generálom le az adatbázist

Adatbázis:
- relációs adatbázis
- SQL Server
