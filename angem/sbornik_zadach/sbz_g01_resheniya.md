# Глава 1. Векторы и координаты

## Решения (к задачам с пометкой (р))

Раздел «Решения» в оригинале (стр. 348–372) идёт не по главам, а сплошной нумерацией задач по всей книге. Здесь собраны только те, что относятся к Главе 1 — по мере разбора остальных § сюда будут добавляться остальные.

**1.46 (р).** *Вершина $D$ параллелограмма $ABCD$ соединена с точкой $K$, лежащей на стороне $BC$, такой, что $|BK|:|KC|=2:3$. Вершина $B$ соединена с точкой $L$, лежащей на стороне $CD$, такой, что $|CL|:|LD|=5:3$. В каком отношении точка $M$ пересечения прямых $DK$ и $BL$ делит отрезки $DK$ и $BL$?* (см. [[sbz_g01_s01_lineynye_sootnosheniya|§1, задача 1.46]])

Введем на плоскости базис $\overrightarrow{AD}=\mathbf{a}$, $\overrightarrow{AB}=\mathbf{b}$. Имеем:
$$\overrightarrow{DK}=\overrightarrow{DC}+\overrightarrow{CK}=\mathbf{b}-\frac{3}{5}\mathbf{a}, \qquad \overrightarrow{BL}=\overrightarrow{BC}+\overrightarrow{CL}=\mathbf{a}-\frac{5}{8}\mathbf{b},$$
$$\overrightarrow{DM}=\lambda\overrightarrow{DK}, \qquad \overrightarrow{BM}=\mu\overrightarrow{BL}.$$

Найдем неизвестные $\lambda$ и $\mu$. Так как
$$\overrightarrow{AM}=\overrightarrow{AD}+\overrightarrow{DM}=\mathbf{a}+\lambda\left(\mathbf{b}-\frac{3}{5}\mathbf{a}\right)=\left(1-\frac{3}{5}\lambda\right)\mathbf{a}+\lambda\mathbf{b},$$
$$\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{BM}=\mathbf{b}+\mu\left(\mathbf{a}-\frac{5}{8}\mathbf{b}\right)=\mu\mathbf{a}+\left(1-\frac{5}{8}\mu\right)\mathbf{b},$$

то, приравнивая коэффициенты при $\mathbf{a}$ и $\mathbf{b}$, имеем $1-\frac{3}{5}\lambda=\mu$, $\lambda=1-\frac{5}{8}\mu$, откуда $\lambda=\frac{3}{5}$, $\mu=\frac{16}{25}$. Окончательно,
$$|DM|:|MK|=3:2, \qquad |BM|:|ML|=16:9.$$
