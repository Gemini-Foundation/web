---
title: "microBoa: Der Tresor bleibt beim Dienst. Der Schlüssel bleibt beim Dienst. Boa aktiviert den Schlüssel."
summary: "Reale Prozesse lassen sich digital abbilden – nur beim Vertrauen ist Schluss: Dort wird im Klartext gearbeitet oder alles zentralisiert. microBoa ist der dezentrale Ansatz dazu, mit asymmetrischer Verschlüsselung und einem Vertrauensanker: Der Tresor bleibt beim Dienst, und ein Schlüsselmeister gewährt den Zugang zum eigenen Schlüssel."
date: "2026-11-20"
draft: false
tags:
  - Forschung
  - Kryptographie
  - Digitale Zwillinge
  - Vertrauensbereiche
  - Zero Trust
  - Maschinen-Authentisierung
  - microBoa
---

Die Gemini Foundation stellt **microBoa** vor: einen Privacy Provider für dezentrale Dienstgeheimnisse. microBoa ist ein Forschungsvorhaben zur minimalistischen Zero-Trust-Machine-Platform.

## Einordnung: Vertrauensbereiche im Digitalen

Die Forschung der Stiftung zu digitalen Zwillingen geht davon aus, dass sich reale Prozesse digital abbilden lassen. Das gelingt heute fast überall – nur beim Vertrauen ist Schluss. Weil die Konzepte fehlen, wird an dieser Stelle entweder im Klartext gearbeitet, oder alles wird zentralisiert.

microBoa ist ein dezentraler Ansatz: asymmetrische Verschlüsselung und ein Vertrauensanker. Er ist das digitale Abbild dessen, wie man dieselbe Aufgabe in der realen Welt löst – mit einem Vertrag mit einer Art Schlüsselmeister.

Bei Banken ist das üblich. Die Bank verwahrt den Schlüssel zum Safe für den Kunden; öffnen darf nur der Kunde. Der Safe selbst könnte eigentlich sonstwo stehen, denn die Verwahrung des Schlüssels und der bauliche Schutz des Tresors sind voneinander unabhängig.

Genau diese Trennung bildet microBoa ab:

- **Der Tresor** ist die verschlossene Konfiguration eines Dienstes. Sie liegt beim Dienst, auf dessen eigener Maschine.
- **Der bauliche Schutz** des Tresors ist die asymmetrische Verschlüsselung. Er braucht kein Gebäude und keinen bewachten Ort.
- **Der Schlüsselmeister** ist Boa. Er ist nicht einmal Verwahrer: Er hält weder Tresore noch Schlüssel. Er gewährt einem Dienst den Zugang zu dessen eigenem Schlüssel, mit dem sich der eigene Tresor öffnen lässt.

Darin geht microBoa einen Schritt weiter als das Vorbild. Auch der Schlüssel liegt beim Dienst, verschlossen in einem Schlüsselpaket. Der Schlüsselmeister entscheidet nur, ob dieses Paket geöffnet wird.

Damit entsteht ein Vertrauensbereich im Digitalen: Er ist nicht durch Mauern begrenzt, sondern durch überprüfbare Bedingungen.

## Die Frage

Datenbank-Passwörter, Tokens, private Schlüssel: Jeder Dienst braucht beim Start Geheimnisse. Für ihre Verwaltung gibt es bisher zwei Antworten.

- **Lesbar auf der Maschine.** Die Geheimnisse stehen in der Konfiguration oder in der Umgebung. Wer die Platte, ein Backup oder ein Image bekommt, hat alles.
- **Zentral in einem Tresor.** Der Dienst holt seine Geheimnisse dort ab – und braucht dafür selbst ein Zugangsgeheimnis. Das liegt wieder auf der Maschine.

microBoa ist eine dritte Antwort: Die Geheimnisse bleiben, wo sie gebraucht werden, aber verschlossen. Zentral liegt nur die Entscheidung, wer den Schlüssel bekommt.

## Das Konzept

Jeder Dienst hat seinen eigenen Tresor: seine Konfiguration, verschlossen mit seinem eigenen Schlüssel, auf seiner eigenen Maschine. Auch der Schlüssel liegt dort, aber verschlüsselt in einem **Schlüsselpaket**. Ein verschlüsselter Schlüssel ist inaktiv: Er lässt sich nicht nutzen.

Boa hält weder einen Tresor noch einen Schlüssel der Dienste. Es aktiviert den Schlüssel eines Dienstes: Es öffnet das Schlüsselpaket und macht ihn damit nutzbar – und nur, wenn drei Dinge stimmen:

- **der Ort:** Die Anfrage kommt aus dem Netz, das im Schlüsselpaket steht.
- **die Zeit:** Das Schlüsselpaket ist noch gültig. Was nicht erneuert wird, verfällt – auch in jedem alten Backup.
- **die Erlaubnis:** Weder der Dienst noch sein Paket steht auf der Sperrliste.

Daraus folgt: Eine Platte, ein Backup, ein Image oder ein Snapshot enthält außerhalb des eigenen Netzes nichts Lesbares. Ein Dienst lässt sich an einer Stelle sperren. Und wer Boas eigenen Schlüsselspeicher erbeutet, hat damit noch kein Geheimnis eines Dienstes, denn ihm fehlen die Schlüsselpakete.

## Das Protokoll: ein Paket hin, eines zurück

Der Regelfall besteht aus genau zwei Paketen fester Länge.

1. Der Dienst schickt sein Schlüsselpaket (Anfrage, 255 Byte). Darin liegt sein eigener privater Schlüssel, verschlossen für Boa.
2. Boa prüft Absender, Dienstcode und Sperrliste, öffnet das Paket und schickt den Schlüssel zurück (Antwort, 118 Byte), verschlossen für einen Einmalschlüssel dieses einen Aufrufs.
3. Der Dienst öffnet damit seinen Tresor im Arbeitsspeicher und verwirft den Schlüssel.

Es gibt keinen Handshake, keine Sitzung und keinen Zustand im Server; kein TLS und keine Zertifikate. Die Umschläge sind HPKE nach RFC 9180 (X25519, HKDF-SHA256, AES-256-GCM). Mehrere Instanzen können hinter einer gemeinsamen Adresse stehen, ohne sich abzustimmen: Die Schlüssel wechseln nach der Uhr, und jede Instanz rechnet sie selbst aus.

### Nichts zu spiegeln

Boa antwortet nur auf eine Anfrage, die alle Prüfungen besteht. Auf alles andere schweigt es. Ein gefälschter Absender bekommt nichts zugeschickt – weder ins Netz noch auf einen Dienst. Die Dienste selbst lauschen nicht: Sie warten nur kurz auf die Antwort ihrer eigenen Anfrage.

## Die Sondervorgänge

Zwei Vorgänge kommen selten dazu. Auch sie bestehen aus Paketen derselben beiden Längen.

- **Einrichtung, einmal je Dienst.** Der Dienst erzeugt sein Schlüsselpaar und holt in zwei Schritten den öffentlichen Schlüssel von Boa, geprüft gegen einen Kurzcode. Bevor er sein Schlüsselpaket ablegt, fragt er zur Probe an.
- **Schlüsselwechsel.** Fragt ein Dienst mit einem älteren Schlüssel an, nennt die Antwort den neuesten, und der Dienst verschließt sein Schlüsselpaket neu. Sein eigener Schlüssel und sein Tresor bleiben, wie sie sind.

## Die Grenzen

microBoa benennt seine Grenzen ausdrücklich:

- Boa sieht jeden Dienstschlüssel, wenn es ihn herausgibt. Wer Boas Rechner beherrscht, hat alles.
- Wer ein Schlüsselpaket hat und im Netzweg des Dienstes sitzt, kommt an dessen Schlüssel. Das Netz muss gefälschte Absender verhindern.
- microBoa ist für interne Netze gedacht, nicht für das offene Internet.

## Stand

microBoa ist ein Forschungsstand (Version 0.1.0). Es gibt einen Server in Rust, ein Werkzeug für die Dienstseite und Module für Rust, Go und Python, mit denen sich ein Dienst beim ersten Start selbst einrichtet. Eine externe Sicherheitsprüfung steht aus.

Spezifikation und Quelltext stehen unter der Apache License 2.0. Ein Paper mit Bedrohungsmodell, Sicherheitsargumentation und Messwerten folgt.
