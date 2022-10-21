-- não é um novo modo de join, é apenas dado esse nome quando o join (inner, left ou right) é feito na própria tabela
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;