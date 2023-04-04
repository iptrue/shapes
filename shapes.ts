/**
 * Описание интерфейса для фигуры
 *
 * @interface Shape
 */
interface Shape {
  type: string;
  /** Расчёт площади фигуры */
  area: () => number;
  /** Расчёт периметра фигуры */
  perimeter: () => number;
}

/**
 * Класс прямоугольника
 *
 * @class Rectangle
 * @implements {Shape}
 */
export class Rectangle implements Shape {
  type = "rectangle";
  width: number;
  height: number;

  /**
   * Создание объекта прямоугольника.
   * @param {number} width - Ширина прямоугольника.
   * @param {number} height - Высота прямоугольника.
   */
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  /**
   * Расчёт площади прямоугольника.
   *
   * @returns {number} Площадь прямоугольника.
   */
  area(): number {
    return this.width * this.height;
  }

  /**
   * Расчёт периметра прямоугольника.
   *
   * @returns {number} Периметр прямоугольника.
   */
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

/**
 * Класс треугольника
 *
 * @class Triangle
 * @implements {Shape}
 */
export class Triangle implements Shape {
  type = "triangle";
  a: number;
  b: number;
  c: number;

  /**
   * Создание объекта треугольника.
   * @param {number} a - Длина первой стороны треугольника.
   * @param {number} b - Длина второй стороны треугольника.
   * @param {number} c - Длина третьей стороны треугольника.
   */
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * Расчёт площади треугольника по формуле Герона.
   *
   * @returns {number} Площадь треугольника.
   */
  area(): number {
    const p = this.perimeter() / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }

  /**
   * Расчёт периметра треугольника.
   *
   * @returns {number} Периметр треугольника.
   */
  perimeter(): number {
    return this.a + this.b + this.c;
  }
}

/**
 * Класс круга
 *
 * @class Circle
 * @implements {Shape}
 */

export class Circle implements Shape {
  type = "circle";
  radius: number;

  /**
   * Создание объекта круга.
   *
   * @param {number} radius - Радиус круга.
   */
  constructor(radius: number) {
    this.radius = radius;
  }
  /**
   * Расчёт площади круга.
   *
   * @returns {number} Площадь круга.
   */
  area(): number {
    return Math.PI * this.radius ** 2;
  }

  /**
   * Расчёт длины окружности круга.
   *
   * @returns {number} Длина окружности круга.
   */
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
