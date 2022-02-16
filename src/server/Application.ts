import { injectable, interfaces } from 'inversify';
import { Server } from './Server';

@injectable()
export class Application {
  constructor(private readonly server: Server) {}

  public static async startup(container: interfaces.Container) {
    const application = container.get(Application);

    await application.server.run();

    return application;
  }
}
