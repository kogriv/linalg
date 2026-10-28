## 2.13. Основные свойства скалярного умножения векторов


---
**стр. 59, продолжение**
---

### § 26. Основные свойства скалярного умножения векторов

Скалярное умножение векторов обладает свойствами, аналогичными законам операций над числами:

1) $\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$ (переместительный закон);
2) $(k\vec{a})\cdot\vec{b}=k(\vec{a}\cdot\vec{b})$ (сочетательный закон);
3) $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$ (распределительный закон).

Переместительный и сочетательный законы доказываются на основе определения скалярного произведения.

Доказательство распределительного закона основано на равенстве:

$$(\vec{a}+\vec{b})^2=\vec{a}^2+2\vec{a}\cdot\vec{b}+\vec{b}^2. \qquad (1)$$

Докажем равенство (1). Рассмотрим случай, когда векторы $\vec{a}$ и $\vec{b}$ неколлинеарны. Отложим $\overrightarrow{AB}=\vec{a}$, $\overrightarrow{BC}=\vec{b}$, тогда $\overrightarrow{AC}=\vec{a}+\vec{b}$ (рис. 95). Рассмотрим треугольник $ABC$. По теореме косинусов:

$$|AC|^2=|AB|^2+|BC|^2-2|AB|\cdot|BC|\cos(180^\circ-\varphi)=$$
$$=|AB|^2+|BC|^2+2|AB|\cdot|BC|\cos\varphi, \text{ где } \varphi=(\widehat{\vec{a},\vec{b}}).$$

Но $|AC|^2=(\vec{a}+\vec{b})^2$, $|AB|^2=\vec{a}^2$, $|BC|^2=\vec{b}^2$,
$$|AB|\cdot|BC|\cos\varphi=\vec{a}\cdot\vec{b}.$$

Тогда $(\vec{a}+\vec{b})^2=\vec{a}^2+2\vec{a}\cdot\vec{b}+\vec{b}^2$.

Из только что полученной формулы и сочетательного закона следует:

$$(\vec{a}-\vec{b})^2=(\vec{a}+(-\vec{b}))^2=\vec{a}^2-2\vec{a}\cdot\vec{b}+\vec{b}^2. \qquad (1')$$

Равенства (1) и $(1')$ верны и в том случае, когда векторы $\vec{a}$ и $\vec{b}$ коллинеарны.

Из формул (1) и $(1')$ легко получается следствие:

$$(\vec{a}+\vec{b})^2=2\vec{a}^2+2\vec{b}^2-(\vec{a}-\vec{b})^2. \qquad (2)$$

![Рис. 95](assets/klopskiy_stereometria_g02_s13_osnovnye_svoystva_skalyarnogo_umnozheniya_vektorov/p59-fig1.png)

Докажем распределительный закон скалярного умножения векторов.

Преобразуем выражение $(\vec{a}+\vec{b}+\vec{c})^2$.

Сначала сгруппируем слагаемые так, чтобы можно было выделить скалярное произведение $\vec{a}\cdot(\vec{b}+\vec{c})$. Имеем:

---
**стр. 60**
---

произведение $\vec{a}\cdot(\vec{b}+\vec{c})$. Имеем:

$$(\vec{a}+\vec{b}+\vec{c})^2=(\vec{a}+(\vec{b}+\vec{c}))^2=\vec{a}^2+2\vec{a}\cdot(\vec{b}+\vec{c})+(\vec{b}+\vec{c})^2=$$
$$=\vec{a}^2+\vec{b}^2+\vec{c}^2+2\vec{a}\cdot(\vec{b}+\vec{c})+2\vec{b}\cdot\vec{c}. \qquad (3)$$

Теперь преобразуем $(\vec{a}+\vec{b}+\vec{c})^2$, используя равенство (2):

$$(\vec{a}+\vec{b}+\vec{c})^2=\left(\left(\frac{\vec{a}}{2}+\vec{b}\right)+\left(\frac{\vec{a}}{2}+\vec{c}\right)\right)^2=2\left(\frac{\vec{a}}{2}+\vec{b}\right)^2+2\left(\frac{\vec{a}}{2}+\vec{c}\right)^2-$$
$$-(\vec{b}-\vec{c})^2=\vec{a}^2+\vec{b}^2+\vec{c}^2+2\vec{a}\cdot\vec{b}+2\vec{a}\cdot\vec{c}+2\vec{b}\cdot\vec{c}. \qquad (4)$$

Приравняв правые части равенств (3) и (4) и выполнив несложные преобразования, получим:

$$\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}.$$

■

Доказывая распределительный закон, мы попутно вывели формулу скалярного квадрата суммы трёх векторов:

$$(\vec{a}+\vec{b}+\vec{c})^2=\vec{a}^2+\vec{b}^2+\vec{c}^2+2\vec{a}\cdot\vec{b}+2\vec{a}\cdot\vec{c}+2\vec{b}\cdot\vec{c}.$$

Этой формулой мы будем неоднократно пользоваться.

Приведём пример применения распределительного закона. Пусть надо произвести умножение: $(\vec{a}+\vec{b})\cdot(\vec{c}+\vec{d})$. Обозначим через $\vec{m}$ сумму $\vec{a}+\vec{b}$. Тогда $\vec{m}\cdot(\vec{c}+\vec{d})=\vec{m}\cdot\vec{c}+\vec{m}\cdot\vec{d}=(\vec{a}+\vec{b})\cdot\vec{c}+$
$+(\vec{a}+\vec{b})\cdot\vec{d}=\vec{a}\cdot\vec{c}+\vec{b}\cdot\vec{c}+\vec{a}\cdot\vec{d}+\vec{b}\cdot\vec{d}.$

Замечаем, что этот результат можно получить, преобразуя произведение $(\vec{a}+\vec{b})\cdot(\vec{c}+\vec{d})$ по аналогии с известным из алгебры способом преобразования произведения двух многочленов. Поэтому в дальнейшем промежуточные записи будем опускать.
