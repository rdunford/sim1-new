delete from shelves
WHERE
product_id = $1;

select product_id, productname, price, img from shelves;