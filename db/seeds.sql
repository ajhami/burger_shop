-- SEEDS.SQL 

INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheese", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Big Mac", true);
-- since devoured has a default value of false, this entry can be complete without insertion
INSERT INTO burgers (burger_name) VALUES ("Veggie Burger");