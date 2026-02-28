---
title: "Cowsay (or tuxsay) fortunes in terminal"
---

## Cowsay (or tuxsay) fortunes in terminal

> This is a quick guide on how to have [Cowsay](http://en.wikipedia.org/wiki/Cowsay "Cowsay article on Wikipedia") (or Tuxsay, etc.) with fortunes upon opening the terminal.


I have it set up using fortune's "wisdom" quotes. They're not difficult to create; install the "fortune-mod" package (along with "fortunes" and "cowsay"); use the strfile tool on a [formatted text](@site/static/vocab-fortune.txt "formatted text file") like "strfile vocab-fortune vocab-fortune.dat" and put it in fortune's directory, e.g. _/usr/share/fortune_ or _/usr/share/games/fortunes/ on Debians._ 
{/* truncate */}

I have a [kjv](https://www.atadcrazy.net/gnu-linux/misc/fortunes-kjv.tar.bz2 "kjv") [vocabulary](https://www.atadcrazy.net/gnu-linux/misc/fortunes-vocabulary.tar.bz2 "vocabulary") set available.

![term-fortune.png](@site/static/img/term-fortune.png)

**Add the following to your ~/.bashrc (".bashrc" is a hidden file in the Home or "~/" directory):**

```
# BASH COWSAY WITH FORTUNE
alias cowsay='cowsay -f tux'
fortune -s wisdom | cowsay
```

The alias is for it to use tux and the "fortune -s wisdom" is where to set the fortune file to be used. [man cowsay](https://linux.die.net/man/6/fortune "man fortune") and [man cowsay](https://linux.die.net/man/1/cowsay "man cowsay") for options.

---