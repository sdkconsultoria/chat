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

let app: INestApplication<Server>;
let server: Server;
let connection: Connection;

BeforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AccountModule, InfraModule],
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

When('intento obtener todas las cuentas', async function () {
  this.response = await request(server).get('/account');
});

Then('la respuesta debe tener {int} elementos', function (count: number) {
  assert.strictEqual(this.response.body.data.length, count);
});

When(
  'intento obtener todas las cuentas filtrando por:',
  async function (docString: string) {
    const data = JSON.parse(docString);

    this.response = await request(server).get('/account').query(data);
  },
);

When('intento obtener la cuenta con id {string}', async function (id: string) {
  this.response = await request(server).get(`/account/${id}`);
});

Then('la respuesta debe contener los datos:', function (docString: string) {
  const data: CreateAccountDto = JSON.parse(docString) as CreateAccountDto;
  for (const key in data) {
    assert.strictEqual(
      this.response.body[key],
      data[key],
      `Mismatch in property ${key}`,
    );
  }
});

When(
  'intento crear una cuenta con los datos:',
  async function (docString: string) {
    const data = JSON.parse(docString);

    this.response = await request(server).post('/account').send(data);
  },
);

Then('la respuesta debe ser un status {int}', function (status: number) {
  assert.strictEqual(this.response.status, status);
});

Then(
  'debe existir una cuenta con los datos:',
  async function (docString: string) {
    const data: CreateAccountDto = JSON.parse(docString) as CreateAccountDto;
    const result = await connection.collection('accounts').findOne(data);

    for (const key in data) {
      assert.strictEqual(result[key], data[key], `Mismatch in property ${key}`);
    }
  },
);

Given(
  'existe una cuenta el id {string} con los datos:',
  async function (id: string, docString: string) {
    const data: CreateAccountDto = JSON.parse(docString) as CreateAccountDto;
    await connection
      .collection('accounts')
      .insertOne({ _id: new Types.ObjectId(id), ...data });
  },
);

When(
  'intento editar la cuenta con id {string} y actualizar los datos:',
  async function (id: string, docString: string) {
    const data: CreateAccountDto = JSON.parse(docString) as CreateAccountDto;

    this.response = await request(server).put(`/account/${id}`).send(data);
  },
);

When('intento eliminar la cuenta con id {string}', async function (id: string) {
  this.response = await request(server).delete(`/account/${id}`);
});

Then('no debe existir una cuenta con id {string}', async function (id: string) {
  const result = await connection
    .collection('accounts')
    .findOne({ _id: new Types.ObjectId(id), deletedAt: null });
  assert.strictEqual(result, null);
});
