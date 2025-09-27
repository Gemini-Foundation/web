---
title: "GMN003: Foureyes Controlled Contractsystem"
summary: "EVM-kompatibles Smart-Contract-Modell mit Vier-Augen-Freigabe zur sicheren Verwaltung sensibler Operationen"
date: "Aug 10 2025"
draft: false
tags:
- Smart Contracts
- EVM
- Governance
- Security
- Multi-Signature
- Ethereum
repoUrl: https://github.com/gemini-foundation/gmn003-foureyes-contracts
---

(ab 2026)

Im Projekt GMN003 entwickelt die Gemini-Stiftung ein kontrolliertes Ausführungsmodell für Smart Contracts, das auf dem Prinzip der **Vier-Augen-Freigabe** basiert. Die Kernidee: Bestimmte sicherheitsrelevante Operationen – wie z. B. Token-Auszahlungen, Statusänderungen oder Rollenvergaben – dürfen nur dann ausgeführt werden, wenn sie durch zwei voneinander unabhängige Wallets autorisiert wurden.

Das System ist **vollständig EVM-kompatibel** und kann auf Ethereum, Polygon, Base, SQARES und weiteren Netzwerken eingesetzt werden. Der Fokus liegt auf kritischen Unternehmens- oder Fondsprozessen, bei denen ein einzelner Schlüssel nicht ausreichend Vertrauen oder regulatorische Sicherheit bietet.

**Funktionale Eckpunkte:**
- **Vorabfreigabe von Operationen:** Transaktionen werden im Vertrag registriert, aber erst bei gegenzeichnender Freigabe durch eine zweite autorisierte Adresse ausgeführt.
- **Rollenbasiertes Zugriffsmodell:** Konfigurierbare Rollen (Initiator, Freigeber, Auditor) ermöglichen flexible Organisationsstrukturen.
- **Notfallmechanismen:** Verzögerungslogiken, Rückzüge, Sperrfristen oder eine Watchdog-Rolle können konfiguriert werden.
- **Audit-Schnittstelle:** Alle Operationen werden mit Hash-, Zeit- und Metadaten dokumentiert und sind extern prüfbar.

Das Projekt adressiert konkrete Anforderungen aus dem digitalen Fonds- und Emissionsgeschäft, insbesondere im regulierten Umfeld (z. B. Vermögensverwaltung, Tokenisierung, RWA). Es ist ein Bindeglied zwischen technischer Kontrollierbarkeit und regulatorisch nachvollziehbarer Aufgabentrennung („trennscharfe Verantwortlichkeiten“).

Das System wird offen lizenziert und soll mit bestehenden Wallet-Standards wie MetaMask und Gnosis Safe kompatibel sein.

