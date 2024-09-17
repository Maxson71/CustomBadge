# Custom Badge API

This project provides an API for generating custom SVG badges based on URL parameters. It is deployed on Vercel and uses Next.js to handle API requests.

## Example

You can generate a badge with the following URL format:

https://custom-badge.vercel.app/api/badges/{name}?color={color}&bg={bg}

### Parameters

- `name`: The text to display on the badge (required).
- `color`: The color of the text (hex code without `#`, required).
- `bg`: The background color of the badge (hex code without `#`, required).

### Example request

https://custom-badge.vercel.app/api/badges/GitHub?color=fff&bg=111

![GitHub Badge](https://custom-badge.vercel.app/api/badges/GitHub?color=fff&bg=111)

https://custom-badge.vercel.app/api/badges/Git?color=FFFFFF&bg=F05032

![GitHub Badge](https://custom-badge.vercel.app/api/badges/Git?color=fff&bg=F05032)

## How It Works

The API calculates the badge's width dynamically based on the length of the text and returns an SVG image as a response. You can integrate this badge into any website or README file using the provided URL.
This README explains the core logic and functionality of the project, without going into technical details like data types or Next.js specifics.
