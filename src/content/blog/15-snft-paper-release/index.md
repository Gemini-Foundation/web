---
title: "SNFT: Zero-Trust-Zertifizierung physisch verwahrter Vermögenswerte auf der Blockchain"
summary: "Mit der SNFT-Spezifikation veröffentlicht die Gemini Foundation eine Smart-Contract-Architektur zur On-Chain-Zertifizierung physisch gelagerter Assets – unter strikter Rollentrennung und ohne Vertrauensvoraussetzung."
date: "2026-05-26"
draft: false
paperUrl: "https://doi.org/10.5281/zenodo.20396191"
tags:
  - Publikation
  - Blockchain
  - Smart Contracts
  - SNFT
  - Zero Trust
  - Forschung
  - Regulierung
---

Die Gemini Foundation veröffentlicht heute die Spezifikation **SNFT** (Secure NFT): eine Smart-Contract-Architektur für die On-Chain-Zertifizierung physisch verwahrter Vermögenswerte – entwickelt unter Zero-Trust-Prinzipien mit strikter Rollenisolation.

## Hintergrund

Herkömmliche NFTs dienen primär als digitale Sammlerstücke oder Spekulationsobjekte. SNFT verfolgt einen grundlegend anderen Zweck: Der Token fungiert als **kryptographischer Identifikator**, der unmittelbar an ein physisch verwahrtes Asset gekoppelt ist – nicht an einen spekulativen Marktwert.

## Architektur und Kernprinzipien

Die SNFT-Architektur definiert klare operationale Grenzen zwischen drei Rollen:

- **Deployer:** Initialisiert den Vertrag, hat nach Deployment keinen privilegierten Zugriff mehr
- **Owner:** Hält den Token und kann Eigentumsübertragungen initiieren
- **Storage Provider:** Verwahrt das physische Asset und bestätigt Custody-Prozesse on-chain

Ein zentrales Designmerkmal ist die **autonome Vertragsfunktion nach Deployment**: Nach der Initialisierung operiert der Smart Contract selbstständig, ohne dass eine zentrale Instanz eingreifen kann oder muss.

### Formalisierter Lifecycle

SNFT implementiert eine vollständige **Lifecycle State Machine**, die sämtliche Zustandsübergänge – von der Erstellung über Eigentumsübertragungen bis zur Auflösung – formal definiert und on-chain durchsetzt.

## Regulatorische Einordnung

Die Spezifikation berücksichtigt explizit die Anforderungen des deutschen Kreditwesengesetzes (KWG) sowie der europäischen Markets in Crypto-Assets Regulation (MiCAR). SNFT zeigt, wie Token-basierte Systeme **regulierungskonform** gestaltet werden können, ohne ihre technische Dezentralität aufzugeben.

## Designentwicklung: SNFT v1–v4

Das Paper dokumentiert die iterative Entwicklung über vier Versionen und macht die Designentscheidungen transparent und nachvollziehbar – ein Beitrag zur offenen Wissenschaft.

## Veröffentlichung und Zugang

Die vollständige Spezifikation ist frei zugänglich auf Zenodo:

**SNFT: Zero-Trust Certification of Physically Custodied Assets through Role-Isolated Smart Contract Lifecycles**
Thomas Witt, 2026. DOI: 10.5281/zenodo.20396191.

[Zur Publikation auf Zenodo](https://doi.org/10.5281/zenodo.20396191)

Die Publikation steht unter der CC BY-NC-ND 4.0 Lizenz.

## Bedeutung für die Stiftungsarbeit

SNFT ist ein Kernprojekt der Gemini Foundation und demonstriert, wie Blockchain-Technologie als **öffentliche Infrastruktur** eingesetzt werden kann: nicht für Rendite, sondern für nachvollziehbare, rechtsichere Eigentumsbeziehungen. Die Veröffentlichung dieser Spezifikation markiert den Übergang vom Forschungsprototyp zur formal dokumentierten, reproduzierbaren Referenzarchitektur.
