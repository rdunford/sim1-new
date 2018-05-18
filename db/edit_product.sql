update shelves
set productname = $1,
price = $2,
img = $3
WHERE
product_id = $4;

select product_id, productname, price, img from shelves;