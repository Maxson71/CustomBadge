import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;
    const { bg, color} = req.query;

    const textLength = (name as string).length;
    const width = 15 * 2 + textLength * 10;

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="50">
       <style>
        @import url('https://fonts.cdnfonts.com/css/now');
        text {
          font-family: 'Now', sans-serif;
          font-weight: 500;
        }
      </style>
      <rect width="${width}" height="30" fill="#${bg}" rx="15" ry="15" />
      <text x="50%" y="17" alignment-baseline="middle" text-anchor="middle" font-size="19" fill="#${color}">
        ${name}
      </text>
    </svg>
  `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
}
