import { injectable } from 'inversify';
import createNextApp, { NextServer } from 'next/dist/server/next';

import express, { Application } from 'express';
import { Routes } from './Routes';

@injectable()
export class Server {
  private nextServer?: NextServer;
  private app?: Application;

  constructor(private readonly routes: Routes) {}

  public async run() {
    const dev = false;
    this.app = express();
    this.nextServer = createNextApp({ dev });
    const requestHandler = this.nextServer.getRequestHandler();
    await this.nextServer.prepare();
    this.routes.registerRoutes(this.app);

    this.app.all('*', (req, res) => requestHandler(req, res));

    this.app.listen(8080, () => {
      console.log(`App listening on port ${8080}`);
    });
  }

  public async stop() {
    await this.nextServer?.close();
  }
}
