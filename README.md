# Mhei 2023.12.10

Fejlesztők: Fekete Gergely (Frontend), Róth József (Asztali/electron) , Andó Attila (Backend).

A Projekt célja: hogy az emberekkel jobban megismertessük a horgászat szépségeit és fontosságát.Létrehoztunk egy alkalmazást amiben a felhasználó tud tájékózodni a jelenlegi határozatokról,napijegyekről,versenyekről és egyéb horgászattal kapcsolatos témákról.

Felhasznált technológiák: Angular,Ngx,Electron,Bootstrap,C#

Frontend start:
    -cd "mappa",
    -npm install,
    -ng serve -o
    
Backend start: (Ne felejtsük el ha elakarjuk indítani háttértárolást, ahhoz kell egy backendapi is amit ezen a linken tudtok elérni)->https://github.com/halando/MheiBackendApi   

Electron:  Megvalósítottuk a célt, hogy meglévő Angular projektünket Electron asztali alkalmazássá alakítsuk át. Ezt a törekvést az a vágy motiválta, hogy kiterjesszük alkalmazásunk hatókörét az asztali felhasználókra, miközben kihasználjuk a megszokott webes fejlesztési stacket.

Electron start:npm init -y,          
npm install electron --save-dev,         
npm run build,           
npm start,               
npm run electron


Felhasznált képek,források a projekt dokumentációjában található.

Frontend port: 4200,           
Backend port: 5001
