-- Data to be entered into the department table
INSERT INTO department
    (name)
VALUES
    ('Administration'),
    ('Sales'),
    ('Front Desk'),
    ('Housekeeping'),
    ('Kitchen'),
    ('Maintenance');
INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('General Manager', 100000, 1),
    ('Assistant General Manager', 80000, 1),
    ('Director of Sales', 75000, 2),
    ('Sales Coordinator', 70000, 2),
    ('Guest Service Agent', 45000, 3),
    ('Night Auditor', 45000, 3),
    ('Lead Housekeeper', 75000, 4),
    ('Housekeeper', 40000, 4),
    ('Houseman', 40000, 4),
    ('Chef', 70000, 5),
    ('Waitor', 45000, 5),
    ('Busser', 40000, 5),
    ('Bartender', 45000, 5),
    ('Lead Engineer', 75000, 6),
    ('Engineer', 48000, 6);
INSERT INTO employee
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('Dominick', 'Baker', 1, NULL),
    ('Nicola', 'Tesla', 2, 1),
    ('Carlos', 'Sandiego', 3, NULL),
    ('Stuart', 'Smalls', 4, 3),
    ('Megan', 'Grabo', 5, 2),
    ('Nicholas', 'Moss', 6, 2),
    ('Charles', 'Brown', 7, NULL),
    ('Leslie', 'Adams', 8, 7),
    ('Sarah', 'Silverman', 9, 7),
    ('Martin', 'Childs', 10, NULL),
    ('Patricia', 'Stockton', 11, 10),
    ('Terry', 'Cruz', 12, 10),
    ('Rodney', 'Bowman', 13, 10),
    ('Elizabeth', 'Moore', 14, 10),
    ('Joshua', 'Alonso', 15, NULL),
    ('Samantha', 'Bull', 16, 15);

