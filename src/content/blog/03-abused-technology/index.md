---
title: "Warum Wallets und Blockchains mehr als nur 'Krypto' sein könnten"
summary: "Eine wissenschaftliche Analyse der Restriktionen der aktuellen Blockchain-Landschaft."
date: 2025-10-03
lang: de
tags:
  - Technik
  - Regulierung
  - Wertpapiere
---


## Die unbequeme Frage

Blockchain-Wallets werden als Zukunft der Vermögensverwaltung angepriesen. Doch eine einfache Frage stellt das gesamte Narrativ infrage: **Warum befinden sich darin fast ausschließlich spekulative Token, aber keine regulierten Wertpapiere?**

Die Technologie könnte mehr: Immobilienbeteiligungen mit monatlichen Mieterträgen, Anleihen mit Zinszahlungen, Aktien mit Dividenden – reale Investments, die echten Cashflow generieren, nicht nur Bonus-Coins aus Panama oder den Seychellen. Assets, die man besuchen, anfassen, deren Wert nicht binnen Monaten einen Totalverlust riskiert.

Doch diese existieren in Wallets praktisch nicht. Warum?


## MiCA, MiFID II und das regulatorische Vakuum

Die **Markets in Crypto-Assets Regulation (MiCA, EU 2023/1114)** regelt Krypto-Assets, die keine Wertpapiere sind. Sobald ein Token die Merkmale eines Finanzinstruments erfüllt, greift **MiFID II (EU 2014/65)** – die Richtlinie für Wertpapierdienstleistungen.

Zentrale Krypto-Börsen (CEX) verfügen nicht über eine MiFID-II-Zulassung. Sie dürfen keine regulierten Wertpapiere handeln. Der Grund ist nachvollziehbar, wenn man die empirische Forschung betrachtet:

* Wissenschaftliche Untersuchungen zeigen, dass unregulierten Börsen durchschnittlich mehr als 70% des gemeldeten Handelsvolumens auf Wash-Trading zurückgeht – also gefälschte Transaktionen, bei denen die Börse beide Seiten eines Handels darstellt
* Eine Analyse von 29 Börsen ergab abnormale statistische Muster bei unregulierten Plattformen, die auf systematische Manipulation hinweisen
* Börsen, die Wash-Trading betreiben, übertreiben ihr tatsächliches Volumen um den Faktor 25 bis 50
* Etwa 90% des globalen Handelsvolumens entfällt auf nur zehn Plattformen, wobei eine einzige Börse fast die Hälfte des weltweiten Handels abwickelt

Etwa 78% bis 80% aller Blockchain-Nutzer greifen auf zentrale Handelsplätze zurück. De facto sind digitale Wertpapiere in diesem Umfeld für den durchschnittlichen Nutzer nicht sichtbar – und dürfen es auch nicht sein. **Die Frage bleibt: Warum sollte ein transparenter, manipulationssicherer Markt keine Zulassung für Wertpapiere erhalten?**


## Die große Selbstverwahrungs-Illusion

Das Blockchain-Narrativ lebt von der Idee der Selbstverwahrung: "Not your keys, not your coins." Doch wie viele Nutzer haben tatsächlich eine eigene Wallet – und wie viele können damit umgehen?

Die Zahlen zeichnen ein ernüchterndes Bild:

* In der Praxis nutzen 41% der Nutzer custodiale Wallets (Dritte verwahren die Private Keys), während nur 59% non-custodiale Lösungen einsetzen
* Der CEO von Binance schätzt, dass nur 1% der Bevölkerung in der Lage ist, Selbstverwahrung angemessen zu handhaben
* Zwischen 2,3 und 3,7 Millionen Bitcoin – rund 11-18% des gesamten Angebots – sind durch verlorene Private Keys dauerhaft unzugänglich
* Bei einem maximalen Angebot von 21 Millionen Bitcoin bedeutet dies, dass die tatsächlich nutzbare Menge nur etwa 15,8 bis 17,5 Millionen BTC beträgt

**Die Kernfrage:** Wenn bereits bei spekulativen Token, die keine rechtlichen Ansprüche verbriefen, Millionen von Assets durch technische Fehler dauerhaft verloren gehen – wie soll dieses System jemals für regulierte Wertpapiere funktionieren? Soll ein Aktionär sein Stimmrecht verlieren, weil er sein Passwort vergessen hat? Soll eine Anleihe verfallen, weil die Festplatte kaputtging?

Für Wertpapiere, an die Rechte gebunden sind, stellt dies eine **organisatorische Blockade** dar.


## ERC-20: Der unsichere Standard als Gatekeeper

Der ERC-20-Standard ist die Grundlage für einen Großteil der existierenden Token. Doch eine Analyse der technischen Architektur zeigt gravierende Sicherheitsmängel:

### Das Unlimited-Approval-Problem

Eine wissenschaftliche Untersuchung von 25,4 Millionen Transaktionen bis Juli 2021 ergab: Etwa 60% (15,2 Millionen) verwendeten unbegrenzte Freigaben, und 22% der Nutzer waren einem hohen Risiko ausgesetzt, dass ihre genehmigten Token gestohlen werden.

**Was bedeutet das konkret?** Wenn Sie einem Smart Contract die Erlaubnis geben, Ihre Token zu bewegen, geben viele Nutzer – meist unwissentlich – eine unbegrenzte Freigabe. Der Vertrag kann dann **jederzeit beliebige Beträge** von Ihrem Konto abziehen. Nicht nur einmal, sondern immer wieder.

Die Analyse zeigt: Alle untersuchten DApps fordern von ihren Nutzern unbegrenzte Freigaben, und nur 10% der Benutzeroberflächen bieten erklärende Informationen zum Approval-Mechanismus. Lediglich 16% erlauben es Nutzern, die Freigabemenge anzupassen.

### Bekannte Angriffsvektoren

Die Forschung dokumentiert systematisch mehr als 80 Schwachstellenarten in ERC-20-Implementierungen, darunter:

* **Integer Overflow**: Arithmetische Fehler, die zur Manipulation der Token-Anzahl führen
* **Reentrancy**: Angriffe, bei denen Verträge mehrfach aufgerufen werden, bevor der erste Aufruf abgeschlossen ist
* **Multiple Withdrawal Attack**: Bei Änderungen von Freigaben können alte Limits durch Front-Running mehrfach genutzt werden
* **Race Conditions**: Ein Nutzer kann ungewollt mehr Token freigeben als beabsichtigt

Prominente Verluste durch ERC-20-Schwachstellen umfassen: SHOPX Protocol (7 Millionen USD), Li.Fi Protocol (9,7 Millionen USD), ParaSwap, SenecaUSD (6,5 Millionen USD) und SocketDotTech (3,3 Millionen USD) – alle durch Exploits von bestehenden unbegrenzten Freigaben.

**Die provokante Frage:** Warum sollte ein institutioneller Investor oder eine Aufsichtsbehörde einem Standard vertrauen, der systematisch dokumentierte Sicherheitslücken aufweist und bei dem die meisten Nutzer nicht einmal verstehen, welche Berechtigungen sie erteilen?

Wallets unterstützen primär ERC-20. Damit ist der Zugang auf einen Standard beschränkt, der wiederholt als unsicher dokumentiert wurde und für den Einsatz bei regulierten Wertpapieren nicht empfohlen wird.


## Wallet-Sicherheit: Der Käseglocken-Schutz

Die Sichtbarkeit von Assets in Wallets wird im Wesentlichen durch interne Listen bestimmt. Was als "Sicherheitsfeature" verkauft wird, entpuppt sich bei genauerer Betrachtung als restriktives Filterwerkzeug:

* Offene Standards wie *tokenlists.org* sind weitgehend eingestellt
* Proprietäre Listen einzelner Anbieter dominieren
* Token mit zweifelhaftem Hintergrund erscheinen weiterhin, solange sie an CEX gelistet sind
* Regulierte Assets ohne CEX-Listing werden systematisch ausgeblendet

**Der Mechanismus ist perfide:** Selbst dezentrale Wallets richten ihre Sichtbarkeit am Listing in zentralen Börsen aus. Unter dem Begriff „Sicherheit" wird so das bestehende Universum abgebildet. Ein tokenisiertes Wertpapier, dessen Preisfeststellung bereits zertifiziert und reguliert erfolgt, erzeugt keine "Tagespreise" an unregulierten Börsen – und wird daher nicht gelistet.

**Die Konsequenz:** Alle Sicherheitsbestrebungen der Wallet-Betreiber dienen faktisch dazu, die Nutzer von profitablen, regulierten Wertpapieren fernzuhalten und sie mit Coins der Casino-Exchanges (Insider-Term für CEX) zu bewirten. Ein Käseglocken-Schutz, der den Blick hinaus aus der Utility-Coin-Pump-and-Dump-Szene systematisch verstellt.

**Fragestellung:** Digitale Wertpapiere – die einzigen Blockchain-Assets mit echten Cashflows, Rechtsansprüchen und regulatorischer Absicherung – werden unter diesen Bedingungen niemals für den durchschnittlichen Wallet-Nutzer erscheinen?


## Schluss: Die strukturelle Blockade

Wallets und Blockchains verfügen technisch über das Potenzial, weit über den Bereich von Kryptowährungen hinauszugehen. Die Infrastruktur existiert. Die regulatorischen Rahmen existieren. Tokenisierte Wertpapiere existieren.

Doch die Kombination aus:

1. **Zentralen Börsen ohne MiFID-II-Zulassung**, auf denen Manipulation systematisch nachgewiesen wurde
2. **Einem technischen Standard (ERC-20)**, der fundamentale Sicherheitsmängel aufweist
3. **Wallet-Filtermechanismen**, die nur CEX-gelistete Assets anzeigen
4. **Einer Selbstverwahrungs-Realität**, in der Millionen von Assets durch menschliches Versagen verloren gehen
5. **User Interfaces**, die Nutzer systematisch nicht über Risiken aufklären

...führt dazu, dass **digitale Wertpapiere für die überwältigende Mehrheit der Blockchain-Nutzer praktisch nicht existieren**.

Ist dies ein Zufall der technologischen Entwicklung – oder die logische Konsequenz eines Systems, das von spekulativen Assets profitiert und regulierte Investments systematisch ausschließt?

---

## Literatur

* Chainalysis (2022). *The 2022 Crypto Crime Report.*
* Cong, L. W., Li, X., Tang, K., & Yang, Y. (2023). *Crypto Wash Trading.* Management Science, 69(11), 6427-6454.
* ESMA (2024). *Crypto-assets market structures, secondary trading, and relevance for the EU.* ESMA TRV Risk Analysis.
* Le Pennec, G., Moinas, S., & Nguyen, B. (2021). *Wash trading at cryptocurrency exchanges.* Finance Research Letters, 43, 101982.
* Zhou, Y., et al. (2022). *Penny Wise and Pound Foolish: Quantifying the Risk of Unlimited Approval of ERC20 Tokens on Ethereum.* arXiv:2207.01790.


