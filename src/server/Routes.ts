import { injectable } from 'inversify';
import { Application, Router } from 'express';

@injectable()
export class Routes {
  public registerRoutes(app: Application) {
    app.use('/api', Routes.registerApiRoutes());
  }

  private static registerApiRoutes(): Router {
    const router = Router();
    //rejestracja routów
    return router;
  }
}
