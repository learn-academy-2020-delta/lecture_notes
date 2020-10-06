# Migration Commands

To create a migration file we use:
- rails generate migration verb_what_we_are_doing_in_table

Once we add our statements to our change method, we execute/commit those changes to our schema we use:
- rails db:migrate

# What files we are working with

To find our migration files, we navigate to the folder
- /db/migrate/

To see our schema file, we navigate to
- /db/schema.rb

# How we utilize the change method with statements

To make changes, in our migration file we generated we use:

- Statement like: add_column

Followed by symbols, such as:
- :table_name

Seperated by commas:
- :table_name, :column_name, :data_type

# Statements used

- To add a column.
  - add_column :table_name, :column_name, :data_type
- To remove a column.
  - remove_column :table_name, :column_name
- To change the datatype of a column.
  - change_column :table_name, :column_name, :data_type
- To rename a column.
  - rename_column :table_name, :old_column_name, :new_column_name
