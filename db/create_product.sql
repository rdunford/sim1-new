insert into shelves (productname, price, img)
values
($1, $2, $3);

select product_id, productname, price, img from shelves;

-- insert into shelves (bin, shelf, productname, price, img)
-- values
-- ('a', 1, 'shoes', 12.99, 'https://image.dhgate.com/albu_269291508_00/1.0x0.jpg')