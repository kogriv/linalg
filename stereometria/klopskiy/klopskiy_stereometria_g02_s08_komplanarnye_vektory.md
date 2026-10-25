## 2.8. Компланарные векторы

---
**стр. 50**
---

2) $\overrightarrow{C_1B}=k\overrightarrow{C_1A}$; 3) $\overrightarrow{AM}=k\overrightarrow{MA_1}$; 4) $\overrightarrow{CC_1}=k\overrightarrow{C_1M}$; 5) $\overrightarrow{MB_1}=k\overrightarrow{B_1B}$; 6) $\overrightarrow{MA}=k\overrightarrow{AA_1}$.

**197.** Дано: $\vec a$ и $\vec b$ коллинеарны, $|\vec a|>|\vec b|$. Какое направление имеет вектор $\vec a+\vec b$? Найдите длину этого вектора.

## § 21. Компланарные векторы

Для сложения двух неколлинеарных векторов иногда бывает удобно пользоваться **правилом параллелограмма**, известным из планиметрии. Напомним это правило.

Пусть надо найти сумму неколлинеарных векторов $\vec a$ и $\vec b$. Отложим от произвольной точки $O$ векторы $\overrightarrow{OA}=\vec a$ и $\overrightarrow{OB}=\vec b$ (рис. 80). Построим параллелограмм $AOBC$. Вектор $\overrightarrow{OC}$, где $[OC]$ — диагональ параллелограмма, является искомой суммой. Действительно, по правилу треугольника

$$\overrightarrow{OA}+\overrightarrow{OB}=\overrightarrow{OA}+\overrightarrow{AC}=\overrightarrow{OC}.$$

![Рис. 80](assets/klopskiy_stereometria_g02_s08_komplanarnye_vektory/p50-fig1.png)

**Определение.** Три ненулевых вектора называются **компланарными**, если лучи, задающие их направления, лежат на прямых, параллельных некоторой плоскости (рис. 81).

Если среди трёх векторов имеется хотя бы один нулевой, то такие векторы также будем считать компланарными.

В случае компланарности векторов $\overrightarrow{OA}$, $\overrightarrow{OB}$, $\overrightarrow{OC}$ (рис. 82) точки $O$, $A$, $B$, $C$ принадлежат одной плоскости.

![Рис. 81](assets/klopskiy_stereometria_g02_s08_komplanarnye_vektory/p50-fig2.png)

**11. Теорема.** *Если векторы $\vec a$ и $\vec b$ не коллинеарны, то любой вектор $\vec c$, компланарный с векторами $\vec a$ и $\vec b$, можно представить единственным образом в виде:*

$$\vec c=x\vec a+y\vec b.$$

*Доказательство.* Пусть векторы $\vec a$, $\vec b$, $\vec c$ компланарны,

![Рис. 82](assets/klopskiy_stereometria_g02_s08_komplanarnye_vektory/p50-fig3.png)


---
**стр. 51**
---

причем $\vec a$ и $\vec b$ не коллинеарны. Найдем числа $x$ и $y$, удовлетворяющие равенству $\vec c = x\vec a + y\vec b$. От точки $O$ отложим векторы $\overrightarrow{OA} = \vec a$, $\overrightarrow{OB} = \vec b$, $\overrightarrow{OC} = \vec c$. Из условия теоремы следует, что точки $O$, $A$, $B$, $C$ принадлежат некоторой плоскости $\alpha$. Рассмотрим случай, когда $C \notin (OA)$ и $C \notin (OB)$ (рис. 83). В плоскости $\alpha$ через точку $C$ проведем прямые, параллельные прямым $OA$ и $OB$. Получим параллелограмм $MONC$. По правилу параллелограмма можно записать: $\overrightarrow{OC} = \overrightarrow{OM} + \overrightarrow{ON}$. Но $\overrightarrow{OM} = x\overrightarrow{OA}$ и $\overrightarrow{ON} = y\overrightarrow{OB}$ (§ 20), тогда $\overrightarrow{OC} = x\overrightarrow{OA} + y\overrightarrow{OB}$, или $\vec c = x\vec a + y\vec b$.

![Рис. 83](assets/klopskiy_stereometria_g02_s08_komplanarnye_vektory/p51-fig83.png)

Если же $C \in (OA)$ или $C \in (OB)$, то в последнем равенстве соответственно $y = 0$ или $x = 0$.

Можно доказать, что числа $x$ и $y$ определяются однозначно, т. е. если $\vec c = x\vec a + y\vec b$ и $\vec c = x_1\vec a + y_1\vec b$, то $x = x_1$ и $y = y_1$. ■

Если даны неколлинеарные векторы $\vec a$ и $\vec b$, то представление вектора $\vec c$, компланарного с $\vec a$ и $\vec b$, в виде суммы $x\vec a + y\vec b$ называется **разложением вектора $\vec c$ по векторам $\vec a$ и $\vec b$**.

**Задачи**

**198.** К одной точке тела приложены силы $\vec F_1$ и $\vec F_2$ (рис. 84). Найдите величину равнодействующей силы, если угол между данными силами равен $\varphi$.

![Рис. 84](assets/klopskiy_stereometria_g02_s08_komplanarnye_vektory/p51-fig84.png)

**199.** От центра $O$ правильного шестиугольника $A_1A_2A_3A_4A_5A_6$ отложите векторы: 1) $\overrightarrow{OA_1} + \overrightarrow{OA_3}$; 2) $\overrightarrow{OA_2} + \overrightarrow{OA_4} + \overrightarrow{OA_6}$; 3) $\overrightarrow{OA_1} + \overrightarrow{OA_2} + \overrightarrow{OA_3} + \overrightarrow{OA_4} + \overrightarrow{OA_5} + \overrightarrow{OA_6}$.

**200.** Докажите, что если $O$ — точка пересечения медиан треугольника $ABC$, то $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \vec 0$.

**201.** Даны неколлинеарные векторы $\overrightarrow{OA}$ и $\overrightarrow{OB}$. От точки $O$ отложите векторы: 1) $2\overrightarrow{OA} + \overrightarrow{OB}$; 2) $\overrightarrow{OA} - \frac{1}{3}\overrightarrow{OB}$; 3) $\frac{3}{2}\overrightarrow{OA} - \frac{4}{3}\overrightarrow{OB}$.

**202.** Из вершин тетраэдра $ABCD$ составьте: 1) две упорядоченные пары точек, задающие коллинеарные векторы; 2) три упорядоченные пары, задающие компланарные векторы; 3) три упорядоченные пары, задающие некомпланарные векторы.

**203.** Дан параллелепипед $ABCDA_1B_1C_1D_1$. Какие из следую-
