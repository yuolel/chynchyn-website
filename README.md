# CHYN CHYN Website

Преміум чиноси українського виробництва - офіційний веб-сайт

## Опис

Статичний веб-сайт для CHYN CHYN, виготовлений на чистому HTML/CSS/JavaScript без фреймворків для максимальної швидкості.

## Структура проекту

```
/
├── index.html          # Головна сторінка
├── shop.html           # Магазин
├── product.html        # Сторінка товару
├── order.html          # Форма замовлення
├── about.html          # Про нас
├── contact.html        # Контакти
├── products.json       # База даних товарів
├── assets/
│   ├── css/           # Стилі
│   ├── js/            # JavaScript
│   └── images/        # Зображення
└── netlify.toml       # Конфігурація Netlify
```

## Оновлення товарів

Щоб оновити товари, відредагуйте файл `products.json`. Кожен товар має таку структуру:

```json
{
  "id": "product-id",
  "name": "Назва товару",
  "category": "chinos|summer|shorts|loungewear",
  "price": 1990,
  "description": "Опис товару",
  "fabric": "98% бавовна, 2% лайкра",
  "sizes": ["28", "30", "32", ...],
  "images": ["product-image.jpg"],
  "featured": true,
  "customizable": true
}
```

## Розгортання

Сайт автоматично розгортається на Netlify при push в main гілку.

## Контакти

- Email: office@chynchyn.com
- Телефон: +38 066 349 72 32
- Facebook: https://www.facebook.com/ChynChynUA/
- Etsy: https://www.etsy.com/shop/ChynChyn
