Feature: Gestión de cuentas
  Scenario: consultar cuentas
    Given existe una cuenta el id "68464a6ec95aac21e4a8dbe3" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    And existe una cuenta el id "68464a6ec95aac21e4a8dbe2" con los datos:
    """
    {
      "email": "test@test2.com",
      "name": "cuenta 2",
      "type": "CLIENT"
    }
    """
    When intento obtener todas las cuentas
    Then la respuesta debe ser un status 200
    And la respuesta debe tener 2 elementos

  Scenario: consultar cuentas filtrando por email
    Given existe una cuenta el id "68464a6ec95aac21e4a8dbe3" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    And existe una cuenta el id "68464a6ec95aac21e4a8dbe2" con los datos:
    """
    {
      "email": "test@test2.com",
      "name": "cuenta 2",
      "type": "CLIENT"
    }
    """
    When intento obtener todas las cuentas filtrando por:
    """
    {
      "email": "test@test.com"
    }
    """
    Then la respuesta debe ser un status 200
    And la respuesta debe tener 1 elementos

  Scenario: consultar una cuenta
    Given existe una cuenta el id "68464a6ec95aac21e4a8dbe3" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    When intento obtener la cuenta con id "68464a6ec95aac21e4a8dbe3"
    Then la respuesta debe ser un status 200
    And la respuesta debe contener los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """

  Scenario: Crear una cuenta
    When intento crear una cuenta con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    Then la respuesta debe ser un status 201
    And debe existir una cuenta con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """

  Scenario: Crear una cuenta con un email repetido

  Scenario: Editar una cuenta
    Given existe una cuenta el id "68464a6ec95aac21e4a8dbe3" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    When intento editar la cuenta con id "68464a6ec95aac21e4a8dbe3" y actualizar los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta editada",
      "type": "CLIENT"
    }
    """
    Then la respuesta debe ser un status 200
    And debe existir una cuenta con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta editada",
      "type": "CLIENT"
    }
    """

  Scenario: Eliminar una cuenta
    Given existe una cuenta el id "68464a6ec95aac21e4a8dbe3" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "cuenta",
      "type": "CLIENT"
    }
    """
    When intento eliminar la cuenta con id "68464a6ec95aac21e4a8dbe3"
    Then la respuesta debe ser un status 200
    And no debe existir una cuenta con id "68464a6ec95aac21e4a8dbe3"