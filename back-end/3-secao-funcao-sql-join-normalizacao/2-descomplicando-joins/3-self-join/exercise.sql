-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT CONCAT(e.first_name, ' ', e.last_name) AS employee, CONCAT(m.first_name, ' ', m.last_name) AS manager
	FROM employees e
    INNER JOIN employees m
    ON e.manager_id = m.employee_id
    WHERE e.department_id <> m.department_id;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT m.first_name, COUNT(*)
	FROM employees m
    INNER JOIN employees e
    ON e.manager_id = m.employee_id
    GROUP BY m.employee_id;