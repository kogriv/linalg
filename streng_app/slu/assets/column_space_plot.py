import numpy as np
import plotly.graph_objects as go

def create_column_space_plot():
    # Определяем векторы-столбцы матрицы A
    v1 = np.array([1, 5, 2])
    v2 = np.array([0, 4, 4])
    
    # Создаем сетку для плоскости (линейная комбинация векторов)
    # Плоскость P = u*v1 + v*v2
    u_vals = np.linspace(-5, 5, 10)
    v_vals = np.linspace(-5, 5, 10)
    u_grid, v_grid = np.meshgrid(u_vals, v_vals)
    
    # Вычисляем координаты точек плоскости
    x_plane = u_grid * v1[0] + v_grid * v2[0]
    y_plane = u_grid * v1[1] + v_grid * v2[1]
    z_plane = u_grid * v1[2] + v_grid * v2[2]
    
    # Создаем фигуру
    fig = go.Figure()
    
    # 1. Добавляем плоскость (Column Space)
    fig.add_trace(go.Surface(
        x=x_plane, y=y_plane, z=z_plane,
        opacity=0.5,
        colorscale='Blues',
        showscale=False,
        name='Column Space'
    ))
    
    # 2. Добавляем векторы v1 и v2
    # Функция для добавления вектора
    def add_vector(vec, color, name):
        fig.add_trace(go.Scatter3d(
            x=[0, vec[0]], y=[0, vec[1]], z=[0, vec[2]],
            mode='lines+markers',
            line=dict(color=color, width=5),
            marker=dict(size=4),
            name=name
        ))
        # Добавляем конус (стрелку) на конце
        fig.add_trace(go.Cone(
            x=[vec[0]], y=[vec[1]], z=[vec[2]],
            u=[vec[0]], v=[vec[1]], w=[vec[2]],
            sizemode="absolute",
            sizeref=0.5,
            anchor="tail",
            showscale=False,
            colorscale=[[0, color], [1, color]]
        ))

    add_vector(v1, 'red', 'Col 1 (1, 5, 2)')
    add_vector(v2, 'green', 'Col 2 (0, 4, 4)')
    
    # 3. Настройки макета
    fig.update_layout(
        title='Пространство столбцов матрицы A',
        scene=dict(
            xaxis_title='X',
            yaxis_title='Y',
            zaxis_title='Z',
            # Обеспечиваем одинаковый масштаб осей
            aspectmode='data' 
        ),
        margin=dict(l=0, r=0, b=0, t=40)
    )
    
    # Сохраняем в HTML
    output_file = "column_space.html"
    fig.write_html(output_file)
    print(f"График сохранен в {output_file}")

if __name__ == "__main__":
    create_column_space_plot()
