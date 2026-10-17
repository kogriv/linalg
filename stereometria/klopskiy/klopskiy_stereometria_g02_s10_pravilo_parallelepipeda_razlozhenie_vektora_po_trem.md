## 2.10. Правило параллелепипеда. Разложение вектора по трем некомпланарным векторам

---
**стр. 53**
---

$+ \frac{2}{3}\overrightarrow{OC_1}$. Но $\overrightarrow{OC_1} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ (задача 1), тогда

$$\overrightarrow{OM} = \frac{1}{3}\overrightarrow{OC} + \frac{2}{3} \cdot \frac{1}{2}(\overrightarrow{OB} + \overrightarrow{OA}) = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}). \blacksquare$$

**Задачи**

**206.** Точки $M_1$ и $M_2$ — середины отрезков $A_1B_1$ и $A_2B_2$ соответственно. Докажите, что $\overrightarrow{M_1M_2} = \frac{1}{2}(\overrightarrow{A_1A_2} + \overrightarrow{B_1B_2})$.

**207.** Докажите, что середины оснований трапеции и точка пересечения продолжений ее боковых сторон принадлежат одной прямой.

**208.** 1) $M_1$ и $M_2$ — точки пересечения медиан треугольников $A_1B_1C_1$ и $A_2B_2C_2$. Докажите, что $\overrightarrow{M_1M_2} = \frac{1}{3}(\overrightarrow{A_1A_2} + \overrightarrow{B_1B_2} + \overrightarrow{C_1C_2})$.

2) В треугольнике $ABC$ точки $A_1$, $B_1$, $C_1$ являются серединами сторон $BC$, $AC$, $AB$. Докажите, что при любом выборе точки $O$ выполняется равенство:

$$\overrightarrow{OA_1} + \overrightarrow{OB_1} + \overrightarrow{OC_1} = \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}.$$

**209.** В тетраэдре $ABCD$ точки $M_1$ и $M_2$ являются соответственно точками пересечения медиан граней $ADB$ и $BDC$. Докажите, что векторы $\overrightarrow{M_1M_2}$ и $\overrightarrow{AC}$ коллинеарны. Найдите отношение длин этих векторов.

**210.** Треугольник $ABC$ является параллельной проекцией треугольника $A_1B_1C_1$ на плоскость. Известно: $|AA_1| = a$, $|BB_1| = b$, $|CC_1| = c$. Найдите расстояние между точками пересечения медиан этих треугольников.

## § 23. Правило параллелепипеда. Разложение вектора по трем некомпланарным векторам

**1.** Для сложения трех некомпланарных векторов иногда бывает удобно пользоваться правилом параллелепипеда. Пусть надо найти сумму некомпланарных векторов $\vec{a}$, $\vec{b}$, $\vec{c}$ (рис. 87). Отложим от произвольной точки $O$ векторы $\overrightarrow{OA} = \vec{a}$, $\overrightarrow{OB} = \vec{b}$, $\overrightarrow{OC} = \vec{c}$. Построим параллелепипед так, чтобы отрезки $OA$, $OB$, $OC$ были его ребрами. Вектор $\overrightarrow{OS}$, где $[OS]$ — диагональ параллелепипеда, является искомой суммой.

Действительно, $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AD} + \overrightarrow{DS} = \overrightarrow{OS}$ (§ 18).

**2.** Пусть даны некомпланарные векторы $\vec{a}$, $\vec{b}$, $\vec{c}$. Выясним, можно ли произвольный вектор $\vec{d}$ представить в виде:

$$\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}. \tag{1}$$

---
**стр. 54**
---

![Рис. 87](assets/klopskiy_stereometria_g02_s10_pravilo_parallelepipeda_razlozhenie_vektora_po_trem/p54-fig1.png)

![Рис. 88](assets/klopskiy_stereometria_g02_s10_pravilo_parallelepipeda_razlozhenie_vektora_po_trem/p54-fig2.png)

От точки $O$ отложим векторы: $\overrightarrow{OA} = \vec{a}$, $\overrightarrow{OB} = \vec{b}$, $\overrightarrow{OC} = \vec{c}$, $\overrightarrow{OD} = \vec{d}$ (рис. 88). Плоскости $AOB$, $BOC$, $COA$ различны. Рассмотрим случай, когда точка $D$ не принадлежит ни одной из указанных плоскостей. Через $D$ проведем плоскости, соответственно параллельные плоскостям $AOB$, $BOC$, $COA$. В полученном параллелепипеде отрезок $OD$ — диагональ. Концы ребер, выходящих из вершины $O$, обозначим $A_1$, $B_1$, $C_1$. По правилу параллелепипеда $\overrightarrow{OD} = \overrightarrow{OA_1} + \overrightarrow{OB_1} + \overrightarrow{OC_1}$. Но векторы $\overrightarrow{OA_1}$ и $\overrightarrow{OA}$ коллинеарны, поэтому $\overrightarrow{OA_1} = x\overrightarrow{OA}$. Аналогично, $\overrightarrow{OB_1} = y\overrightarrow{OB}$, $\overrightarrow{OC_1} = z\overrightarrow{OC}$. Следовательно, $\overrightarrow{OD} = x\overrightarrow{OA} + y\overrightarrow{OB} + z\overrightarrow{OC}$, или

$$\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}.$$

Если точка $D$ принадлежит плоскости $AOB$, то векторы $\overrightarrow{OA}$, $\overrightarrow{OB}$, $\overrightarrow{OD}$ компланарны и, следовательно, $\vec{d} = x\vec{a} + y\vec{b}$ (§ 21). Тогда в равенстве (1) полагаем $z = 0$. Аналогично рассматриваются случаи, когда точка $D$ принадлежит $(BOC)$ или $(COA)$.

Если заданы некомпланарные векторы $\vec{a}$, $\vec{b}$, $\vec{c}$, то представление вектора $\vec{d}$ в виде суммы $x\vec{a} + y\vec{b} + z\vec{c}$ называется **разложением вектора $\vec{d}$ по векторам $\vec{a}$, $\vec{b}$, $\vec{c}$**.

Можно доказать, что полученное разложение является единственным, т. е. из равенств $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$ и $\vec{d} = x_1\vec{a} + y_1\vec{b} + z_1\vec{c}$ следует: $x = x_1$, $y = y_1$, $z = z_1$. $\blacksquare$

Итак, имеет место следующая теорема:

**12. Теорема.** *Для каждого вектора пространства существует единственное разложение по трем данным некомпланарным векторам.*

**Задачи**

**211.** Дан параллелепипед $ABCDA_1B_1C_1D_1$. Разложите по векторам $\vec{p} = \overrightarrow{AB}$, $\vec{q} = \overrightarrow{AD}$, $\vec{r} = \overrightarrow{AA_1}$ векторы: 1) $\overrightarrow{AB_1}$; 2) $\overrightarrow{AC_1}$;
