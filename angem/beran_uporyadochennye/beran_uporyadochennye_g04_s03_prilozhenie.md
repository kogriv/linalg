## 4.3. Приложение

---
**стр. 58**
---

# ПРИЛОЖЕНИЕ

**Предложение 1.** *В каждой решетке $(P,\leqslant)$ справедливы равенства*

$$
(a\vee b)\vee c=a\vee(b\vee c)
$$

*и*

$$
(a\wedge b)\wedge c=a\wedge(b\wedge c).
$$

Доказательство. Положим $u=a\vee b$, $v=b\vee c$, $p=u\vee c$ и $q=a\vee v$. Надо убедиться, что $p=q$. Но согласно свойству (2s) из определения точной верхней грани имеем $p\geqslant u$, $p\geqslant c$, $u\geqslant a$ и $u\geqslant b$. Учитывая транзитивность порядка, получаем $p\geqslant a$, $p\geqslant b$ и $p\geqslant c$, т. е. $p$ оказывается верхней гранью множества $\{a,b,c\}$. Если $x$ — какая-либо другая верхняя грань этого множества, то $x\geqslant a$, $x\geqslant b$ и $x\geqslant c$. Согласно свойству (3s) из определения точной верхней грани, получаем $x\geqslant u$, что вместе с $x\geqslant c$ приводит к $x\geqslant p$. Таким образом, $p$ — наименьшая верхняя грань множества $\{a,b,c\}$, т. е. $p=\sup\{a,b,c\}$. Далее, используя (2s), получаем, что $q\geqslant a$, $q\geqslant v$, $v\geqslant b$ и $v\geqslant c$, откуда, как и раньше, приходим к выводу, что $q$ — верхняя грань множества $\{a,b,c\}$. Если же $x$ — какая-то другая верхняя грань этого множества, то ввиду (3s) имеем $x\geqslant a$ и $x\geqslant v$, откуда $x\geqslant q$. Следовательно, $q$ — наименьшая верхняя грань множества $\{a,b,c\}$, т. е. $q=\sup\{a,b,c\}=p$. Второе равенство доказывается аналогично.

**Предложение 2.** *Если на некотором непустом множестве $P$ определены операции $\vee$ и $\wedge$, обладающие свойствами (S1)—(S3) и (P1)—(P3), и если ввести отношение $\leqslant$, полагая $a\leqslant b$ тогда и только тогда, когда $a=a\wedge b$, то это отношение $\leqslant$ упорядочивает множество $P$ и $(P,\leqslant)$ оказывается решеткой, причем $a\wedge b=\inf\{a,b\}$ и $a\vee b=\sup\{a,b\}$.*

Доказательство. Ввиду (S3)

$$
a=a\vee(a\wedge a),
$$

откуда, используя (P3), получаем

$$
a\wedge a=a\wedge(a\vee(a\wedge a))=a. \tag{*}
$$

Таким образом, $a=a\wedge a$, а значит, $a\leqslant a$, т. е. отношение $\leqslant$ рефлексивно. Если $a\leqslant b$ и $b\leqslant c$, то $a=a\wedge b$ и $b=b\wedge c$. Учитывая (P2), получаем

$$
a=a\wedge b=a\wedge(b\wedge c)=(a\wedge b)\wedge c=a\wedge c.
$$

Отсюда $a\leqslant c$, т. е. отношение $\leqslant$ оказывается транзитивным. Если $a\leqslant b$ и $b\leqslant a$, то $a=a\wedge b$ и $b=b\wedge a$, откуда

$$
a=a\wedge b=b\wedge a=b
$$

---
**стр. 59**
---

в силу (P1). Этим доказана антисимметричность отношения $\leqslant$. Таким образом, это отношение упорядочивает множество $P$. Из равенств

$$
(a\wedge b)\wedge a=a\wedge(b\wedge a)=a\wedge(a\wedge b)=(a\wedge a)\wedge b=a\wedge b
$$

и

$$
(a\wedge b)\wedge b=a\wedge(b\wedge b)=a\wedge b,
$$

вытекающих из (P1), (P2) и (*), получаем, что $a\wedge b\leqslant a$ и $a\wedge b\leqslant b$, т. е. $a\wedge b$ оказывается нижней гранью множества $\{a,b\}$. Если $x$ — какая-либо другая нижняя грань этого множества, то $x\leqslant a$ и $x\leqslant b$, т. е. $x=x\wedge a$ и $x=x\wedge b$. Отсюда

$$
x\wedge(a\wedge b)=(x\wedge a)\wedge b=x\wedge b=x,
$$

т. е. $x\leqslant a\wedge b$. Следовательно, $a\wedge b$ — наибольшая нижняя грань множества $\{a,b\}$, т. е. $a\wedge b=\inf\{a,b\}$.

Далее, из (S1) и (P3) вытекает

$$
a\wedge(a\vee b)=a
$$

и

$$
b\wedge(a\vee b)=b\wedge(b\vee a)=b.
$$

Следовательно, $a\leqslant a\vee b$ и $b\leqslant a\vee b$, т. е. $a\vee b$ оказывается верхней гранью множества $\{a,b\}$. Если $x$ — какая-либо другая верхняя грань этого множества, то $a\leqslant x$ и $b\leqslant x$, откуда $a=a\wedge x$ и $b=b\wedge x$. Теперь, используя (S3) и (P1), получаем

$$
x=x\vee(x\wedge a)=x\vee(a\wedge x)=x\vee a
$$

и

$$
x=x\vee(x\wedge b)=x\vee(b\wedge x)=x\vee b.
$$

Но тогда, учитывая (P3) и (S3), получаем

$$
x\vee x=x\vee(x\wedge(x\vee x))=x,
$$

после чего, используя (S1), (S2) и (P3), приходим к

$$
\begin{aligned}
(a\vee b)\wedge x
&=(a\vee b)\wedge(x\vee b)
=(a\vee b)\wedge((x\vee a)\vee b)=\\
&=(a\vee b)\wedge(x\vee(a\vee b))
=(a\vee b)\wedge((a\vee b)\vee x)
=a\vee b.
\end{aligned}
$$

Следовательно, $a\vee b\leqslant x$. Таким образом, $a\vee b$ оказывается наименьшей верхней гранью множества $\{a,b\}$, т. е. $a\vee b=\sup\{a,b\}$.

**Предложение 3.** *Решетка $(P,\leqslant)$ модулярна тогда и только тогда, когда для любых $a,b,c\in P$ из справедливости соотношений $a\leqslant b$, $a\vee c=b\vee c$ и $a\wedge c=b\wedge c$ вытекает, что $a=b$.*

Доказательство. Если решетка модулярна, а элементы $a$, $b$ и $c$ удовлетворяют указанным в формулировке соотношениям, то, учитывая (P1), (S3), (P3) и модулярность, получаем

$$
\begin{aligned}
b
&=b\wedge(b\vee c)
=b\wedge(a\vee c)
=(a\vee c)\wedge b
=a\vee(c\wedge b)=\\
&=a\vee(b\wedge c)
=a\vee(a\wedge c)
=a.
\end{aligned}
$$


---
**стр. 60**
---

Допустим теперь, что $a,b,c\in P$, $a\leqslant c$ и указанное в формулировке свойство выполнено. Из упражнения 7 гл. 3 вытекает

$$
a\vee b\leqslant[(a\vee b)\wedge c]\vee b\leqslant a\vee b
$$

и

$$
b\wedge c\leqslant[a\vee(b\wedge c)]\wedge b\leqslant[c\vee(b\wedge c)]\wedge b=c\wedge b=b\wedge c.
$$

Отсюда

$$
[(a\vee b)\wedge c]\vee b=a\vee b=a\vee[(b\wedge c)\vee b]=[a\vee(b\wedge c)]\vee b
$$

и

$$
[(a\vee b)\wedge c]\wedge b=b\wedge c=[a\vee(b\wedge c)]\wedge b.
$$

Согласно упражнению 8, c) из гл. 3

$$
a\vee(b\wedge c)\leqslant(a\vee b)\wedge c.
$$

Таким образом, элементы $a\vee(b\wedge c)$, $(a\vee b)\wedge c$ и $b$ удовлетворяют данному условию и, следовательно,

$$
a\vee(b\wedge c)=(a\vee b)\wedge c.
$$

Модулярность решетки $P$ доказана.

**Предложение 4.** *Если решетка $P$ не модулярна, то она содержит подрешетку с диаграммой, изображенной на рис. 12, b.*

**Доказательство.** Если решетка $P$ не модулярна, то согласно предложению 3 она содержит такие элементы $a$, $b$ и $c$, что $a<c$, $a\vee b=c\vee b$ и $a\wedge b=c\wedge b$. Эти элементы и образуют искомую подрешетку.

**Предложение 5.** *Модулярная решетка $P$ дистрибутивна тогда и только тогда, когда для любых $a,b,c\in P$ справедливо равенство*

$$
(a\wedge b)\vee[c\wedge(a\vee b)]=(a\wedge c)\vee[b\wedge(a\vee c)]. \tag{**}
$$

**Доказательство.** Согласно задаче 12, d) $a\wedge c\leqslant a\leqslant a\vee c$. Поэтому из (S1), (P1) и модулярности вытекает

$$
(a\wedge c)\vee[b\wedge(a\vee c)]=(a\vee c)\wedge[b\vee(a\wedge c)].
$$

Таким образом, равенство (**) имеет место тогда и только тогда, когда имеет место равенство (8). Остается воспользоваться упражнением 10 из гл. 4.

**Предложение 6.** *Если решетка $P$ не дистрибутивна, то она содержит или подрешетку с диаграммой, изображенной на рис. 12, a, или подрешетку с диаграммой, изображенной на рис. 12, b.*

**Доказательство.** Допустим, что $P$ не содержит подрешеток, изображенных на рис. 12, b. Тогда согласно предложению 4 решетка $P$ модулярна. Далее положим

$$
p=(a\wedge b)\vee[c\wedge(a\vee b)],
$$

$$
q=(a\wedge c)\vee[b\wedge(a\vee c)]
$$

и

$$
r=(b\wedge c)\vee[a\wedge(b\vee c)].
$$

Поскольку $P$ не дистрибутивна, то по предложению 5 существуют $a,b,c\in P$ такие, что $p\ne q$. Ввиду (P1) задач 12, c) и 12, d) и упражнения 7, c) из гл. 3,

$$
[c\wedge(a\vee b)]\vee(a\wedge c)=c\wedge(a\vee b),
$$

---
**стр. 61**
---

$$
[b\wedge(a\vee c)]\vee(a\wedge b)=b\wedge(a\vee c),\qquad
c\wedge(a\vee b)\leqslant c\leqslant a\vee c
$$

и $b\leqslant a\vee b$. Поэтому, используя (S1), (S2), (P1), задачу 12, c) и модулярность решетки, получаем

$$
\begin{aligned}
p\vee q
&=[(a\wedge b)\vee[c\wedge(a\vee b)]]\vee[(a\wedge c)\vee[b\wedge(a\vee c)]]\\
&=[(a\wedge b)\vee[[c\wedge(a\vee b)]\vee(a\wedge c)]]\vee[b\wedge(a\vee c)]\\
&=[b\wedge(a\vee c)]\vee[(a\wedge b)\vee[c\wedge(a\vee b)]]\\
&=[[b\wedge(a\vee c)]\vee(a\wedge b)]\vee[c\wedge(a\vee b)]\\
&=[b\wedge(a\vee c)]\vee[c\wedge(a\vee b)]\\
&=(a\vee c)\wedge\{b\vee[c\wedge(a\vee b)]\}\\
&=(a\vee c)\wedge[(a\vee b)\wedge(b\vee c)].
\end{aligned}
$$

Аналогично выводим, что

$$
p\vee r=(b\vee c)\wedge[(b\vee a)\wedge(a\vee c)]
$$

и

$$
q\vee r=(c\vee b)\wedge[(c\vee a)\wedge(a\vee b)].
$$

Учитывая (S1) и (S2), получаем

$$
p\vee q=p\vee r=q\vee r.
$$

Ввиду задач 12, c) и 12, d), упражнения 7, c) из гл. 3 и свойства (P1),

$$
a\wedge b\leqslant b\wedge(a\vee c)\leqslant(a\wedge c)\vee[b\wedge(a\vee c)]
$$

и

$$
a\wedge c\leqslant c\wedge(a\vee b).
$$

Поэтому модулярность вместе со свойствами (S1), (S2) и (S3) дает

$$
\begin{aligned}
p\wedge q
&=[(a\wedge b)\vee[c\wedge(a\vee b)]]\wedge[(a\wedge c)\vee[b\wedge(a\vee c)]]\\
&=(a\wedge b)\vee\{[c\wedge(a\vee b)]\wedge[(a\wedge c)\vee[b\wedge(a\vee c)]]\}\\
&=(a\wedge b)\vee\{(a\wedge c)\vee[[c\wedge(a\vee b)]\wedge[b\wedge(a\vee c)]]\}\\
&=(a\wedge b)\vee[(a\wedge c)\vee(b\wedge c)].
\end{aligned}
$$

Аналогично выводим, что

$$
p\wedge r=(b\wedge a)\vee[(b\wedge c)\vee(a\wedge c)]
$$

и

$$
q\wedge r=(c\wedge a)\vee[(c\wedge b)\vee(a\wedge b)].
$$

Учитывая (P1) и (P2), получаем

$$
p\wedge q=p\wedge r=q\wedge r.
$$

Если $p=r$, то

$$
p\vee q=p\vee r=p=p\wedge r=p\wedge q.
$$

Отсюда $p=q$ в силу задачи 12, f), что противоречит выбору элементов $a$, $b$ и $c$. Таким образом, $p\ne r$. Аналогично устанавливается, что $q\ne r$. Следовательно, элементы $p\wedge q$, $p$, $q$, $r$ и $p\vee q$ образуют искомую подрешетку, изображенную на рис. 12, a.
