---
layout: ../../layouts/ProjectPostLayout.astro
title: 'ArMare'
pubDate: 2025-02-14
description: 'Project made in 3 months in the second year of Cnam Enjmin`s Master`s decree'
author: 'Jules Sarton'
image:
    url: '/src/images/Illu_PhareMorgan.png'
    alt: 'Concept art of Ar Mare'
---

Set in 1920 off the coasts of Brittany, Ar-Mare follows Morgan Le Duienn, a fisher-woman turned light-keeper. After the Great War, which spurs her to escape France’s new policies, she takes up the job at the Ar-Mare lighthouse only to immediately find out that the place is not what it seemsー and thus begins the nightmare. The game tells a story of loneliness and of one-sided, abusive love, and ownership.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_nROUUAogPM?si=bltIlattpGz3Q6s-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="flex-row g-1">
    <img width="45%" style="object-fit: cover" src="https://img.itch.zone/aW1hZ2UvMzIzMjk1Ny8xOTg5MTQwMy5wbmc=/original/U56Gx0.png">
    <img width="45%" style="object-fit: cover" src="https://img.itch.zone/aW1hZ2UvMzIzMjk1Ny8xOTg5MTQwNS5wbmc=/original/fxzSmJ.png">
    <img width="45%" style="object-fit: cover" src="https://img.itch.zone/aW1hZ2UvMzIzMjk1Ny8xOTg5MTQwOC5wbmc=/original/n8c6Xy.png">
    <img width="45%" style="object-fit: cover" src="https://img.itch.zone/aW1hZ2UvMzIzMjk1Ny8xOTg5MTQxMC5wbmc=/original/1kyiud.png">
</div>

## Foreword

This game experience is a proof of concept developed as part of our second-year master's program at ENJMIN over six months. It is therefore far from perfect, but it includes all the key elements that make up this beautiful and scary experience.

This build contains 2 days of gameplay, with 3 tasks each day and 2 main puzzles.

## Summary

Ar Mare is a first person horror game set in Post-War France and centered around Morgan Le Duienn, a 40 year-old ex-fisherwoman, and the Ar-Mare lighthouse of which she is the keeper. 

One day, something goes wrong on this desolate rock, and Morgan is forced to keep the lighthouse by herself. She is suddenly thrust into a nightmare born out of strange, terrifying forces and her own crushing solitude.

## My contribution

I developed the main event system used to trigger interactions, visuals, player tasks and scary events.
I linked a google sheet to unreal using http requests and made a parser to translate it to in game events. It made the designer's life easier, not having to go around the engine to change or check things.

<img width="90%" style="object-fit: cover" src="/src/images/ArMareSheet.png">
