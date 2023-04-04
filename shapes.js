"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Triangle = exports.Rectangle = void 0;
/**
 * Класс прямоугольника
 *
 * @class Rectangle
 * @implements {Shape}
 */
var Rectangle = /** @class */ (function () {
    /**
     * Создание объекта прямоугольника.
     * @param {number} width - Ширина прямоугольника.
     * @param {number} height - Высота прямоугольника.
     */
    function Rectangle(width, height) {
        this.type = "rectangle";
        this.width = width;
        this.height = height;
    }
    /**
     * Расчёт площади прямоугольника.
     *
     * @returns {number} Площадь прямоугольника.
     */
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    /**
     * Расчёт периметра прямоугольника.
     *
     * @returns {number} Периметр прямоугольника.
     */
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
/**
 * Класс треугольника
 *
 * @class Triangle
 * @implements {Shape}
 */
var Triangle = /** @class */ (function () {
    /**
     * Создание объекта треугольника.
     * @param {number} a - Длина первой стороны треугольника.
     * @param {number} b - Длина второй стороны треугольника.
     * @param {number} c - Длина третьей стороны треугольника.
     */
    function Triangle(a, b, c) {
        this.type = "triangle";
        this.a = a;
        this.b = b;
        this.c = c;
    }
    /**
     * Расчёт площади треугольника по формуле Герона.
     *
     * @returns {number} Площадь треугольника.
     */
    Triangle.prototype.area = function () {
        var p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    /**
     * Расчёт периметра треугольника.
     *
     * @returns {number} Периметр треугольника.
     */
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
/**
 * Класс круга
 *
 * @class Circle
 * @implements {Shape}
 */
var Circle = /** @class */ (function () {
    /**
     * Создание объекта круга.
     *
     * @param {number} radius - Радиус круга.
     */
    function Circle(radius) {
        this.type = "circle";
        this.radius = radius;
    }
    /**
     * Расчёт площади круга.
     *
     * @returns {number} Площадь круга.
     */
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    /**
     * Расчёт длины окружности круга.
     *
     * @returns {number} Длина окружности круга.
     */
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
