UPDATE product 
SET description = ${desc}
WHERE product_id = ${id};

SELECT * FROM product;