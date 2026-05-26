---
title: "XFP: Qualitätsgesteuerte Quantisierung für effiziente LLM-Inferenz"
summary: "Die Gemini Foundation veröffentlicht mit XFP ein neues Verfahren zur adaptiven Codebook-Quantisierung großer Sprachmodelle – mit Qualitätsgarantie statt manueller Bitraten-Wahl."
date: "2026-05-19"
draft: false
tags:
  - Publikation
  - Machine Learning
  - Quantisierung
  - LLM
  - Open Source
  - Forschung
---

Die Gemini Foundation hat mit **XFP** (Quality-Targeted Adaptive Codebook Quantization with Sparse Outlier Separation) ein neues Forschungspapier veröffentlicht, das einen grundlegend anderen Ansatz zur Gewichtskompression großer Sprachmodelle (LLMs) vorstellt.

## Das Problem: Manuelle Bitraten-Wahl

Bisherige Quantisierungsverfahren erfordern, dass Anwender manuell eine Bitbreite wählen – etwa 4-Bit oder 8-Bit – und anschließend prüfen, ob die resultierende Modellqualität ausreichend ist. Dieser Trial-and-Error-Prozess ist zeitaufwendig und fehleranfällig, insbesondere bei modernen Mixture-of-Experts-Architekturen mit heterogenen Schichten.

## Der XFP-Ansatz: Qualität zuerst

XFP kehrt dieses Paradigma um: Anstatt eine Bitbreite vorzugeben, definieren Nutzer ein **Qualitätsziel** auf Basis der Cosine Similarity pro Kanal. Das System bestimmt dann automatisch die optimale Codebook-Größe und das Outlier-Budget für jede Gewichtsmatrix. Dabei werden die Gewichte in zwei Komponenten zerlegt:

- **Sparse FP16 Outlier Residual:** Seltene, aber signifikante Ausreißer werden in voller Präzision gespeichert
- **Dense Sub-Byte Index Tensor:** Der Großteil der Gewichte wird in einem kompakten Codebook-Format abgelegt

## Ergebnisse

Die Benchmarks zeigen überzeugende Resultate: Auf dem Modell Qwen3.5-122B erreicht XFP **138 Tokens pro Sekunde** bei 94,49% Genauigkeit auf GSM8K – und übertrifft damit Marlin INT4 um 49% bei vergleichbarer Qualität.

## Veröffentlichung und Zugang

Das vollständige Paper ist frei zugänglich auf arXiv:

**XFP: Quality-Targeted Adaptive Codebook Quantization with Sparse Outlier Separation for LLM Inference**
Thomas Witt, 2026. Report GS-TR-2026-001.

[Zum Paper auf arXiv](https://arxiv.org/abs/2605.14844)

Das Paper steht unter der Creative Commons BY 4.0 Lizenz. Der zugehörige Quellcode ist auf GitHub verfügbar.

## Einordnung

Mit XFP setzt die Gemini Foundation ihre Arbeit an offener, reproduzierbarer Forschung im Bereich maschinelles Lernen fort. Das Verfahren zeigt, dass qualitätsgesteuerte Kompression nicht nur möglich, sondern dem herkömmlichen Ansatz überlegen ist – ein Schritt hin zu demokratischerer Nutzung großer KI-Modelle auf handelsüblicher Hardware.
