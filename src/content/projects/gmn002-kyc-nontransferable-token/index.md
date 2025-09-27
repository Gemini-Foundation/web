---
title: "GMN002: KYC Nontransferable Token"
summary: "Blockchain-gebundene, nicht übertragbare Identitäts-Token zur Abbildung von KYC-Status"
date: "Aug 01 2025"
draft: false
tags:
- Blockchain
- KYC
- Nontransferable
- Identity
- Compliance
- Digital ID
repoUrl: https://github.com/gemini-foundation/gmn002-kyc-token
---

Im Projekt GMN002 wird ein kryptographisch gebundener Identitätsnachweis als nicht übertragbarer Token auf der Blockchain realisiert. Ziel ist die Abbildung eines verifizierten KYC-Status direkt in der Wallet einer natürlichen oder juristischen Person – ohne Offenlegung personenbezogener Daten auf der Chain.

Das Projekt setzt auf ein Zero-Knowledge-basiertes Modell, bei dem ein externer KYC-Dienstleister nach erfolgreicher Prüfung einen speziellen Token mintet, der ausschließlich an die Wallet der geprüften Entität gebunden ist. Dieser Token ist **nicht übertragbar**, **nicht handelbar**, und kann ausschließlich durch den ausgebenden Dienstleister widerrufen oder aktualisiert werden.

Der Token dient somit als datenschutzkonforme, pseudonyme Referenz für Zugangsberechtigungen zu regulierten digitalen Angeboten – z. B. im Zusammenhang mit Finanzinstrumenten oder Whitelisting-Prozessen bei Token Sales.

Im Mittelpunkt stehen dabei:
- **Regelkonforme Identitätsnachweise** ohne zentrale Identitätsdatenbanken
- **Permanente Bindung** an eine definierte Wallet (z. B. durch Soulbound-Token-Mechanismus)
- **Revisionssichere Prüfpfade** für Emittenten, Plattformen und Aufsichtsbehörden

GMN002 schließt funktional an das Projekt GMN001 an und stellt die Identitätskomponente für tokenisierte Rechte und digitale Verträge bereit. Ziel ist ein interoperabler Standard, der sowohl von öffentlichen Blockchain-Anwendungen als auch von permissioned Netzwerken genutzt werden kann.

