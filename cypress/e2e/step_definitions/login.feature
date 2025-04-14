Feature: Login

    Scenario: Valid login
        Given I'm on the login page
        When I type a registered my email and password
        The I have a sucessful login