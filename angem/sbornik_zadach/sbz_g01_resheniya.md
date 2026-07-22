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

**2.19 (р).** *Длины базисных векторов $\mathbf{e}_1$ и $\mathbf{e}_2$ общей декартовой системы координат на плоскости равны соответственно $\sqrt{2}$ и 1, угол между ними равен $45^\circ$. Вычислить длины диагоналей и углы параллелограмма, построенного на векторах, имеющих в этом базисе координаты $(2,2)$ и $(-1,4)$.* (см. [[sbz_g01_s02_skalyarnoe_proizvedenie|§2, задача 2.19]])

Параллелограмм строится на векторах $\mathbf{a}=2\mathbf{e}_1+2\mathbf{e}_2$, $\mathbf{b}=-\mathbf{e}_1+4\mathbf{e}_2$. Длины диагоналей параллелограмма — это длины векторов $\mathbf{a}+\mathbf{b}$ и $\mathbf{a}-\mathbf{b}$. Имеем: $\mathbf{a}+\mathbf{b}=\mathbf{e}_1+6\mathbf{e}_2$, $\mathbf{a}-\mathbf{b}=3\mathbf{e}_1-2\mathbf{e}_2$;
$$|\mathbf{a}+\mathbf{b}|^2=|\mathbf{e}_1|^2+36|\mathbf{e}_2|^2+12(\mathbf{e}_1,\mathbf{e}_2), \qquad |\mathbf{a}-\mathbf{b}|^2=9|\mathbf{e}_1|^2+4|\mathbf{e}_2|^2-12(\mathbf{e}_1,\mathbf{e}_2).$$
Поэтому $|\mathbf{a}+\mathbf{b}|^2=50$, так как $(\mathbf{e}_1,\mathbf{e}_2)=1$, $|\mathbf{a}-\mathbf{b}|^2=10$. Итак, длины диагоналей параллелограмма равны $5\sqrt{2}$ и $\sqrt{10}$.

Один из углов параллелограмма — это угол $\varphi$ между векторами $\mathbf{a}$ и $\mathbf{b}$; $\cos\varphi=\dfrac{(\mathbf{a},\mathbf{b})}{|\mathbf{a}|\cdot|\mathbf{b}|}$. Имеем $(\mathbf{a},\mathbf{b})=-2|\mathbf{e}_1|^2+8|\mathbf{e}_2|^2+6(\mathbf{e}_1,\mathbf{e}_2)=10$, $|\mathbf{a}|^2=4|\mathbf{e}_1|^2+4|\mathbf{e}_2|^2+8(\mathbf{e}_1,\mathbf{e}_2)=20$, $|\mathbf{b}|^2=|\mathbf{e}_1|^2+16|\mathbf{e}_2|^2-8(\mathbf{e}_1,\mathbf{e}_2)=10$; $\cos\varphi=1/\sqrt{2}$. Итак, острый угол параллелограмма равен $45^\circ$.

**2.24 (р).** *Даны два вектора $\mathbf{a}$ и $\mathbf{b}$, причем $\mathbf{a}\neq\mathbf{o}$. Выразить через $\mathbf{a}$ и $\mathbf{b}$ ортогональную проекцию вектора $\mathbf{b}$ на прямую, направление которой определяется вектором $\mathbf{a}$.* (см. [[sbz_g01_s02_skalyarnoe_proizvedenie|§2, задача 2.24]])

По определению $\mathbf{b}=\mathbf{x}+\mathbf{y}$, где вектор $\mathbf{x}$ коллинеарен вектору $\mathbf{a}$, а вектор $\mathbf{y}$ ортогонален вектору $\mathbf{a}$. Иначе говоря, $\mathbf{b}=\lambda\mathbf{a}+\mathbf{y}$, где $(\mathbf{a},\mathbf{y})=0$. Умножая обе части векторного равенства скалярно на $\mathbf{a}$, имеем
$$(\mathbf{a},\mathbf{b})=\lambda|\mathbf{a}|^2+(\mathbf{a},\mathbf{y})=\lambda|\mathbf{a}|^2,$$
откуда $\lambda=\dfrac{(\mathbf{a},\mathbf{b})}{|\mathbf{a}|^2}$. Итак, $\mathbf{x}=\dfrac{(\mathbf{a},\mathbf{b})}{|\mathbf{a}|^2}\mathbf{a}$.

**2.34 (р).** *Даны два вектора $\mathbf{a}(1,-1,1)$ и $\mathbf{b}(5,1,1)$. Вычислить координаты вектора $\mathbf{c}$, который имеет длину 1 и ортогонален векторам $\mathbf{a}$ и $\mathbf{b}$. Сколько решений имеет задача?* (см. [[sbz_g01_s02_skalyarnoe_proizvedenie|§2, задача 2.34]])

Пусть вектор $\mathbf{c}$ имеет координаты $x,y,z$. Из условия ортогональности векторам $\mathbf{a}$ и $\mathbf{b}$ имеем: $x-y+z=0$, $5x+y+z=0$. Выражая из первого уравнения $z=y-x$ и подставляя во второе, имеем: $2y+4x=0$, откуда $y=-2x$, $z=-3x$. Условию ортогональности векторам $\mathbf{a}$ и $\mathbf{b}$ удовлетворяет бесконечно много векторов $\mathbf{c}$ с координатами $(x,-2x,-3x)$. Из условия $|\mathbf{c}|=1$ имеем $|x|=1/\sqrt{14}$, откуда $x=\pm1/\sqrt{14}$. Задача имеет два решения: $(1/\sqrt{14},-2/\sqrt{14},-3/\sqrt{14})$ и $(-1/\sqrt{14},2/\sqrt{14},3/\sqrt{14})$.

**3.9 (р).** *Длины базисных векторов $\mathbf{e}_1$ и $\mathbf{e}_2$ общей декартовой системы координат на плоскости равны соответственно 3 и 2, а угол между ними равен $30^\circ$. В этой системе координат даны координаты трех последовательных вершин параллелограмма: $(1,3)$, $(1,0)$ и $(-1,2)$. Найти площадь параллелограмма.* (см. [[sbz_g01_s03_vektornoe_i_smeshannoe_proizvedenie|§3, задача 3.9]])

Площадь параллелограмма равна $S=|[\overrightarrow{BA},\overrightarrow{BC}]|$ (если плоскость рассматривать в пространстве). Имеем $\overrightarrow{BA}=3\mathbf{e}_2$, $\overrightarrow{BC}=-2\mathbf{e}_1+2\mathbf{e}_2$, $|[\mathbf{e}_1,\mathbf{e}_2]|=3$, $[\overrightarrow{BA},\overrightarrow{BC}]=6[\mathbf{e}_2,\mathbf{e}_2-\mathbf{e}_1]=6[\mathbf{e}_2,\mathbf{e}_2]+6[\mathbf{e}_1,\mathbf{e}_2]=6[\mathbf{e}_1,\mathbf{e}_2]$. Искомая площадь равна $S=6|[\mathbf{e}_1,\mathbf{e}_2]|=18$.

**3.29 (р).** *Две тройки векторов $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ и $\mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3$ называются взаимными, если $(\mathbf{a}_i,\mathbf{b}_j)=0$ при $i\neq j$, $(\mathbf{a}_i,\mathbf{b}_i)=1$.
1) Доказать, что для существования тройки $\mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3$, взаимной к $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$, необходимо и достаточно, чтобы векторы $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ были некомпланарны;
2) выразить в этом случае векторы $\mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3$ через векторы $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$;
3) доказать, что если векторы $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ образуют базис, то векторы взаимной тройки образуют базис той же ориентации (базис, взаимный к базису $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$).* (см. [[sbz_g01_s03_vektornoe_i_smeshannoe_proizvedenie|§3, задача 3.29]])

1) Если векторы $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ компланарны, то, например, $\mathbf{a}_3=\lambda\mathbf{a}_1+\mu\mathbf{a}_2$. Так как $(\mathbf{b}_3,\mathbf{a}_1)=(\mathbf{b}_3,\mathbf{a}_2)=0$, то и $(\mathbf{b}_3,\mathbf{a}_3)=0$, что противоречит равенству $(\mathbf{b}_3,\mathbf{a}_3)=1$. Пусть теперь векторы $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ некомпланарны. Докажем, что в этом случае взаимная тройка существует. Так как $(\mathbf{b}_3,\mathbf{a}_1)=(\mathbf{b}_3,\mathbf{a}_2)=0$, то $\mathbf{b}_3=\lambda[\mathbf{a}_1,\mathbf{a}_2]$. Скаляр $\lambda$ находим из условия $(\mathbf{b}_3,\mathbf{a}_3)=1$. Имеем $\lambda([\mathbf{a}_1,\mathbf{a}_2],\mathbf{a}_3)=1$, откуда $\lambda=1/(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$, а $\mathbf{b}_3=[\mathbf{a}_1,\mathbf{a}_2]/(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$. Аналогично находим $\mathbf{b}_1=[\mathbf{a}_2,\mathbf{a}_3]/(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$, $\mathbf{b}_2=[\mathbf{a}_3,\mathbf{a}_1]/(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$.

2) Формулы описаны выше.

3) По формуле задачи 3.26, 4), $(\mathbf{b}_1,\mathbf{b}_2,\mathbf{b}_3)=1/(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$. Поэтому знаки чисел $(\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3)$ и $(\mathbf{b}_1,\mathbf{b}_2,\mathbf{b}_3)$ совпадают. Значит векторы $\mathbf{b}_1, \mathbf{b}_2, \mathbf{b}_3$ образуют базис той же ориентации, что и $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$.

**4.11 (р).** *В параллелограмме $ABCD$ точка $E$ лежит на диагонали $BD$, причем $|BE|:|ED|=1:2$. Найти координаты точки плоскости в системе координат $A, \overrightarrow{AB}, \overrightarrow{AD}$, если известны ее координаты $x', y'$ в системе координат $E, \overrightarrow{EC}, \overrightarrow{ED}$.* (см. [[sbz_g01_s04_zamena_bazisa|§4, задача 4.11]])

Имеем: $\overrightarrow{ED}=\frac{2}{3}\overrightarrow{BD}=\frac{2}{3}(\overrightarrow{AD}-\overrightarrow{AB})$, $\overrightarrow{EC}=\overrightarrow{ED}+\overrightarrow{DC}=\frac{2}{3}\overrightarrow{AD}+\frac{1}{3}\overrightarrow{AB}$. Поэтому базисные векторы второй системы координат выражаются через базисные векторы первой системы так: $\mathbf{e}_1'=\frac{1}{3}\mathbf{e}_1+\frac{2}{3}\mathbf{e}_2$, $\mathbf{e}_2'=-\frac{2}{3}\mathbf{e}_1+\frac{2}{3}\mathbf{e}_2$. Далее, $\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{BE}=\overrightarrow{AB}+\frac{1}{3}(\overrightarrow{AD}-\overrightarrow{AB})$; поэтому начало второй системы координат имеет в первой системе координаты $\left(\frac{2}{3},\frac{1}{3}\right)$. Теперь остается записать:
$$x=\frac{1}{3}x'-\frac{2}{3}y'+\frac{2}{3}, \qquad y=\frac{2}{3}x'+\frac{2}{3}y'+\frac{1}{3}.$$
