# 🐰 Bunn Productivity 
![Electron.js](https://img.shields.io/badge/-Electron.js-47848F?logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)

> Aplicación de escritorio para gestión de tareas con tracking de progreso en tiempo real y diseño ilustrado personalizado.

## 🌟 Vista general
Aplicación tipo *to-do list* para escritorio que muestra la fecha/hora actual al iniciar y calcula automáticamente tu porcentaje de productividad diario mediante una barra de progreso interactiva.

**Problema resuelto**:  
Dificultad para visualizar el progreso diario de tareas y mantener la motivación en tiempo real.

**Solución única**:  
- Barra de progreso que actualiza dinámicamente al completar tareas  
- Cálculo automático del porcentaje exacto de productividad  
- Diseño visual personalizado con elementos ilustrados  

## 🖥️ Capturas de pantalla
| Vista inicial | Lista de tareas | Progreso |
|---------------|-----------------|----------|
| <img width="541" height="599" alt="Image" src="https://github.com/user-attachments/assets/837e1458-2a7a-4fc1-993a-5af174e25a44" /> | ![List](list.png) | ![Progress](partial_progress.png) |
| Pantalla de inicio con fecha/hora real | Visualización de tareas organizadas | Tracking de progreso en tiempo real |

## ⚙️ Funcionalidades clave
| Característica | Detalle técnico | Habilidad demostrada |
|----------------|-----------------|----------------------|
| **Time Tracker** | Integración con Date API de JavaScript | Manipulación de fechas/horas en tiempo real |
| **Progress Bar** | Cálculo dinámico basado en tareas completadas | Algoritmos de porcentaje y actualización DOM |
| **Finish Day** | Generación de reporte final de productividad | Procesamiento de datos y visualización |
| **UI Personalizada** | Diseño e ilustraciones originales | Maquetación avanzada con CSS/HTML |
| **Gestión de tareas** | CRUD de actividades con persistencia | State management en Electron |

## 🛠️ Tech Stack
**Frontend**:  
- HTML5/CSS3 (Diseño responsive)  
- JavaScript ES6+  

**Backend**:  
- Electron.js (Desktop framework)  
- Node.js (Runtime environment)  

**Tools**:  
- Figma/Illustrator (Diseño de interfaz)  

## 🚀 Instalación
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/bunn-productivity.git

# Instalar dependencias
npm install

# Iniciar aplicación
npm start
