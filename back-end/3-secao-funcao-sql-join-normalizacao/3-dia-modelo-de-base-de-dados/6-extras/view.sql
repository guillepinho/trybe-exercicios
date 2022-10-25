-- VIEW é uma tabela temporária, como se fosse um snippet de uma query
CREATE VIEW nome_da_view AS query;

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;

SELECT * FROM top_10_customers;

DROP VIEW nome_da_view;