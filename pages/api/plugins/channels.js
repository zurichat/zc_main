// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { channels } from '../../../lib/channels';
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ message: 'success', channels }));
}
