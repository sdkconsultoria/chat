import {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  Before,
} from '@cucumber/cucumber';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as assert from 'assert';
import { Connection, Types } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';
import { AccountModule } from 'src/account/account.module';
import { InfraModule } from 'src/global/infra/infra.module';
import { CreateAccountDto } from 'src/account/app/dto/create-account.dto';
import { Server } from 'net';
import { User } from 'src/user/infra/user.schema';
import { UserModule } from 'src/user/user.module';

let app: INestApplication<Server>;
let server: Server;
let connection: Connection;

BeforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [UserModule, InfraModule],
  }).compile();

  app = moduleRef.createNestApplication();
  await app.init();
  server = app.getHttpServer();

  connection = moduleRef.get(getConnectionToken());
});

Before(async function (scenario) {
  await connection.dropDatabase();
  console.log(`✅ Escenario completado: ${scenario.pickle.name}`);
});

AfterAll(async () => {
  await app.close();
});

Given(
  'existe un registro en la coleccion {string} con id {string} y con los datos:',
  async function (collection: string, id: string, docString: string) {
    const data: CreateAccountDto = JSON.parse(docString) as CreateAccountDto;
    await connection.collection(collection).insertOne({
      _id: new Types.ObjectId(id),
      ...data,
    });
  },
);

When('hago una peticion GET a {string}', async function (url: string) {
  this.response = await request(server).get(url);
});

When(
  'hago una peticion POST a {string} con los datos:',
  async function (url: string, docString: string) {
    const data = JSON.parse(docString);

    this.response = await request(server).post(url).send(data);
  },
);

Then(
  'debe existir un registro en la coleccion {string} con id {string} y con los datos:',
  async function (collection: string, id: string, docString: string) {
    const data = JSON.parse(docString);
    const result = await connection.collection(collection).findOne({
      _id: new Types.ObjectId(id),
      deletedAt: null,
    });

    for (const key in data) {
      assert.strictEqual(result[key], data[key], `Mismatch in property ${key}`);
    }
  },
);
