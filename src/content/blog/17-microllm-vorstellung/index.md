---
title: "microllm: Eine Adresse für alle Modelle. Die Modelle bleiben, wo sie rechnen."
summary: "Wer Sprachmodelle selbst betreibt, hat schnell mehrere Maschinen, mehrere Modelle und mehrere Anwendungen. microllm ist ein schlanker LLM-Dispatcher für diesen Fall: Er verteilt die Arbeit, überwacht die Backends und gibt dem Modell eigene Werkzeuge mit."
date: "2026-11-20"
draft: true
tags:
  - Forschung
  - Sprachmodelle
  - Infrastruktur
  - Souveränität
  - Open Source
  - microllm
---

Die Gemini Foundation stellt **microllm** vor: einen LLM-Dispatcher und halbagentischen Enabler. microllm ist ein einzelnes Programm, das zwischen Anwendungen und selbst betriebenen Sprachmodellen steht.

## Die Frage

Wie kommt eine Anwendung an ein Sprachmodell? Bisher gibt es darauf zwei Antworten.

- **Direkt an die Maschine.** Jede Anwendung kennt Adresse und Modell einer Maschine. Fällt sie aus oder wechselt das Modell, muss jede Anwendung angefasst werden.
- **Alles zu einem Anbieter.** Eine Adresse, aber außer Haus. Daten, Kosten und Verfügbarkeit liegen beim Anbieter.

Ein eigener Dispatcher ist die dritte Antwort: eine Adresse im eigenen Netz. Anwendungen nennen einen Namen; welche Maschine antwortet, entscheidet microllm. Die Modelle bleiben, wo sie rechnen – auf den eigenen Maschinen.

## Das Konzept: ein Name statt einer Adresse

Hinter jedem Modellnamen steht eine **Gruppe** von Backends. Wie viele es sind und wo sie stehen, weiß nur microllm. Daraus ergeben sich drei Aufgaben:

- **verteilen:** Die Arbeit geht an das Backend, das gerade am meisten Platz hat.
- **überwachen:** Ein Backend, das ausfällt, wird gemieden und kommt von selbst zurück.
- **ausrüsten:** Eine Gruppe kann dem Modell Werkzeuge mitgeben, die microllm selbst ausführt.

## Der Regelfall

Jedes Backend hat eine Obergrenze gleichzeitiger Anfragen. Eine neue Anfrage geht an das gesunde Backend mit den meisten freien Plätzen. Ein schnelles Backend gibt seine Plätze schneller frei und bekommt dadurch von selbst mehr Arbeit – ohne Gewichte, die jemand pflegen müsste.

Schlägt ein Backend fehl, geht dieselbe Anfrage an das nächste der Gruppe. Die Anwendung merkt davon nichts. Nach drei Fehlern in Folge pausiert ein Backend fünf Minuten; danach prüft microllm es und nimmt es wieder auf, wenn es antwortet.

Die Konfiguration lässt sich im Betrieb neu laden. Neue Backends arbeiten sofort mit, entfernte verschwinden erst, wenn ihre letzte Anfrage beantwortet ist.

## Halbagentisch: Werkzeuge im Dispatcher

Eine Gruppe kann dem Modell Werkzeuge mitgeben: Websuche und Seitenabruf. microllm führt sie selbst aus. Die Anwendung stellt eine Frage und bekommt eine Antwort; die Runden dazwischen sieht sie nicht.

Halbagentisch heißt: Das Modell entscheidet, wann es sucht und was es liest, aber die Schleife ist begrenzt. Werkzeuge, die eine Anwendung selbst mitschickt, bleiben unberührt.

## MultiProtocol

Anfragen im Anthropic-Format und im OpenAI-Format laufen über dieselbe Adresse. microllm übersetzt nicht zwischen den Protokollen: Eine Anfrage erreicht das Backend in dem Format, in dem sie ankam. Unter derselben Adresse reicht microllm auch andere Dienste durch, etwa Spracherkennung, und wandelt PDFs in Text um, bevor das Modell sie sieht.

## Stand

microllm ist ein einzelnes Python-Programm mit einer Konfigurationsdatei im LiteLLM-Format. Es bringt Statistik je Modell und Backend, eine Mitschrift aller Anfragen mit Aufbewahrungsfrist und einen Zugriffsschutz mit. Der Quelltext steht unter der Apache License 2.0.
