---
title: "Własne zestawy ruchów: buduj drużyny wokół ruchów, których faktycznie używasz"
description: "PoGoTeams obsługuje teraz warianty własnych zestawów ruchów. Sprawdź, jak je skonfigurować oraz jak współpracują z budowaniem drużyn, punktacją, analizą pojedynków i Lead Gameplanami."
pubDate: 2026-02-21
tags: ["feature guide", "app update"]
---

W rankingach każdy Pokémon dostaje rekomendowany zestaw ruchów — ten z najwyższą skutecznością ogólną. Tyle że to nie zawsze pokrywa się z tym, czym faktycznie grasz. Może masz w drużynie nietypowego Pokémona, który ma zaskakiwać przeciwnika. Może inny ładowany ruch łata słabość, na którą Twoja drużyna nie ma odpowiedzi. A może Twój Pokémon zna ruch legacy, którego nie chcesz wymieniać TM-em.

Do tej pory PoGoTeams traktowało każdego Pokémona tak, jakby grał z zestawem rekomendowanym. Własne zestawy ruchów to zmieniają. Definiujesz ruchy, których faktycznie używasz, a cała aplikacja się dostosowuje: budowanie drużyn, punktacja, rozpisy pojedynków oraz Lead Gameplany odzwierciedlają Twoje rzeczywiste ustawienie.

## Jak włączyć własne zestawy ruchów

To funkcja opcjonalna, schowana za przełącznikiem — żeby nie dokładała komplikacji graczom, którzy jej nie potrzebują.

1. Otwórz **Ustawienia** (ikona koła zębatego w prawym górnym rogu)
2. Znajdź sekcję **Ruchy**
3. Włącz **Własne movesety**

![Przełącznik własnych zestawów ruchów w ustawieniach](/assets/blog/custom-movesets-settings.png)

Tyle. Po włączeniu pojawią się nowe opcje przy zarządzaniu posiadanymi Pokémonami.

## Dodawanie wariantu zestawu ruchów

1. Wejdź w zakładkę **Twoje Pokémony** i znajdź Pokémona, którego masz
2. Stuknij **ikonę koła zębatego** (⚙️) obok plakietki **Mam**
3. Wiersz rozwinie się, pokazując Twoje aktualne zestawy ruchów oraz przycisk **„+ Dodaj wariant movesetu"**
4. Stuknij go i wybierz **szybki ruch** oraz maksymalnie **dwa ładowane ruchy**
5. Stuknij **Gotowe**

Twój własny wariant pojawi się pod rekomendowanym, oznaczony pomarańczową etykietą **DOSTOSOWANY**. Możesz dodać wiele wariantów dla jednego Pokémona oraz w dowolnej chwili je edytować lub usuwać.

![Rekomendowany i własny wariant zestawu ruchów u Pokémona](/assets/blog/custom-movesets-variants.png)

## Co się zmienia, gdy używasz własnego zestawu ruchów

Tu robi się ciekawie. Własny wariant to nie tylko etykieta — aplikacja przeprowadza dla niego **pełne symulacje walk** przeciwko całej mecie. Oznacza to, że każda liczba, którą widzisz, odzwierciedla ruchy, które faktycznie wybrałeś, a nie domyślny zestaw rekomendowany.

Oto gdzie własne zestawy ruchów wchodzą do gry:

### Team builder (manualny i automatyczny)

Własne warianty pojawiają się jako osobne opcje przy budowaniu drużyny. Silnik punktacji traktuje je jako odrębnych kandydatów, więc ten sam Pokémon z innym ładowanym ruchem może otrzymać inny wynik na tej samej pozycji w drużynie. Automatyczny builder testuje Twoje własne warianty obok rekomendowanych i wybiera ten, który pasuje najlepiej.

![Wygenerowana drużyna z wariantem własnego zestawu ruchów](/assets/blog/custom-movesets-team.png)

### Oceny drużyny

Oceny pokrycia, wytrzymałości, pewności i spójności są przeliczane na podstawie Twoich rzeczywistych ruchów. Jeśli Twój własny zestaw pokrywa typ, którego nie pokrywa zestaw rekomendowany, ocena pokrycia to uwzględni.

### Rozpisy pojedynków

Możesz porównać działanie różnych wariantów obok siebie. Rozpis pojedynków pokazuje wygrane, przegrane oraz listy zagrożeń dla każdego wariantu, więc dokładnie zobaczysz, które pojedynki przy innym ruchu się poprawiają, a które pogarszają.

![Porównanie pojedynków między dwoma wariantami zestawów ruchów](/assets/blog/custom-movesets-matchups.png)

### Lead Gameplany

Scenariusze tarcz i rekomendacje zmian uwzględniają Twoje własne ruchy. Jeśli Twoje otwarcie używa innego ładowanego ruchu, gameplan odzwierciedla faktyczne obrażenia i koszty energii.

### Trendy z Logu walk

Gdy zapisujesz przeciwników, analiza trendów uwzględnia Twoje własne warianty. Sugestie typu „słaby na Twoje Pokémony" oraz sugestie Pokémonów rozbijających popularne kombinacje uwzględniają, co Twoje własne zestawy ruchów faktycznie pokonują — a nie tylko to, co pokonuje zestaw rekomendowany.

## Kiedy używać własnych zestawów ruchów

**Element zaskoczenia.** Niestandardowy ładowany ruch potrafi odwrócić pojedynki, na które przeciwnik nie jest przygotowany. Aplikacja pozwala sprawdzić, które pojedynki faktycznie się zmienią, zanim postawisz na taki ruch w realnej walce.

**Lepsze dopasowanie do drużyny.** Czasem najwyżej oceniany zestaw ruchów dla danego Pokémona nie jest najlepszy dla Twojej konkretnej drużyny. Inny ruch może pokryć wspólną słabość albo poprawić synergię z dwoma pozostałymi Pokémonami. Własne zestawy ruchów pozwalają to sprawdzić bezpośrednio.

**Ruchy legacy i wyjątkowe.** Jeśli Twój Pokémon zna ruch, którego nie da się już zdobyć, ustaw go jako własny wariant — wtedy aplikacja uwzględni to, co faktycznie masz.

## Warto wiedzieć

- Gdy po raz pierwszy wejdziesz do team buildera z włączonymi własnymi zestawami ruchów, aplikacja potrzebuje chwili, by zasymulować pojedynki. Zobaczysz krótki ekran ładowania **„Testuję Twoje wybory…"**. Wyniki są zapisywane w pamięci podręcznej, więc opóźnienie pojawi się tylko za pierwszym razem.
- Jeśli Twój własny zestaw ruchów pokrywa się z rekomendowanym dla aktualnego Pucharu, aplikacja to wykryje i nie pokaże duplikatu.
- Własne zestawy ruchów działają we wszystkich ligach i Pucharach. Twoje warianty są zapisywane przy konkretnych Pokémonach i przechowują się między sesjami.

Własne zestawy ruchów są już dostępne na iOS i Androidzie. Zaktualizuj aplikację do najnowszej wersji, by zacząć.
