Feature: Gestión de usuarios

  Scenario: consultar usuarios
    Given existe un registro en la coleccion "users" con id "68464a6ec95aac21e4a8dbe3" y con los datos:
    """
    {
      "email": "test@test.com",
      "name": "usuario"
    }
    """
    And existe un registro en la coleccion "users" con id "68464a6ec95aac21e4a8dbe2" y con los datos:
    """
    {
      "email": "test@test2.com",
      "name": "usuario 2"
    }
    """
    When hago una peticion GET a "/user"
    Then la respuesta debe ser un status 200
    And la respuesta debe tener 2 elementos

  Scenario: crear un usuario
    When hago una peticion POST a "/user" con los datos:
    """
    {
      "email": "test@test.com",
      "name": "usuario"
    }
    """
    Then la respuesta debe ser un status 201
    And debe existir un registro en la coleccion "users" con id "68464a6ec95aac21e4a8dbe3" y con los datos:
    """
    {
      "email": "test@test.com",
      "name": "usuario"
    }
    """