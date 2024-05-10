import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
     console.log('ValidateHeadersMiddleware');

    
    const requiredHeaders = ['User-Agent', 'Authorization'];

    
    const missingHeaders = requiredHeaders.filter(header => !(header in req.headers));

    if (missingHeaders.length > 0) {
      return res.status(400).json({ error: `Cabeçalhos obrigatórios faltando: ${missingHeaders.join(', ')}` });
    }

    if (req.method === 'POST') {
   
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json' && contentType !== 'application/xml') {
        return res.status(400).json({ error: 'O cabeçalho Content-Type deve ser JSON ou XML para requisições POST' });
      }
    }

    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Token de autenticação ausente' });
    }

    
    next();
  }
}
