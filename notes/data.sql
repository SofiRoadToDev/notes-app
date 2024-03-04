USE notes;

INSERT INTO categories (name)
    VALUES
    ('devops'),
    ('exercise'),
    ('development');

INSERT INTO notes (title,content,creation_date,category_id)
    VALUES
    ('Learn something','learn docker to deploy apps',NOW(),1),
    ('Go to gym','Come back to the gym',NOW(),2)
    ('Practice Frontend','Practice reactjs and GUIS in general',NOW(),3);