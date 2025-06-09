# SDK Chat Multicanal

Sistema de chats multicanales para plataformas como WhatsApp, Facebook, SMS, etc.

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio:

  ```bash
  git clone git@github.com:sdkconsultoria/chat.git
  ```

2. Navegar al directorio del proyecto:

  ```bash
  cd chat
  ```

3. Configurar las variables de entorno:

  ```bash
  cp .env.example .env
  ```

4. Iniciar Docker y los servicios:

  ```bash
  docker-compose up -d
  ```

5. Instalar las dependencias:

  ```bash
  docker-compose exec node npm install
  ```

6. Iniciar el proyecto en modo desarrollo:

  ```bash
  docker-compose exec node npm run start:dev
  ```

## Compilar y ejecutar el proyecto

- **Modo desarrollo:**

  ```bash
  npm run start
  ```

- **Modo observación (watch):**

  ```bash
  npm run start:dev
  ```

- **Modo producción:**

  ```bash
  npm run start:prod
  ```

## Ejecutar los tests

- **Tests unitarios:**

  ```bash
  npm run test
  ```

- **Tests de extremo a extremo (e2e):**

  ```bash
  npm run test:e2e
  ```

- **Cobertura de tests:**

  ```bash
  npm run test:cov
  ```

- **Tests con Cucumber:**

  ```bash
  npm run test:cucumber
  ```