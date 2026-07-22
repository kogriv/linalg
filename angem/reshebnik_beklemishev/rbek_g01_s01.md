# Глава I

## § 1

Решения упражнений к [[../beklemishev/bekl_g01_s01_vektory|Беклемишев, §1. Векторы]] (упражнения 1–5, стр. 15–16 учебника).

**1.** *Укажите на плоскости три таких вектора, по которым любой вектор этой плоскости может быть разложен с положительными коэффициентами.*

Решение. Выберем векторы $\mathbf{a}$, $\mathbf{b}$ и $\mathbf{c}$ одинаковыми по длине и такими, чтобы каждый из них составлял с остальными углы, равные $2\pi/3$.

Нетрудно проверить, что $\mathbf{a}+\mathbf{b}+\mathbf{c}=\mathbf{0}$. Тогда, если $\mathbf{x}=\alpha\mathbf{a}+\beta\mathbf{b}+\gamma\mathbf{c}$ — какое-либо разложение вектора $\mathbf{x}$, то верно и равенство $\mathbf{x}=\alpha\mathbf{a}+\beta\mathbf{b}+\gamma\mathbf{c}+\lambda(\mathbf{a}+\mathbf{b}+\mathbf{c})$ при любом $\lambda$. Ясно, что при $\lambda > \max\{|\alpha|,|\beta|,|\gamma|\}$ коэффициенты последнего разложения будут положительными. Таким образом, каждый вектор (в том числе и нулевой) может быть разложен с положительными коэффициентами.

Здесь видно также и условие, при котором по какой-либо тройке векторов можно разложить любой вектор с положительными коэффициентами. Именно, необходимо и достаточно, чтобы она была линейно зависимой и коэффициенты нулевой линейной комбинации были положительными.

**2.** *Докажите, что точка $C$ лежит на отрезке $AB$ тогда и только тогда, когда существует число $\lambda \in [0,1]$, такое что для любой точки $O$ выполнено $\overrightarrow{OC} = \lambda\overrightarrow{OB}+(1-\lambda)\overrightarrow{OA}$. Если $\lambda$ дано, то в каком отношении точка $C$ делит отрезок?*

Решение. Точка $C$ лежит на отрезке $AB$ тогда и только тогда, когда $\overrightarrow{AC} = \lambda\overrightarrow{AB}$, где $\lambda \in [0,1]$. Выберем какую-нибудь точку $O$. Тогда $\overrightarrow{OC} = \overrightarrow{OA}+\lambda\overrightarrow{AB}$, а $\overrightarrow{AB} = \overrightarrow{OB}-\overrightarrow{OA}$. Поэтому $\overrightarrow{OC} = \overrightarrow{OA}+\lambda(\overrightarrow{OB}-\overrightarrow{OA})$. Это равносильно доказываемому равенству.

Ясно, что $\overrightarrow{CB} = (1-\lambda)\overrightarrow{AB}$. Значение $\lambda=1$ соответствует $C=B$. При $\lambda \neq 1$
$$\frac{|AC|}{|CB|} = \frac{\lambda|\overrightarrow{AB}|}{(1-\lambda)|\overrightarrow{AB}|} = \frac{\lambda}{1-\lambda}.$$

---
**стр. 6**

---

![Рис. 1](assets/rbek_g01_s01/p06-fig1.png)

**3.** *Дан правильный шестиугольник $ABCDEF$, $|AB|=2$. Найдите координаты вектора $\overrightarrow{AC}$ в базисе $\overrightarrow{AB}, \overrightarrow{AD}$.*

Решение. Пусть точка $O$ — центр шестиугольника. Как видно из рис. 1, $\overrightarrow{AC} = \overrightarrow{AO}+\overrightarrow{OC} = \frac{1}{2}\overrightarrow{AD}+\overrightarrow{AB}$. Следовательно, искомые координаты $\left(1, \frac{1}{2}\right)$.

Обратим внимание на то, что результат не зависит от длины стороны шестиугольника. Координаты никогда не зависят от выбора единицы измерения длин.

**4.** *В некотором базисе на плоскости заданы координаты векторов $\mathbf{a}(1,2)$, $\mathbf{b}(2,3)$ и $\mathbf{c}(-1,1)$. Проверьте, что $\mathbf{a}$ и $\mathbf{b}$ линейно независимы. Найдите координаты $\mathbf{c}$ в базисе $\mathbf{a}, \mathbf{b}$.*

Решение. Рассмотрим линейную комбинацию векторов $\mathbf{a}$ и $\mathbf{b}$, равную нулевому вектору: $\alpha\mathbf{a}+\beta\mathbf{b}=\mathbf{0}$. Это векторное равенство равносильно двум равенствам, связывающим их координаты: $\alpha \cdot 1+\beta \cdot 2=0$ и $\alpha \cdot 2+\beta \cdot 3=0$. Умножим первое равенство на 2 и вычтем из второго. Так мы найдем, что $\beta=0$. Подставляя это в первое равенство, видим, что и $\alpha=0$. Таким образом, из обращения в нуль линейной комбинации следует, что ее коэффициенты равны нулю. Векторы линейно независимы.

Пусть $\mathbf{c}=x\mathbf{a}+y\mathbf{b}$. Это равенство равносильно системе линейных уравнений с неизвестными $x$ и $y$:
$$x+2y=-1,$$
$$2x+3y=1.$$

---
**стр. 7**

---

Подставим $x=-1-2y$ из первого уравнения во второе и найдем, что $y=-3$. Следовательно, решение системы $x=5$; $y=-3$, и $\mathbf{c}=5\mathbf{a}-3\mathbf{b}$.

**5.** *Даны три точки $A$, $B$ и $C$. Найдите такую точку $O$, что $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}=\mathbf{0}$. Решив аналогичную задачу для четырех точек, докажите, что в треугольной пирамиде отрезки, соединяющие вершины с центрами тяжести противоположных граней, пересекаются в одной точке.*

Решение. Пусть такая точка $O$ существует. Тогда для произвольной точки $P$ выполнено равенство
$$\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC} = 3\overrightarrow{PO}+\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC} = 3\overrightarrow{PO}. \quad (1)$$

Положив $P=A$, мы получим
$$\overrightarrow{AO} = \frac{1}{3}(\overrightarrow{AB}+\overrightarrow{AC}), \quad (2)$$

откуда следует, что такой точкой $O$ может быть только точка пересечения медиан $\triangle ABC$.

С другой стороны, если $O$ — центр тяжести $\triangle ABC$, то $\overrightarrow{OB}+\overrightarrow{OC}=2\overrightarrow{OD}$, где $D$ — середина стороны $BC$. Но и $\overrightarrow{AO}=2\overrightarrow{OD}$. Отсюда $\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OA}=\mathbf{0}$. Таким образом, точка $O$ пересечения медиан $\triangle ABC$ — единственная точка, удовлетворяющая условию задачи.

Теперь пусть даны четыре точки $A$, $B$, $C$ и $D$. Если $Q$ — центр тяжести $\triangle ABC$, то, полагая в равенстве (1) $P=D$ (и $O=Q$), мы получим
$$\overrightarrow{DQ} = \frac{1}{3}(\overrightarrow{DA}+\overrightarrow{DB}+\overrightarrow{DC}).$$

Допустим, что существует точка $O$, для которой
$$\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\mathbf{0}. \quad (3)$$

Тогда аналогично формуле (2) находим, что
$$\overrightarrow{DO} = \frac{1}{4}(\overrightarrow{DA}+\overrightarrow{DB}+\overrightarrow{DC}). \quad (4)$$

Поэтому $\overrightarrow{DO}=(3/4)\overrightarrow{DQ}$, и такой точкой $O$ может быть только точка на отрезке $DQ$, делящая его в отношении $3:1$.

С другой стороны, пусть $O$ — это точка на отрезке $DQ$, делящая его в отношении $3:1$, т. е. $\overrightarrow{DO}=(3/4)\overrightarrow{DQ}$. Тогда $O$

---
**стр. 8**

---

удовлетворяет равенству (4). Подставим в него $\overrightarrow{DA}=\overrightarrow{DO}+\overrightarrow{OA}$, $\overrightarrow{DB}=\overrightarrow{DO}+\overrightarrow{OB}$ и $\overrightarrow{DC}=\overrightarrow{DO}+\overrightarrow{OC}$. Мы получим
$$4\overrightarrow{DO} = 3\overrightarrow{DO}+\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}.$$

Это равносильно доказываемому равенству (3).

В равенство (3), однозначно определяющее точку $O$, все четыре исходные точки входят симметрично. Это означает, что $O$ лежит на всех отрезках, соединяющих вершины тетраэдра с центрами тяжести противолежащих граней, и делит каждый из них в отношении $3:1$.
