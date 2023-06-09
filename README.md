﻿# Библиотека геометрических фигур

Эта библиотека предоставляет классы для создания и работы с геометрическими фигурами - прямоугольником, треугольником и кругом. Каждый класс реализует общий интерфейс Shape, определённый в этой библиотеке.

## Как использовать

1. Установите эту библиотеку с помощью npm:

   npm install @iptrue/shapes

2. Импортируйте классы и интерфейс из этой библиотеки в свой проект:  
   import { Rectangle, Triangle, Circle } from '@iptrue/shapes';

3. Создайте экземпляр фигуры:  

   const rect = new Rectangle(10, 5);  
   
   const tri = new Triangle(3, 4, 5);  
   
   const circ = new Circle(7);  
   

4. Получите параметры фигуры:  

   console.log(rect.area()); // 50  
   
   console.log(tri.perimeter()); // 12  
   
   console.log(circ.area()); // 153.93804002589985  
   

## API

### interface Shape

Общий интерфейс для всех геометрических фигур.

#### type: string

Cвойство для определения типа фигуры.

#### area(): number

Метод для расчёта площади фигуры.

#### perimeter(): number

Метод для расчёта периметра фигуры.

### class Rectangle implements Shape

Класс для создания прямоугольника.

#### width: number

Ширина прямоугольника.

#### height: number

Высота прямоугольника.

#### constructor(width: number, height: number)

Метод для создания прямоугольника.

#### area(): number

Метод для расчёта площади прямоугольника.

#### perimeter(): number

Метод для расчёта периметра прямоугольника.

### class Triangle implements Shape

Класс для создания треугольника.

#### a: number

Длина первой стороны треугольника.

#### b: number

Длина второй стороны треугольника.

#### c: number

Длина третьей стороны треугольника.

#### constructor(a: number, b: number, c: number)

Метод для создания треугольника.

#### area(): number

Метод для расчёта площади треугольника.

#### perimeter(): number

Метод для расчёта периметра треугольника.

### class Circle implements Shape

Класс для создания круга.

#### radius: number

Радиус круга.

#### constructor(radius: number)

Метод для создания круга.

#### area(): number

Метод для расчёта площади круга.

#### perimeter(): number

Метод для расчёта длины окружности круга.
